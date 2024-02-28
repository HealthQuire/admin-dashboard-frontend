import {app} from "../lib/axios.ts";
import {Dispatch} from "react";
import {AnyAction} from "@reduxjs/toolkit";
import {setGeneralOrganizations} from "../store/organizations/reducer.ts";
import {setGeneralDoctors} from "../store/doctors/reducer.ts";
import {setGeneralAppointments} from "../store/appointments/reducer.ts";
import {setGeneralClients} from "../store/clients/reducer.ts";
import {setGeneralManagers} from "../store/managers/reducer.ts";

export const getGeneralDataByLocation = (dispatch: Dispatch<AnyAction>, location: string) : void => {

    app.get(`/${location}`)
        .then(res => {
            if (res.status === 200){

                switch (location){
                    case "organizations":
                        dispatch(setGeneralOrganizations(res.data))
                        break
                    case "doctors":
                        dispatch(setGeneralDoctors(res.data))
                        break
                    case "clients":
                        dispatch(setGeneralClients(res.data))
                        break
                    case "appointments":
                        dispatch(setGeneralAppointments(res.data))
                        break
                    case "managers":
                        dispatch(setGeneralManagers(res.data))
                        break
                }
            }
        })
}