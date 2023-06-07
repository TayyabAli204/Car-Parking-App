import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const ButtonWithImg = (props: any) => (

  <TouchableOpacity onPress={props.onPress} style={props.buttonStyle}>
    <Text></Text>
    <Text style={props.titleStyle}>{props.title}</Text>
    {props.Imgg}
  </TouchableOpacity>
);

export default ButtonWithImg;