import { StyleSheet } from "react-native";
import COLORS from '../../consts/colors';
import { pixelSizeHorizontal,pixelSizeVertical ,fontPixel} from "../../utils/ResponsiveStyle";

export const styles = StyleSheet.create({
    next: {
      textAlign: 'center',
      fontSize: fontPixel(16),
      color: COLORS.white,
      fontFamily: 'OpenSans-Bold',
      lineHeight: 24,
      paddingHorizontal: pixelSizeHorizontal(20),
      paddingVertical: pixelSizeVertical(14),
    },
  
    touch: {
      backgroundColor: COLORS.secondary,
      borderRadius: 6,
      marginTop: pixelSizeVertical(24),
      marginHorizontal: pixelSizeHorizontal(16),
      marginBottom: pixelSizeVertical(43),
    },
    container: {
      flex: 1,
      padding: 30,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    button: {
      width: 250,
      height: 60,
      backgroundColor: '#3740ff',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
      marginBottom: 12,
    },
    buttonText: {
      textAlign: 'center',
      fontSize: 15,
      color: '#fff',
    },
    hi1: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginHorizontal: 24,
      marginTop: 53,
    },
    hi2: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#3B414B',
      fontFamily: 'OpenSans-Bold',
    },
    hi3: {
      marginTop: pixelSizeVertical(29),
      alignItems: 'baseline',
      flex: 0,
      paddingHorizontal: pixelSizeHorizontal(16),
    },
    hi4: {
      // marginHorizontal: pixelSizeHorizontal(1),
      color: COLORS.grey,
      fontSize: fontPixel(16),
      fontFamily: 'OpenSans-SemiBold',
    },
    hi5: {
      flex: 0,
      marginTop: pixelSizeVertical(24),
      paddingHorizontal: pixelSizeHorizontal(16),
    },
    hi6: {
      marginTop: pixelSizeVertical(20),
      flex: 1,
      alignItems: 'baseline',
      paddingHorizontal: pixelSizeHorizontal(16),
    },
    hi7: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    hi8: {
      color: COLORS.grey,
      fontSize: fontPixel(16),
      fontFamily: 'OpenSans-SemiBold',
    },
    hi9: {
      color: COLORS.secondary,
      fontSize: fontPixel(15),
      fontFamily: 'OpenSans-SemiBold',
    },
    hel1: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    hel2: {
      color: COLORS.grey,
      fontSize: fontPixel(16),
      fontFamily: 'OpenSans-SemiBold',
    },
    hel3: {
      color: COLORS.secondary,
      fontSize: fontPixel(15),
      fontFamily: 'OpenSans-SemiBold',
    },
  });
  