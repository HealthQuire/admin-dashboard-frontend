import ModalField from "../modal-field.tsx";
import {ButtonContainer, ModalButton} from "../styles.ts";
import {Dispatch, SetStateAction    , useState} from "react";
import theme from "../../../styles/theme.ts";
import {app} from "../../../lib/axios.ts";
import {addOrganization, deleteOrganization, editOrganization} from "../../../store/organizations/reducer.ts";
import {useDispatch} from "react-redux";


const Organization = (
    responseStatus: string,
    setResponseStatus: Dispatch<SetStateAction<string>>,
    setModalOpened: Dispatch<SetStateAction<boolean>>,
    onEdit: boolean = false,
    editId: number = 0) => {

    const dispatch = useDispatch();

    const [ownerId, setOwnerId] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [status, setStatus] = useState<string>("")

    const create = () => {
        app.post("/organizations", {ownerId, name, status})
            .then(res => {
                if (res.status === 200){
                    dispatch(addOrganization(res.data))
                    setName("")
                    setStatus("")
                    setOwnerId("")
                    setResponseStatus("ok")
                }
            })
            .catch(() => {
                setResponseStatus("error")
            })
    }

    const edit = () => {
        app.patch(`/organizations/${editId}`, {ownerId, name, status})
            .then(res => {
                if (res.status === 200){
                    dispatch(editOrganization(res.data))
                    setName("")
                    setStatus("")
                    setOwnerId("")
                    setResponseStatus("ok")
                }
            })
            .catch(() => {
                setResponseStatus("error")
            })
    }

    const remove = () => {
        if (window.confirm('Are you sure?'))
        {
            app.delete(`/organizations/${editId}`)
                .then(res => {
                    if (res.status === 200){
                        dispatch(deleteOrganization(editId))
                        setModalOpened(false)
                    }
                })
            return
        }
    }

    return(
        <div>
            {ModalField("Owner Id", ownerId, setOwnerId)}
            {ModalField("Name", name, setName)}
            {ModalField("Status", status, setStatus)}
            {
            onEdit ?
                <ButtonContainer>
                    <ModalButton onClick={() => edit()}>Edit</ModalButton>
                    <ModalButton style={{backgroundColor: theme.colors.declineColor}} onClick={() => remove()}>
                        Delete
                    </ModalButton>
                </ButtonContainer>
            :
                <ModalButton onClick={() => create()}>Create</ModalButton>
            }
            {
            responseStatus == "ok" || responseStatus == "error" ?
                <p style={{color: responseStatus == "ok" ? theme.colors.accentTwo : theme.colors.deleteColor}}>
                    {responseStatus}
                </p>
            :
                null
            }
        </div>
    )
}

export default Organization