import { StyleSheet } from "react-native";
import COLORS from "../../consts/colors";
import { pixelSizeHorizontal,pixelSizeVertical ,fontPixel} from "../../utils/ResponsiveStyle";

export const styles = StyleSheet.create({
    detailsModel: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 2,
      shadowColor: '#000',
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    mainspace: {
      backgroundColor: 'white',
      paddingTop: 33,
      paddingHorizontal: 16,
    },
    detailHR: {
      borderWidth: 0.3,
      borderColor: COLORS.grey,
      marginHorizontal: 14,
      marginTop: 10,
    },
    textdetail:{
      color: COLORS.black,
      textAlign: 'center',
      paddingTop: 11,
      fontSize: fontPixel(18),
      fontFamily: 'OpenSans-SemiBold',
    },
    yaha:{
      paddingVertical: 17,
    },
    detailModel:{
      paddingVertical: 17,
      paddingHorizontal: 13,
      gap: 14,
      flexDirection: 'column',
    },
   CHECKINTIME :{flexDirection: 'row', justifyContent: 'space-between'},
   TOTALFEE:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  CHECKINTIMETEXT:{
    color:COLORS.primary,
    fontSize:fontPixel(14),
    fontFamily:"OpenSans-Regular",
    
  },
  CHECKINTIMEDATA:{
    color:COLORS.primary,
    fontSize:fontPixel(14),
    fontFamily:"OpenSans-SemiBold"
  },
  CHECKINTIMETOAL:{
    color:COLORS.primary,
    fontSize:fontPixel(20),
    fontFamily:"OpenSans-SemiBold"
  },
  title: {
    backgroundColor: COLORS.secondary,
    marginTop: pixelSizeVertical(24),
    marginHorizontal: pixelSizeHorizontal(20),
    paddingVertical: pixelSizeVertical(14),
    textAlign: 'center',
    fontSize: fontPixel(20),
    color: COLORS.white,
    fontFamily: 'OpenSans-Bold',
    borderRadius:6
  },
  });