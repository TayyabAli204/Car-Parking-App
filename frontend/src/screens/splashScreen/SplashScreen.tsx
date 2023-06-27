import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
} from 'react-native';
import React, {useEffect} from 'react';
import Slogo from '../../assets/img/splashlogo.svg';
import COLORS from '../../consts/colors';
import { useDispatch } from 'react-redux';
import { setEmail,setName } from '../../store/userSlice';
import {
  fontPixel,
  heightPixel,
  pixelSizeVertical,
} from '../../utils/ResponsiveStyle';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SplashScreen = () => {
  const dispatch=useDispatch()
  const navigation: any = useNavigation();
  useEffect(() => {
    //  AsyncStorage.clear()
    checkToken();
  }, []);
  const checkToken = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      const userName = await AsyncStorage.getItem('userName');
      const userEmail = await AsyncStorage.getItem('userEmail');
      console.log(value, 'stored token');
      if (value !== null) {
        navigation.navigate('Taps');
        dispatch(setEmail(userEmail));
        // dispatch(setToken(response.data.data.token));
        if (userName) {
          dispatch(setName(userName));
        } else {
          dispatch(setName(''));

        }
      } else {
        const timeout = setTimeout(() => {
          navigation.navigate('OnBoarding');
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } catch (e) {
      console.log(e, 'error');
    }
  };
  return (
    <>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <View style={{flex: 1}}>
        <View
          style={{flex: 1.8, justifyContent: 'center', alignItems: 'center'}}>
          <Slogo />
          <Text style={styles.text}>Your no.1 parking assistant</Text>
        </View>
        <View style={{flex: 1}}>
          <Image
            source={require('../../assets/img/splashscreen.png')}
            style={styles.img}
          />
        </View>
      </View>
    </>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'OpenSans-Regular',
    fontSize: fontPixel(18),
    color: COLORS.primary,
    letterSpacing: 1,
    paddingTop: pixelSizeVertical(54),
  },
  img: {
    width: '100%',
    height: heightPixel(290),
  },
});
