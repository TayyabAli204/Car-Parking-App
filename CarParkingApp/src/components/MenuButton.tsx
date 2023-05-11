import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'
import Menu from '../assets/img/menu.svg'
const MenuButton = (props:any) => {
  return (
    <View>
     <Pressable onPress={props.onPress} style={props.buttonStyle}>
          <Menu style={props.titleStyle} />
        </Pressable>
    </View>
  )
}

export default MenuButton

const styles = StyleSheet.create({})