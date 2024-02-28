import {createSlice, type PayloadAction} from '@reduxjs/toolkit'

export interface IInitialState {
    entities: [number, string][],
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
        setGeneralOrganizations: (state, action: PayloadAction<[number, string][]>) => {
            state.entities = action.payload
            state.init = true
        },
        addOrganization: (state, action: PayloadAction<[number, string]>) => {
            state.entities.push(action.payload)
        },
        editOrganization: (state, action: PayloadAction<[number, string]>) => {
            state.entities = state.entities.map(x => x[0] == action.payload[0] ? action.payload : x)
        },
        deleteOrganization: (state, action: PayloadAction<number>) => {
            const ind = state.entities.findIndex(x => x[0] == action.payload)
            state.entities.splice(ind, 1)
            if (state.entities.length == 0)
            console.log(state.entities)
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
