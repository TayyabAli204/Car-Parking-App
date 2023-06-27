import { StyleSheet } from "react-native";
import COLORS from '../../consts/colors';
import { pixelSizeHorizontal,pixelSizeVertical ,fontPixel} from "../../utils/ResponsiveStyle";
export const styles = StyleSheet.create({
    button: {
      paddingTop: pixelSizeVertical(40),
      
    },
    title: {
      backgroundColor: COLORS.secondary,
      marginTop: pixelSizeVertical(24),
      paddingHorizontal: pixelSizeHorizontal(20),
      paddingVertical: pixelSizeVertical(14),
      textAlign: 'center',
      fontSize: fontPixel(16),
      color: COLORS.white,
      fontFamily: 'OpenSans-Bold',
      lineHeight: 24,
      borderRadius:6
    },
    mainspace: {
      flex: 1,
      backgroundColor: 'white',
      paddingTop: 33,
      paddingHorizontal: 16,
    },
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
      paddingHorizontal: 11,
      paddingVertical: 20,
      gap: 10,
    },
    stext: {fontSize: fontPixel(18), fontFamily: 'OpenSans-SemiBold'},
    stext1: {flexDirection: 'row', alignItems: 'center'},
    stext2: {fontSize: fontPixel(18), fontFamily: 'OpenSans-Bold'},
    selCar: {
      textAlign: 'center',
      paddingBottom: 14,
      color: COLORS.primary,
      fontSize: fontPixel(20),
      fontFamily: 'OpenSans-Regular',
    },
    selRender: {
      flex: 0.9,
      backgroundColor: 'white',
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 20,
      elevation: 10,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 20,
    },
  });
  