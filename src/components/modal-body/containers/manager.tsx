import ModalField from "../modal-field.tsx";
import {ButtonContainer, ModalButton} from "../styles.ts";
import {Dispatch, SetStateAction, useState} from "react";
import theme from "../../../styles/theme.ts";
import {app} from "../../../lib/axios.ts";
import {useDispatch} from "react-redux";
import {addManager, deleteManager, editManager} from "../../../store/managers/reducer.ts";
import {IManager, INewManager, initManager} from "../../../@types/entities/manager.ts";
import {managerSchema} from "../../../schemas/managerSchema.ts";
import {IShortEntity} from "../../../@types/shortEntity.ts";

const Manager  = (
    responseStatus: string,
    setResponseStatus: Dispatch<SetStateAction<string>>,
    setModalOpened: Dispatch<SetStateAction<boolean>>,
    onEdit: boolean = false,
    editElement: IManager = initManager) => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState<string>(initManager.email)
    const [password, setPassword] = useState<string>(initManager.password)
    const [role, setRole] = useState<string>(initManager.role)
    const [phone, setPhone] = useState<string>(initManager.phone)
    const [status, setStatus] = useState<string>(initManager.status)

    const [medCentreId, setMedCentreId] = useState<string>(initManager.medCentreId)
    const [firstName, setFirstName] = useState<string>(initManager.firstName)
    const [lastName, setLastName] = useState<string>(initManager.lastName)
    const [fatherName, setFatherName] = useState<string>(initManager.fatherName)

    const resetForm = () => {
        setFirstName("")
        setLastName("")
        setFatherName("")
        setPhone("")
        setEmail("")
        setPassword("")
        setMedCentreId("")
        setStatus("")
        setRole("")
    }

    const buildObject = () => {
        const obj: INewManager = {
            email: email,
            password: password,
            role: role,
            phone: phone,
            status: status,
            medCentreId: medCentreId,
            firstName: firstName,
            lastName: lastName,
            fatherName: fatherName,
        };
        return obj
    }

    const create = async () => {
        const validObj = await managerSchema
            .validate(buildObject())
            .catch(err => {
                setResponseStatus(err.message)
            })
        if (!validObj) return

        app.post("/managers", validObj)
            .then(res => {
                if (res.status === 200){
                    const shortEntity: IShortEntity = {
                        id: res.data.id,
                        name: res.data.lastName
                    }
                    dispatch(addManager(shortEntity))
                    setResponseStatus("success")
                    resetForm()
                }
            })
            .catch(() => {
                setResponseStatus("error")
            })
    }

    const edit = async () => {
        const validObj = await managerSchema
            .validate(buildObject())
            .catch(err => {
                setResponseStatus(err.message)
            })
        if (!validObj) return

        app.patch(`/managers/${editElement.id}`, validObj)
            .then(res => {
                if (res.status === 200){
                    const shortEntity: IShortEntity = {
                        id: res.data.id,
                        name: res.data.lastName
                    }
                    dispatch(editManager(shortEntity))
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

        app.delete(`/managers/${editElement.id}`)
            .then(res => {
                if (res.status === 200){
                    dispatch(deleteManager(editElement.id))
                    setModalOpened(false)
                    resetForm()
                }
            })
    }

    return(
        <div>
            {ModalField("Email", email, setEmail, editElement.email)}
            {ModalField("Password", password, setPassword, editElement.password)}
            {ModalField("Role", role, setRole, editElement.role)}
            {ModalField("Phone Number", phone, setPhone, editElement.phone)}
            {ModalField("Status", status, setStatus, editElement.status)}
            {ModalField("Med centre id", medCentreId, setMedCentreId, editElement.medCentreId)}
            {ModalField("First name", firstName, setFirstName, editElement.firstName)}
            {ModalField("Last Name", lastName, setLastName, editElement.lastName)}
            {ModalField("Father Name", fatherName, setFatherName, editElement.fatherName)}
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

export default Manager