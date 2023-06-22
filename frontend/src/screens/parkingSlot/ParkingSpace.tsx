import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';
import React, {useEffect} from 'react';
import axios from 'axios';
import Cars from '../../assets/img/ic-round-directions-car.svg'; 
import {
  setParkingSlotData,
  setSelectedSpot,
} from '../../store/parkingSlotSlice';
import MenuSearchBar from '../../components/MenuSearchBar';
import {useDispatch, useSelector} from 'react-redux';
import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../utils/ResponsiveStyle';
import COLORS from '../../consts/colors';
import CustomButton from '../../components/CustomButton';
import Menu from '../../components/MenuButton';
import CarIcon from '../../components/CarIcon';
import {useNavigation} from '@react-navigation/native';
const ParkingSpace = () => {
  const navigation: any = useNavigation();
  const dispatch = useDispatch();
  const {parkingSlots, selectedArea, selectedSpot} = useSelector(
    (state: any) => state.parkingSlotSlice,
  );
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
          title={selectedArea}
          titleSlotName={ "N" + parkingSlots[0].perHourFee}
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

const styles = StyleSheet.create({
  button: {
    paddingTop: pixelSizeVertical(40),
    
  },
  title: {
    backgroundColor: COLORS.secondary,
    marginTop: pixelSizeVertical(24),
    paddingHorizontal: pixelSizeHorizontal(20),
    paddingVertical: pixelSizeVertical(14),
    textAlign: 'center',
    fontSize: fontPixel(16),
    color: COLORS.white,
    fontFamily: 'OpenSans-Bold',
    lineHeight: 24,
    borderRadius:6
  },
  mainspace: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 33,
    paddingHorizontal: 16,
  },
  miansearch: {
    elevation: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: pixelSizeVertical(29),
    marginBottom: pixelSizeVertical(20),
  },
  mainouter: {
    flexDirection: 'row',
    paddingHorizontal: 11,
    paddingVertical: 20,
    gap: 10,
  },
  stext: {fontSize: fontPixel(18), fontFamily: 'OpenSans-SemiBold'},
  stext1: {flexDirection: 'row', alignItems: 'center'},
  stext2: {fontSize: fontPixel(18), fontFamily: 'OpenSans-Bold'},
  selCar: {
    textAlign: 'center',
    paddingBottom: 14,
    color: COLORS.primary,
    fontSize: fontPixel(20),
    fontFamily: 'OpenSans-Regular',
  },
  selRender: {
    flex: 0.9,
    backgroundColor: 'white',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
});
