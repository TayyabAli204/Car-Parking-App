
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
import React, {useState} from 'react';
import BackIcon from '../../assets/img/setting/leftIcon.svg'
import EditIcon from '../../assets/img/setting/editIcon.svg'
import MailIcon from '../../assets/img/setting/mailIcon.svg'
import LockIcon from '../../assets/img/setting/leftIcon.svg'
import Notification from '../../assets/img/setting/notificationIcon.svg'
import LogoutIcon from '../../assets/img/setting/logoutIcon.svg'
import RightIcon from '../../assets/img/setting/rightIcon.svg'
import Cross from '../../assets/img/setting/crossIcon.svg'
import CustomButton from '../../components/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import COLORS from '../../consts/colors';
const Settings = ({navigation}: any) => {
  const [logoutModal, setLogoutModal] = useState(false);
  const [notificationModal, setNotificationModal] = useState(false);
  const [isEnabled1, setIsEnabled1] = useState(true);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const logout = async () => {
    const logOut = await AsyncStorage.removeItem('token');
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
          style={{height: 64, width: 64}}
          source={require('../../assets/img/ProfilePicture.png')}></Image>
        <View style={styles.headerChild1}>
          <Text style={styles.headerText2}>Michael Antonio</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 9,
            }}>
            <MailIcon />
            <Text style={styles.headerText3}>anto_michael@gmail.com</Text>
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
      <View
        style={{
          marginHorizontal: 16,
          borderBottomColor: '#EFEEF0',
          borderBottomWidth: 1,
        }}>
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
          <View
            style={{
              backgroundColor: 'white',
              display: 'flex',
              alignItems: 'center',
              borderRadius: 20,
            }}>
            <Text style={styles.logout}>Log Out</Text>
            <Text style={styles.logoutText}>
              Are you sure you want to log out from the application?
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: 48,
                marginBottom: 32,
                gap: 16,
              }}>
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
              />
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        visible={notificationModal}
        transparent={true}
        animationType="slide">
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              display: 'flex',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}>
            <View style={{alignItems: 'flex-end'}}>
              <TouchableOpacity onPress={() => setNotificationModal(false)}>
                <Text
                  style={{
                    backgroundColor: '#EFEEF0',
                    borderRadius: 50,
                    padding: 8,
                    marginRight: 16,
                    marginTop: 16,
                  }}>
                  <Cross />
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 24,
                alignItems: 'center',
                marginTop: 24,
              }}>
              <Text style={styles.notificationText}>Email Notifications</Text>
              <Switch
                trackColor={{false: '#767577', true: '#EFE9F7'}}
                thumbColor={isEnabled1 ? '#6A3EA1' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch1}
                value={isEnabled1}
              />
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 24,
                alignItems: 'center',
                marginTop: 34,
                marginBottom: 16,
              }}>
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

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 23,
    borderBottomWidth: 1,
    borderBottomColor: '#EFEEF0',
  },
  headerText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    fontFamily: 'Inter-Medium',
  },
  headerText1: {
    color: COLORS.lightBlue,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    fontFamily: 'Inter-Medium',
  },
  headerChild: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  header1: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginTop: 24,
    gap: 16,
  },
  headerChild1: {
    display: 'flex',
    justifyContent: 'center',
    gap: 8,
  },
  headerText2: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 28,
    fontFamily: 'Inter-Medium',
  },
  headerText3: {
    color: '#827D89',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 15,
    fontFamily: 'Inter-Medium',
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
    gap: 10,
    paddingVertical: 8,
    borderColor: '#613EEA',
    borderWidth: 1,
    borderRadius: 25,
  },
  buttonText: {
    color: '#613EEA',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    fontFamily: 'Inter-Medium',
  },
  buttonParent: {
    borderBottomColor: '#EFEEF0',
    borderBottomWidth: 1,
    paddingBottom: 24,
    marginHorizontal: 16,
  },
  appSetting: {
    color: '#827D89',
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 12,
    fontFamily: 'Inter-Regular',
    marginLeft: 16,
    marginTop: 24,
  },
  listParent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    alignItems: 'center',
    paddingVertical: 17,
  },
  listContent: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  listText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    fontFamily: 'Inter-Regular',
  },
  listText1: {
    color: '#CE3A54',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    fontFamily: 'Inter-Regular',
  },
  listSideText: {
    color: '#827D89',
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 14,
    fontFamily: 'Inter-Regular',
  },
  logoutModal: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: 20,

    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  logout: {
    color: '#180E25',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 28,
    fontFamily: 'Inter-Bold',
    marginTop: 32,
  },
  logoutText: {
    color: '#827D89',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    fontFamily: 'Inter-Regular',
    marginTop: 8,
    textAlign: 'center',
    paddingHorizontal: 24,
  },
  modelButton: {
    borderRadius: 25,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 27,
    borderColor: '#6A3EA1',
  },
  modelButton1: {
    borderRadius: 25,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderColor: '#6A3EA1',
    backgroundColor: '#6A3EA1',
  },
  notificationText: {
    color: '#180E25',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    fontFamily: 'Inter-Medium',
    marginTop: 8,
  },
});


