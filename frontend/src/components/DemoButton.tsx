import React from 'react';
import {StyleSheet, Text, Pressable, ViewStyle, TextStyle} from 'react-native';
import EditIcon from '../assets/img/setting/editIcon.svg'
interface Props {
  onPress: () => void;
}

export function DemoButton({
  onPress,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <Pressable
      onPress={onPress}
      style={ styles.container}>
        <EditIcon/>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

interface Styles {
  container: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 100,
    gap: 10,
    paddingVertical: 10,
    borderColor: '#613EEA',
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor:'white'
  },
  text: {
    textAlign: 'center',
    color: '#613EEA',
    
  },
});