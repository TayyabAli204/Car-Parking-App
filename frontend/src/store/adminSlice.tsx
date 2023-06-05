import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {Alert} from 'react-native';
import {act} from 'react-test-renderer';
const adminSlice = createSlice({
  name: 'adminSlice',
  initialState: {
    showLoader:false,
    showError:false,
    parkingSlots: [],
  },

  reducers: {
    setParkingSlotData: (state, action) => {
    //   state.parkingSlots = action.payload;
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(getSlotsDataAsync.pending,(state,action)=>{
      state.showLoader=true

    }).addCase(getSlotsDataAsync.fulfilled,(state,action)=>{
      state.showLoader=false
        state.parkingSlots=action.payload;

    }).addCase(getSlotsDataAsync.rejected,(state,action)=>{
      state.showLoader=false

    })
  }
});
export const {setParkingSlotData} = adminSlice.actions;
export const getSlotsDataAsync=createAsyncThunk('adminSlice/slotsData', async(state,thunkAPI)=>{
const {data}=await axios.get('http://192.168.1.4:8000/parkingSlot')
return data;
})
export default adminSlice.reducer;
