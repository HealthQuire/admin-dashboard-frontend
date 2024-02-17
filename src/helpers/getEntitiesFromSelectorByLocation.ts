import {RootState} from "../store/store.ts";

export const getEntitiesFromSelectorByLocation = (state: RootState, location: string) : [number, string][] => {

    switch (location){
        case "organizations":
            return state.organizations.entities
        case "doctors":
            return state.doctors.entities
        case "clients":
            return state.clients.entities
        case "appointments":
            return state.appointments.entities
        case "services":
            return state.services.entities
        default:
            return []
    }
}