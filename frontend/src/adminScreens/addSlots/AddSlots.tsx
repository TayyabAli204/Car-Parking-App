import { StyleSheet, Text, View,TextInput } from 'react-native'
import React, { useState,useEffect } from 'react'
import COLORS from '../../consts/colors'

const BookedSlots = () => {
  const [formData,setFormData]=useState()
  useEffect(()=>{
    
  },[])
  return (
    <View>
      <Text style={styles.heading}>BookedSlots</Text>
      {/* <TextInput onChangeText={text=>setFormData({
        // ...formData,location:
      })}></TextInput> */}
    </View>
  )
}

export default BookedSlots

const styles = StyleSheet.create({
  heading:{
    color:COLORS.primary
  }
})