import {Image, StatusBar} from 'react-native';
import React from 'react';
import COLORS from '../../consts/colors';
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '../../utils/ResponsiveStyle';
import Onboarding from 'react-native-onboarding-swiper';
import {useNavigation} from '@react-navigation/native';
const Boarding = () => {
  const navigation: any = useNavigation();
  const onNavigate = () => {
    navigation.navigate('GetStart');
  };
  return (
    <>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <Onboarding
        onDone={onNavigate}
        onSkip={onNavigate}
        pages={[
          {
            backgroundColor: '#fff',
            image: (
              <Image
                source={require('../../assets/img/onboardingg.png')}
                style={{
                  width: '100%',
                  height: heightPixel(241),
                  resizeMode: 'stretch',
                }}
              />
            ),
            title: 'Best Parking Spots',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            titleStyles: {
              fontFamily: 'OpenSans-SemiBold',
              fontSize: fontPixel(24),
              color: COLORS.primary,
              letterSpacing: 2,
            },
            subTitleStyles: {
              fontFamily: 'OpenSans-Regular',
              fontSize: fontPixel(18),
              color: COLORS.primary,
              letterSpacing: 1,
              textAlign: 'center',
              paddingHorizontal: pixelSizeHorizontal(20),
              paddingTop: pixelSizeVertical(26),
            },
          },
          {
            backgroundColor: '#fff',
            image: (
              <Image
                source={require('../../assets/img/onboard.png')}
                style={{width: widthPixel(254), height: heightPixel(284)}}
              />
            ),
            title: 'Quick Navigation',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          },
        ]}
      />
    </>
  );
};

export default Boarding;
