import ModalField from "../modal-field.tsx";
import {ButtonContainer, ModalButton} from "../styles.ts";
import {Dispatch, SetStateAction, useState} from "react";
import theme from "../../../styles/theme.ts";
import {app} from "../../../lib/axios.ts";
import {useDispatch} from "react-redux";
import {addDoctor, deleteDoctor, editDoctor} from "../../../store/doctors/reducer.ts";
import {IDoctor, INewDoctor, initDoctor} from "../../../@types/entities/doctor.ts";
import {doctorSchema} from "../../../schemas/doctorSchema.ts";
import {IShortEntity} from "../../../@types/shortEntity.ts";

const Doctor  = (
    responseStatus: string,
    setResponseStatus: Dispatch<SetStateAction<string>>,
    setModalOpened: Dispatch<SetStateAction<boolean>>,
    onEdit: boolean = false,
    editElement: IDoctor = initDoctor) => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState<string>(initDoctor.email)
    const [password, setPassword] = useState<string>(initDoctor.password)
    const [phone, setPhone] = useState<string>(initDoctor.phone)
    const [status, setStatus] = useState<string>(initDoctor.status)

    const [medCentreId, setMedCentreId] = useState<string>(initDoctor.medCentreId)
    const [firstName, setFirstName] = useState<string>(initDoctor.firstName)
    const [lastName, setLastName] = useState<string>(initDoctor.lastName)
    const [fatherName, setFatherName] = useState<string>(initDoctor.fatherName)
    const [age, setAge] = useState<string>(initDoctor.age)
    const [yearStarted, setYearStarted] = useState<string>(initDoctor.yearStarted)
    const [medService, setMedService] = useState<string>(initDoctor.medService)
    const [description, setDescription] = useState<string>(initDoctor.description)

    const resetForm = () => {
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
        setMedService("")
        setDescription("")
    }

    const buildObject = () => {
        const obj: INewDoctor = {
            email: email,
            password: password,
            phone: phone,
            status: status,
            medCentreId: medCentreId,
            firstName: firstName,
            lastName: lastName,
            fatherName: fatherName,
            age: age,
            yearStarted: yearStarted,
            medService: medService,
            description: description,
        };
        return obj
    }


    const create = async () => {
        const validObj = await doctorSchema
            .validate(buildObject())
            .catch(err => {
                setResponseStatus(err.message)
            })
        if (!validObj) return

        app.post("/doctors", validObj)
            .then(res => {
                if (res.status === 200){
                    const shortEntity: IShortEntity = {
                        id: res.data.id,
                        name: res.data.lastName
                    }
                    dispatch(addDoctor(shortEntity))
                    setResponseStatus("success")
                    resetForm()
                }
            })
            .catch(() => {
                setResponseStatus("error")
            })
    }

    const edit = async () => {
        const validObj = await doctorSchema
            .validate(buildObject())
            .catch(err => {
                setResponseStatus(err.message)
            })
        if (!validObj) return

        app.patch(`/doctors/${editElement.id}`, validObj)
            .then(res => {
                if (res.status === 200){
                    const shortEntity: IShortEntity = {
                        id: res.data.id,
                        name: res.data.lastName
                    }
                    dispatch(editDoctor(shortEntity))
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

        app.delete(`/doctors/${editElement.id}`)
            .then(res => {
                if (res.status === 200){
                    dispatch(deleteDoctor(editElement.id))
                    setModalOpened(false)
                    resetForm()
                }
            })
    }

    return(
        <div>
            {ModalField("Email", email, setEmail, editElement.email)}
            {ModalField("Password", password, setPassword, editElement.password)}
            {ModalField("Phone Number", phone, setPhone, editElement.phone)}
            {ModalField("Status", status, setStatus, editElement.status)}
            {ModalField("Med centre id", medCentreId, setMedCentreId, editElement.medCentreId)}
            {ModalField("First name", firstName, setFirstName, editElement.firstName)}
            {ModalField("Last Name", lastName, setLastName, editElement.lastName)}
            {ModalField("Father Name", fatherName, setFatherName, editElement.fatherName)}
            {ModalField("Age", age, setAge, editElement.age)}
            {ModalField("Year started", yearStarted, setYearStarted, editElement.yearStarted)}
            {ModalField("Med service", medService, setMedService, editElement.medService)}
            {ModalField("Description", description, setDescription, editElement.description)}
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

export default Doctor