import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
 
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../utils/ResponsiveStyle';
import CustomButton from '../../components/CustomButton';
import CorrectIcon from '../../assets/img/emojione-check-mark-button.svg';
import COLORS from '../../consts/colors';
import MenuSearchBar from '../../components/MenuSearchBar';
import {useNavigation} from '@react-navigation/native';
import CalendarIcon from '../../assets/img/calendar.svg';
import {Alert} from 'react-native';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-date-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setSelectedSpot} from '../../store/parkingSlotSlice';
import { styles } from './style';
const BookSpace = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [estimatedTime, onChangeText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const navigation: any = useNavigation();
  const dispatch = useDispatch();
  const {selectedSpot, selectedArea} = useSelector(
    (state: any) => state.parkingSlotSlice,
  );
  console.log(selectedSpot, 'selectedSpot');
  if (modalVisible) {
    setTimeout(() => {
      setModalVisible(false);
      navigation.navigate('BookingDetails');
    }, 1500);
  }

  const handleConfirm = async () => {
    if (+estimatedTime === 0) {
      return Alert.alert(
        "You cannot book a parking slot for 0 hours",
      );
    } else if (+estimatedTime > 10) {
      return Alert.alert(
        "You can only book a parking slot for a maximum of 10 hours",
      );
    }
    
    try {
      function convertFormat(date: any) { 
        const timestamp: any = date;
        const dt = new Date(timestamp);
        const dayOfWeek = dt.toLocaleDateString('en-US', {weekday: 'long'});
        const month = dt.toLocaleDateString('en-US', {month: 'long'});
        const day = dt.toLocaleDateString('en-US', {day: 'numeric'});
        const year = dt.getFullYear();
        const time = dt.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
        });

        // Step 3: Format the components
        const formattedDate = `${dayOfWeek} ${time}`;
        return formattedDate;
      }

      const data = {
        ...selectedSpot,
        totalParkingTime: estimatedTime,
        BookedTime: convertFormat(new Date()),
        entryTime: convertFormat(selectedDate),
        // parkingLotName:""
      };
      console.log(data,"entry time")
      dispatch(setSelectedSpot(data));
      console.log('asdkjfhdlas', data);

      const token = await AsyncStorage.getItem('token');
      const res = await axios.post(
        'https://long-jade-wasp-robe.cyclic.app/parkingSlot/book',
        {data, token},
      );
      console.log(res.data);

      setModalVisible(true);

      // setModalVisible(false);
    } catch (error) {
      console.log(error, 'error while setting estimated time');
    }
  };
  const [selectedDate, setSelectedDate] = useState('');
  const handleDateConfirm = (date: any) => {
    const currentDate = new Date();
    const currentTime = currentDate.getTime();
    const selectedTime = date.getTime();

    if (selectedTime <= currentTime) {
      Alert.alert('Invalid Date', 'Please select a date after today.');
    } else {
      setSelectedDate(date);
    }
  };



  return (
    <>
      <StatusBar
        translucent={false}
        backgroundColor={'white'}
        barStyle={'dark-content'}
      />
      <MenuSearchBar
        MenuSearchBarStyle={styles.mainspace}
        title={selectedArea}
        titleSlotName={"N" +selectedSpot.perHourFee}
      />

      <View style={styles.contain}>
        <View style={{alignItems: 'center', marginTop: 20}}>
          <CalendarIcon onPress={() => setOpen(!open)} />
          <CustomButton
            title={'Set Check-in Time'}
            titleStyle={styles.checkintime}></CustomButton>
        </View>

        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={date => handleDateConfirm(date)}
          onCancel={() => {
            setOpen(false);
          }}
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={estimatedTime}
          placeholderTextColor={COLORS.primary}
          placeholder="Estimate Hours:"
          keyboardType='numeric'
        />

        <CustomButton
          onPress={handleConfirm}
          title={'Book Space'}
          titleStyle={styles.title}
        />
      </View>
      <Modal isVisible={modalVisible}>
        <View style={styles.modelView}>
          <CorrectIcon width={90} height={90} />
          <Text
            style={{
              color: 'black',
              fontSize: fontPixel(14),
              fontFamily: 'OpenSans-SemiBold',
              textAlign:"center"

            }}>
            Space Successfully Booked
          </Text>
         
        </View>
      </Modal>
    </>
  );
};

export default BookSpace;
