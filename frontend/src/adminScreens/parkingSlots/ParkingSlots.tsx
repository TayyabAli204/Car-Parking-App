import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Modal from 'react-native-modal';
import {getSlotsDataAsync} from '../../store/adminSlice';
import COLORS from '../../consts/colors';
import axios from 'axios';
const ParkingSlots = () => {
  const {showLoader, parkingSlots} = useSelector(
    (state: any) => state.adminSlice,
  );
  const dispatch: any = useDispatch();
  console.log(parkingSlots, 'parkingSlots');
  useEffect(() => {
    dispatch(getSlotsDataAsync());
  }, []);
  return (
    <ScrollView style={{backgroundColor: 'red'}}>
      {
        <Modal isVisible={showLoader}>
          <ActivityIndicator
            size={'large'}
            color={COLORS.white}></ActivityIndicator>
        </Modal>
      }
      <Text>ParkingSlots</Text>
      {parkingSlots?.map((item: any, index: number) => (
        <View style={styles.container} key={index}>
          <Text style={styles.heading}>Location</Text>
          <Text style={styles.text}>Location: {item.location}</Text>
          <Text style={styles.text}>
            Parking Lot Name: {item.parkingLotName}
          </Text>
          <Text style={styles.text}>
            Parking Space Number: {item.parkingSpaceNumber}
          </Text>
          <Text style={styles.text}>Entry Time: {item.entryTime}</Text>
          <Text style={styles.text}>Booked Time: {item.bookedTime}</Text>
          <Text style={styles.text}>
            Status: {item.booked ? 'Booked' : 'Not Booked'}
          </Text>
          <Text style={styles.text}>User Name: {item.userName}</Text>
          <Text style={styles.text}>Per Hour Fee: {item.perHourFee}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default ParkingSlots;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: COLORS.white,
    padding: 10,
    marginBottom: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 5,
  },
  text: {
    color: COLORS.primary,
    marginBottom: 3,
  },
});
