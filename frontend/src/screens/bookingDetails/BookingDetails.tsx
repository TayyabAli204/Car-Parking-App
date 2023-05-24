import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import MenuSearchBar from '../../components/MenuSearchBar';
import {useSelector} from 'react-redux';
import {fontPixel,pixelSizeVertical,pixelSizeHorizontal} from '../../utils/ResponsiveStyle';
import COLORS from '../../consts/colors';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
const BookingDetails = () => {
  const navigation :any = useNavigation();
  const {selectedSpot, selectedArea, } = useSelector(
    (state: any) => state.parkingSlotSlice,
  );
  console.log('selectedArea detailsascreen', selectedArea);

  console.log('selectedSpot detailsascreen', selectedSpot);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar
        translucent={false}
        backgroundColor={'white'}
        barStyle={'dark-content'}
      />
      <MenuSearchBar
        MenuSearchBarStyle={styles.mainspace}
        title={selectedArea}
        titleSlotName={selectedSpot.parkingLotName}

      />
      <View>
        <View style={styles.detailsModel}>
          <Text
            style={styles.textdetail}>
            Booking Details
          </Text>
          <View style={styles.detailHR}></View>
          <View
            style={styles.yaha}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 13,
              }}>
              <Text style={styles.CHECKINTIMEDATA}>Booked Space: </Text>
              <Text style={styles.CHECKINTIMETEXT}>
                {selectedArea} {selectedSpot.parkingLotName}
              </Text>
            </View>
            <View style={styles.detailHR}></View>
          </View>
          <View
            style={styles.detailModel}>
            <View
              style={styles.CHECKINTIME}>
              <Text style={styles.CHECKINTIMETEXT}>Check-in Time: </Text>
              <Text style={styles.CHECKINTIMEDATA}>{selectedSpot.entryTime}</Text>
            </View>
            <View
              style={styles.CHECKINTIME}>
              <Text style={styles.CHECKINTIMETEXT}>Estimate Duration : </Text>
              <Text style={styles.CHECKINTIMEDATA}>{selectedSpot.totalParkingTime + ' hours'} </Text>
            </View>
            <View
              style={styles.CHECKINTIME}>
              <Text style={styles.CHECKINTIMETEXT}>Unique ID: </Text>
              <Text style={styles.CHECKINTIMEDATA}>{selectedSpot._id} </Text>
            </View>
          </View>
          <View style={styles.detailHR}></View>
          <View
            style={styles.TOTALFEE}>
            <Text style={styles.CHECKINTIMETOAL}>Total </Text>
            <Text style={styles.CHECKINTIMETOAL}>{"N"+selectedSpot.perHourFee} </Text>
          </View>
        </View>
        <CustomButton
          title={'Pay up'}
          titleStyle={styles.title}
          onPress={()=>{navigation.navigate("MakePayment")}}
        />
      </View>
    </View>
  );
};

export default BookingDetails;

const styles = StyleSheet.create({
  detailsModel: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 2,
    // padding: 35,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  mainspace: {
    backgroundColor: 'white',
    paddingTop: 33,
    paddingHorizontal: 16,
  },
  detailHR: {
    borderWidth: 0.3,
    borderColor: COLORS.grey,
    marginHorizontal: 14,
    marginTop: 10,
  },
  textdetail:{
    color: COLORS.black,
    textAlign: 'center',
    paddingTop: 11,
    fontSize: fontPixel(18),
    fontFamily: 'OpenSans-SemiBold',
  },
  yaha:{
    paddingVertical: 17,
  },
  detailModel:{
    paddingVertical: 17,
    paddingHorizontal: 13,
    gap: 14,
    flexDirection: 'column',
  },
 CHECKINTIME :{flexDirection: 'row', justifyContent: 'space-between'},
 TOTALFEE:{
  flexDirection: 'row',
  justifyContent: 'space-around',
  paddingVertical: 20,
},
CHECKINTIMETEXT:{
  color:COLORS.primary,
  fontSize:fontPixel(16),
  fontFamily:"OpenSans-Regular"
  
},
CHECKINTIMEDATA:{
  color:COLORS.primary,
  fontSize:fontPixel(16),
  fontFamily:"OpenSans-SemiBold"
},
CHECKINTIMETOAL:{
  color:COLORS.primary,
  fontSize:fontPixel(24),
  fontFamily:"OpenSans-SemiBold"
},
title: {
  backgroundColor: COLORS.secondary,
  marginTop: pixelSizeVertical(24),
  marginHorizontal: pixelSizeHorizontal(20),
  paddingVertical: pixelSizeVertical(14),
  textAlign: 'center',
  fontSize: fontPixel(20),
  color: COLORS.white,
  fontFamily: 'OpenSans-Bold',
  borderRadius:6
},
});
