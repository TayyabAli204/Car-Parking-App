import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  FlatList,
  Pressable,
  TouchableOpacity
} from 'react-native';
import React from 'react';
import axios from 'axios';
import MenuSearchBar from '../../components/MenuSearchBar';
import { useDispatch } from 'react-redux';
import { setParkingSlotData, setSelectedArea } from '../../store/parkingSlotSlice';

const HomeScreen = ({navigation}:any) => {
  const dispatch=useDispatch()
  const Data=[
    'Susan Road Faisalabad',
    'Canal Road Faisalabad',
    'Jaranwala Road Faisalabad',

  ]
  async function getDbData(name:String) {
    try{

      const {data}= await axios.get(`http://192.168.50.2:8000/parkingSlot/data/${name.toUpperCase()}`)
      // console.log(data)
      dispatch(setSelectedArea(name))
      dispatch(setParkingSlotData(data.data));
      navigation.navigate('parkingSpace')
    }catch(err){
      // console.log(err)
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
          renderItem={({item}) =><TouchableOpacity style={{backgroundColor:"blue",marginVertical:10}} onPress={()=>getDbData(item)}>
            <Text>{item}</Text>
          </TouchableOpacity>}/>
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
