import ModalField from "../modal-field.tsx";
import {ModalButton} from "../styles.ts";
import {Dispatch, SetStateAction, useState} from "react";
import theme from "../../../styles/theme.ts";
import {app} from "../../../lib/axios.ts";
import {useDispatch} from "react-redux";
import {addDoctor} from "../../../store/doctors/reducer.ts";


const CreateDoctor = (responseStatus: string, setResponseStatus: Dispatch<SetStateAction<string>>) => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const role = 4
    const [phone, setPhone] = useState<string>("")
    const [status, setStatus] = useState<string>("")

    const [medCentreId, setMedCentreId] = useState<string>("")
    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [fatherName, setFatherName] = useState<string>("")
    const [age, setAge] = useState<string>("")
    const [yearStarted, setYearStarted] = useState<string>("")
    const [medServiceId, setMedServiceId] = useState<string>("")
    const [description, setDescription] = useState<string>("")

    const create = () => {
        app.post("/doctors", {email, password, role, phone, status,
            medCentreId, age, yearStarted, medServiceId, description,firstName, lastName, fatherName})
            .then(res => {
                if (res.status === 200){
                    dispatch(addDoctor(res.data))
                    setFirstName("")
                    setLastName("")
                    setFatherName("")
                    setPhone("")
                    setEmail("")
                    setPassword("")
                    setMedCentreId("")
                    setStatus("")
                    setAge("")
                    setYearStarted("")
                    setMedServiceId("")
                    setDescription("")
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
            {ModalField("Med centre id", medCentreId, setMedCentreId)}
            {ModalField("First name", firstName, setFirstName)}
            {ModalField("Last Name", lastName, setLastName)}
            {ModalField("Father Name", fatherName, setFatherName)}
            {ModalField("Age", age, setAge)}
            {ModalField("Year started", yearStarted, setYearStarted)}
            {ModalField("Med service id", medServiceId, setMedServiceId)}
            {ModalField("Description", description, setDescription)}
            <ModalButton onClick={() => create()}>Create</ModalButton>
            <p style={{color: responseStatus == "ok" ? theme.colors.accentTwo : theme.colors.declineColor}}>
                {responseStatus}
            </p>
        </div>
    )
}

export default CreateDoctor