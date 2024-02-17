import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface IInitialState {
    entities: []
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
        }
    }
})

export const {
    setGeneralAppointments
} = appointmentsSlice.actions

export default appointmentsSlice.reducer
