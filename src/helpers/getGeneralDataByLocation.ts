import {app} from "../lib/axios.ts";
import {Dispatch} from "react";
import {AnyAction} from "@reduxjs/toolkit";
import {setGeneralOrganizations} from "../store/organizations/reducer.ts";
import {setGeneralDoctors} from "../store/doctors/reducer.ts";
import {setGeneralAppointments} from "../store/appointments/reducer.ts";
import {setGeneralClients} from "../store/clients/reducer.ts";
import {setGeneralManagers} from "../store/managers/reducer.ts";
import {IOrganization} from "../@types/entities/organization.ts";
import {IShortEntity} from "../@types/shortEntity.ts";
import {IDoctor} from "../@types/entities/doctor.ts";
import {IClient} from "../@types/entities/client.ts";
import {IAppointment} from "../@types/entities/appointment.ts";
import {IManager} from "../@types/entities/manager.ts";

export const getGeneralDataByLocation = (dispatch: Dispatch<AnyAction>, location: string) : void => {
    app.get(`/${location}`)
        .then(res => {
            if (res.status === 200){
                let data = []
                switch (location){
                    case "organizations":
                        data = res.data.map((x: IOrganization) => {
                            const entity: IShortEntity = {
                                id: x.id,
                                name: x.name
                            }
                            return entity
                        })
                        dispatch(setGeneralOrganizations(data))
                        break
                    case "doctors":
                        data = res.data.map((x: IDoctor) => {
                            const entity: IShortEntity = {
                                id: x.id,
                                name: x.lastName
                            }
                            return entity
                        })
                        dispatch(setGeneralDoctors(data))
                        break
                    case "clients":
                        data = res.data.map((x: IClient) => {
                            const entity: IShortEntity = {
                                id: x.id,
                                name: x.lastName
                            }
                            return entity
                        })
                        dispatch(setGeneralClients(data))
                        break
                    case "appointments":
                        data = res.data.map((x: IAppointment) => {
                            const entity: IShortEntity = {
                                id: x.id,
                                name: `Time cell - ${x.timeCellId}`
                            }
                            return entity
                        })
                        dispatch(setGeneralAppointments(data))
                        break
                    case "managers":
                        data = res.data.map((x: IManager) => {
                            const entity: IShortEntity = {
                                id: x.id,
                                name: x.lastName
                            }
                            return entity
                        })
                        dispatch(setGeneralManagers(data))
                        break
                }
            }
        })
}
