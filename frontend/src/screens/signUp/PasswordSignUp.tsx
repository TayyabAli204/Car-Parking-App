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
import AsyncStorage from '@react-native-async-storage/async-storage';

const Password = () => {
  const navigation: any = useNavigation();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const selector = useSelector((state: any) => state.userSlice.email);

  const handlePasswordChange = (value: any) => {
    setPassword(value);
    setPasswordError('');
  };

  const handleConfirmPasswordChange = (value: any) => {
    setConfirmPassword(value);
    setConfirmPasswordError('');
  };

  const handleValidation = () => {
    let isValid = true;

    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      isValid = false;
    }

    if (confirmPassword !== password) {
      setConfirmPasswordError('Passwords do not match');
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async () => {
    if (handleValidation()) {
      // Password and confirm password are valid, perform further actions
      // ...
      console.log(password,selector)
      const response:any = await axios.post(
        'http://192.168.50.9:8000/auth/signup',
        {password: password, email: selector},
      );
      await AsyncStorage.setItem('token', response.data.data.token);
      navigation.navigate('HomeScreen');
    }
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          alignItems: 'center',
          marginTop: pixelSizeVertical(93),
          marginBottom: pixelSizeVertical(64),
        }}>
        <Slogo width={widthPixel(88)} height={heightPixel(60)} />
      </View>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.phone}>Enter your password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={handlePasswordChange}
          secureTextEntry={true}
          placeholderTextColor={COLORS.grey}
        />
        {passwordError ? (
          <Text style={{color: 'red'}}>{passwordError}</Text>
        ) : null}
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={handleConfirmPasswordChange}
          secureTextEntry={true}
          placeholderTextColor={COLORS.grey}

        />
        {confirmPasswordError ? (
          <Text style={{color: 'red'}}>{confirmPasswordError}</Text>
        ) : null}

        <TouchableOpacity style={styles.touch} onPress={handleSubmit}>
          <Text style={styles.next}> Create Account </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Password;

const styles = StyleSheet.create({
  input: {
    width: widthPixel(343),
    borderColor: COLORS.borderCOl,
    borderBottomWidth: 1,
    fontSize: fontPixel(16),
    fontFamily: 'OpenSans-Regular',
    color: COLORS.grey,
    marginTop: pixelSizeVertical(31),
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
    marginTop: pixelSizeVertical(41),
  },
  phone: {
    color: COLORS.primary,
    fontSize: fontPixel(18),
    fontFamily: 'OpenSans-Regular',
    alignSelf: 'center',
  },
});
