import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Menu from '../assets/img/menu.svg'
const MenuButton = (props:any) => {
  return (
    <View>
     <TouchableOpacity onPress={props.onPress} style={props.buttonStyle}>
          <Menu style={props.titleStyle} />
        </TouchableOpacity>
    </View>
  )
}

export default MenuButton

const styles = StyleSheet.create({})