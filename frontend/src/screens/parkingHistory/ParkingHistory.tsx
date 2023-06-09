import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Close from '../../assets/img/close.svg';
import Menu from '../../assets/img/menu.svg';
import Profile from '../../assets/img/profile_photo.svg';
import {useNavigation} from '@react-navigation/native';
import COLORS from '../../consts/colors';
import CompletedSessions from '../../components/CompletedSessions';
import ActiveSession from '../../components/ActiveSession';
import GreenIcon from '../../assets/img/emojione-check-mark-button.svg';
import {setBookedSlotsHistory} from '../../store/parkingSlotSlice';
import moment from 'moment';
import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
  heightPixel,
} from '../../utils/ResponsiveStyle';
import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
const ParkingHistory = () =>{
  const navigation: any = useNavigation();
  const [Active, setActive] = useState<any>([]);
  const [Completed, setCompleted] = useState<any>([]);
  const [first, setfirst] = useState(false);
  const BookedSlotHistory:any=useSelector((state:any)=>state.parkingSlotSlice.bookedSlotsHistory)
  console.log("bookedSLot history",BookedSlotHistory)
  const dispatch =useDispatch();

  useEffect(() => {
    async function getUserHistory() {
      const token = await getToken();

      const {data} = await axios.get(
        `https://long-jade-wasp-robe.cyclic.app/parkingSlot/${token}`,
      );
      console.log("data dispatch from history screen",data)
      dispatch(setBookedSlotsHistory(data.data));
    }
    getUserHistory();
  }, []);
  async function getToken() {
    const token = await AsyncStorage.getItem('token');
    return token;
  }

useEffect(()=>{
  let c:any=[]
  let a:any=[]
  BookedSlotHistory.forEach((item:any)=>{
    const currentDate = new Date();
    const dateString = item.entryTime;
const parsedDate = moment(dateString, "dddd, M/D/YYYY h:mm A").toDate();


    if(currentDate > parsedDate){
      c.push(item);
    }else{
      a.push(item);
     }
    
  })
  setActive(a)
  setCompleted(c)
},[BookedSlotHistory])

  return (
    <View style={{flex: 1,backgroundColor:'white'}}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <ScrollView>
          <Text style={styles.hi2}>History</Text>
        <View style={styles.hi3}>
          <Text style={styles.hi4}>Active Session :</Text>
       
          {
            Active.map((item:any,index:any)=>{
             return (
              <ActiveSession key={index} data={item}/>
             )
            })
          }
        </View>
 
        <View style={styles.hi5}>
          <View style={styles.hel1}>
            <Text style={styles.hel2}>Completed Sessions</Text>
            <Text style={styles.hel3}>View all</Text>
          </View>
          {
            Completed.map((item:any,index:any)=>{
              return(

                <CompletedSessions key={index} data={item} Icon={<GreenIcon />} />
              )
            })
          }
        </View>
        <TouchableOpacity style={styles.touch} onPress={()=>navigation.navigate("Taps")}>
          <Text style={styles.next}>Go Back to Home Screen</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ParkingHistory;

const styles = StyleSheet.create({
  next: {
    textAlign: 'center',
    fontSize: fontPixel(16),
    color: COLORS.white,
    fontFamily: 'OpenSans-Bold',
    lineHeight: 24,
    paddingHorizontal: pixelSizeHorizontal(20),
    paddingVertical: pixelSizeVertical(14),
  },

  touch: {
    backgroundColor: COLORS.secondary,
    borderRadius: 6,
    marginTop: pixelSizeVertical(24),
    marginHorizontal: pixelSizeHorizontal(16),
    marginBottom: pixelSizeVertical(43),
  },
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  button: {
    width: 250,
    height: 60,
    backgroundColor: '#3740ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom: 12,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff',
  },
  hi1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    marginTop: 53,
  },
  hi2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3B414B',
    fontFamily: 'OpenSans-Bold',
    textAlign:"center"
  },
  hi3: {
    marginTop: pixelSizeVertical(29),
    alignItems: 'baseline',
    flex: 0,
    paddingHorizontal: pixelSizeHorizontal(16),
  },
  hi4: {
    color: COLORS.grey,
    fontSize: fontPixel(16),
    fontFamily: 'OpenSans-SemiBold',
  },
  hi5: {
    flex: 0,
    marginTop: pixelSizeVertical(24),
    paddingHorizontal: pixelSizeHorizontal(16),
  },
  hi6: {
    marginTop: pixelSizeVertical(20),
    flex: 1,
    alignItems: 'baseline',
    paddingHorizontal: pixelSizeHorizontal(16),
  },
  hi7: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  hi8: {
    color: COLORS.grey,
    fontSize: fontPixel(16),
    fontFamily: 'OpenSans-SemiBold',
  },
  hi9: {
    color: COLORS.secondary,
    fontSize: fontPixel(15),
    fontFamily: 'OpenSans-SemiBold',
  },
  hel1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hel2: {
    color: COLORS.grey,
    fontSize: fontPixel(16),
    fontFamily: 'OpenSans-SemiBold',
  },
  hel3: {
    color: COLORS.secondary,
    fontSize: fontPixel(15),
    fontFamily: 'OpenSans-SemiBold',
  },
});
