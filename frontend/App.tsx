import React from 'react';
import {Alert} from 'react-native';
import {StripeProvider} from '@stripe/stripe-react-native';
import SplashScreen from './src/screens/splashScreen/SplashScreen';
import OnBoarding from './src/screens/onBoarding/OnBoarding';
import GetStart from './src/screens/onBoard/OnBoard';
import Login from './src/screens/logIn/LogIn';
import PhoneNoSignup from './src/screens/signUp/PhoneNoSignUp';
import VerficationCode from './src/screens/signUp/VerficationCodeSignUp';
import Password from './src/screens/signUp/PasswordSignUp';
import UserProfile from './src/screens/userProfile/UserProfile';
import ParkingHistory from './src/screens/parkingHistory/ParkingHistory';
import Setting from './src/screens/setttingScreen/Setting';
import MenuScreen from './src/screens/menuScreen/MenuScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import parkingSpace from './src/screens/parkingSlot/ParkingSpace';
import BookSpace from './src/screens/bookSpace/BookSpace';
import HomeScreen from './src/screens/homeScreen/HomeScreen';
<<<<<<< HEAD
import ParkingSlots from './src/adminScreens/parkingSlots/ParkingSlots';
=======
import BookingDetails from './src/screens/bookingDetails/BookingDetails';
import MakePayment from './src/screens/makePayment/MakePayment';
import {SP_KEY} from '@env';
>>>>>>> 0e5925bb63ea53182518aa39fd677a22014d7b4d
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <>
<<<<<<< HEAD
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="AdminParkingSlots"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="OnBoarding" component={OnBoarding} />
            <Stack.Screen name="GetStart" component={GetStart} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="PhoneNoSignup" component={PhoneNoSignup} />
            <Stack.Screen name="VerficationCode" component={VerficationCode} />
            <Stack.Screen name="Password" component={Password} />
            <Stack.Screen name="UserProfile" component={UserProfile} />
            <Stack.Screen name="MenuScreen" component={MenuScreen} />
            <Stack.Screen name="parkingSpace" component={parkingSpace} />
            <Stack.Screen name="BookSpace" component={BookSpace} />

            <Stack.Screen name="ParkingHistory" component={ParkingHistory} />
            <Stack.Screen name="Setting" component={Setting} />
            <Stack.Screen name="AdminParkingSlots" component={ParkingSlots} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
=======
      <StripeProvider publishableKey={SP_KEY}>
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="SplashScreen"
              screenOptions={{headerShown: false}}>
              <Stack.Screen name="SplashScreen" component={SplashScreen} />
              <Stack.Screen name="HomeScreen" component={HomeScreen} />
              <Stack.Screen name="OnBoarding" component={OnBoarding} />
              <Stack.Screen name="GetStart" component={GetStart} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="PhoneNoSignup" component={PhoneNoSignup} />
              <Stack.Screen name="VerficationCode" component={VerficationCode}  />
              <Stack.Screen name="Password" component={Password} />
              <Stack.Screen name="UserProfile" component={UserProfile} />
              <Stack.Screen name="MenuScreen" component={MenuScreen} />
              <Stack.Screen name="parkingSpace" component={parkingSpace} />
              <Stack.Screen name="BookSpace" component={BookSpace} />
              <Stack.Screen name="BookingDetails" component={BookingDetails} />
              <Stack.Screen name="ParkingHistory" component={ParkingHistory} />
              <Stack.Screen name="Setting" component={Setting} />
              <Stack.Screen name="MakePayment" component={MakePayment} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </StripeProvider>
>>>>>>> 0e5925bb63ea53182518aa39fd677a22014d7b4d
    </>
  );
};

export default App;
