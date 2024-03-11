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

const clientsSlice = createSlice({
    name: 'clients',
    initialState,
    reducers: {
        setGeneralClients: (state, action: PayloadAction<IShortEntity[]>) => {
            state.entities = action.payload
            state.init = true
        },
        addClient: (state, action: PayloadAction<IShortEntity>) => {
            state.entities.push(action.payload)
        },
        editClient: (state, action: PayloadAction<IShortEntity>) => {
            state.entities = state.entities.map(x =>
                x.id == action.payload.id ? action.payload : x)
        },
        deleteClient: (state, action: PayloadAction<string>) => {
            const ind = state.entities.findIndex(x =>
                x.id == action.payload)
            state.entities.splice(ind, 1)
        },
    }
})

export const {
    setGeneralClients,
    addClient,
    editClient,
    deleteClient
} = clientsSlice.actions

export default clientsSlice.reducer
