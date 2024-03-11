import {createSlice, type PayloadAction} from '@reduxjs/toolkit'
import {IShortEntity} from "../../@types/shortEntity.ts";

export interface IInitialState {
    entities: IShortEntity[],
    init: boolean
}

const initialState: IInitialState = {
    entities: [],
    init: false
}

const organizationsSlice = createSlice({
    name: 'organizations',
    initialState,
    reducers: {
        setGeneralOrganizations: (state, action: PayloadAction<IShortEntity[]>) => {
            state.entities = action.payload
            state.init = true
        },
        addOrganization: (state, action: PayloadAction<IShortEntity>) => {
            state.entities.push(action.payload)
        },
        editOrganization: (state, action: PayloadAction<IShortEntity>) => {
            state.entities = state.entities.map(x =>
                x.id == action.payload.id ? action.payload : x)
        },
        deleteOrganization: (state, action: PayloadAction<string>) => {
            const ind = state.entities.findIndex(x =>
                x.id == action.payload)
            state.entities.splice(ind, 1)
        },
    }
})

export const {
    setGeneralOrganizations,
    addOrganization,
    editOrganization,
    deleteOrganization
} = organizationsSlice.actions

export default organizationsSlice.reducer
