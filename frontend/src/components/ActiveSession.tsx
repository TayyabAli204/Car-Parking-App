import {StyleSheet, Text, View} from 'react-native';
import moment from 'moment';
import React from 'react';
import {
  pixelSizeHorizontal,
  pixelSizeVertical,
  fontPixel,
  heightPixel,
} from '../utils/ResponsiveStyle';
import COLORS from '../consts/colors';
const ActiveSession = ({data}: any) => {
  var entryTime: any = data.entryTime;
  const estimateReservationHours = data.totalParkingTime;
  const bookingTime = data.BookedTime; // Format: "hh:mm A"

  // Parse the entry time and booking time
  const entryMoment = moment(entryTime, 'dddd, M/D/YYYY h:mm A');
  const bookingMoment = moment(bookingTime, 'hh:mm A');

  // Calculate the check-out time by adding the estimated reservation hours and booking time
  const checkOutMoment = entryMoment
    .clone()
    .add(estimateReservationHours, 'hours')
    // .set({
    //   hour: entryMoment.hour(),
    //   minute: entryMoment.minute(),
    //   second: 0,
    //   millisecond: 0,
    // });
console.log(checkOutMoment)
  // Format the check-out time as desired
  const checkOutTimeFormatted = checkOutMoment.format('h:mm A');

  // console.log(checkOutTimeFormatted);

  return (
    <>
      <View style={styles.hello1}>
        <View style={styles.hello2}>
          <View style={styles.hello3}>
            <Text style={styles.hello4}>{'N' + data.perHourFee}</Text>
          </View>
          <View style={{marginTop: 9, marginRight: 23}}>
            <Text style={styles.hello5}>{data.location}</Text>
            <Text style={styles.hello6}>{data.parkingLotName}</Text>
          </View>
        </View>
        <View style={styles.hello7}></View>
        <View style={styles.hello8}>
          <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
            <Text style={styles.hello9}>Check-Out Time</Text>
            <Text style={styles.hello10}>{checkOutTimeFormatted}</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
            <Text style={styles.hello9}>Check-in Time</Text>
            <Text style={styles.hello10}>{data.entryTime}</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
            <Text style={styles.hello9}>Estimate Hours</Text>
            <Text style={styles.hello10}> {data.totalParkingTime + 'hours'} </Text>
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
    // height: heightPixel(105),
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flex: 0.6,
  },
  hello2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: pixelSizeHorizontal(13),
  },
  hello3: {
    backgroundColor: COLORS.secondary,
    borderRadius: 6,
    marginVertical: 12,
  },
  hello4: {
    color: 'white',
    fontSize: fontPixel(16),
    fontFamily: 'OpenSans-Bold',
    padding: 5,
  },
  hello5: {
    color: COLORS.grey,
    fontSize: fontPixel(14),
    fontFamily: 'OpenSans-SemiBold',
  },
  hello6: {
    color: COLORS.lightBlue,
    alignSelf: 'flex-end',
    fontSize: fontPixel(16),
    fontFamily: 'OpenSans-SemiBold',
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
    fontSize: fontPixel(14),
    color: COLORS.grey,
    fontFamily: 'OpenSans-Regular',
  },
  hello10: {
    fontSize: fontPixel(12),
    color: COLORS.grey,
    fontFamily: 'OpenSans-Bold',
  },
});
