import {
  StyleSheet,
  TextInput,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Alert,
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
const PhoneNo = () => {
  const [text, onChangeText] = useState('');
  const [isRequired, setIsRequired] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigation: any = useNavigation();
  const dispatch = useDispatch();

  const doEmail = async () => {
    if (text.trim() === '') {
      setIsRequired(true);
    } else {
      try {
        const response = await axios.post(
          'https://long-jade-wasp-robe.cyclic.app/auth/sendemail',
          {email: text},
        );
        console.log(response.data.error, 'data from db', );
        dispatch(setEmail(text));
        dispatch(setToken(response.data.data.token));
        // if (response.status === 200) {
        //   // Success case: navigate to the verification code screen or show a success message
       
        // } else {
        //   // Handle other response statuses and show relevant error messages
        //   setErrorMessage('Error: Something went wrong');
        // }
          navigation.navigate('VerficationCode');
        
        
        
      } catch (error) {
        console.error(error);
        setErrorMessage('Error: Failed to connect to the server');
      }

      console.log('Email submitted:', text);
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
          value={text}
          onFocus={() => {
            setIsRequired(false);
          }}
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor={COLORS.grey}  
        />
        {isRequired && (
          <Text style={{color: 'red', fontSize: 12}}>
            Email required.
          </Text>
        )
        }
         {/* Show error message if applicable */}
      {errorMessage !== '' && <Text style={{ color: 'red' }}>{errorMessage}</Text>}
        <TouchableOpacity style={styles.touch} onPress={doEmail}>
          <Text style={styles.next}> Next </Text>
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
    lineHeight: 24,
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