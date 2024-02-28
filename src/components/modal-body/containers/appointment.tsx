import ModalField from "../modal-field.tsx";
import {ButtonContainer, ModalButton} from "../styles.ts";
import {Dispatch, SetStateAction, useState} from "react";
import theme from "../../../styles/theme.ts";
import {app} from "../../../lib/axios.ts";
import {useDispatch} from "react-redux";
import {addAppointment} from "../../../store/appointments/reducer.ts";


const Appointment  = (
    responseStatus: string,
    setResponseStatus: Dispatch<SetStateAction<string>>,
    setModalOpened: Dispatch<SetStateAction<boolean>>,
    onEdit: boolean = false,
    editId: number = 0) => {

    const dispatch = useDispatch();

    const [timeCellId, setTimeCellId] = useState<string>("")
    const [description, setDescription] = useState<string>("")

    const create = () => {
        app.post("/appointments", {timeCellId, description})
            .then(res => {
                if (res.status === 200){
                    dispatch(addAppointment(res.data))
                    setDescription("")
                    setTimeCellId("")
                    setResponseStatus("ok")
                }
            })
            .catch(() => {
                setResponseStatus("error")
            })
    }

    return(
        <div>
            {ModalField("Time cell id", timeCellId, setTimeCellId)}
            {ModalField("Description", description, setDescription)}
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
                responseStatus == "ok" || responseStatus == "error" ?
                    <p style={{color: responseStatus == "ok" ? theme.colors.accentTwo : theme.colors.deleteColor}}>
                        {responseStatus}
                    </p>
                    :
                    null
            }
        </div>
    )
}

export default Appointment