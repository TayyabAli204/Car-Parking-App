import { StyleSheet } from "react-native";
import {
    fontPixel,
    pixelSizeVertical,
    pixelSizeHorizontal,
    widthPixel,
  } from '../../utils/ResponsiveStyle';
  import COLORS from '../../consts/colors';
export  const styles = StyleSheet.create({
    input: {
      width: widthPixel(343),
      borderColor: COLORS.borderCOl,
      borderBottomWidth: 1,
      fontSize: fontPixel(16),
      fontFamily: 'OpenSans-Regular',
      color: COLORS.grey,
    },
    passWord_input: {
      fontSize: fontPixel(16),
      width: widthPixel(343),
      borderColor: COLORS.borderCOl,
      borderBottomWidth: 1,
      marginTop: pixelSizeVertical(44),
      marginBottom: pixelSizeVertical(18),
      fontFamily: 'OpenSans-Regular',
      color: COLORS.grey,
    },
    forget: {
      fontSize: fontPixel(16),
      fontFamily: 'OpenSans-Regular',
      textAlign: 'right',
      color: COLORS.secondary,
      marginTop: pixelSizeVertical(22),
    },
  
    signup: {
      fontSize: fontPixel(16),
      fontFamily: 'OpenSans-Regular',
      color: COLORS.secondary,
    },
    or: {
      fontSize: fontPixel(16),
      fontFamily: 'OpenSans-Regular',
      color: COLORS.grey,
    },
    main: {flex: 1, marginHorizontal: pixelSizeHorizontal(16)},
    sec: {
      alignItems: 'center',
      marginTop: pixelSizeVertical(147),
      marginBottom: pixelSizeVertical(135),
    },
    sec1: {
      backgroundColor: COLORS.secondary,
      paddingHorizontal: pixelSizeHorizontal(20),
      paddingVertical: pixelSizeVertical(14),
      borderRadius: 6,
      marginTop: pixelSizeVertical(62),
      marginBottom: pixelSizeVertical(40),
    },
    sec2: {
      textAlign: 'center',
      fontSize: fontPixel(16),
      color: COLORS.white,
      fontFamily: 'OpenSans-Bold',
      lineHeight: 24,
    },
    sec3: {
      flexDirection: 'row',
      gap: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputText:{
      color:  COLORS.grey
    }
  });
  