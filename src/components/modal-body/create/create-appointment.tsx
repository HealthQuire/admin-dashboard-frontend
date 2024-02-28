import ModalField from "../modal-field.tsx";
import {ModalButton} from "../styles.ts";
import {Dispatch, SetStateAction, useState} from "react";
import theme from "../../../styles/theme.ts";
import {app} from "../../../lib/axios.ts";
import {useDispatch} from "react-redux";
import {addAppointment} from "../../../store/appointments/reducer.ts";


const CreateAppointment = (responseStatus: string, setResponseStatus: Dispatch<SetStateAction<string>>) => {

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
            <ModalButton onClick={() => create()}>Create</ModalButton>
            <p style={{color: responseStatus == "ok" ? theme.colors.accentTwo : theme.colors.declineColor}}>
            {responseStatus}
            </p>
        </div>
    )
}

export default CreateAppointment