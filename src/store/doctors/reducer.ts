import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface IInitialState {
    entities: [number, string][]
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
        },
        addDoctor: (state, action: PayloadAction<[number, string]>) => {
            state.entities.push(action.payload)
        }
    }
})

export const {
    setGeneralDoctors,
    addDoctor
} = doctorsSlice.actions

export default doctorsSlice.reducer
