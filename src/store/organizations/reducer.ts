import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface IInitialState {
    entities: [number, string][]
}

const initialState: IInitialState = {
    entities: []
}

const organizationsSlice = createSlice({
    name: 'organizations',
    initialState,
    reducers: {
        setGeneralOrganizations: (state, action: PayloadAction<IInitialState>) => {
            const { entities } = action.payload
            state.entities = entities
        },
        addOrganization: (state, action: PayloadAction<[number, string]>) => {
            state.entities.push(action.payload)
        }
    }
})

export const {
    setGeneralOrganizations,
    addOrganization
} = organizationsSlice.actions

export default organizationsSlice.reducer
