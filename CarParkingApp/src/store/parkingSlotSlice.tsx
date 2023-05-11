import { createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";
const parkingSlotSlice = createSlice({
    name: 'parkingSlotSlice',
    initialState: {
     parkingSlots:[],
    //  selectedSpot:{}
      
    },
    reducers: {
        setParkingSlotData:(state,action)=>{
          if(state.parkingSlots.length==0){
            state.parkingSlots=action.payload
          }
        },
      bookSlot: (state, {payload}) => {
        
        let updatedSlot:any=state.parkingSlots.map((item:any)=>{
          if(item._id==payload?._id){
            //           Alert.alert('you have booked '+item.parkingLotName)
            console.log(item.parkingLotName,{...item,booked:true})
            return {...item,booked:true}
          }else{
            return item
            
          }
        })
        state.parkingSlots=updatedSlot
      },
    },
    
  });
  export const {setParkingSlotData,bookSlot}=parkingSlotSlice.actions
export default parkingSlotSlice.reducer
  