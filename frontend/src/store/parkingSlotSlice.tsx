import { createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";
const parkingSlotSlice = createSlice({
    name: 'parkingSlotSlice',
    initialState: {
     parkingSlots:[
     
     ],
  
      
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
           
            return {...item,booked:true,}
          }else{
            return item
            
          }
        })
        state.parkingSlots=updatedSlot
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
  export const {setParkingSlotData,bookSlot,setBookSpace}=parkingSlotSlice.actions
export default parkingSlotSlice.reducer
  