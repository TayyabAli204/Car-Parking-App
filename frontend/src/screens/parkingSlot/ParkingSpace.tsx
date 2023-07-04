import {Text, View, TouchableOpacity, StatusBar, Alert} from 'react-native';
import React, {useEffect} from 'react';
import axios from 'axios';
import {
  setParkingSlotData,
  setSelectedSpot,
} from '../../store/parkingSlotSlice';
import MenuSearchBar from '../../components/MenuSearchBar';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './style';
import CustomButton from '../../components/CustomButton';
import CarIcon from '../../components/CarIcon';
import {useNavigation} from '@react-navigation/native';
const ParkingSpace = () => {
  const navigation: any = useNavigation();
  const dispatch = useDispatch();
  const {parkingSlots, selectedArea, selectedSpot} = useSelector(
    (state: any) => state.parkingSlotSlice,
  );

  console.log("parkingSlots parkingSlotsparkingSlots",parkingSlots)

  // const firstPerHourFee = parkingSlots[0].perHourFee;

  // const firstPerHourFee= parkingSlots.map((slot:any)=>slot.perHourFee)
  // // const hello= firstPerHourFee.forEach(fee => {
  // //   console.log(fee);
  // // });
  // // console.log(firstPerHourFee);
  console.log(selectedArea, 'selectedArea from home screen');
  useEffect(() => {
    async function getSlotsData() {
      const {data} = await axios.get(
        `https://long-jade-wasp-robe.cyclic.app/parkingSlot/data/${selectedArea}`,
      );
      console.log(data);
      dispatch(setParkingSlotData(data.data));
    }
    getSlotsData();
  }, []);

  function navigateToBookSpace() {
    if (Object.keys(selectedSpot).length == 0) {
      Alert.alert('Kindly select an spot');
    } else {
      navigation.navigate('BookSpace');
    }
  }
  return (
    <>
      <StatusBar
        translucent={false}
        backgroundColor={'white'}
        barStyle={'dark-content'}
      />
      <View style={styles.mainspace}>
        <MenuSearchBar
          title="Galleria، E Canal Rd, سعید کالونی Nasar Ullah Khan Town, فیصل آباد, ضلع فیصل آباد, پنجاب 38000, Pakistan"
         
        />

        <View>
          <Text style={styles.selCar}>Select preferred space</Text>
        </View>
        <View style={styles.selRender}>
          {parkingSlots.map((item: any, index: any) => {
            // {console.log(selectedArea)}

            return (
              <TouchableOpacity
                key={index}
                onPress={() => dispatch(setSelectedSpot(item))}>
                <Text style={{textAlign: 'center', color: 'black'}}>
                  {item.parkingLotName}
                </Text>
                <View
                  style={{
                    backgroundColor: '#613EEA',
                  }}>
                  {
                    <CarIcon
                      color={
                        item.booked || item._id == selectedSpot._id
                          ? 'green'
                          : 'white'
                      }
                    />
                  }
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        <CustomButton
          title={'Continue'}
          titleStyle={styles.title}
          buttonStyle={styles.button}
          onPress={navigateToBookSpace}
        />
      </View>
    </>
  );
};

export default ParkingSpace;
