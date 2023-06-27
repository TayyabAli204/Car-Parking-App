
import React, { useEffect } from 'react';
import {  Text, View, Image, StatusBar } from 'react-native';
import Slogo from '../../assets/img/splashlogo.svg';
import { useDispatch } from 'react-redux';
import { setEmail, setName } from '../../store/userSlice';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreenStyles from './style';

const SplashScreen = () => {
  const dispatch = useDispatch();
  const navigation:any = useNavigation();

  useEffect(() => {
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
      <StatusBar translucent backgroundColor={'transparent'} barStyle={'dark-content'} />
      <View style={{ flex: 1 }}>
        <View style={SplashScreenStyles.logoContainer}>
          <Slogo />
          <Text style={SplashScreenStyles.text}>Your no.1 parking assistant</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Image
            source={require('../../assets/img/splashscreen.png')}
            style={SplashScreenStyles.img}
          />
        </View>
      </View>
    </>
  );
};

export default SplashScreen;
