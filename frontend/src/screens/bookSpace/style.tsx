import { StyleSheet } from "react-native";
import COLORS from "../../consts/colors";
import { pixelSizeHorizontal,pixelSizeVertical ,fontPixel} from "../../utils/ResponsiveStyle";
 export const styles = StyleSheet.create({
    contain: {flex: 1, backgroundColor: 'white', paddingHorizontal: 16, gap: 40},
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
      borderRadius: 6,
    },
    mainspace: {
      backgroundColor: 'white',
      paddingTop: 33,
      paddingHorizontal: 16,
    },
    selCar: {
      textAlign: 'center',
      paddingBottom: 14,
      fontSize: fontPixel(18),
      fontFamily: 'OpenSans-SemiBold',
      color: COLORS.secondary,
      backgroundColor: 'white',
    },
    selRender: {
      flex: 0.5,
      backgroundColor: 'white',
      flexDirection: 'column',
      elevation: 10,
      paddingVertical: 20,
      paddingHorizontal: 14,
    },
    container: {
      flexDirection: 'row',
      gap: 10,
      justifyContent: 'center',
    },
    input: {
      color: COLORS.primary,
      borderWidth: 1,
      padding: 10,
      borderRadius:6
    },
    checkintime: {
      fontSize: fontPixel(16),
      color: 'black',
    },
    modelView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
  });
  