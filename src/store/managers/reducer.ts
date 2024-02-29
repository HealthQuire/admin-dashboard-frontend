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

const managersSlice = createSlice({
    name: 'managers',
    initialState,
    reducers: {
        setGeneralManagers: (state, action: PayloadAction<IShortEntity[]>) => {
            state.entities = action.payload
            state.init = true
        },
        addManager: (state, action: PayloadAction<IShortEntity>) => {
            state.entities.push(action.payload)
        },
        editManager: (state, action: PayloadAction<IShortEntity>) => {
            state.entities = state.entities.map(x =>
                x.id == action.payload.id ? action.payload : x)
        },
        deleteManager: (state, action: PayloadAction<number>) => {
            const ind = state.entities.findIndex(x =>
                x.id == action.payload)
            state.entities.splice(ind, 1)
        }
    }
})

export const {
    setGeneralManagers,
    addManager,
    editManager,
    deleteManager
} = managersSlice.actions

export default managersSlice.reducer
