import {StyleSheet, Text, View, TouchableOpacity, StatusBar} from 'react-native';
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
      console.log('data',res.data)
      dispatch(setParkingSlotData(res.data.data));
    }
    getSlotsData();
  },[]);
  return (
    <>
   <StatusBar translucent={false}
        backgroundColor={'white'}
        barStyle={'dark-content'}/>
    <View style={styles.mainspace}>
      <Menu />
      <View
        style={styles.miansearch}>
        <View
          style={styles.mainouter}>
          <Text style={styles.stext}>Lekki Gardens Car Park A</Text>
          <View style={styles.stext1}>
          <Text style={styles.stext2}>N200</Text> 
          <Text >/Hr</Text>
          </View>
        </View>
      </View>
      <View >
      <Text style={styles.selCar}>Select preferred space</Text>
      </View>
      <View
        style={styles.selRender}>
          
        {/* {slotsData.map((item:any,index:any) => {
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
        })} */}
      </View>
      
    <CustomButton title={'Continue'}  titleStyle={styles.title} buttonStyle={styles.button} onPress={()=>{}}/>

    </View>
    </>
  );
};

export default ParkingSpace;

const styles = StyleSheet.create({
  button:{
  paddingTop:pixelSizeVertical(50)
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
    lineHeight:24
  },
  mainspace:{flex: 1, backgroundColor: 'white',paddingTop:33,paddingHorizontal: 16},
  miansearch:{
    elevation: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: pixelSizeVertical(29),
    marginBottom:pixelSizeVertical(20)
  },
  mainouter :{
    flexDirection: 'row',
    paddingHorizontal: 11,
    paddingVertical: 20,
    gap:10
  },
  stext:{fontSize:fontPixel(18),fontFamily:'OpenSans-SemiBold'},
  stext1:{flexDirection:'row',alignItems:'center'},
  stext2:{fontSize:fontPixel(18),fontFamily:'OpenSans-Bold'},
  selCar:{textAlign:"center",paddingBottom:14,fontSize:fontPixel(16),fontFamily:"OpenSans-Regular"},
  selRender:{
    flex: 0.55,
    backgroundColor: 'white',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical:20
  }
});
