import ModalField from "../modal-field.tsx";
import {ButtonContainer, ModalButton} from "../styles.ts";
import {Dispatch, SetStateAction, useState} from "react";
import theme from "../../../styles/theme.ts";
import {app} from "../../../lib/axios.ts";
import {addOrganization, deleteOrganization, editOrganization} from "../../../store/organizations/reducer.ts";
import {useDispatch} from "react-redux";
import {INewOrganization, initOrganization, IOrganization} from "../../../@types/entities/organization.ts";
import {organizationSchema} from "../../../schemas/organizationSchema.ts";
import {IShortEntity} from "../../../@types/shortEntity.ts";


const Organization = (
    responseStatus: string,
    setResponseStatus: Dispatch<SetStateAction<string>>,
    setModalOpened: Dispatch<SetStateAction<boolean>>,
    onEdit: boolean = false,
    editElement: IOrganization = initOrganization) => {

    const dispatch = useDispatch();

    const [ownerId, setOwnerId] = useState<string>(initOrganization.ownerId)
    const [name, setName] = useState<string>(initOrganization.name)
    const [status, setStatus] = useState<string>(initOrganization.status)


    const resetForm = () => {
        setName("")
        setStatus("")
        setOwnerId("")
    }

    const buildObject = () => {
        const obj: INewOrganization = {
            ownerId: ownerId,
            name: name,
            status: status
        };
        return obj
    }

    const create = async () => {
        const validObj = await organizationSchema
            .validate(buildObject())
            .catch(err => {
                setResponseStatus(err.message)
            })
        if (!validObj) return

        app.post("/organizations", validObj)
            .then(res => {
                if (res.status === 200){
                    const shortEntity: IShortEntity = {
                        id: res.data.id,
                        name: res.data.name
                    }
                    dispatch(addOrganization(shortEntity))
                    setResponseStatus("success")
                    resetForm()
                }
            })
            .catch(() => {
                setResponseStatus("server error")
            })
    }

    const edit = async () => {
        const validObj = await organizationSchema
            .validate(buildObject())
            .catch(err => {
                setResponseStatus(err.message)
            })
        if (!validObj) return

        app.patch(`/organizations/${editElement.id}`, validObj)
            .then(res => {
                if (res.status === 200){
                    const shortEntity: IShortEntity = {
                        id: res.data.id,
                        name: res.data.name
                    }
                    dispatch(editOrganization(shortEntity))
                    setResponseStatus("success")
                    resetForm()
                }
            })
            .catch(() => {
                setResponseStatus("server error")
            })
    }

    const remove = () => {
        if (!window.confirm(`Are you sure you want to delete (id=${editElement.id}) object?`)) { return }

        app.delete(`/organizations/${editElement.id}`)
            .then(res => {
                if (res.status === 200){
                    dispatch(deleteOrganization(editElement.id))
                    setModalOpened(false)
                    resetForm()
                }
            })
    }

    return(
        <div>
            {ModalField("Owner Id", ownerId, setOwnerId, editElement.ownerId)}
            {ModalField("Name", name, setName, editElement.name)}
            {ModalField("Status", status, setStatus, editElement.status)}
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
            responseStatus != "" ?
                <p style={{color: responseStatus == "success" ? theme.colors.accentTwo : theme.colors.deleteColor}}>
                    {responseStatus}
                </p>
            :
                null
            }
        </div>
    )
}

export default Organization