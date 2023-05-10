// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SplashScreen from './src/screens/splashScreen/SplashScreen'
import OnBoarding from './src/screens/onBoarding/OnBoarding'
import GetStart from './src/screens/onBoard/OnBoard'
import Login from './src/screens/logIn/LogIn'
import PhoneNoSignup from './src/screens/signUp/PhoneNoSignUp'
import VerficationCode from './src/screens/signUp/VerficationCodeSignUp'
import Password from './src/screens/signUp/PasswordSignUp'
import UserProfile from './src/screens/userProfile/UserProfile'
import ParkingHistory from './src/screens/parkingHistory/ParkingHistory'
import Setting from './src/screens/setttingScreen/Setting'
import MenuScreen from './src/screens/menuScreen/MenuScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from "react-redux";
import { store } from './src/store/store'
const Stack =createNativeStackNavigator();
const App = () => {

  return (
    <>
    <Provider store={store}>

       <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="GetStart" component={GetStart} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="PhoneNoSignup" component={PhoneNoSignup} />
        <Stack.Screen name="VerficationCode" component={VerficationCode} />
        <Stack.Screen name="Password" component={Password} />
        <Stack.Screen name="UserProfile" component={UserProfile}/>
        <Stack.Screen name="MenuScreen" component={MenuScreen}/>

        {/* <Stack.Screen name="ParkingHistory" component={ParkingHistory}/> */}
        {/* <Stack.Screen name="Setting" component={Setting}/> */}


      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    </>
  )
}

export default App

const styles = StyleSheet.create({})