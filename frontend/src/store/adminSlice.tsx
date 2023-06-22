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
      console.log(action)
      state.showLoader=false

    })
    builder.addCase(addLocationAsync.pending,(state,action)=>{
      state.showLoader=true

    }).addCase(addLocationAsync.fulfilled,(state,action)=>{
      state.showLoader=false

    }).addCase(addLocationAsync.rejected,(state,action)=>{
      state.showLoader=false

    })
  }
});
export const {setParkingSlotData} = adminSlice.actions;
export const getSlotsDataAsync=createAsyncThunk('adminSlice/slotsData', async(state,thunkAPI)=>{
  const {data}=await axios.get('http://192.168.50.9:8000/parkingSlot');
  return data;
})
export const addLocationAsync:any=createAsyncThunk('adminSlice/addLocation', async(dispatchedData,thunkAPI)=>{

const data=await axios.post('http://192.168.50.65:8000/addLocation',{
  location:dispatchedData
});
return ;
})
export default adminSlice.reducer;

  // const {data}=await axios.post('http://192.168.50.65:8000/parkingSlot',
  // );
  // return data;
