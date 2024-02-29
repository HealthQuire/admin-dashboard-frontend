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

const doctorsSlice = createSlice({
    name: 'doctors',
    initialState,
    reducers: {
        setGeneralDoctors: (state, action: PayloadAction<IShortEntity[]>) => {
            state.entities = action.payload
            state.init = true
        },
        addDoctor: (state, action: PayloadAction<IShortEntity>) => {
            state.entities.push(action.payload)
        },
        editDoctor: (state, action: PayloadAction<IShortEntity>) => {
            state.entities = state.entities.map(x =>
                x.id == action.payload.id ? action.payload : x)
        },
        deleteDoctor: (state, action: PayloadAction<number>) => {
            const ind = state.entities.findIndex(x =>
                x.id == action.payload)
            state.entities.splice(ind, 1)
        }
    }
})

export const {
    setGeneralDoctors,
    addDoctor,
    editDoctor,
    deleteDoctor
} = doctorsSlice.actions

export default doctorsSlice.reducer
