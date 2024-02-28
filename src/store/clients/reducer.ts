import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface IInitialState {
    entities: [number, string][],
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
        setGeneralClients: (state, action: PayloadAction<[number, string][]>) => {
            state.entities = action.payload
            state.init = true
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
