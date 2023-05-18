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
} from 'react-native';
import React from 'react';
import axios from 'axios';
import MenuSearchBar from '../../components/MenuSearchBar';
import {useDispatch} from 'react-redux';
import {
  setParkingSlotData,
  setSelectedArea
} from '../../store/parkingSlotSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
const HomeScreen = ({navigation}: any) => {
  const dispatch = useDispatch();
  const Data = [
    'Susan Road Faisalabad',
    'Canal Road Faisalabad',
    'Jaranwala Road Faisalabad',
  ];
  async function getDbData(name: String) {
    try {
      const token = await AsyncStorage.getItem('token');
      console.log(token)
      const {data} = await axios.get(
        `http://192.168.50.65:8000/parkingSlot/data/${name.toUpperCase()}/${token}`,
      );
      
      console.log(data)
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
          source={require('../../assets/img/homescreen/mapimg.png')}
          resizeMode="cover"
          style={styles.image}>
          <FlatList
            data={Data}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{backgroundColor: 'blue', marginVertical: 10}}
                onPress={() => getDbData(item)}>
                <Text>{item}</Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity
            onPress={async () => {
              await AsyncStorage.removeItem('token');
              navigation.navigate('Login');
            }}>
            <Text style={{backgroundColor: 'blue', marginBottom: 30}}>
              logout
            </Text>
          </TouchableOpacity>
          {/* <MenuSearchBar  MenuSearchBarStyle={styles.mainspace} title="Faisalabad"/> */}
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
});
