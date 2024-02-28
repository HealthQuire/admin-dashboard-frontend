import ModalField from "../modal-field.tsx";
import {ModalButton} from "../styles.ts";
import {Dispatch, SetStateAction, useState} from "react";
import theme from "../../../styles/theme.ts";
import {app} from "../../../lib/axios.ts";
import {addClient} from "../../../store/clients/reducer.ts";
import {useDispatch} from "react-redux";


const CreateClient = (responseStatus: string, setResponseStatus: Dispatch<SetStateAction<string>>) => {

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
            <ModalButton onClick={() => create()}>Create</ModalButton>
            <p style={{color: responseStatus == "ok" ? theme.colors.accentTwo : theme.colors.declineColor}}>
                {responseStatus}
            </p>
        </div>
    )
}

export default CreateClient