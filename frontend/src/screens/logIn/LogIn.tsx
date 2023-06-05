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
import axios from 'axios';
import {
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
  widthPixel,
  heightPixel,
} from '../../utils/ResponsiveStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const LogIn = ({}) => {
  const navigation: any = useNavigation();
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [isRequiredEmail,setIsRequiredEmail] = useState(false);
  const [isRequiredPassword,setIsRequiredPassword] = useState(false);



  const doLogin = async () => {
    const validateEmail = () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      console.log(emailRegex.test(email))
      return emailRegex.test(email);
    };
    const validatePassword = () => {
      // Password validation logic
      // Return true if password is valid, false otherwise
      return password.length >= 6; // Example: Password must be at least 6 characters long
    };

  
    
  if(!validateEmail()){
      setIsRequiredEmail(true);

    } else if(!validatePassword()){
      setIsRequiredPassword(true)
    } 
    else{
      try {
        console.log(email, password, 'state ma set data');
        const response = await axios.post('http://10.62.33.127:8000/auth/login',{email: email, password: password});
        console.log(response.data, 'data from db');
        await AsyncStorage.setItem('token', response.data.data.token);
        navigation.navigate('HomeScreen');
      } catch (error) {
        console.error(error);
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
            onFocus={()=>{
              setIsRequiredEmail(false)
            }}
            onBlur={()=>{
              setIsRequiredEmail(false)
            }}
            
          />
       
          {
            isRequiredEmail && (
              <Text style={{color: 'red', fontSize: 12}}>
           Enter Valid Email 
          </Text>
            )
          }
          <TextInput
            onChangeText={onChangePassword}
            value={password}  
            style={styles.passWord_input}
            placeholder="Password"
            placeholderTextColor={COLORS.grey}
            secureTextEntry
            onFocus={()=>{
              setIsRequiredPassword(false)
            }} 
            onBlur={()=>{
              setIsRequiredPassword(false)
            }} 
          />
          {
            isRequiredPassword && (
              <Text style={{color: 'red', fontSize: 12}}>
            Enter 6 Ch Password
          </Text>
            )
          }
          <Text style={styles.forget}>Forgot Password?</Text>
          <TouchableOpacity onPress={doLogin} style={styles.sec1}>
            <Text style={styles.sec2}>Login</Text>
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

const styles = StyleSheet.create({
  input: {
    width: widthPixel(343),
    borderColor: COLORS.borderCOl,
    borderBottomWidth: 1,
    fontSize: fontPixel(16),
    fontFamily: 'OpenSans-Regular',
    color: COLORS.grey,
  },
  passWord_input: {
    fontSize: fontPixel(16),
    width: widthPixel(343),
    borderColor: COLORS.borderCOl,
    borderBottomWidth: 1,
    marginTop: pixelSizeVertical(44),
    marginBottom: pixelSizeVertical(18),
    fontFamily: 'OpenSans-Regular',
    color:COLORS.grey
  },
  forget: {
    fontSize: fontPixel(16),
    fontFamily: 'OpenSans-Regular',
    textAlign: 'right',
    color: COLORS.secondary,
    marginTop: pixelSizeVertical(22),
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
  main: {flex: 1, marginHorizontal: pixelSizeHorizontal(16)},
  sec: {
    alignItems: 'center',
    marginTop: pixelSizeVertical(147),
    marginBottom: pixelSizeVertical(135),
  },
  sec1: {
    backgroundColor: COLORS.secondary,
    paddingHorizontal: pixelSizeHorizontal(20),
    paddingVertical: pixelSizeVertical(14),
    borderRadius: 6,
    marginTop: pixelSizeVertical(62),
    marginBottom: pixelSizeVertical(40),
  },
  sec2: {
    textAlign: 'center',
    fontSize: fontPixel(16),
    color: COLORS.white,
    fontFamily: 'OpenSans-Bold',
    lineHeight: 24,
  },
  sec3: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
