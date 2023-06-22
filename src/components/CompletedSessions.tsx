import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import moment from 'moment';
import {
  pixelSizeHorizontal,
  fontPixel,
  heightPixel,
} from '../utils/ResponsiveStyle';
import COLORS from '../consts/colors';
const CompletedSessions = ({Icon,data}: any) => {
  console.log("data,",data)
  var entryTime: any = data?.entryTime;
  const estimateReservationHours = data?.totalParkingTime;
  const entryMoment = moment(entryTime, "dddd, M/D/YYYY h:mm A");  
  const entryMomentFormatted = entryMoment.format("MM/DD/YYYY");
  const checkOutMoment:any = entryMoment
    .clone()
    .add(estimateReservationHours, 'hours');  
  const checkOutTimeFormatted:any = checkOutMoment.format("hh:mm A");

  
  return (
    <>
     
        <View style={styles.jello}>
          <View style={styles.jello1}>
            <View style={{marginVertical: 9}}>{Icon}</View>
            <View style={{marginTop: 9, marginRight: 23}}>
              <Text style={styles.jello2}>{data?.location}</Text>
              <Text style={styles.jello4}>{data?.parkingLotName}</Text>
            </View>
          </View>
          <View style={styles.jello6}></View>
          <View style={styles.jello5}>
            <Text style={styles.jello7}>{entryMomentFormatted}</Text>
            <Text style={styles.jello8}>{checkOutTimeFormatted}</Text>
            <Text style={styles.jello9}>{'N' + data?.perHourFee}</Text>
          </View>
        </View>
      
    </>
  );
};

export default CompletedSessions;

const styles = StyleSheet.create({
  jello: {
    backgroundColor: 'white',
    width: '100%',
    marginTop: 11,
    height: heightPixel(100),
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  jello1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: pixelSizeHorizontal(13),
  },
  jello2: {
    color: COLORS.grey,
    fontSize: fontPixel(16),
    fontFamily: 'OpenSans-SemiBold',
    
  },
  jello4: {
    color: COLORS.grey,
    alignSelf: 'flex-end',
    fontSize: fontPixel(14),
    fontFamily: 'OpenSans-SemiBold',
  },
  jello5: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: pixelSizeHorizontal(15),
    marginTop: 9,
  },
  jello6: {
    borderWidth: 1,
    borderColor: COLORS.grey,
    opacity: 0.4,
    marginHorizontal: pixelSizeHorizontal(15),
  },
  jello7: {
    fontSize: fontPixel(14),
    color: COLORS.grey,
    fontFamily: 'OpenSans-Regular',
  },
  jello8: {
    fontSize: fontPixel(14),
    color: COLORS.grey,
    fontFamily: 'OpenSans-Regular',
  },
  jello9: {
    fontSize: fontPixel(14),
    color: COLORS.grey,
    fontFamily: 'OpenSans-Bold',
  },
});
