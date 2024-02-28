import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface IInitialState {
    entities: [number, string][]
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
        },
        addClient: (state, action: PayloadAction<[number, string]>) => {
            state.entities.push(action.payload)
        }
    }
})

export const {
    setGeneralClients,
    addClient
} = clientsSlice.actions

export default clientsSlice.reducer
