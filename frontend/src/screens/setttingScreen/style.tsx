import { StyleSheet } from "react-native";
import COLORS from '../../consts/colors';
export const styles = StyleSheet.create({
    changeEmail :{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 9,
    },
    change:{
      marginHorizontal: 16,
      borderBottomColor: '#EFEEF0',
      borderBottomWidth: 1,
    },
    cancel:{
      display: 'flex',
      flexDirection: 'row',
      marginTop: 48,
      marginBottom: 32,
      gap: 16,
    },
    pushNotiu:{
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    pushNotiii:{
      backgroundColor: '#fff',
      display: 'flex',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    pushNotii:{
      backgroundColor: '#EFEEF0',
      borderRadius: 50,
      padding: 8,
      marginRight: 16,
      marginTop: 16,
    },
    pushNoti :{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 24,
      alignItems: 'center',
      marginTop: 34,
      marginBottom: 16,
    },
    emailNoti:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 24,
      alignItems: 'center',
      marginTop: 24,
    },
    parent: {
      flex: 1,
      backgroundColor:"white"
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 16,
      paddingHorizontal: 23,
      borderBottomWidth: 1,
      borderBottomColor: '#EFEEF0',
    },
    headerText: {
      color: 'black',
      fontSize: 16,
      fontWeight: '500',
      lineHeight: 22,
      fontFamily: 'Inter-Medium',
    },
    headerText1: {
      color: COLORS.lightBlue,
      fontSize: 16,
      fontWeight: '500',
      lineHeight: 22,
      fontFamily: 'Inter-Medium',
    },
    headerChild: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 15,
    },
    header1: {
      display: 'flex',
      flexDirection: 'row',
      paddingHorizontal: 16,
      gap: 16,
    },
    headerChild1: {
      display: 'flex',
      justifyContent: 'center',
      gap: 8,
    },
    headerText2: {
      color: 'black',
      fontSize: 20,
      fontWeight: '700',
      lineHeight: 28,
      fontFamily: 'Inter-Medium',
    },
    headerText3: {
      color: '#827D89',
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 15,
      fontFamily: 'Inter-Medium',
    },
    button: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 32,
      gap: 10,
      paddingVertical: 8,
      borderColor: '#613EEA',
      borderWidth: 1,
      borderRadius: 25,
    },
    buttonText: {
      color: '#613EEA',
      fontSize: 16,
      fontWeight: '500',
      lineHeight: 22,
      fontFamily: 'Inter-Medium',
    },
    buttonParent: {
      borderBottomColor: '#EFEEF0',
      borderBottomWidth: 1,
      paddingBottom: 24,
      marginHorizontal: 16,
    },
    appSetting: {
      color: '#827D89',
      fontSize: 10,
      fontWeight: '400',
      lineHeight: 12,
      fontFamily: 'Inter-Regular',
      marginLeft: 16,
      marginTop: 24,
    },
    listParent: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 12,
      alignItems: 'center',
      paddingVertical: 17,
    },
    listContent: {
      display: 'flex',
      flexDirection: 'row',
      gap: 16,
      alignItems: 'center',
    },
    listText: {
      color: 'black',
      fontSize: 16,
      fontWeight: '500',
      lineHeight: 22,
      fontFamily: 'Inter-Regular',
    },
    listText1: {
      color: '#CE3A54',
      fontSize: 16,
      fontWeight: '500',
      lineHeight: 22,
      fontFamily: 'Inter-Regular',
    },
    listSideText: {
      color: '#827D89',
      fontSize: 10,
      fontWeight: '400',
      lineHeight: 14,
      fontFamily: 'Inter-Regular',
    },
    logoutModal: {
      display: 'flex',
      alignItems: 'center',
      borderRadius: 20,
  
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    logout: {
      color: '#180E25',
      fontSize: 20,
      fontWeight: '700',
      lineHeight: 28,
      fontFamily: 'Inter-Bold',
      marginTop: 32,
    },
    logoutText: {
      color: '#827D89',
      fontSize: 16,
      fontWeight: '400',
      lineHeight: 22,
      fontFamily: 'Inter-Regular',
      marginTop: 8,
      textAlign: 'center',
      paddingHorizontal: 24,
    },
    modelButton: {
      borderRadius: 25,
      borderWidth: 1,
      paddingVertical: 8,
      paddingHorizontal: 27,
      borderColor: '#6A3EA1',
    },
    modelButton1: {
      borderRadius: 25,
      borderWidth: 1,
      paddingVertical: 8,
      paddingHorizontal: 40,
      borderColor: '#6A3EA1',
      backgroundColor: '#6A3EA1',
      color:"#ffffff"
    },
    notificationText: {
      color: '#180E25',
      fontSize: 16,
      fontWeight: '500',
      lineHeight: 22,
      fontFamily: 'Inter-Medium',
      marginTop: 8,
    },
    logoutout:{
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
      borderRadius: 20,
    }, image: {
      height: 120,
      width: 120,
      marginTop: 24,
      borderRadius: 80,
    },
  });
  