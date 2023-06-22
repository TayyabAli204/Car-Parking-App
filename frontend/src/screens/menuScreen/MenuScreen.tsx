import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import Close from '../../assets/img/close.svg';
import Menu from '../../assets/img/menu.svg';
import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
  heightPixel,
} from '../../utils/ResponsiveStyle';
import PaymentMethod from '../../assets/img/menuicon/ic-outline-payment.svg';
import ParkingIcon from '../../assets/img/menuicon/ic-round-history.svg';
import PromotionCode from '../../assets/img/menuicon/ps-promo.svg';
import HowItWork from '../../assets/img/menuicon/octicon-info.svg';
import SupportIcon from '../../assets/img/menuicon/simple-line-icons_support.svg';
import SettingIcon from '../../assets/img/menuicon/feather-settings.svg';
import LogOut from '../../assets/img/menuicon/ls-logout.svg';
import COLORS from '../../consts/colors';

const MenuScreen = () => {
  const [first, setfirst] = useState(false);
  return (
    <View style={{flex: 1}}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <View style={styles.menu1}>
        <TouchableOpacity onPress={() => setfirst(!first)}>
          {first ? (
            <Menu width={widthPixel(25)} height={heightPixel(22)} />
          ) : (
            <Close width={widthPixel(47)} height={heightPixel(47)} />
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.menu2}>
        <Image
          source={require('../../assets/img/profile.png')}
          style={{width: widthPixel(77), height: heightPixel(77)}}
        />
        <View>
          <Text style={styles.menu3}>Amanda Chase</Text>
        </View>
      </View>

      <View style={styles.menu4}>
        <View style={styles.menu5}>
          <PaymentMethod width={widthPixel(24)} height={heightPixel(24)} />
          <Text style={styles.menu6}>Payment methods</Text>
        </View>
        <View style={styles.menu7}>
          <ParkingIcon width={widthPixel(24)} height={heightPixel(24)} />
          <Text style={styles.menu8}>Parking History</Text>
        </View>

        <View style={styles.menu9}>
          <PromotionCode width={widthPixel(24)} height={heightPixel(24)} />
          <Text style={styles.menu10}>Promotion code</Text>
        </View>

        <View style={styles.menu11}>
          <HowItWork width={widthPixel(20)} height={heightPixel(22)} />
          <Text style={styles.menu12}>How it works</Text>
        </View>
        <View style={styles.menu13}>
          <SupportIcon width={widthPixel(20)} height={heightPixel(20)} />
          <Text style={styles.menu14}>Support</Text>
        </View>

        <View style={styles.menu15}>
          <SettingIcon width={widthPixel(20)} height={heightPixel(20)} />
          <Text style={styles.menu16}>Settings</Text>
        </View>
        <View style={styles.menu17}>
          <LogOut width={widthPixel(22)} height={heightPixel(22)} />
          <Text style={styles.menu18}>Logout</Text>
        </View>
      </View>
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  menu1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 14,
    marginTop: 53,
  },
  menu2: {
    marginTop: 28,
    alignItems: 'flex-start',
    marginLeft: pixelSizeHorizontal(21),
    flex: 0.4,
  },
  menu3: {
    fontSize: fontPixel(18),
    fontFamily: 'OpenSans-Bold',
    color: '#3B414B',
    paddingTop: pixelSizeVertical(11),
  },
  menu4: {
    flex: 2,
    marginTop: pixelSizeVertical(61),
    marginLeft: pixelSizeHorizontal(16),
    flexDirection: 'column',
  },
  menu5: {flexDirection: 'row', gap: 10, alignItems: 'center'},
  menu6: {
    color: COLORS.primary,
    fontSize: fontPixel(16),
    fontFamily: 'OpenSans-SemiBold',
  },
  menu7: {flexDirection: 'row', gap: 10, alignItems: 'center', marginTop: 16},
  menu8: {
    color: COLORS.primary,
    fontSize: fontPixel(16),
    fontFamily: 'OpenSans-SemiBold',
  },
  menu9: {flexDirection: 'row', gap: 10, alignItems: 'center', marginTop: 16},
  menu10: {
    color: COLORS.primary,
    fontSize: fontPixel(16),
    fontFamily: 'OpenSans-SemiBold',
  },
  menu11: {flexDirection: 'row', gap: 10, alignItems: 'center', marginTop: 40},
  menu12: {
    color: COLORS.primary,
    fontSize: fontPixel(16),
    fontFamily: 'OpenSans-SemiBold',
  },
  menu13: {flexDirection: 'row', gap: 10, alignItems: 'center', marginTop: 16},
  menu14: {
    color: COLORS.primary,
    fontSize: fontPixel(16),
    fontFamily: 'OpenSans-SemiBold',
  },
  menu15: {flexDirection: 'row', gap: 10, alignItems: 'center', marginTop: 16},
  menu16: {
    color: COLORS.primary,
    fontSize: fontPixel(16),
    fontFamily: 'OpenSans-SemiBold',
  },
  menu17: {flexDirection: 'row', gap: 10, alignItems: 'center', marginTop: 120},
  menu18: {
    color: COLORS.primary,
    fontSize: fontPixel(16),
    fontFamily: 'OpenSans-SemiBold',
  },
});
