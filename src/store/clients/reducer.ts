import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface IInitialState {
    entities: []
}

const initialState: IInitialState = {
    entities: []
}

const clientsSlice = createSlice({
    name: 'clients',
    initialState,
    reducers: {
        setGeneralClients: (state, action: PayloadAction<IInitialState>) => {
            const { entities } = action.payload
            state.entities = entities
        }
    }
})

export const {
    setGeneralClients
} = clientsSlice.actions

export default clientsSlice.reducer
