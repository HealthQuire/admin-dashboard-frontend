import {
    WSHeaderWrapper,
    InputField,
    CreateButton
} from "./styles.ts";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import ModalWindow from "../../modal-window";
import Organization from "../../modal-body/containers/organization.tsx";
import Client from "../../modal-body/containers/client.tsx";
import Doctor from "../../modal-body/containers/doctor.tsx";
import Appointment from "../../modal-body/containers/appointment.tsx";
import Manager from "../../modal-body/containers/manager.tsx";

export default function WorkshopHeader(location: string, request: string, setRequest: Dispatch<SetStateAction<string>>){

    const [createWindowOpened, setCreateWindowOpened] = useState(false);

    const [responseStatus, setResponseStatus] = useState<string>("")

    useEffect(() => {
        if (!createWindowOpened) setResponseStatus("")
    }, [createWindowOpened]);

    return(
        <WSHeaderWrapper>
            <InputField
                        type="search"
                        value={request}
                        onChange={(e) => setRequest(e.target.value)}
                        placeholder='Search for entity name'
            />
            <CreateButton onClick={() => setCreateWindowOpened(true)} >Create</CreateButton>

            <ModalWindow children={Organization(responseStatus, setResponseStatus, setCreateWindowOpened)}
                         isActive={location == "organizations" && createWindowOpened}
                         windowName={`Create ${location.slice(0, -1)}`}
                         trigger={setCreateWindowOpened}></ModalWindow>

            <ModalWindow children={Doctor(responseStatus, setResponseStatus, setCreateWindowOpened)}
                         isActive={location == "doctors" && createWindowOpened}
                         windowName={`Create ${location.slice(0, -1)}`}
                         trigger={setCreateWindowOpened}></ModalWindow>

            <ModalWindow children={Client(responseStatus, setResponseStatus, setCreateWindowOpened)}
                         isActive={location == "clients" && createWindowOpened}
                         windowName={`Create ${location.slice(0, -1)}`}
                         trigger={setCreateWindowOpened}></ModalWindow>

            <ModalWindow children={Appointment(responseStatus, setResponseStatus, setCreateWindowOpened)}
                         isActive={location == "appointments" && createWindowOpened}
                         windowName={`Create ${location.slice(0, -1)}`}
                         trigger={setCreateWindowOpened}>
            </ModalWindow>

            <ModalWindow children={Manager(responseStatus, setResponseStatus, setCreateWindowOpened)}
                         isActive={location == "managers" && createWindowOpened}
                         windowName={`Create ${location.slice(0, -1)}`}
                         trigger={setCreateWindowOpened}></ModalWindow>
        </WSHeaderWrapper>
    )
}
