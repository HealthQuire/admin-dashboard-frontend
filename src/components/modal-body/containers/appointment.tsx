import ModalField from "../modal-field.tsx";
import {ButtonContainer, ModalButton} from "../styles.ts";
import {Dispatch, SetStateAction, useRef} from "react";
import theme from "../../../styles/theme.ts";
import {app} from "../../../lib/axios.ts";
import {useDispatch} from "react-redux";
import {addAppointment, deleteAppointment, editAppointment} from "../../../store/appointments/reducer.ts";
import {IAppointment, INewAppointment, initAppointment} from "../../../@types/entities/appointment.ts";
import {appointmentSchema} from "../../../schemas/appointmentSchema.ts";
import {IShortEntity} from "../../../@types/shortEntity.ts";

const Appointment  = (
    responseStatus: string,
    setResponseStatus: Dispatch<SetStateAction<string>>,
    setModalOpened: Dispatch<SetStateAction<boolean>>,
    onEdit: boolean = false,
    editElement: IAppointment = initAppointment) => {

    const dispatch = useDispatch();

    const timeCellId = useRef<HTMLInputElement>(null);
    const description = useRef<HTMLInputElement>(null);

    const buildObject = () => {
        const obj: INewAppointment = {
            timeCellId: timeCellId.current ? timeCellId.current.value : "",
            description: description.current ? description.current.value : "",
        };
        return obj
    }


    const create = async () => {
        const validObj = await appointmentSchema
            .validate(buildObject())
            .catch(err => {
                setResponseStatus(err.message)
            })
        if (!validObj) return

        app.post("/appointments", validObj)
            .then(res => {
                if (res.status === 200){
                    const shortEntity: IShortEntity = {
                        id: res.data.id,
                        name: `Time cell - ${res.data.timeCellId}`
                    }
                    dispatch(addAppointment(shortEntity))
                    setResponseStatus("success")
                }
            })
            .catch(() => {
                setResponseStatus("error")
            })
    }

    const edit = async () => {
        const validObj = await appointmentSchema
            .validate(buildObject())
            .catch(err => {
                setResponseStatus(err.message)
            })
        if (!validObj) return

        app.patch(`/appointments/${editElement.id}`, validObj)
            .then(res => {
                if (res.status === 200){
                    const shortEntity: IShortEntity = {
                        id: res.data.id,
                        name: `Time cell - ${res.data.timeCellId}`
                    }
                    dispatch(editAppointment(shortEntity))
                    setResponseStatus("success")
                }
            })
            .catch(() => {
                setResponseStatus("server error")
            })
    }

    const remove = () => {
        if (!window.confirm(`Are you sure you want to delete (id=${editElement.id}) object?`)) { return }

        app.delete(`/appointments/${editElement.id}`)
            .then(res => {
                if (res.status === 200){
                    dispatch(deleteAppointment(editElement.id))
                    setModalOpened(false)
                }
            })
    }

    return(
        <div>
            {ModalField("Time cell id", timeCellId, editElement.timeCellId)}
            {ModalField("Description", description, editElement.description)}
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

export default Appointment