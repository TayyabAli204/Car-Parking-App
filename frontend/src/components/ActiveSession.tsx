import {StyleSheet, Text, View} from 'react-native';
import moment from 'moment';
import React from 'react';
import {
  pixelSizeHorizontal,
  pixelSizeVertical,
  fontPixel,
  heightPixel,
  widthPixel,
} from '../utils/ResponsiveStyle';
import COLORS from '../consts/colors';
const ActiveSession = ({data}: any) => {
  var entryTime: any = data.entryTime;
  const estimateReservationHours = data.totalParkingTime;
  const entryMoment = moment(entryTime, 'dddd, M/D/YYYY h:mm A');
  const checkOutMoment = entryMoment
    .clone()
    .add(estimateReservationHours, 'hours');
  const checkOutTimeFormatted = checkOutMoment.format('hh:mm A');
  return (
    <>
      <View style={styles.hello1}>
        <View style={styles.hello2}>
          <View style={styles.hello3}>
            <Text style={styles.hello4}>{'N' + data.perHourFee}</Text>
          </View>

          <View style={{paddingTop:5,width: widthPixel(200)}}>
            <Text style={styles.hello5}>{data.location}</Text>
          </View>
          <Text style={styles.hello6}>{data.parkingLotName}</Text>
        </View>
        <View style={styles.hello7}></View>
        <View style={styles.hello8}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.hello9}>Check-Out Time</Text>
            <Text style={styles.hello10}>{checkOutTimeFormatted}</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.hello9}>Check-in Time</Text>
            <Text style={styles.hello10}>{data.entryTime}</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.hello9}>Estimate Hours</Text>
            <Text style={styles.hello10}>
              {' '}
              {data.totalParkingTime + 'hours'}{' '}
            </Text>
          </View>
          
        </View>
      </View>
    </>
  );
};

export default ActiveSession;

const styles = StyleSheet.create({
  hello1: {
    backgroundColor: 'white',
    width: '100%',
    marginTop: 11,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flex: 0.6,
  },
  hello2: {
    flexDirection: 'row',
    justifyContent:"space-around"
  },
  hello3: {
    backgroundColor: COLORS.secondary,
    borderRadius: 6,
    marginVertical: 12,
    alignSelf:'center'
  },
  hello4: {
    color: 'white',
    fontSize: fontPixel(16),
    fontFamily: 'OpenSans-Bold',
    padding: 6,
  },
  hello5: {
    color: COLORS.grey,
    fontSize: fontPixel(14),
    fontFamily: 'OpenSans-SemiBold',
    alignSelf:'center',
    
  },
  hello6: {
    color: COLORS.lightBlue,
    fontSize: fontPixel(16),
    fontFamily: 'OpenSans-SemiBold',
    alignSelf:'center'
  },
  hello7: {
    borderWidth: 1,
    borderColor: COLORS.grey,
    opacity: 0.4,
    marginHorizontal: pixelSizeHorizontal(15),
  },
  hello8: {
    flexDirection: 'column',

    marginHorizontal: pixelSizeHorizontal(15),
    paddingVertical: 8,
  },
  hello9: {
    fontSize: fontPixel(15),
    color: COLORS.grey,
    fontFamily: 'OpenSans-Regular',
  },
  hello10: {
    fontSize: fontPixel(12),
    color: COLORS.grey,
    fontFamily: 'OpenSans-Bold',
  },
});
