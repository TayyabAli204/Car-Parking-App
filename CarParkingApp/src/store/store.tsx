import { configureStore ,getDefaultMiddleware} from '@reduxjs/toolkit'
import userSlice from './userSlice'
import parkingSlotSlice from './parkingSlotSlice'
const middleware = getDefaultMiddleware({
  serializableCheck: false, // Disable serializability check
});
export const store = configureStore({
  middleware,
  reducer: {userSlice,parkingSlotSlice},
})

