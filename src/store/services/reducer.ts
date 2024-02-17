import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface IInitialState {
    entities: []
}

const initialState: IInitialState = {
    entities: []
}

const servicesSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {
        setGeneralServices: (state, action: PayloadAction<IInitialState>) => {
            const { entities } = action.payload
            state.entities = entities
        }
    }
})

export const {
    setGeneralServices
} = servicesSlice.actions

export default servicesSlice.reducer
