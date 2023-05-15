import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import parkingSlotSlice from './parkingSlotSlice'

export const store = configureStore({
  
  reducer: {userSlice,parkingSlotSlice},
})

