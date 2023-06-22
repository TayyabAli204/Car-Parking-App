import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import COLORS from '../../consts/colors';
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../utils/ResponsiveStyle';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const GetStarted = ({}) => {
  const navigation: any = useNavigation();
  const getStart = async () => {
    try {
      navigation.navigate('Login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <Image
          style={styles.img}
          source={require('../../assets/img/onboard1.png')}
        />
        <Text style={styles.text}>Easy Payment</Text>
        <Text style={styles.text1}>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit{' '}
        </Text>
        <TouchableOpacity onPress={getStart} style={styles.touchText}>
          <Text style={styles.text2}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default GetStarted;

const styles: any = StyleSheet.create({
  text: {
    fontFamily: 'OpenSans-Regular',
    textAlign: 'center',
    fontSize: fontPixel(24),
    color: COLORS.primary,
    letterSpacing: 1,
    paddingTop: pixelSizeVertical(56),
  },
  text1: {
    fontFamily: 'OpenSans-Regular',
    fontSize: fontPixel(18),
    color: COLORS.primary,
    letterSpacing: 1,
    textAlign: 'center',
    paddingHorizontal: pixelSizeHorizontal(64),
    paddingTop: pixelSizeVertical(26),
  },
  img: {
    width: '100%',
    height: heightPixel(232),
    resizeMode: 'center',
  },
  touchText: {
    backgroundColor: COLORS.secondary,
    paddingHorizontal: pixelSizeHorizontal(20),
    paddingVertical: pixelSizeVertical(16),
    marginHorizontal: pixelSizeHorizontal(16),
    borderRadius: 6,
    marginTop: pixelSizeVertical(104),
    marginBottom: pixelSizeVertical(36),
  },
  text2: {
    textAlign: 'center',
    fontSize: fontPixel(16),
    color: COLORS.white,
    fontFamily: 'OpenSans-Bold',
  },
});
