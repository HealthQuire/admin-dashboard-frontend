import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface IInitialState {
    entities: []
}

const initialState: IInitialState = {
    entities: []
}

const doctorsSlice = createSlice({
    name: 'doctors',
    initialState,
    reducers: {
        setGeneralDoctors: (state, action: PayloadAction<IInitialState>) => {
            const { entities } = action.payload
            state.entities = entities
        }
    }
})

export const {
    setGeneralDoctors
} = doctorsSlice.actions

export default doctorsSlice.reducer
