import { createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import { act } from "react-test-renderer";
const parkingSlotSlice = createSlice({
    name: 'parkingSlotSlice',
    initialState: {
     parkingSlots:[
     
     ],
     selectedArea:'',
  selectedSpot:{},
  bookedSlotsHistory:[]
      
    },
    
    reducers: {
        setParkingSlotData:(state,action)=>{
          // if(state.parkingSlots.length==0){      
            state.parkingSlots=action.payload
          // }
        },
        setSelectedArea:(state,action)=>{
state.selectedArea=action.payload
        },
        setSelectedSpot:(state,{payload})=>{
        
            state.selectedSpot={...payload,booked:true}
        },
      bookSlot: (state, {payload}) => {
        
      
      },
      setBookSpace:(state,{payload})=>{
       let meriState:any = state.parkingSlots.map((item:any)=>{
        if(item.booked == true){
          item.totalParkingTime=payload.estimatedTime
          item.entryTime=payload.checkInTime
          return item 
        }
        else{
         return item
        }
      })
      state.parkingSlots=meriState
      }
    }
  });
  export const {setParkingSlotData,setSelectedArea,bookSlot,setBookSpace,setSelectedSpot}=parkingSlotSlice.actions
export default parkingSlotSlice.reducer
  