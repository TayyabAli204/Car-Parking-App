// import React from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   ToastAndroid,
//   Image,
//   TextInput,
//   StatusBar,
//   StyleSheet,
//   Pressable,
// } from 'react-native';
// import Close from '../../assets/img/close.svg';
// import Menu from '../../assets/img/menu.svg';
// import {useNavigation} from '@react-navigation/native';
// import Edit from '../../assets/img/fa-regular_edit.svg';
// import COLORS from '../../consts/colors';
// import ImagePicker from 'react-native-image-picker';

// import {
//   fontPixel,
//   pixelSizeHorizontal,
//   pixelSizeVertical,
//   widthPixel,
//   heightPixel
// } from '../../utils/ResponsiveStyle';
// import {useState} from 'react';

// const UserProfile = () => {
//   const navigation:any = useNavigation();
//   const [first, setfirst] = useState(false);
//   const [resourcePath, setResourcePath] = useState({});

  
//   const TostMessage = () => {
//     ToastAndroid.show('Edited Sucessfully !', ToastAndroid.SHORT);
//   };
//   return (
//     <>
//       <StatusBar translucent
//         backgroundColor={'transparent'}
//         barStyle={'dark-content'}/>
//       <View
//         style={{
//           flexDirection: 'row',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           marginHorizontal: 24,
//           marginTop: 73,
//         }}>
//         <TouchableOpacity onPress={() => setfirst(!first)}>
//           {first ? <Close width={widthPixel(47)} height={heightPixel(47)}/> : <Menu width={widthPixel(25)} height={heightPixel(22)} onPress={()=>navigation.navigate("MenuScreen")} />}
//         </TouchableOpacity>
//         <Text style={{fontSize: fontPixel(18), fontFamily:'OpenSans-Bold', color: '#3B414B',lineHeight:24}}>
//           User Profile
//         </Text>
//         <TouchableOpacity
//           onPress={() => {
//             TostMessage();
//             navigation.goBack();
//           }}></TouchableOpacity>
//       </View>
//       <View style={{marginTop: 20, alignItems: 'center'}}>
//         <Image
//           source={require('../../assets/img/profile.png')}
//           style={{width: widthPixel(77), height: heightPixel(77)}}
//         />
//         <View >
//           <Edit style={{position: 'absolute', bottom: 5, left: 32}} />
//         </View>
//       </View>
//       <View
//         style={{
//           marginTop: pixelSizeVertical(24),
//           marginHorizontal: pixelSizeHorizontal(24),
//         }}>
//         <View>
//           <Text
//             style={{
//               color: COLORS.grey,
//               fontSize: fontPixel(14),
//               opacity: 0.5,
//             }}>
//             Full name
//           </Text>
//           <TextInput
//             placeholder="Amanda Chase"
//             placeholderTextColor={COLORS.primary}
//             // defaultValue={name}
//             style={{
//               fontSize: fontPixel(16),
//               borderBottomWidth: 1,
//               borderColor: COLORS.borderCOl,
//               fontFamily: 'OpenSans-SemiBold',
//             }}
//           />
//         </View>
//         <View style={{paddingVertical: 10}}>
//           <Text
//             style={{
//               color: COLORS.grey,
//               fontSize: fontPixel(14),
//               opacity: 0.5,
//             }}>
//             Email address
//           </Text>
//           <TextInput
//             placeholder="amychase@gmail.com"
//             placeholderTextColor={COLORS.primary}
//             // defaultValue={name}
//             style={{
//               fontSize: fontPixel(16),
//               borderBottomWidth: 1,
//               borderColor: COLORS.borderCOl,
//               fontFamily: 'OpenSans-SemiBold',
//             }}
//           />
//         </View>


//         <TouchableOpacity style={styles.touch} onPress={()=>navigation.navigate("ParkingHistory")}>
//           <Text style={styles.next}>Save</Text>
//         </TouchableOpacity>
//       </View>
//     </>
//   );
// };

// export default UserProfile;

// const styles = StyleSheet.create({
//   next: {
//     textAlign: 'center',
//     fontSize: fontPixel(16),
//     color: COLORS.white,
//     fontFamily: 'OpenSans-Bold',
//     lineHeight: 24,
//   },

