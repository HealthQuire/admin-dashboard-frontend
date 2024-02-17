import { configureStore } from '@reduxjs/toolkit'

import organizationsSlice from './organizations/reducer'
import doctorsSlice from './doctors/reducer.ts'
import clientsSlice from './clients/reducer.ts'
import appointmentsSlice from './appointments/reducer.ts'
import servicesSlice from './services/reducer.ts'

const store = configureStore({
    reducer: {
        organizations: organizationsSlice,
        doctors: doctorsSlice,
        clients: clientsSlice,
        appointments: appointmentsSlice,
        services: servicesSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})

export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch

export default store