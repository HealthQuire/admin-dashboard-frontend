import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface IInitialState {
    entities: [number, string][]
}

const initialState: IInitialState = {
    entities: []
}

const managersSlice = createSlice({
    name: 'managers',
    initialState,
    reducers: {
        setGeneralManagers: (state, action: PayloadAction<IInitialState>) => {
            const { entities } = action.payload
            state.entities = entities
        },
        addManager: (state, action: PayloadAction<[number, string]>) => {
            state.entities.push(action.payload)
        }
    }
})

export const {
    setGeneralManagers,
    addManager
} = managersSlice.actions

export default managersSlice.reducer
