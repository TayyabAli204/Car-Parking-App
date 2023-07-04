import { Text, View, StatusBar} from 'react-native';
import React from 'react';
import MenuSearchBar from '../../components/MenuSearchBar';
import {useSelector} from 'react-redux';
import { styles } from './style';
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
                flexWrap:'wrap'
              }}>
              <Text style={styles.CHECKINTIMEDATA}>Booked Space: </Text>
              <Text style={styles.CHECKINTIMETEXT}>
                {selectedArea} 
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


