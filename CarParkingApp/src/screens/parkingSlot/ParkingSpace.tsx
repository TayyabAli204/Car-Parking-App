import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useEffect} from 'react';
import axios from 'axios';
import Cars from '../../assets/img/ic-round-directions-car.svg';
import {setParkingSlotData, bookSlot} from '../../store/parkingSlotSlice';
import {useDispatch, useSelector} from 'react-redux';
import { fontPixel,pixelSizeHorizontal,pixelSizeVertical } from '../../utils/ResponsiveStyle';
import COLORS from '../../consts/colors';
import CustomButton from '../../components/CustomButton';
import Menu from '../../components/MenuButton'
const ParkingSpace = () => {
  const dispatch = useDispatch();
  const slotsData = useSelector(
    (state: any) => state.parkingSlotSlice.parkingSlots,
  );
  // console.log("slotsData",slotsData)
  useEffect(() => {
    async function getSlotsData() {
      const res = await axios.get('http://192.168.50.2:8000/parkingSlot/data');
      // console.log('data',res.data)
      dispatch(setParkingSlotData(res.data.data));
    }
    getSlotsData();
  },[]);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Menu/>
      <View
        style={{
          elevation: 5,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 16,
          marginVertical: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 11,
            paddingVertical: 19,
          }}>
          <Text>Lekki Gardens Car Park A</Text>
          <Text>N200/Hr</Text>
        </View>
      </View>
      <View style={{ }}>
      <Text style={{textAlign:"center",paddingBottom:14}}>Select preferred space</Text>

      </View>
      <View
        style={{
          flex: 0.55,
          backgroundColor: 'white',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 20,
          marginHorizontal: 16,
          elevation: 10,
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical:20
        }}>
          
        {slotsData.map((item:any,index:any) => {
          return (
            <TouchableOpacity key={index} onPress={() => dispatch(bookSlot(item))}>
              <View
                
                style={{
                  backgroundColor: '#613EEA',
                }}>
                <Cars width={70} height={70} />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      
    <CustomButton title={'Continue'}  titleStyle={styles.title} onPress={()=>{}}/>

    </View>
  );
};

export default ParkingSpace;

const styles = StyleSheet.create({
  

  title: {
    backgroundColor: COLORS.secondary,
    marginTop: pixelSizeVertical(24),
    marginHorizontal: pixelSizeHorizontal(16),
    paddingHorizontal: pixelSizeHorizontal(20),
    paddingVertical: pixelSizeVertical(14),
    textAlign: 'center',
    fontSize: fontPixel(16),
    color: COLORS.white,
    fontFamily: 'OpenSans-Bold',
  },
});
