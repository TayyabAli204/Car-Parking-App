import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  Image,
  TextInput,
  StatusBar,
  StyleSheet,
  Pressable,
} from 'react-native';
import Close from '../../assets/img/close.svg';
import Menu from '../../assets/img/menu.svg';
import {useNavigation} from '@react-navigation/native';
import Edit from '../../assets/img/fa-regular_edit.svg';
import COLORS from '../../consts/colors';
import ImagePicker from 'react-native-image-picker';

import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
  heightPixel
} from '../../utils/ResponsiveStyle';
import {useState} from 'react';

const UserProfile = () => {
  const navigation:any = useNavigation();
  const [first, setfirst] = useState(false);
  const [resourcePath, setResourcePath] = useState({});

  
  const TostMessage = () => {
    ToastAndroid.show('Edited Sucessfully !', ToastAndroid.SHORT);
  };
  return (
    <>
      <StatusBar translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}/>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 24,
          marginTop: 73,
        }}>
        <TouchableOpacity onPress={() => setfirst(!first)}>
          {first ? <Close width={widthPixel(47)} height={heightPixel(47)}/> : <Menu width={widthPixel(25)} height={heightPixel(22)} onPress={()=>navigation.navigate("MenuScreen")} />}
        </TouchableOpacity>
        <Text style={{fontSize: fontPixel(18), fontFamily:'OpenSans-Bold', color: '#3B414B',lineHeight:24}}>
          User Profile
        </Text>
        <TouchableOpacity
          onPress={() => {
            TostMessage();
            navigation.goBack();
          }}></TouchableOpacity>
      </View>
      <View style={{marginTop: 20, alignItems: 'center'}}>
        <Image
          source={require('../../assets/img/profile.png')}
          style={{width: widthPixel(77), height: heightPixel(77)}}
        />
        <View >
          <Edit style={{position: 'absolute', bottom: 5, left: 32}} />
        </View>
      </View>
      <View
        style={{
          marginTop: pixelSizeVertical(24),
          marginHorizontal: pixelSizeHorizontal(24),
        }}>
        <View>
          <Text
            style={{
              color: COLORS.grey,
              fontSize: fontPixel(14),
              opacity: 0.5,
            }}>
            Full name
          </Text>
          <TextInput
            placeholder="Amanda Chase"
            placeholderTextColor={COLORS.primary}
            // defaultValue={name}
            style={{
              fontSize: fontPixel(16),
              borderBottomWidth: 1,
              borderColor: COLORS.borderCOl,
              fontFamily: 'OpenSans-SemiBold',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text
            style={{
              color: COLORS.grey,
              fontSize: fontPixel(14),
              opacity: 0.5,
            }}>
            Email address
          </Text>
          <TextInput
            placeholder="amychase@gmail.com"
            placeholderTextColor={COLORS.primary}
            // defaultValue={name}
            style={{
              fontSize: fontPixel(16),
              borderBottomWidth: 1,
              borderColor: COLORS.borderCOl,
              fontFamily: 'OpenSans-SemiBold',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text
            style={{
              color: COLORS.grey,
              fontSize: fontPixel(14),
              opacity: 0.5,
            }}>
            Phone number
          </Text>
          <TextInput
            placeholder="09033421159"
            placeholderTextColor={COLORS.primary}
            // defaultValue={name}
            style={{
              fontSize: fontPixel(16),
              borderBottomWidth: 1,
              borderColor: COLORS.borderCOl,
              fontFamily: 'OpenSans-SemiBold',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text
            style={{
              color: COLORS.grey,
              fontSize: fontPixel(14),
              opacity: 0.5,
            }}>
            Password
          </Text>
          <TextInput
            placeholder="09033421159"
            placeholderTextColor={COLORS.primary}
            // defaultValue={name}
            style={{
              fontSize: fontPixel(16),
              borderBottomWidth: 1,
              borderColor: COLORS.borderCOl,
              fontFamily: 'OpenSans-SemiBold',
            }}
          />
        </View>
        <TouchableOpacity style={styles.touch} onPress={()=>navigation.navigate("ParkingHistory")}>
          <Text style={styles.next}>Save</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  next: {
    textAlign: 'center',
    fontSize: fontPixel(16),
    color: COLORS.white,
    fontFamily: 'OpenSans-Bold',
    lineHeight: 24,
  },

  touch: {
    backgroundColor: COLORS.secondary,
    paddingHorizontal: pixelSizeHorizontal(20),
    paddingVertical: pixelSizeVertical(14),
    borderRadius: 6,
    marginTop: pixelSizeVertical(41),
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
})
