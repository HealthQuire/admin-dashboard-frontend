import {RootState} from "../store/store.ts";
import {IShortEntity} from "../@types/shortEntity.ts";

export const getEntitiesFromSelectorByLocation = (state: RootState, location: string) : IShortEntity[] => {

    switch (location){
        case "organizations":
            return state.organizations.entities
        case "doctors":
            return state.doctors.entities
        case "clients":
            return state.clients.entities
        case "appointments":
            return state.appointments.entities
        case "managers":
            return state.managers.entities
        default:
            return []
    }
}

export const getEntitiesInitFromSelectorByLocation = (state: RootState, location: string) : boolean => {

    switch (location){
        case "organizations":
            return state.organizations.init
        case "doctors":
            return state.doctors.init
        case "clients":
            return state.clients.init
        case "appointments":
            return state.appointments.init
        case "managers":
            return state.managers.init
        default:
            return true
    }
}