import {
    WSListWrapper
} from "./styles";

import WorkshopListElement from "../workshop-list-element";
import {useState} from "react";
import ModalWindow from "../../modal-window";
import Organization from "../../modal-body/containers/organization.tsx";
import Doctor from "../../modal-body/containers/doctor.tsx";
import Client from "../../modal-body/containers/client.tsx";
import Appointment from "../../modal-body/containers/appointment.tsx";
import Manager from "../../modal-body/containers/manager.tsx";

export default function WorkshopList(data: [number, string][], location: string){

    const [editWindowOpened, setEditWindowOpened] = useState(false);
    const [elementEditOpened, setElementEditOpened] = useState<[number, string]>([0, ""]);

    const [responseStatus, setResponseStatus] = useState<string>("")

    return(
        <WSListWrapper>
            {data.length > 0 ?
                data.map(element =>
                    WorkshopListElement(
                        {
                        element,
                        trigger: setEditWindowOpened,
                        elementTrigger: setElementEditOpened
                    })
                )
                : <p>Not Found</p>
            }
            <ModalWindow children={Organization(responseStatus, setResponseStatus, setEditWindowOpened, true, elementEditOpened[0])}
                         isActive={location == "organizations" && editWindowOpened}
                         windowName={`Edit ${elementEditOpened[1]}`}
                         trigger={setEditWindowOpened}>
            </ModalWindow>

            <ModalWindow children={Doctor(responseStatus, setResponseStatus, setEditWindowOpened, true, elementEditOpened[0])}
                         isActive={location == "doctors" && editWindowOpened}
                         windowName={`Edit ${elementEditOpened[1]}`}
                         trigger={setEditWindowOpened}>
            </ModalWindow>

            <ModalWindow children={Client(responseStatus, setResponseStatus, setEditWindowOpened, true, elementEditOpened[0])}
                         isActive={location == "clients" && editWindowOpened}
                         windowName={`Edit ${elementEditOpened[1]}`}
                         trigger={setEditWindowOpened}>
            </ModalWindow>
            <ModalWindow children={Appointment(responseStatus, setResponseStatus, setEditWindowOpened, true, elementEditOpened[0])}
                         isActive={location == "appointments" && editWindowOpened}
                         windowName={`Edit ${elementEditOpened[1]}`}
                         trigger={setEditWindowOpened}>
            </ModalWindow>
            <ModalWindow children={Manager(responseStatus, setResponseStatus, setEditWindowOpened, true, elementEditOpened[0])}
                         isActive={location == "managers" && editWindowOpened}
                         windowName={`Edit ${elementEditOpened[1]}`}
                         trigger={setEditWindowOpened}>
            </ModalWindow>
        </WSListWrapper>
    )
}
