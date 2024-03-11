import ModalField from "../modal-field.tsx";
import {ButtonContainer, ModalButton} from "../styles.ts";
import {Dispatch, SetStateAction, useRef} from "react";
import theme from "../../../styles/theme.ts";
import {userServiceApp} from "../../../lib/axios.ts";
import {addOrganization, deleteOrganization, editOrganization} from "../../../store/organizations/reducer.ts";
import {useDispatch} from "react-redux";
import {initOrganization, IOrganization} from "../../../@types/entities/organization.ts";
import {organizationSchema} from "../../../schemas/organizationSchema.ts";
import {IShortEntity} from "../../../@types/shortEntity.ts";


const Organization = (
    responseStatus: string,
    setResponseStatus: Dispatch<SetStateAction<string>>,
    setModalOpened: Dispatch<SetStateAction<boolean>>,
    onEdit: boolean = false,
    editElement: IOrganization = initOrganization) => {

    const dispatch = useDispatch();

    const ownerId = useRef<HTMLInputElement>(null);
    const name = useRef<HTMLInputElement>(null);
    const status = useRef<HTMLInputElement>(null);

    const buildObject = () => {
        const obj = {
            ownerId: ownerId.current ? ownerId.current.value : "",
            name: name.current ? name.current.value : "",
            status: status.current ? status.current.value : ""
        };
        return obj
    }

    const buildEditObj = () => {
        const editObj = []
        if (ownerId.current != null && ownerId.current.value != ""){
            editObj.push({
                "path": "ownerId",
                "op": "replace",
                "value": ownerId.current.value
            })
        }
        if (name.current != null && name.current.value != ""){
            editObj.push({
                "path": "name",
                "op": "replace",
                "value": name.current.value
            })
        }
        if (status.current != null && status.current.value != ""){
            editObj.push({
                "path": "status",
                "op": "replace",
                "value": status.current.value
            })
        }
        return editObj
    }

    const create = async () => {
        setResponseStatus("")
        const validObj = await organizationSchema
            .validate(buildObject())
            .catch(err => {
                setResponseStatus(err.message)
            })
        if (!validObj) return

        userServiceApp.post("/organizations", validObj)
            .then(res => {
                if (res.status === 200){
                    const shortEntity: IShortEntity = {
                        id: res.data.id,
                        name: res.data.name
                    }
                    dispatch(addOrganization(shortEntity))
                    setResponseStatus("success")
                }
            })
            .catch(() => {
                setResponseStatus("server error")
            })
    }

    const edit = async () => {
        setResponseStatus("")
        userServiceApp.patch(`/organizations/${editElement.id}`, buildEditObj())
            .then(res => {
                if (res.status === 200){
                    const shortEntity: IShortEntity = {
                        id: res.data.id,
                        name: res.data.name
                    }
                    dispatch(editOrganization(shortEntity))
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
        userServiceApp.delete(`/organizations/${editElement.id}`)
            .then(res => {
                if (res.status === 200){
                    dispatch(deleteOrganization(editElement.id))
                    setModalOpened(false)
                }
            })
    }

    return(
        <div>
            {ModalField("Owner Id", ownerId, editElement.ownerId)}
            {ModalField("Name", name, editElement.name)}
            {ModalField("Status", status, editElement.status)}
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

export default Organization