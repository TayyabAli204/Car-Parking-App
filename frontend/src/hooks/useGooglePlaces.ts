// import { View, Text } from 'react-native'
// import React from 'react'

// const useGooglePlaces = () => {

//   return (

//   )
// }

// export default useGooglePlaces

import React, {useState, useEffect} from 'react';
import {StyleSheet, View, PermissionsAndroid} from 'react-native';
import {useRef} from 'react';
import {Region} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {setParkingSlotData, setSelectedArea} from '../store/parkingSlotSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
const useGooglePlaces = () => {
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
  const navigation: any = useNavigation();

  async function getDbData(name: String) {
    try {
      const token = await AsyncStorage.getItem('token');
      console.log('token from , that are  login', token);
      const {data} = await axios.get(
        `http://192.168.50.9:8000/parkingSlot/data/${name}/${token}`,
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
    console.log(address,"address wal code chaling")
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
      'http://192.168.50.9:8000/parkingSlot/location',
    );
    console.log(data,'sajkdfhslakfh')
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

  // Usage example

 
  return {
    parkingLocation,
    setCurrentLocation,
    setParkingLocation,
    currentLocation,
    noParkingModal,
    setNoParkingModal,
    showModal,
    setShowModal,
    region,
    setRegion,
    checkIfParkingAvailable,
    googlePlacesAutocompleteRef,
    getDbData,
  };
};

export default useGooglePlaces;

const styles = StyleSheet.create({});
