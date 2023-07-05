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
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import parkingSpace from './src/screens/parkingSlot/ParkingSpace';
import BookSpace from './src/screens/bookSpace/BookSpace';
import BookingDetails from './src/screens/bookingDetails/BookingDetails';
import MakePayment from './src/screens/makePayment/MakePayment';
import ChangePassword from './src/screens/userProfile/ChangePassword';
import ImagePickerGetBrower from './src/components/ImagePickerCompon';
import Taps from './src/components/TabNavigation';
import {REACT_APP_STRIPE_PUBLISHABLE_KEY} from '@env';
const Stack = createNativeStackNavigator(); 

const App = () => {
  return (
    <>    
      <StripeProvider publishableKey={REACT_APP_STRIPE_PUBLISHABLE_KEY}>
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="SplashScreen"
              screenOptions={{headerShown: false}}>
              <Stack.Screen name="SplashScreen" component={SplashScreen} />
              <Stack.Screen name="Taps" component={Taps} />
              <Stack.Screen name="OnBoarding" component={OnBoarding} />     
              <Stack.Screen name="GetStart" component={GetStart} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="PhoneNoSignup" component={PhoneNoSignup} />
              <Stack.Screen name="VerficationCode" component={VerficationCode}  />
              <Stack.Screen name="Password" component={Password} />
              <Stack.Screen name="UserProfile" component={UserProfile} />
              <Stack.Screen name="parkingSpace" component={parkingSpace} />
              <Stack.Screen name="BookSpace" component={BookSpace} />                 
              <Stack.Screen name="BookingDetails" component={BookingDetails} />
              <Stack.Screen name="ParkingHistory" component={ParkingHistory} />
              <Stack.Screen name="Setting" component={Setting} />
              <Stack.Screen name="MakePayment" component={MakePayment} />
              <Stack.Screen name="ChangePassword" component={ChangePassword} />
              <Stack.Screen name="ImagePickerGetBrower" component={ImagePickerGetBrower} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </StripeProvider>
    
    </>
  );
};

export default App;
