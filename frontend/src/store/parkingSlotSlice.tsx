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
<<<<<<< HEAD
      console.log(action.payload,'action.payloadaction.payload')
      
=======
      console.log(action.payload, 'action.payloadaction.payload');
      // if(state.parkingSlots.length==0){
>>>>>>> 0e5925bb63ea53182518aa39fd677a22014d7b4d
      state.parkingSlots = action.payload;
    },
    setSelectedArea: (state, action) => {
      state.selectedArea = action.payload;
    },
    setSelectedSpot: (state, {payload}) => {
<<<<<<< HEAD
      if(state.parkingSlots.find((item:any)=>(item?._id==payload._id&& item.booked))){
return        Alert.alert('Already booked')
      }else{
        state.selectedSpot={...payload,booked:true}

=======
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
>>>>>>> 0e5925bb63ea53182518aa39fd677a22014d7b4d
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
