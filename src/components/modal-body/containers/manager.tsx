import ModalField from "../modal-field.tsx";
import {ButtonContainer, ModalButton} from "../styles.ts";
import {Dispatch, SetStateAction, useRef} from "react";
import theme from "../../../styles/theme.ts";
import {userServiceApp} from "../../../lib/axios.ts";
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

    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    const role = useRef<HTMLInputElement>(null);
    const phone = useRef<HTMLInputElement>(null);
    const status = useRef<HTMLInputElement>(null);
    const medCentreId = useRef<HTMLInputElement>(null);
    const firstName = useRef<HTMLInputElement>(null);
    const lastName = useRef<HTMLInputElement>(null);
    const fatherName = useRef<HTMLInputElement>(null);

    const buildObject = () => {
        const obj: INewManager = {
            email: email.current ? email.current.value : "",
            password: password.current ? password.current.value : "",
            role: role.current ? parseInt(role.current.value) : 0,
            phone: phone.current ? phone.current.value : "",
            medCentreId: medCentreId.current ? medCentreId.current.value : "",
            status: status.current ? status.current.value : "",
            firstName: firstName.current ? firstName.current.value : "",
            lastName: lastName.current ? lastName.current.value : "",
            fatherName: fatherName.current ? fatherName.current.value : "",
            avatarUrl: ""
        };
        return obj
    }

    const buildEditObj = () => {

        const editObj = {
            patchUserDoc: [],
            patchManagerDoc: []
        };

        if (email.current != null && email.current.value != ""){
            editObj.patchUserDoc.push({
                "path": "email",
                "op": "replace",
                "value": email.current.value
            })
        }
        if (password.current != null && password.current.value != ""){
            editObj.patchUserDoc.push({
                "path": "password",
                "op": "replace",
                "value": password.current.value
            })
        }
        if (role.current != null && role.current.value != ""){
            editObj.patchUserDoc.push({
                "path": "status",
                "op": "replace",
                "value": parseInt(role.current.value)
            })
        }
        if (phone.current != null && phone.current.value != ""){
            editObj.patchUserDoc.push({
                "path": "phone",
                "op": "replace",
                "value": phone.current.value
            })
        }
        if (medCentreId.current != null && medCentreId.current.value != ""){
            editObj.patchManagerDoc.push({
                "path": "medCentreId",
                "op": "replace",
                "value": medCentreId.current.value
            })
        }
        if (status.current != null && status.current.value != ""){
            editObj.patchUserDoc.push({
                "path": "status",
                "op": "replace",
                "value": status.current.value
            })
        }
        if (firstName.current != null && firstName.current.value != ""){
            editObj.patchManagerDoc.push({
                "path": "firstName",
                "op": "replace",
                "value": firstName.current.value
            })
        }
        if (lastName.current != null && lastName.current.value != ""){
            editObj.patchManagerDoc.push({
                "path": "lastName",
                "op": "replace",
                "value": lastName.current.value
            })
        }
        if (fatherName.current != null && fatherName.current.value != ""){
            editObj.patchManagerDoc.push({
                "path": "fatherName",
                "op": "replace",
                "value": fatherName.current.value
            })
        }
        return editObj
    }

    const create = async () => {
        setResponseStatus("")
        const validObj = await managerSchema
            .validate(buildObject())
            .catch(err => {
                setResponseStatus(err.message)
            })
        if (!validObj) return

        userServiceApp.post("/managers", validObj)
            .then(res => {
                if (res.status === 200){
                    console.log(res.data)
                    const shortEntity: IShortEntity = {
                        id: res.data.id,
                        name: res.data.firstname + " " + res.data.lastname
                    }
                    dispatch(addManager(shortEntity))
                    setResponseStatus("success")
                }
            })
            .catch(res => {
                setResponseStatus(res.message)
            })
    }

    const edit = async () => {
        setResponseStatus("")

        userServiceApp.patch(`/managers/${editElement.id}`, buildEditObj())
            .then(res => {
                if (res.status === 200){
                    const shortEntity: IShortEntity = {
                        id: res.data.id,
                        name: res.data.firstname + " " + res.data.lastname
                    }
                    dispatch(editManager(shortEntity))
                    setResponseStatus("success")
                }
            })
            .catch(() => {
                setResponseStatus("server error")
            })
    }

    const remove = () => {
        if (!window.confirm(`Are you sure you want to delete (id=${editElement.id}) object?`)) { return }
        setResponseStatus("")
        userServiceApp.delete(`/managers/${editElement.id}`)
            .then(res => {
                if (res.status === 200){
                    dispatch(deleteManager(editElement.id))
                    setModalOpened(false)
                }
            })
    }

    return(
        <div>
            {ModalField("Email", email, editElement.email)}
            {ModalField("Password", password, editElement.password)}
            {ModalField("Role", role, editElement.role ? editElement.role.toString() : "")}
            {ModalField("Phone Number", phone, editElement.phone)}
            {ModalField("Status", status, editElement.status)}
            {ModalField("Med centre id", medCentreId, editElement.medCentreId)}
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

export default Manager