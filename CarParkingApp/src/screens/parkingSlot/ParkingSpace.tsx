import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React, { useEffect } from 'react'
import axios from 'axios'
import { setParkingSlotData,bookSlot } from '../../store/parkingSlotSlice'
import { useDispatch, useSelector } from 'react-redux'
const ParkingSpace = () => {
    const dispatch=useDispatch()
    const slotsData=useSelector((state:any)=>state.parkingSlotSlice.parkingSlots)
    useEffect(()=>{
async function  getSlotsData(){
const data= await   axios.get('http://192.168.50.2:8000/parkingSlot/data')
console.log('data',data)
// dispatch(setParkingSlotData(data))

}
getSlotsData()
    },[])
  return (
    <View>
     {
    slotsData.map((item:any)=> {
        return <TouchableOpacity onPress={()=>dispatch(bookSlot(item))}>
            <Text>
             fdasasdf
            </Text>
        </TouchableOpacity>
    })
     }
    </View>
  )
}

export default ParkingSpace

const styles = StyleSheet.create({})