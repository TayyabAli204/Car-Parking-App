import {
  StyleSheet,
  TextInput,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import Slogo from '../../assets/img/splashlogo.svg';
import COLORS from '../../consts/colors';
import {
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
  widthPixel,
  heightPixel,
} from '../../utils/ResponsiveStyle';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {useSelector} from 'react-redux';

const VerficationCode = () => {
  const navigation: any = useNavigation();
  const [otp, onChangeOtp] = useState('');
  const [isRequired, setIsRequired] = useState(false);
  const [otpValid, setOtpValid] = useState(false);

  const selector = useSelector((state: any) => state.userSlice.email);
  const token = useSelector((state: any) => state.userSlice.token);
  console.log('selector', selector, 'token', token, 'otp', otp);

  const handleOPT = async () => {
    // if (otp.trim() === '') {
    //   setIsRequired(true);
    //   // return;
    // }
    if (otp.toString() === token.toString()) {
      navigation.navigate('Password');
      // return;
    } else {
      setOtpValid(true);
    }
  };

  return (
    <>
      <View style={styles.main}>
        <View style={styles.main1}>
          <Slogo width={widthPixel(88)} height={heightPixel(60)} />
        </View>
        <StatusBar
          translucent
          backgroundColor={'transparent'}
          barStyle={'dark-content'}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.phone}>Enter verification code</Text>
          <View style={styles.inputV}>
            <TextInput
              style={styles.input}
              value={otp}
              onChangeText={onChangeOtp}
              maxLength={4}
              keyboardType="numeric"
              onFocus={() => {
                setIsRequired(false);
              }}
            />
          </View>
          {isRequired && (
            <Text
              style={{
                color: COLORS.secondary,
                fontSize: 12,
                textAlign: 'center',
              }}>
              Email is required.
            </Text>
          )}
          {otpValid && (
            <Text
              style={{
                color: COLORS.secondary,
                fontSize: 12,
                textAlign: 'center',
              }}>
              This is not a valid code{' '}
            </Text>
          )}
          <View style={styles.resend}>
            <Text style={styles.or}>Didn’t receive code? </Text>
            <Text style={styles.signup}>Resend</Text>
          </View>

          <TouchableOpacity style={styles.touch} onPress={handleOPT}>
            <Text style={styles.next}>Next</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
};

export default VerficationCode;

const styles = StyleSheet.create({
  input: {
    width: widthPixel(100),
    borderColor: COLORS.borderCOl,
    borderBottomWidth: 1,
    fontSize: fontPixel(40),
    fontFamily: 'OpenSans-Regular',
    color: COLORS.grey,
    marginTop: pixelSizeVertical(74),
  },
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
    marginTop: pixelSizeVertical(31),
    width: widthPixel(342),
  },
  phone: {
    color: COLORS.primary,
    fontSize: fontPixel(18),
    fontFamily: 'OpenSans-Regular',
    alignSelf: 'center',
  },
  signup: {
    fontSize: fontPixel(16),
    fontFamily: 'OpenSans-Regular',
    color: COLORS.secondary,
  },
  or: {
    fontSize: fontPixel(16),
    fontFamily: 'OpenSans-Regular',
    color: COLORS.grey,
  },
  main: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  main1: {
    alignItems: 'center',
    marginTop: pixelSizeVertical(93),
    marginBottom: pixelSizeVertical(64),
  },
  inputV: {flexDirection: 'row', gap: 22, justifyContent: 'center'},
  resend: {
    flexDirection: 'row',
    gap: 5,
    marginTop: pixelSizeVertical(41),
    alignSelf: 'center',
  },
});
