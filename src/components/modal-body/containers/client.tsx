import ModalField from "../modal-field.tsx";
import {ButtonContainer, ModalButton} from "../styles.ts";
import {Dispatch, SetStateAction, useState} from "react";
import theme from "../../../styles/theme.ts";
import {app} from "../../../lib/axios.ts";
import {addClient, deleteClient, editClient} from "../../../store/clients/reducer.ts";
import {useDispatch} from "react-redux";
import {IClient, INewClient, initClient} from "../../../@types/entities/client.ts";
import {IShortEntity} from "../../../@types/shortEntity.ts";
import {clientSchema} from "../../../schemas/clientSchema.ts";

const Client  = (
    responseStatus: string,
    setResponseStatus: Dispatch<SetStateAction<string>>,
    setModalOpened: Dispatch<SetStateAction<boolean>>,
    onEdit: boolean = false,
    editElement: IClient = initClient) => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState<string>(initClient.email)
    const [password, setPassword] = useState<string>(initClient.password)
    const [phone, setPhone] = useState<string>(initClient.phone)
    const [status, setStatus] = useState<string>(initClient.status)
    const [firstName, setFirstName] = useState<string>(initClient.firstName)
    const [lastName, setLastName] = useState<string>(initClient.lastName)
    const [fatherName, setFatherName] = useState<string>(initClient.fatherName)

    const resetForm = () => {
        setFirstName("")
        setLastName("")
        setFatherName("")
        setPhone("")
        setEmail("")
        setPassword("")
        setStatus("")
    }

    const buildObject = () => {
        const obj: INewClient = {
            email: email,
            password: password,
            phone: phone,
            status: status,
            firstName: firstName,
            lastName: lastName,
            fatherName: fatherName
        };
        return obj
    }


    const create = async () => {
        const validObj = await clientSchema
            .validate(buildObject())
            .catch(err => {
                setResponseStatus(err.message)
            })
        if (!validObj) return

        app.post("/clients", validObj)
            .then(res => {
                if (res.status === 200){
                    const shortEntity: IShortEntity = {
                        id: res.data.id,
                        name: res.data.lastName
                    }
                    dispatch(addClient(shortEntity))
                    setResponseStatus("success")
                    resetForm()
                }
            })
            .catch(() => {
                setResponseStatus("error")
            })
    }

    const edit = async () => {
        const validObj = await clientSchema
            .validate(buildObject())
            .catch(err => {
                setResponseStatus(err.message)
            })
        if (!validObj) return

        app.patch(`/clients/${editElement.id}`, validObj)
            .then(res => {
                if (res.status === 200){
                    const shortEntity: IShortEntity = {
                        id: res.data.id,
                        name: res.data.lastName
                    }
                    dispatch(editClient(shortEntity))
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

        app.delete(`/clients/${editElement.id}`)
            .then(res => {
                if (res.status === 200){
                    dispatch(deleteClient(editElement.id))
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

export default Client