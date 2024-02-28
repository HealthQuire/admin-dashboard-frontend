import ModalField from "../modal-field.tsx";
import {ButtonContainer, ModalButton} from "../styles.ts";
import {Dispatch, SetStateAction, useState} from "react";
import theme from "../../../styles/theme.ts";
import {app} from "../../../lib/axios.ts";
import {addClient} from "../../../store/clients/reducer.ts";
import {useDispatch} from "react-redux";


const Client  = (
    responseStatus: string,
    setResponseStatus: Dispatch<SetStateAction<string>>,
    setModalOpened: Dispatch<SetStateAction<boolean>>,
    onEdit: boolean = false,
    editId: number = 0) => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const role = 5
    const [phone, setPhone] = useState<string>("")
    const [status, setStatus] = useState<string>("")
    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [fatherName, setFatherName] = useState<string>("")

    const create = () => {
        app.post("/clients", {email, password, role, phone, status, firstName, lastName, fatherName})
            .then(res => {
                if (res.status === 200){
                    dispatch(addClient(res.data))
                    setFirstName("")
                    setLastName("")
                    setFatherName("")
                    setPhone("")
                    setEmail("")
                    setPassword("")
                    setStatus("")
                    setResponseStatus("ok")
                }
            })
            .catch(() => {
                setResponseStatus("error")
            })
    }

    return(
        <div>
            {ModalField("Email", email, setEmail)}
            {ModalField("Password", password, setPassword)}
            {ModalField("Phone Number", phone, setPhone)}
            {ModalField("Status", status, setStatus)}
            {ModalField("First name", firstName, setFirstName)}
            {ModalField("Last Name", lastName, setLastName)}
            {ModalField("Father Name", fatherName, setFatherName)}
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

export default Client