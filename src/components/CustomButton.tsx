import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
const CustomButton = (props:any) => {
  return (
    <>
     <TouchableOpacity onPress={props.onPress} disabled={props.disabled} style={props.buttonStyle}>
           {/* {props?.children} */}
          <Text style={props.titleStyle}>{props.title}</Text>

        </TouchableOpacity>
    </>
  )
}

export default CustomButton

