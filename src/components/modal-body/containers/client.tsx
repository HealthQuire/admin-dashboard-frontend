import ModalField from "../modal-field.tsx";
import {ButtonContainer, ModalButton} from "../styles.ts";
import {Dispatch, SetStateAction, useRef} from "react";
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

    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    const phone = useRef<HTMLInputElement>(null);
    const status = useRef<HTMLInputElement>(null);
    const firstName = useRef<HTMLInputElement>(null);
    const lastName = useRef<HTMLInputElement>(null);
    const fatherName = useRef<HTMLInputElement>(null);

    const buildObject = () => {
        const obj: INewClient = {
            email: email.current ? email.current.value : "",
            password: password.current ? password.current.value : "",
            phone: phone.current ? phone.current.value : "",
            status: status.current ? status.current.value : "",
            firstName: firstName.current ? firstName.current.value : "",
            lastName: lastName.current ? lastName.current.value : "",
            fatherName: fatherName.current ? fatherName.current.value : ""
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

        app.post("/customer/create", validObj)
            .then(res => {
                if (res.status === 200){
                    const shortEntity: IShortEntity = {
                        id: res.data.id,
                        name: res.data.lastName
                    }
                    dispatch(addClient(shortEntity))
                    setResponseStatus("success")
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
                }
            })
    }

    return(
        <div>
            {ModalField("Email", email, editElement.email)}
            {ModalField("Password", password, editElement.password)}
            {ModalField("Phone Number", phone, editElement.phone)}
            {ModalField("Status", status, editElement.status)}
            {ModalField("First name", firstName, editElement.firstName)}
            {ModalField("Last Name", lastName, editElement.lastName)}
            {ModalField("Father Name", fatherName, editElement.fatherName)}
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