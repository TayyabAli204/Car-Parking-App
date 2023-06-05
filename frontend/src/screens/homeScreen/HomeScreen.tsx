import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  FlatList,
  Pressable,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import React from 'react';
import axios from 'axios';
import MenuSearchBar from '../../components/MenuSearchBar';
import {useDispatch, useSelector} from 'react-redux';
import {
  setParkingSlotData,
  setSelectedArea,
} from '../../store/parkingSlotSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AvailLocation from '../../assets/img/homeimg/gridicons-location.svg';
import COLORS from '../../consts/colors';
const HomeScreen = ({navigation}: any) => {
  // const {setParkingSlotData} = useSelector(
  //   (state: any) => state.parkingSlotSlice
  // );
  const dispatch = useDispatch();
  const Data: any = [
    {
      locationName: 'Susan Road Faisalabad',
      locationIcon: <AvailLocation />,
    },
    {
      locationName: 'Canal Road Faisalabad',
      locationIcon: <AvailLocation />,
    },
    {
      locationName: 'Jaranwala Road Faisalabad',
      locationIcon: <AvailLocation />,
    },
  ];
  async function getDbData(name: String) {
    try {
      const token = await AsyncStorage.getItem('token');
      console.log('token from , that are  login', token);
      const {data} = await axios.get(
        `http://172.18.1.2/parkingSlot/data/${name.toUpperCase()}/${token}`,
      );
      console.log(data);
      // // Alert.alert(data.message);
      dispatch(setSelectedArea(name));
      dispatch(setParkingSlotData(data.data));
      navigation.navigate('parkingSpace');
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <View style={styles.container}>
        <StatusBar
          translucent={false}
          backgroundColor={'white'}
          barStyle={'dark-content'}
        />
        <ImageBackground
          source={require('../../assets/img/homeimg/mapimg.png')}
          resizeMode="cover"
          style={styles.image}>
          {/* <AvailLocation/> */}
          <FlatList
            data={Data}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  backgroundColor: 'white',
                  marginVertical: 30,
                  elevation: 10,
                  marginHorizontal: 30,
                  gap: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 20,
                }}
                onPress={() => getDbData(item.locationName)}>
                {item.locationIcon}
                <Text style={styles.locationName}>{item.locationName}</Text>
              </TouchableOpacity>
            )}
          />
          {/* <TouchableOpacity
            onPress={async () => {
              await AsyncStorage.removeItem('token');
              navigation.navigate('Login');
            }}>
            <Text style={{backgroundColor: 'blue', marginBottom: 30}}>
              logout
            </Text>
          </TouchableOpacity> */}
        </ImageBackground>
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  mainspace: {
    paddingTop: 33,
    paddingHorizontal: 16,
  },
  locationName: {
    color: COLORS.black,
  },
});
