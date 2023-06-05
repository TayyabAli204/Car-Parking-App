import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import parkingSlotSlice from './parkingSlotSlice'
import adminSlice from './adminSlice'
export const store = configureStore({
  
  reducer: {userSlice,parkingSlotSlice,adminSlice},
})

