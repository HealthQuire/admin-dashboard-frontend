import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface IInitialState {
    entities: [number, string][],
    init: boolean
}

const initialState: IInitialState = {
    entities: [],
    init: false
}

const doctorsSlice = createSlice({
    name: 'doctors',
    initialState,
    reducers: {
        setGeneralDoctors: (state, action: PayloadAction<[number, string][]>) => {
            state.entities = action.payload
            state.init = true
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
