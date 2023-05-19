import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import MenuSearchBar from '../../components/MenuSearchBar';
import {useSelector} from 'react-redux';
const BookingDetails = () => {
  const {selectedSpot, selectedArea} = useSelector(
    (state: any) => state.parkingSlotSlice,
  );
  return (
    <View style={{flex:1 , backgroundColor:'white'}}>
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
          <Text style={{color:"black",textAlign:'center',paddingTop:11}}>Booking Details</Text>
          <View style={{paddingTop:17,paddingHorizontal:13,gap:14,paddingBottom:22}}>
            <Text style={{color:"black"}}>Check-in Time:</Text>
            <Text style={{color:"black"}}> Check-out Time (Est):</Text>
          </View>
        </View>
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
});
