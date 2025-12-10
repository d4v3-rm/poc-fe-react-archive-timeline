import { configureStore } from '@reduxjs/toolkit'
import { localeReducer } from '../features/locale/localeSlice'
import { timelineReducer } from '../features/timeline/timelineSlice'

export const store = configureStore({
  reducer: {
    locale: localeReducer,
    timeline: timelineReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

