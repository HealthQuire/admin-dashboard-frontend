import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface IInitialState {
    entities: [number, string][]
}

const initialState: IInitialState = {
    entities: []
}

const appointmentsSlice = createSlice({
    name: 'appointments',
    initialState,
    reducers: {
        setGeneralAppointments: (state, action: PayloadAction<IInitialState>) => {
            const { entities } = action.payload
            state.entities = entities
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