//   touch: {
//     backgroundColor: COLORS.secondary,
//     paddingHorizontal: pixelSizeHorizontal(20),
//     paddingVertical: pixelSizeVertical(14),
//     borderRadius: 6,
//     marginTop: pixelSizeVertical(41),
//   },
//   container: {
//     flex: 1,
//     padding: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//   },
//   button: {
//     width: 250,
//     height: 60,
//     backgroundColor: '#3740ff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 4,
//     marginBottom: 12,
//   },
//   buttonText: {
//     textAlign: 'center',
//     fontSize: 15,
//     color: '#fff',
//   },
// })


import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import BackIcon from '../../assets/img/setting/leftIcon.svg'
import EditIcon from '../../assets/img/setting/editIcon.svg'
import ButtonWithImg from '../../components/ButtonWithText';
import TickIcon from '../../assets/img/setting/tickIcon.svg'
import axios from 'axios';
import {useSelector} from 'react-redux';
import ImagePickerGetBrower from '../../components/ImagePickerCompon';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditProfile = ({navigation}: any) => {
  const oldEmail = useSelector(
    (state: any) => state.userSlice,
  );

  console.log("dkjashfkljdashn",oldEmail)
  const [name, onChangeName] = useState('');
  const [email, onChangeEmail] = useState('');
  const updateProfile = async () => {
    try {
      const res = await axios.post(
        'http://192.168.50.9:8000/auth/updateProfile',
        {
          newName: name,
          newEmail: email,
          oldEmail: oldEmail,
        },
      );
       await AsyncStorage.removeItem('token');
    navigation.navigate('Login');
    } catch (error) {
      console.log(error, 'error in updating');
    }
  };
  return (
    <View style={styles.parent}>
      <View style={styles.header}>
        <View style={styles.headerChild}>
          <BackIcon />
          <Text style={styles.headerText1}>Settings</Text>
        </View>
        <Text style={styles.headerText}>Edit Profile</Text>
        <View style={{height: 16, width: 76}}></View>
      </View>
      <View style={styles.profileSec}>
        <Image
          style={{height: 120, width: 120, marginTop: 24}}
          source={require('../../assets/img/ProfilePicture.png')}></Image>
        <View style={styles.buttonParent}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SettingScreen')}
            style={styles.button}>
            <EditIcon />
            <ImagePickerGetBrower />
            <Text style={styles.buttonText}>Change Image</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View>
          <Text style={styles.emailLable}>Full Name</Text>
          <TextInput
            onChangeText={onChangeName}
            value={name}
            placeholder="Michael Antonio"
            placeholderTextColor={'#C8C5CB'}
            style={styles.emailInput}></TextInput>
          <Text style={styles.emailLable}>Email Address</Text>
          <TextInput
            onChangeText={onChangeEmail}
            value={email}
            placeholder="anto_michael@gmail.com"
            placeholderTextColor={'#C8C5CB'}
            style={styles.emailInput}></TextInput>
        </View>
        <Text style={styles.text}>
          Changing email address information means you need to re-login to the
          apps.
        </Text>
        <View>
          <ButtonWithImg
            onPress={updateProfile}
            buttonStyle={styles.button1}
            titleStyle={styles.buttonText1}
            title={'Save Changes'}
            Imgg={<TickIcon />}
          />
         
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({

  parent: {
    flex: 1,
    // backgroundColor: 'red',
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
    color: '#180E25',
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
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 24,
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
  buttonParent: {},
  profileSec: {
    display: 'flex',
    alignItems: 'center',
    borderBottomColor: '#EFEEF0',
    borderBottomWidth: 1,
    paddingBottom: 24,
    marginHorizontal: 16,
  },
  emailLable: {
    fontSize: 16,
    lineHeight: 38,
    fontWeight: '500',
    fontFamily: 'Inter-Medium',
    color: '#180E25',
    marginTop: 26,
    marginHorizontal: 16,
  },
  emailInput: {
    color: 'gray',
    borderColor: '#C8C5CB',
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginHorizontal: 16,
  },
  text: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '400',
    fontFamily: 'Inter-Medium',
    color: '#C8C5CB',
    marginTop: 12,
    marginHorizontal: 16,
  },
  buttonText1: {fontSize: 16, lineHeight: 22, color: 'white'},
  button1: {
    backgroundColor: '#613EEA',
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 50,
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginTop: 80,
    marginHorizontal: 16,
  },
});