import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {pixelSizeVertical, fontPixel} from '../utils/ResponsiveStyle';
import {useSelector} from 'react-redux';
import COLORS from '../consts/colors';
const MenuSearchBar = (props: any) => {
  return (
    <View style={props.MenuSearchBarStyle}>
      <View style={styles.miansearch}>
        <View style={styles.mainouter}>
          <Text style={styles.stext}>{props.title}</Text>
          {/* <Text style={styles.stext2}>{props.titleSlotName}</Text> */}
        </View>
      </View>
    </View>
  );
};

export default MenuSearchBar;

const styles = StyleSheet.create({
  miansearch: {
    elevation: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: pixelSizeVertical(29),
    marginBottom: pixelSizeVertical(20),
  },
  mainouter: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 20,
    // gap: 30,
  },
  stext: {
    fontSize: fontPixel(20),
    color: COLORS.black,
    fontFamily: 'OpenSans-SemiBold',
  },
  stext1: {flexDirection: 'row', alignItems: 'center'},
  stext2: {
    fontSize: fontPixel(18),
    fontFamily: 'OpenSans-Bold',
    color: COLORS.lightBlue,
  },
});
