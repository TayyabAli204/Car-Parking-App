
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TapIcon1 from '../assets/img/tapIcon1.svg';
import TapIcon2 from '../assets/img/tapIcon2.svg';
import TapIcon3 from '../assets/img/tapIcon3.svg';
import TapIcon4 from '../assets/img/tapIcon4.svg';
import TapIcon5 from '../assets/img/tapIcon5.svg';
import MapHomeScreen from '../screens/homeScreen/MapHomeScreen';
import HomeScreen from '../screens/homeScreen/HomeScreen';
import Setting from "../screens/setttingScreen/Setting";
import ParkingHistory from "../screens/parkingHistory/ParkingHistory";
import AboutUs from "../screens/aboutUs/AboutUs";
const Tab = createBottomTabNavigator();
export default function Taps() {
    return (
      <Tab.Navigator
        initialRouteName="Map"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 64,
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
          name="Map"
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
          name="History"
          component={ParkingHistory}
        />
        <Tab.Screen
          name="Add"
          component={MapHomeScreen}
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
          name="About"
          component={AboutUs}
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
