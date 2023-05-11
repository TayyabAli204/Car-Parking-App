import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import { fontPixel,pixelSizeHorizontal,pixelSizeVertical } from '../utils/ResponsiveStyle'
import COLORS from '../consts/colors'
const CustomButton = (props:any) => {
  return (
    <View>
     <TouchableOpacity onPress={props.onPress} style={props.buttonStyle}>
          <Text style={props.titleStyle}>{props.title}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default CustomButton

