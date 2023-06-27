import {
  StyleSheet,
  TextInput,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
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
import {useDispatch} from 'react-redux';
import {setEmail, setToken} from '../../store/userSlice';
import { replace } from 'formik';
const PhoneNo = () => {
  const [email, setEmails] = useState('');
  const [isRequired, setIsRequired] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loader, setLoader] = useState(false);
  const navigation: any = useNavigation();
  const dispatch = useDispatch();
 
  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return false;
    }
    return true;
  };

  const onChangeText = (text:string) => {
    setEmails(text);
    setErrorMessage('');
  };
 
  const doEmail = async () => {
    if (!validateEmail()) {
      return;
    } else {
      try {
        setLoader(true);
        const response = await axios.post(
          'https://long-jade-wasp-robe.cyclic.app/auth/sendemail',
          {email: email},
        );
        setLoader(false);
        dispatch(setEmail(email));
        dispatch(setToken(response.data.data.token));
        navigation.navigate('VerficationCode');
      } catch (error) {
        console.error(error);
        setErrorMessage("Email Already exits")
      }
    }
  };

  return (
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
        <Text style={styles.phone}>Enter your Email</Text>
        <TextInput
        onChangeText={onChangeText}
        value={email}
        onFocus={() => {
          setIsRequired(false);
        }}
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor={COLORS.grey}
      />
      {isRequired && (
        <Text style={{ color: 'red', fontSize: 12 }}>Email required.</Text>
      )}
      {errorMessage !== '' && (
        <Text style={{ color: 'red' }}>{errorMessage}</Text>
      )}
      <TouchableOpacity style={styles.touch} onPress={doEmail}>
        {!loader ? (
          <Text style={styles.next}>Next</Text>
        ) : (
          <View>
            <ActivityIndicator
              size="small"
              color="#ffffff"
            />
          </View>
        )}
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default PhoneNo;

const styles = StyleSheet.create({
  input: {
    width: widthPixel(343),
    borderColor: COLORS.borderCOl,
    borderBottomWidth: 1,
    fontSize: fontPixel(16),
    fontFamily: 'OpenSans-Regular',
    color: COLORS.grey,
    marginTop: pixelSizeVertical(74),
  },
  next: {
    textAlign: 'center',
    fontSize: fontPixel(16),
    color: COLORS.white,
    fontFamily: 'OpenSans-Bold',
  },

  touch: {
    backgroundColor: COLORS.secondary,
    paddingHorizontal: pixelSizeHorizontal(20),
    paddingVertical: pixelSizeVertical(14),
    borderRadius: 6,
    marginTop: pixelSizeVertical(88),
  },
  phone: {
    color: COLORS.primary,
    fontSize: fontPixel(18),
    fontFamily: 'OpenSans-Regular',
    alignSelf: 'center',
  },
  main: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  main1: {
    alignItems: 'center',
    marginTop: pixelSizeVertical(93),
    marginBottom: pixelSizeVertical(64),
  },

});
