import { createSlice } from "@reduxjs/toolkit";
const parkingSlotSlice = createSlice({
    name: 'parkingSlotSlice',
    initialState: {
     parkingSlots:[]
      
    },
    reducers: {
        setParkingSlotData:(state,action)=>{
          if(state.parkingSlots.length==0){
            state.parkingSlots=action.payload
          }
        },
      bookSlot: (state, action) => {
        console.log(action)
//        let updatedSlot=state.parkingSlots.map((item)=>{
//         if(item?.id==action.payload?.id){
// return action.payload
//         }else{
// return item
//         }
//        })
      },
    },
    
  });
  export const {setParkingSlotData,bookSlot}=parkingSlotSlice.actions
export default parkingSlotSlice.reducer
  