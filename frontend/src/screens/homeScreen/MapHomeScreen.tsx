import {
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  Modal,
  StatusBar,
  TouchableOpacity,
  BackHandler
} from 'react-native';
import React, {useState, useEffect} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import COLORS from '../../consts/colors';
import CarModelSvg from '../../assets/img/homeimg/modelCar.svg';
import {Region} from 'react-native-maps';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {
  setParkingSlotData,
  setSelectedArea,
} from '../../store/parkingSlotSlice';
import {useRef} from 'react';
import Cross from '../../assets/img/CrossIcon.svg';

import AsyncStorage from '@react-native-async-storage/async-storage';

import GooglePlacesAutoCompleteComp from '../../components/GooglePlacesAutoComplete';
import useGooglePlaces from '../../hooks/useGooglePlaces';
const MapHomeScreen = ({navigation}: any) => {

  // useEffect(() => {
  //   const handleBackPress = () => {
  //     // BackHandler.exitApp();
  //     return true; // Prevent the default back button behavior
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     handleBackPress,
  //   );

  //   return () => {
  //     backHandler.remove(); // Clean up the event listener
  //   };
  // }, [navigation]);
  const [parkingLocation, setParkingLocation] = useState([]);
  const [currentLocation, setCurrentLocation] = useState<null | {
    latitude: number;
    longitude: number;
  }>(null);
  const [showModal, setShowModal] = useState(false);
  const [noParkingModal, setNoParkingModal] = useState(false);
  const googlePlacesAutocompleteRef = useRef(null);
  const defaultLocation = {latitude: 0, longitude: 0};
  const dispatch = useDispatch();
  const currentLocationS: {latitude: number; longitude: number} =
    defaultLocation;
  const [region, setRegion] = useState<Region>({
    latitude: currentLocationS?.latitude,
    longitude: currentLocationS?.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  async function getDbData(name: String) {
    try {
      const token = await AsyncStorage.getItem('token');
      console.log('token from , that are  login', token);
      const {data} = await axios.get(
        `https://long-jade-wasp-robe.cyclic.app/parkingSlot/data/${name}/${token}`,
      );
      dispatch(setSelectedArea(name));
      dispatch(setParkingSlotData(data.data));
      navigation.navigate('parkingSpace');
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(false); 
    }, 5000);

    return () => clearTimeout(timer); 
  }, []);

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

  const getCoordinatesForAddress = async (address: string) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          address,
        )}&key=AIzaSyBRXj2DhUtd9c-hvmKWDJm4DIv-YUgWvjw`,
      );
      const data = await response.json();
      if (data.status === 'OK') {
        const location = data.results[0].geometry.location;
        console.log('insieeeeeeeeee', location);

        return location;
      } else {
        console.log('Geocoding error:', data.status);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };


  const setParkingSlotsLocation = async () => {
    const {data} = await axios.get(
      'https://long-jade-wasp-robe.cyclic.app/parkingSlot/location',
    );
    console.log("data from db",data)
    const parkingAreas = data.map((item: any) => {
      return new Promise(async (resolve: any, reject) => {
        try {
          const data = await getCoordinatesForAddress(item);
          resolve(data);
        } catch (error) {
          reject(error);
        }
      });
    });
      console.log("parkingAreas user has selected",parkingAreas)
    Promise.all(parkingAreas)
      .then(resolvedValues => {
        console.log('Coordinates fetched for all parking areas');
        const updatedArr: any = resolvedValues.map((item, index) => {
          const location: any = data[index];
          return {
            location,
            ...item,
          };
        });
        setParkingLocation(updatedArr);
      })
      .catch(error => {
        console.error('Error fetching coordinates:', error);
      });
  };
  useEffect(() => {
    setParkingSlotsLocation();
  }, []);


  // Usage example

  const checkIfParkingAvailable = (details: any) => {
    for (let i = 0; i < parkingLocation.length; i++) {
      const parkingArea: any = parkingLocation[i];
      if (
        parkingArea?.lat === details.geometry.location.lat &&
        parkingArea?.lng === details.geometry.location.lng
      ) {
        return true;
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
      {/* <GooglePlacesAutoCompleteComp/> */}
      <GooglePlacesAutocomplete
        ref={googlePlacesAutocompleteRef}
        renderRightButton={():any =>
          googlePlacesAutocompleteRef.current?.getAddressText() ? (
            <TouchableOpacity
              style={{position: 'absolute', right: 2, top: 16}}
              onPress={() => {
                googlePlacesAutocompleteRef.current?.setAddressText('');
              }}>
              <Cross/>
            </TouchableOpacity>
          ) : null
        }
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
          const isParkingAvailable: any = checkIfParkingAvailable(details); // Implement this function to check if parking is available
          if (isParkingAvailable) {
            setRegion({
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            });
          } else {
            setNoParkingModal(true);
            const timer = setTimeout(() => {
              setNoParkingModal(false);
            }, 5000);
            return () => clearTimeout(timer);
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
          // console.log('Region change:', region);
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

        {parkingLocation.map((item: any, index:any) => {
          return (
            <Marker
            key={item?.lat * item?.lng}
            coordinate={{
              latitude: item?.lat,
              longitude: item?.lng,
            }}
            title={item.location}
            image={require('../../assets/img/homeimg/parkinglocation.png')}
            onPress={() => getDbData(item.location)}
            />
          );
        })}
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

      <Modal
        visible={noParkingModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setNoParkingModal(false)}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText12}>Only these Areas are Available</Text>
          {parkingLocation.map((item: any) => (
            <>
              <Text style={styles.areaText}>{item.location}</Text>
            </>
          ))}
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
  // modalContainer: {
  //   backgroundColor: 'white',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  modalText12: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.grey,
    marginBottom: 20,
  },
  areaText: {
    fontSize: 16,
    color: 'black',
    marginBottom: 10,
  },
});
