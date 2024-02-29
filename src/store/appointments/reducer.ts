import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import {IShortEntity} from "../../@types/shortEntity.ts";

export interface IInitialState {
    entities: IShortEntity[],
    init: boolean
}

const initialState: IInitialState = {
    entities: [],
    init: false
}

const appointmentsSlice = createSlice({
    name: 'appointments',
    initialState,
    reducers: {
        setGeneralAppointments: (state, action: PayloadAction<IShortEntity[]>) => {
            state.entities = action.payload
            state.init = true
        },
        addAppointment: (state, action: PayloadAction<IShortEntity>) => {
            state.entities.push(action.payload)
        },
        editAppointment: (state, action: PayloadAction<IShortEntity>) => {
            state.entities = state.entities.map(x =>
                x.id == action.payload.id ? action.payload : x)
        },
        deleteAppointment: (state, action: PayloadAction<number>) => {
            const ind = state.entities.findIndex(x =>
                x.id == action.payload)
            state.entities.splice(ind, 1)
        },
    }
})

export const {
    setGeneralAppointments,
    addAppointment,
    editAppointment,
    deleteAppointment
} = appointmentsSlice.actions

export default appointmentsSlice.reducer
