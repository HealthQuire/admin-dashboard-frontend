import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface IInitialState {
    entities: [number, string][],
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
        setGeneralManagers: (state, action: PayloadAction<[number, string][]>) => {
            state.entities = action.payload
            state.init = true
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
