import React from 'react';
import {StripeProvider} from '@stripe/stripe-react-native';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import parkingSpace from './src/screens/parkingSlot/ParkingSpace';
import BookSpace from './src/screens/bookSpace/BookSpace';
import HomeScreen from './src/screens/homeScreen/HomeScreen';
import BookingDetails from './src/screens/bookingDetails/BookingDetails';
import MakePayment from './src/screens/makePayment/MakePayment';
import ChangePassword from './src/screens/userProfile/ChangePassword';
import ImagePickerGetBrower from './src/components/ImagePickerCompon';
import MapHomeScreen from './src/screens/homeScreen/MapHomeScreen';
import TapIcon1 from './src/assets/img/tapIcon1.svg';
import TapIcon2 from './src/assets/img/tapIcon2.svg';
import TapIcon3 from './src/assets/img/tapIcon3.svg';
import TapIcon4 from './src/assets/img/tapIcon4.svg';
import TapIcon5 from './src/assets/img/tapIcon5.svg';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
import { SP_KEY } from '@env';
function Taps() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 64,
          // zIndex: -2,
          
          paddingVertical: 10,
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 0,
          shadowOpacity: 0.1,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size, focused}) => {
            return <TapIcon1 />;
          },
          tabBarActiveTintColor: '#613EEA',
          tabBarInactiveTintColor: '#827D89',
          tabBarHideOnKeyboard: true,
        }}
        name="Home"
        component={MapHomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size, focused}) => {
            return <TapIcon2 />;
          },
          tabBarActiveTintColor: '#613EEA',
          tabBarInactiveTintColor: '#827D89',
        }}
        name="Wallet"
        component={MapHomeScreen}
      />
      <Tab.Screen
        name="Add"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => {
            return <TapIcon3 />;
          },
          tabBarIconStyle: {
            backgroundColor: '#613EEA',
            padding: 35,
            borderRadius: 50,

            justifyContent: 'center',
            // marginBottom: 15,
            borderWidth: 5,
            borderColor: 'white',
          },
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size, focused}) => {
            return <TapIcon4 />;
          },
          tabBarActiveTintColor: '#613EEA',
          tabBarInactiveTintColor: '#827D89',
        }}
        name="Vector"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarActiveTintColor: '#613EEA',
          tabBarInactiveTintColor: '#827D89',
          tabBarIcon: ({color, size, focused}) => {
            return <TapIcon5 />;
          },
        }}
        name="Settings"
        component={Setting}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <>    
      <StripeProvider publishableKey={SP_KEY}>
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="SplashScreen"
              screenOptions={{headerShown: false}}>
              <Stack.Screen name="SplashScreen" component={SplashScreen} />
              <Stack.Screen name="MapHomeScreen" component={Taps} />
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
              <Stack.Screen name="ChangePassword" component={ChangePassword} />
              <Stack.Screen name="ImagePickerGetBrower" component={ImagePickerGetBrower} />
              {/* <Stack.Screen name="MapHomeScreen" component={MapHomeScreen} /> */}




            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </StripeProvider>
    </>
  );
};

export default App;
