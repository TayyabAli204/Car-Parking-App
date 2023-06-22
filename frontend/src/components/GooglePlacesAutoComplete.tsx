import React from 'react'
import {
    StyleSheet,
    View,
    TouchableOpacity,
  } from 'react-native';
  import Cross from '../assets/img/CrossIcon.svg';
  import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
  import useGooglePlaces from '../hooks/useGooglePlaces';
const GooglePlacesAutoCompleteComp = () => {
    const {
        setNoParkingModal,
        region,
        setRegion,
        checkIfParkingAvailable,
        googlePlacesAutocompleteRef,
        
    }=useGooglePlaces();

    // console.log("Region", region);
    

  return (
    <>
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
          console.log(isParkingAvailable,"isParkingAvailableafdsafsadf")
          
          if (isParkingAvailable) {
            console.log(isParkingAvailable,"isParkingAvailable")
            setRegion({
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            });
            
          } else {
          console.log(isParkingAvailable,"else")

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
    </>
  )
}

export default GooglePlacesAutoCompleteComp

const styles = StyleSheet.create({})