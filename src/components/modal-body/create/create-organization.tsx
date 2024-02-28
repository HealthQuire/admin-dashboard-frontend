import ModalField from "../modal-field.tsx";
import {ModalButton} from "../styles.ts";
import {Dispatch, SetStateAction, useState} from "react";
import theme from "../../../styles/theme.ts";
import {app} from "../../../lib/axios.ts";
import {addOrganization} from "../../../store/organizations/reducer.ts";
import {useDispatch} from "react-redux";


const CreateOrganization = (responseStatus: string, setResponseStatus: Dispatch<SetStateAction<string>>) => {

    const dispatch = useDispatch();

    const [ownerId, setOwnerId] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [status, setStatus] = useState<string>("")

    const create = () => {
        app.post("/organizations", {name, status})
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

    return(
        <div>
            {ModalField("Owner Id", ownerId, setOwnerId)}
            {ModalField("Name", name, setName)}
            {ModalField("Status", status, setStatus)}
            <ModalButton onClick={() => create()}>Create</ModalButton>
            <p style={{color: responseStatus == "ok" ? theme.colors.accentTwo : theme.colors.declineColor}}>
                {responseStatus}
            </p>
        </div>
    )
}

export default CreateOrganization