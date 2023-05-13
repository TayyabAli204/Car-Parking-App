import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Close from '../../assets/img/close.svg';
import Menu from '../../assets/img/menu.svg';
import Profile from '../../assets/img/profile_photo.svg';
import Notification from '../../assets/img/notifications.svg';
import Account from '../../assets/img/Account.svg';
import Language from '../../assets/img/language.svg';
import TermOfUse from '../../assets/img/terms_of_use.svg';
import PrivacyPolicy from '../../assets/img/privacy_policy.svg';
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '../../utils/ResponsiveStyle';
import COLORS from '../../consts/colors';

const Setting = () => {
  const [first, setfirst] = useState(false);
  return (
    <View style={{flex: 1}}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <View style={styles.hi1}>
        <TouchableOpacity onPress={() => setfirst(!first)}>
          {first ? <Close width={widthPixel(47)} height={heightPixel(47)}/> : <Menu width={widthPixel(25)} height={heightPixel(22)}/>}
        </TouchableOpacity>
        <Text style={styles.hi2}>Settings</Text>
        <Profile width={widthPixel(32)} height={heightPixel(32)}/>
      </View>
      <View style={styles.mainsetting}>
        <View style={styles.settingBox}>
          <Notification width={widthPixel(40)} height={heightPixel(40)} />
          <Text style={styles.boxText}>Notifications</Text>
        </View>
        <View style={styles.settingBox}>
          <Account width={widthPixel(40)} height={heightPixel(40)} />
          <Text style={styles.boxText}>Account</Text>
        </View>
        <View style={styles.settingBox}>
          <Language width={widthPixel(40)} height={heightPixel(40)} />
          <Text style={styles.boxText}>Language</Text>
        </View>
        <View style={styles.settingBox}>
          <TermOfUse width={widthPixel(40)} height={heightPixel(40)} />
          <Text style={styles.boxText}>Terms of Use</Text>
        </View>
        <View style={styles.settingBox}>
          <PrivacyPolicy width={widthPixel(40)} height={heightPixel(40)} />
          <Text style={styles.boxText}>Privacy Policy</Text>
        </View>
      </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  hi1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    marginTop: 53,
  },
  hi2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3B414B',
    fontFamily: 'OpenSans-Bold',
  },
  mainsetting: {
    flexWrap: 'wrap',
    flex: 1,
    marginTop: pixelSizeVertical(52),
    marginHorizontal: pixelSizeHorizontal(16),
    flexDirection: 'row',
    gap: 15,
  },
  settingBox: {
    backgroundColor: 'white',
    height: heightPixel(140),
    width: '47%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: 22,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  boxText: {
    color: COLORS.primary,
    fontSize: fontPixel(14),
    fontFamily: 'OpenSans-Medium',
    textAlign: 'center',
  },
});
