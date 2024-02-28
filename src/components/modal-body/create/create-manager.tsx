import ModalField from "../modal-field.tsx";
import {ModalButton} from "../styles.ts";
import {Dispatch, SetStateAction, useState} from "react";
import theme from "../../../styles/theme.ts";
import {app} from "../../../lib/axios.ts";
import {useDispatch} from "react-redux";
import {addManager} from "../../../store/managers/reducer.ts";


const CreateManager = (responseStatus: string, setResponseStatus: Dispatch<SetStateAction<string>>) => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [role, setRole] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [status, setStatus] = useState<string>("")

    const [medCentreId, setMedCentreId] = useState<string>("")
    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [fatherName, setFatherName] = useState<string>("")

    const create = () => {
        app.post("/managers", {email, password, role, phone, status,
            medCentreId, firstName, lastName, fatherName})
            .then(res => {
                if (res.status === 200){
                    dispatch(addManager(res.data))
                    setFirstName("")
                    setLastName("")
                    setFatherName("")
                    setPhone("")
                    setEmail("")
                    setPassword("")
                    setMedCentreId("")
                    setStatus("")
                    setRole("")
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
            {ModalField("Role", role, setRole)}
            {ModalField("Phone Number", phone, setPhone)}
            {ModalField("Status", status, setStatus)}
            {ModalField("Med centre id", medCentreId, setMedCentreId)}
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

export default CreateManager