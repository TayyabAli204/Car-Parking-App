import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, {useEffect} from 'react';
import Slogo from '../../assets/img/splashlogo.svg';
import COLORS from '../../consts/colors';
import {
  fontPixel,
  heightPixel,
  pixelSizeVertical,
} from '../../utils/ResponsiveStyle';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SplashScreen = () => {
  const navigation: any = useNavigation();
  useEffect(() => {
    //  AsyncStorage.clear()
    checkToken();
  }, []);
  const checkToken = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      console.log(value, 'stored token');
      if (value !== null) {
        navigation.navigate('HomeScreen');
      } else {
        const timeout = setTimeout(() => {
          navigation.navigate('OnBoarding');
        }, 2000);
        return () => clearTimeout(timeout);
        console.log(value, 'stored token');
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
