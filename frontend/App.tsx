import React from 'react';
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
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="HomeScreen"
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

            {/* <Stack.Screen name="ParkingHistory" component={ParkingHistory}/> */}
            {/* <Stack.Screen name="Setting" component={Setting}/> */}
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
