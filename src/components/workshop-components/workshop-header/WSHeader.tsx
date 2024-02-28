import {
    WSHeaderWrapper,
    InputField,
    CreateButton
} from "./styles.ts";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import ModalWindow from "../../modal-window";
import CreateOrganization from "../../modal-body/create/create-organization.tsx";
import CreateClient from "../../modal-body/create/create-client.tsx";
import CreateDoctor from "../../modal-body/create/create-doctor.tsx";
import CreateAppointment from "../../modal-body/create/create-appointment.tsx";
import CreateManager from "../../modal-body/create/create-manager.tsx";

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
            <ModalWindow children={CreateOrganization(responseStatus, setResponseStatus)} isActive={location == "organizations" && createWindowOpened}
                         windowName={`Create ${location.slice(0, -1)}`} trigger={setCreateWindowOpened}></ModalWindow>
            <ModalWindow children={CreateDoctor(responseStatus, setResponseStatus)} isActive={location == "doctors" && createWindowOpened}
                         windowName={`Create ${location.slice(0, -1)}`} trigger={setCreateWindowOpened}></ModalWindow>
            <ModalWindow children={CreateClient(responseStatus, setResponseStatus)} isActive={location == "clients" && createWindowOpened}
                         windowName={`Create ${location.slice(0, -1)}`} trigger={setCreateWindowOpened}></ModalWindow>
            <ModalWindow children={CreateAppointment(responseStatus, setResponseStatus)} isActive={location == "appointments" && createWindowOpened}
                         windowName={`Create ${location.slice(0, -1)}`} trigger={setCreateWindowOpened}></ModalWindow>
            <ModalWindow children={CreateManager(responseStatus, setResponseStatus)} isActive={location == "managers" && createWindowOpened}
                         windowName={`Create ${location.slice(0, -1)}`} trigger={setCreateWindowOpened}></ModalWindow>
        </WSHeaderWrapper>
    )
}
