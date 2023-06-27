import {StyleSheet, Text, View, ScrollView, TextInput,ActivityIndicator } from 'react-native';
import React, {useState} from 'react';
import BackIcon from '../../assets/img/setting/leftIcon.svg'
import RightArrow from '../../assets/img/setting/whiteIcon.svg'
import ButtonWithImg from '../../components/ButtonWithText';
import axios from 'axios';
import{styles} from './Styles'
import {useSelector} from 'react-redux';
const ChangePassword = ({navigation}: any) => {
  const storeEmail = useSelector(
    (state: any) => state.userSlice.email,
  );

  const [password, onChangePassword] = useState('');
  const [confirmPassword, onChangeConfirmPassword] = useState('');
  const [error, setError] = useState(false);
  const [currentPassword, onChangeCurrentPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const NewPasswordHandler = async () => {
    console.log(storeEmail, 'store ma se email'); 
    if (password === confirmPassword) {
      try {
        setLoading(true); 
        const res = await axios.post(
          'https://long-jade-wasp-robe.cyclic.app/auth/newPassword',
          {
            email: storeEmail,
            password: password,
            currentPassword: currentPassword,
          },
        );
        console.log(res.data);
        navigation.navigate('Login'), setMsg(res.data.data.message);
      } catch (error) {
        
      }finally{
       setLoading(false)
      }
    } else {
      setError(true);
      // setMsg(res.data.data.message);
    }
  };
  return (
    <View style={{backgroundColor:'white',flex:1}}>
      <View style={styles.header}>
        <View style={styles.headerChild}>
          <BackIcon />
          <Text style={styles.headerText1}>Back</Text>
        </View>
        <Text style={styles.headerText}>ChangePassword</Text>
        <View style={{height: 16, width: 56}}></View>
      </View>
      <ScrollView>
        <Text style={styles.headerTitle}>
          Please input your current password first
        </Text>
        <View style={{paddingHorizontal: 16}}>
          <Text style={styles.emailLable}>Current Password</Text>
          <TextInput
            onChangeText={onChangeCurrentPassword}
            value={currentPassword}
            placeholder="********"
            secureTextEntry
            placeholderTextColor={'#C8C5CB'}
            style={styles.emailInput}></TextInput>
        </View>
        <Text style={styles.headerTitle1}>Now, create your new password</Text>
        <View style={{paddingHorizontal: 16}}>
          <Text style={styles.emailLable}>New Password</Text>
          <TextInput
            onChangeText={onChangePassword}
            value={password}
            placeholder="********"
            secureTextEntry
            placeholderTextColor={'#C8C5CB'}
            style={styles.emailInput}></TextInput>
          <Text style={styles.inputTitle}>
            Password should contain a-z, A-Z, 0-9
          </Text>
          <Text style={styles.emailLable}>Retype New Password</Text>
          <TextInput
            onChangeText={onChangeConfirmPassword}
            value={confirmPassword}
            placeholder="*********"
            secureTextEntry
            placeholderTextColor={'#C8C5CB'}
            style={styles.emailInput}></TextInput>
          {error ? (
            <Text style={{color: 'red'}}>Match the password</Text>
          ) : null}
          <Text style={{color: 'red'}}>{msg}</Text>
          <ButtonWithImg
            onPress={NewPasswordHandler}
            buttonStyle={styles.button}
            titleStyle={styles.text}
            title={loading ? <ActivityIndicator color="white" /> : 'Submit New Password'}
  Imgg={<RightArrow />}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ChangePassword;
