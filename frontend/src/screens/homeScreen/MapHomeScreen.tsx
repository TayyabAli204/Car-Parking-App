
import {
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  Image,
  Modal,
  StatusBar,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import COLORS from '../../consts/colors';
import CarModelSvg from '../../assets/img/homeimg/modelCar.svg';
import {Region} from 'react-native-maps';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {
  setParkingSlotData,
  setSelectedArea,
} from '../../store/parkingSlotSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
const MapHomeScreen = ({navigation}: any) => {
  const [inputSearchText, setInputSearch] = useState('');
  const [currentLocation, setCurrentLocation] = useState<null | {
    latitude: number;
    longitude: number;
  }>(null);
  const [showModal, setShowModal] = useState(false);

  const defaultLocation = {
    latitude: 0,
    longitude: 0,
  };
  const dispatch = useDispatch();
  // Define the type for the currentLocation variable
  const currentLocationS: {
    latitude: number;
    longitude: number;
  } = defaultLocation;
  const [region, setRegion] = useState<Region>({
    latitude: currentLocationS?.latitude,
    longitude: currentLocationS?.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'App needs access to your location.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          Geolocation.getCurrentPosition(
            position => {
              const {latitude, longitude} = position.coords;
              setCurrentLocation({latitude, longitude});
            },
            error => {
              console.log(error.code, error.message);
            },
            {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
          );
        } else {
          console.log('Location permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    };

    requestLocationPermission();
    setShowModal(true);
  }, []);


  async function getDbData(name: String) {
    try {
      const token = await AsyncStorage.getItem('token');
      console.log('token from , that are  login', token);
      const {data} = await axios.get(
        `http://192.168.50.9:8000/parkingSlot/data/${name}/${token}`,
      );
      console.log("datasadhfsahf",data);
      // // Alert.alert(data.message);
      dispatch(setSelectedArea(name));
      dispatch(setParkingSlotData(data.data));
      navigation.navigate('parkingSpace');
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    // ...
    const timer = setTimeout(() => {
      setShowModal(false); // Hide the modal
    }, 5000);

    return () => clearTimeout(timer); // Clear the timer on unmount
  }, []);

  const checkIfParkingAvailable = (details: any) => {
    // Assuming you have an array of parking areas with their coordinates
    const parkingAreas = [
      {
        latitude: 31.4330517,
        longitude: 73.1232943,
      },
      {
        latitude: 31.4382708,
        longitude: 73.1318905,
      },
      {
        latitude: 31.4289572,
        longitude: 73.0822738,
      },
    ];

    // Iterate through the parking areas and check if the selected place matches any of them
    for (let i = 0; i < parkingAreas.length; i++) {
      const parkingArea = parkingAreas[i];
      if (
        parkingArea.latitude === details.geometry.location.lat &&
        parkingArea.longitude === details.geometry.location.lng
      ) {
        return true; // Parking is available in the selected area
      }
    }

    return false; // Parking is not available in the selected area
  };


 

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={false}
        backgroundColor={'white'}
        barStyle={'dark-content'}
      />
      <GooglePlacesAutocomplete
        placeholder="Where are you going to?"
        textInputProps={{
          placeholderTextColor: '#A6AAB4',
          style: {
            backgroundColor: 'white',
            paddingHorizontal: 20,
            width: '100%',
          },
        }}
        minLength={2}
        fetchDetails={true}
        GooglePlacesSearchQuery={{
          rankby: 'distance',
        }}
        onPress={(data: any, details: any) => {
          // 'details' is provided when fetchDetails = true
          console.log('data from user search on search bar', data);
          console.log('details from user search on search bar', details);
          const isParkingAvailable = checkIfParkingAvailable(details); // Implement this function to check if parking is available

          if (isParkingAvailable) {
            setRegion({
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            });
          } else {
            Alert.alert('This area has no parking available');
            // Show a message that parking is not available in the selected area
            // alert('This area has no parking available');
          }
        }}
        query={{
          key: 'AIzaSyBRXj2DhUtd9c-hvmKWDJm4DIv-YUgWvjw',
          language: 'en',
          components: 'country:pk',
          types: 'establishment',
          radius: 30000,
          input: '{main_text}',
          location: `${region.latitude}, ${region.longitude}`,
        }}
        styles={{
          container: {
            flex: 1,
            position: 'absolute',
            width: '100%',
            zIndex: 1,
            marginVertical: 40,
            padding: 20,
          },
          listView: {backgroundColor: 'white'},
        }}
        enablePoweredByContainer={false}
        debounce={200}
      />
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
        showsUserLocation={true}
        showsMyLocationButton={true}
        initialRegion={{
          latitude: currentLocation?.latitude || 31.441238877954397,
          longitude: currentLocation?.longitude || 73.12586389624688,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        onRegionChange={region => {
          console.log('Region change:', region);
        }}>
        {currentLocation && (
          <Marker
            coordinate={{
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
            }}
            image={require('../../assets/img/homeimg/usercurrentlocation.png')}
            style={{height: 40, width: 40}}
          />
        )}
        <Marker
          coordinate={{
            latitude: 31.4330517,
            longitude: 73.1232943,
          }}
          title="The Boulevard Mall"
          description="East, Canal Rd,Faisalabad"
          image={require('../../assets/img/homeimg/parkinglocation.png')}
          onPress={()=>getDbData('The Boulevard Mall')}
        />
        <Marker
          coordinate={{
            latitude: 31.4382708,
            longitude: 73.1318905,
          }}
          title="Lyallpur Galleria"
          description="Galleria, E Canal Rd,Faisalabad"
          image={require('../../assets/img/homeimg/parkinglocation.png')}
          style={styles.CarPark}
          onPress={()=>getDbData('Lyallpur Galleria')}
        />

        <Marker
          coordinate={{
            latitude: 31.4289572,
            longitude: 73.0822738,
          }}
          title="Faisalabad Serena Hotel"
          description="Club Rd, Civil Lines, Faisalabad, Punjab, Pakistan"
          image={require('../../assets/img/homeimg/parkinglocation.png')}
          style={styles.CarPark}
          onPress={()=>getDbData('Faisalabad Serena Hotel')}
        />
      </MapView>

      <Modal
        visible={showModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowModal(false)}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Welcome to CarPark App</Text>
          <Text style={styles.Text1}>
            Simply input your destination and get a list of parking spaces
            available
          </Text>
          <CarModelSvg />
        </View>
      </Modal>
    </View>
  );
};

export default MapHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  map: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
  calloutText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  markerContainer: {
    alignItems: 'center',
  },
  markerImage: {
    width: 50,
    height: 50,
  },
  markerText: {
    position: 'absolute',
    top: 10,
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },
  CarPark: {
    height: 100,
    width: 100,
  },

  modalContainer: {
    position: 'absolute',
    bottom: 100,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'normal',
    color: COLORS.grey,
  },
  Text1: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#757F8C',
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
});
