import {
    WSListWrapper
} from "./styles";

import WorkshopListElement from "../workshop-list-element";
import {useEffect, useState} from "react";
import ModalWindow from "../../modal-window";
import Organization from "../../modal-body/containers/organization.tsx";
import Doctor from "../../modal-body/containers/doctor.tsx";
import Client from "../../modal-body/containers/client.tsx";
import Appointment from "../../modal-body/containers/appointment.tsx";
import Manager from "../../modal-body/containers/manager.tsx";
import {initShortEntity, IShortEntity} from "../../../@types/shortEntity.ts";
import {app} from "../../../lib/axios.ts";
import {initOrganization, IOrganization} from "../../../@types/entities/organization.ts";
import {IClient, initClient} from "../../../@types/entities/client.ts";
import {IDoctor, initDoctor} from "../../../@types/entities/doctor.ts";
import {IAppointment, initAppointment} from "../../../@types/entities/appointment.ts";
import {IManager, initManager} from "../../../@types/entities/manager.ts";

const passLock = "***hidden***"

export default function WorkshopList(data: IShortEntity[], location: string){

    const [editWindowOpened, setEditWindowOpened] = useState(false);
    const [elementEditOpened, setElementEditOpened] =
        useState<IShortEntity>(initShortEntity);

    const [responseStatus, setResponseStatus] = useState<string>(``)

    const [openedOrganization, setOpenedOrganization] =
        useState<IOrganization>(initOrganization)
    const [openedClient, setOpenedClient] =
        useState<IClient>(initClient)
    const [openedDoctor, setOpenedDoctor] =
        useState<IDoctor>(initDoctor)
    const [openedAppointment, setOpenedAppointment] =
        useState<IAppointment>(initAppointment)
    const [openedManager, setOpenedManager] =
        useState<IManager>(initManager)

    useEffect(() => {
        if (!editWindowOpened) { return }
        if (elementEditOpened != initShortEntity){
            app.get(`/${location}/${elementEditOpened.id}`).then(res => {
                if (res.status == 200){
                    if (Object.prototype.hasOwnProperty.call(res.data, "password")){
                        res.data.password = passLock
                    }
                    switch (location) {
                        case "organizations":
                            setOpenedOrganization(res.data)
                            break
                        case "managers":
                            setOpenedManager(res.data)
                            break
                        case "clients":
                            setOpenedClient(res.data)
                            break
                        case "doctors":
                            setOpenedDoctor(res.data)
                            break
                        case "appointments":
                            setOpenedAppointment(res.data)
                            break
                    }
                }
            })
        }
    }, [elementEditOpened, editWindowOpened, data]);

    return(
        <WSListWrapper>
            {data.map(element =>
                WorkshopListElement({
                    element,
                    trigger: setEditWindowOpened,
                    elementTrigger: setElementEditOpened
                })
            )}

            <ModalWindow children={Organization(responseStatus, setResponseStatus,
                                                setEditWindowOpened, true, openedOrganization)}
                         isActive={location == "organizations" && editWindowOpened}
                         windowName={`Edit ${elementEditOpened.name}`}
                         trigger={setEditWindowOpened}>
            </ModalWindow>

            <ModalWindow children={Doctor(responseStatus, setResponseStatus,
                                            setEditWindowOpened, true, openedDoctor)}
                         isActive={location == "doctors" && editWindowOpened}
                         windowName={`Edit ${elementEditOpened.name}`}
                         trigger={setEditWindowOpened}>
            </ModalWindow>

            <ModalWindow children={Client(responseStatus, setResponseStatus,
                                            setEditWindowOpened, true, openedClient)}
                         isActive={location == "clients" && editWindowOpened}
                         windowName={`Edit ${elementEditOpened.name}`}
                         trigger={setEditWindowOpened}>
            </ModalWindow>
            <ModalWindow children={Appointment(responseStatus, setResponseStatus,
                                                setEditWindowOpened, true, openedAppointment)}
                         isActive={location == "appointments" && editWindowOpened}
                         windowName={`Edit ${elementEditOpened.name}`}
                         trigger={setEditWindowOpened}>
            </ModalWindow>
            <ModalWindow children={Manager(responseStatus, setResponseStatus,
                                            setEditWindowOpened, true, openedManager)}
                         isActive={location == "managers" && editWindowOpened}
                         windowName={`Edit ${elementEditOpened.name}`}
                         trigger={setEditWindowOpened}>
            </ModalWindow>
        </WSListWrapper>
    )
}
