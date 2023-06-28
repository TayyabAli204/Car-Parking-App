import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  Pressable,
  Modal,
  Switch,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from './style';
import BackIcon from '../../assets/img/setting/leftIcon.svg';
import EditIcon from '../../assets/img/setting/editIcon.svg';
import MailIcon from '../../assets/img/setting/mailIcon.svg';
import LockIcon from '../../assets/img/setting/leftIcon.svg';
import Notification from '../../assets/img/setting/notificationIcon.svg';
import LogoutIcon from '../../assets/img/setting/logoutIcon.svg';
import RightIcon from '../../assets/img/setting/rightIcon.svg';
import Cross from '../../assets/img/setting/crossIcon.svg';
import CustomButton from '../../components/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {useSelector} from 'react-redux';
const Settings = ({navigation}: any) => {
  const userName = useSelector((state: any) => state.userSlice.name);
  const userEmail = useSelector((state: any) => state.userSlice.email);
  const userImage = useSelector((state: any) => state.userSlice.image);

  const [logoutModal, setLogoutModal] = useState(false);
  const [notificationModal, setNotificationModal] = useState(false);
  const [isEnabled1, setIsEnabled1] = useState(true);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const logout = async () => {
    await AsyncStorage.removeItem('userName')
      .then(() => console.log('del ho gya name'))
      .catch(() => {
        console.log('error aa gya name ma');
      });
    await AsyncStorage.removeItem('token')
      .then(() => console.log('del ho gya token'))
      .catch(() => {
        console.log('error aa gya token ma');
      });
    await AsyncStorage.removeItem('userEmail')
      .then(() => console.log('del ho gya email'))
      .catch(() => {
        console.log('error aa gya email ma');
      });

    navigation.navigate('Login');
  };

  return (
    <View style={styles.parent}>
      <View style={styles.header}>
        <View style={styles.headerChild}>
          <BackIcon />
          <Text style={styles.headerText1}>Back</Text>
        </View>
        <Text style={styles.headerText}>Settings</Text>
        <View style={{height: 16, width: 60}}></View>
      </View>
      <View style={styles.header1}>
        <Image
          resizeMode="cover"
          resizeMethod="scale"
          style={styles.image}
          source={
            userImage?.uri
              ? {uri: userImage?.uri}
              : require('../../assets/img/ProfilePicture.png')
          }
        />
        <View style={styles.headerChild1}>
          <Text style={styles.headerText2}>
            {userName === '' ? 'Michel' : userName}
          </Text>
          <View style={styles.changeEmail}>
            <MailIcon />
            <Text style={styles.headerText3}>
              {userEmail === '' ? 'anto_michael@gmail.com' : userEmail}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonParent}>
        <TouchableOpacity
          onPress={() => navigation.navigate('UserProfile')}
          style={styles.button}>
          <EditIcon />
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <Text style={[styles.appSetting, {marginBottom: 8}]}>APP SETTINGS</Text>
      <View style={styles.change}>
        <View style={styles.listParent}>
          <Pressable
            onPress={() => navigation.navigate('ChangePassword')}
            style={styles.listContent}>
            <LockIcon />
            <Text style={styles.listText}>Change Password</Text>
          </Pressable>
          <RightIcon />
        </View>
        <View style={[styles.listParent, {marginBottom: 8}]}>
          <Pressable
            onPress={() => setNotificationModal(true)}
            style={styles.listContent}>
            <Notification />
            <Text style={styles.listText}>Notifications</Text>
          </Pressable>
          <Text style={styles.listSideText}>All active</Text>
        </View>
      </View>

      <View style={[styles.listParent, {marginTop: 8, marginHorizontal: 16}]}>
        <View style={styles.listContent}>
          <LogoutIcon />
          <TouchableOpacity onPress={() => setLogoutModal(true)}>
            <Text style={styles.listText1}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal visible={logoutModal} animationType="slide" transparent={true}>
        <View style={styles.logoutModal}>
          <View style={styles.logoutout}>
            <Text style={styles.logout}>Log Out</Text>
            <Text style={styles.logoutText}>
              Are you sure you want to log out from the application?
            </Text>
            <View style={styles.cancel}>
              <CustomButton
                titleStyle={{color: '#6A3EA1'}}
                onPress={() => setLogoutModal(false)}
                title={'Cancel'}
                buttonStyle={styles.modelButton}
              />
              <CustomButton
                onPress={logout}
                title={'Yes'}
                buttonStyle={styles.modelButton1}
                titleStyle={{color: '#ffffff'}}
              />
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        visible={notificationModal}
        transparent={true}
        animationType="slide">
        <View style={styles.pushNotiu}>
          <View style={styles.pushNotiii}>
            <View style={{alignItems: 'flex-end'}}>
              <TouchableOpacity onPress={() => setNotificationModal(false)}>
                <Text style={styles.pushNotii}>
                  <Cross />
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.emailNoti}>
              <Text style={styles.notificationText}>Email Notifications</Text>
              <Switch
                trackColor={{false: '#767577', true: '#EFE9F7'}}
                thumbColor={isEnabled1 ? '#6A3EA1' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch1}
                value={isEnabled1}
              />
            </View>
            <View style={styles.pushNoti}>
              <Text style={styles.notificationText}>Push Notifications</Text>
              <Switch
                trackColor={{false: '#767577', true: '#EFE9F7'}}
                thumbColor={isEnabled ? '#6A3EA1' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Settings;
