import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface IInitialState {
    entities: []
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
        }
    }
})

export const {
    setGeneralOrganizations
} = organizationsSlice.actions

export default organizationsSlice.reducer
