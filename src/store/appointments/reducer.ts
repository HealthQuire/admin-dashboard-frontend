import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface IInitialState {
    entities: [number, string][],
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
        setGeneralAppointments: (state, action: PayloadAction<[number, string][]>) => {
            state.entities = action.payload
            state.init = true
        },
        addAppointment: (state, action: PayloadAction<[number, string]>) => {
            state.entities.push(action.payload)
        }
    }
})

export const {
    setGeneralAppointments,
    addAppointment
} = appointmentsSlice.actions

export default appointmentsSlice.reducer
