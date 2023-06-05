import {createSlice} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {act} from 'react-test-renderer';
const parkingSlotSlice = createSlice({
  name: 'parkingSlotSlice',
  initialState: {
    parkingSlots: [],
    selectedArea: '',
    selectedSpot: {},
    bookedSlotsHistory: [],
  },

  reducers: {
    setParkingSlotData: (state, action) => {
      console.log(action.payload, 'action.payloadaction.payload');
      // if(state.parkingSlots.length==0){
      state.parkingSlots = action.payload;
    },
    setSelectedArea: (state, action) => {
      state.selectedArea = action.payload;
    },
    setSelectedSpot: (state, {payload}) => {
      console.log(payload, 'payload');
      // console.log(state.parkingSlots)
      if (
        state.parkingSlots.find(
          (item: any) => item?._id == payload._id && item.booked,
        )
      ) {
        return Alert.alert('Already booked');
      } else {
        state.selectedSpot = {...payload, booked: true};
      }
    },
    bookSlot: (state, {payload}) => {},
    setBookedSlotsHistory: (state, {payload}) => {
      state.bookedSlotsHistory = payload;
    },
  },
});
export const {
  setParkingSlotData,
  setSelectedArea,
  bookSlot,
  setBookedSlotsHistory,
  setSelectedSpot,
} = parkingSlotSlice.actions;
export default parkingSlotSlice.reducer;
