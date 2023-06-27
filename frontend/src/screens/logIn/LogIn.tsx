import {
  TextInput,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import Slogo from '../../assets/img/splashlogo.svg';
import COLORS from '../../consts/colors';
import axios from 'axios';
import {widthPixel, heightPixel} from '../../utils/ResponsiveStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setEmail, setToken, setName} from '../../store/userSlice';
import {styles} from './style';

const LogIn = ({}) => {
  const navigation: any = useNavigation();
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [isRequiredEmail, setIsRequiredEmail] = useState(false);
  const [isRequiredPassword, setIsRequiredPassword] = useState(false);
  const [loader, setLoader] = useState(false);

  const dispatch = useDispatch();

  const doLogin = async () => {
    const validateEmail = () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      console.log(emailRegex.test(email));
      return emailRegex.test(email);
    };
    const validatePassword = () => {
      return password.length >= 6;
    };

    if (!validateEmail()) {
      setIsRequiredEmail(true);
    } else if (!validatePassword()) {
      setIsRequiredPassword(true);
    } else {
      try {
        setLoader(true);
        console.log(email, password, 'state ma set data');
        const response = await axios.post(
          'https://long-jade-wasp-robe.cyclic.app/auth/login',
          {email: email, password: password},
        );
        setLoader(false);
        // console.log(response.data, 'data from db');
        // console.log(response.data.data.email, 'email from db');

        dispatch(setEmail(response.data.data.email));
        dispatch(setToken(response.data.data.token));
        if (response.data.data.name) {
          dispatch(setName(response.data.data.name));
        } else {
          dispatch(setName(''));
        }

        await AsyncStorage.setItem('token', response.data.data.token);
        await AsyncStorage.setItem('userName', response.data.data.name);
        await AsyncStorage.setItem('userEmail', response.data.data.email);
        console.log('Token stored successfully');

        ToastAndroid.show('User SuccessFully Login', ToastAndroid.TOP);
        navigation.navigate('Taps');
      } catch (error) {
        ToastAndroid.show('Invalid email or password', ToastAndroid.TOP);
        setLoader(false);
      }
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.sec}>
        <Slogo width={widthPixel(119)} height={heightPixel(80)} />
      </View>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <TextInput
            onChangeText={onChangeEmail}
            value={email}
            style={styles.input}
            placeholder="Enter email"
            placeholderTextColor={COLORS.grey}
            onFocus={() => {
              setIsRequiredEmail(false);
            }}
            onBlur={() => {
              setIsRequiredEmail(false);
            }}
          />

          {isRequiredEmail && (
            <Text style={{color: 'red', fontSize: 12}}>Enter Valid Email</Text>
          )}
          <TextInput
            onChangeText={onChangePassword}
            value={password}
            style={styles.passWord_input}
            placeholder="Password"
            placeholderTextColor={COLORS.grey}
            secureTextEntry
            onFocus={() => {
              setIsRequiredPassword(false);
            }}
            onBlur={() => {
              setIsRequiredPassword(false);
            }}
          />
          {isRequiredPassword && (
            <Text style={{color: 'red', fontSize: 12}}>
              Enter 6 Ch Password
            </Text>
          )}
          <Text style={styles.forget}>Forgot Password?</Text>
          <TouchableOpacity style={styles.sec1} onPress={doLogin}>
            {!loader ? (
              <Text style={styles.sec2}>Login</Text>
            ) : (
              <View>
                <ActivityIndicator size="small" color="#ffffff" />
              </View>
            )}
          </TouchableOpacity>
          <View style={styles.sec3}>
            <Text style={styles.or}>or</Text>
            <Text
              style={styles.signup}
              onPress={() => navigation.navigate('PhoneNoSignup')}>
              Signup
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default LogIn;
