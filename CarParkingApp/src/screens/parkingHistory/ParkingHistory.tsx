import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  Image,
  TextInput,
  StatusBar,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';
import Close from '../../assets/img/close.svg';
import Menu from '../../assets/img/menu.svg';
import Profile from '../../assets/img/profile_photo.svg';
import {useNavigation} from '@react-navigation/native';
import COLORS from '../../consts/colors';
import CompletedSessions from '../../components/CompletedSessions';
import ActiveSession from '../../components/ActiveSession';
import GreenIcon from '../../assets/img/emojione-check-mark-button.svg';
import StarIcon from '../../assets/img/Star.svg';

import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
  heightPixel
} from '../../utils/ResponsiveStyle';
import {useState} from 'react';

const ParkingHistory = () => {
  const {navigation, route}: any = useNavigation;
  const [first, setfirst] = useState(false);
  const [resourcePath, setResourcePath] = useState({});

  return (
    <View style={{flex: 1}}>
      <StatusBar translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}/>
      <ScrollView>
        <View style={styles.hi1}>
          <TouchableOpacity onPress={() => setfirst(!first)}>
            {first ? <Close width={widthPixel(47)} height={heightPixel(47)}/> : <Menu width={widthPixel(25)} height={heightPixel(22)}/>}
          </TouchableOpacity>
          <Text style={styles.hi2}>History</Text>
          <Profile width={widthPixel(32)} height={heightPixel(32)}/>
        </View>
        <View style={styles.hi3}>
          <Text style={styles.hi4}>Active Session</Text>
          <ActiveSession />
        </View>

        <View style={styles.hi5}>
          <View style={styles.hel1}>
            <Text style={styles.hel2}>Completed Sessions</Text>
            <Text style={styles.hel3}>View all</Text>
          </View>
          <CompletedSessions Icon={<GreenIcon />} />
          <CompletedSessions Icon={<GreenIcon />} />
        </View>

        <View style={styles.hi6}>
          <View style={styles.hi7}>
            <Text style={styles.hi8}>Reserved Spots</Text>
            <Text style={styles.hi9}>View all</Text>
          </View>
          <CompletedSessions Icon={<StarIcon />} />
        </View>
        <TouchableOpacity style={styles.touch} >
          <Text style={styles.next}>Go Back to Home Screen</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ParkingHistory;

const styles = StyleSheet.create({
  next: {
    textAlign: 'center',
    fontSize: fontPixel(16),
    color: COLORS.white,
    fontFamily: 'OpenSans-Bold',
    lineHeight: 24,
    paddingHorizontal: pixelSizeHorizontal(20),
    paddingVertical: pixelSizeVertical(14),
  },

  touch: {
    backgroundColor: COLORS.secondary,
    borderRadius: 6,
    marginTop: pixelSizeVertical(24),
    marginHorizontal: pixelSizeHorizontal(16),
    marginBottom: pixelSizeVertical(43),
  },
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  button: {
    width: 250,
    height: 60,
    backgroundColor: '#3740ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom: 12,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff',
  },
  hi1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    marginTop: 53,
  },
  hi2: {fontSize: 16, fontWeight: 'bold', color: '#3B414B',fontFamily:'OpenSans-Bold'},
  hi3: {
    marginTop: pixelSizeVertical(29),
    alignItems: 'baseline',
    flex: 0,
    paddingHorizontal: pixelSizeHorizontal(16),
  },
  hi4: {
    marginHorizontal: pixelSizeHorizontal(29),
    color: COLORS.grey,
    fontSize: fontPixel(16),
    fontFamily: 'OpenSans-SemiBold',
  },
  hi5: {
    flex: 0,
    marginTop: pixelSizeVertical(24),
    paddingHorizontal: pixelSizeHorizontal(16),
  },
  hi6: {
    marginTop: pixelSizeVertical(20),
    flex: 1,
    alignItems: 'baseline',
    paddingHorizontal: pixelSizeHorizontal(16),
  },
  hi7: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  hi8: {
    color: COLORS.grey,
    fontSize: fontPixel(16),
    fontFamily: 'OpenSans-SemiBold',
  },
  hi9: {
    color: COLORS.secondary,
    fontSize: fontPixel(15),
    fontFamily: 'OpenSans-SemiBold',
  },
  hel1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hel2: {
    color: COLORS.grey,
    fontSize: fontPixel(16),
    fontFamily: 'OpenSans-SemiBold',
  },
  hel3: {
    color: COLORS.secondary,
    fontSize: fontPixel(15),
    fontFamily: 'OpenSans-SemiBold',
  },
});
