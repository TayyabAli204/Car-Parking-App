import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Button,
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
import COLORS from '../../consts/colors';
import MenuSearchBar from '../../components/MenuSearchBar';
import {useNavigation} from '@react-navigation/native';
import {setBookSpace} from '../../store/parkingSlotSlice';
import {Alert} from 'react-native';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-date-picker';
const BookSpace = () => {
  const dispatch = useDispatch();
  const navigation: any = useNavigation();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [estimatedTime, onChangeText] = useState('');
  const [checkInTime, onChangeNumber] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const {parkingSlots, bookSpaces, selectedArea} = useSelector(
    (state: any) => state.parkingSlotSlice,
  );
  console.log(parkingSlots);
  const bookSpace = () => {
    // console.log("estimatedTime",estimatedTime)
    // console.log("checkInTime",checkInTime)

    dispatch(setBookSpace({estimatedTime, checkInTime}));

    setModalVisible(true);
  };
  const handleConfirm = async () => {
    try {
      parkingSlots.forEach(async (item: any, index: any) => {
        if (item.booked == true) {
          const dateStr = '2023-05-15T12:47:03.044+00:00';
          const date = new Date(dateStr);

          const options: any = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          };

          const formattedDate = date.toLocaleString('en-US', options);
          console.log(formattedDate);
          const res = await axios.post(
            'http://192.168.50.37:8000/parkingSlot/book',
            {...item, BookedTime: formattedDate},
          );
          console.log(res.data);
          navigation.navigate('UserProfile');
        }
      });
      setModalVisible(false);
    } catch (error) {
      console.log(error, 'error while setting estimated time');
    }
  };
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateConfirm = (date: any) => {
    const currentDate = new Date();
    const currentTime = currentDate.getTime();
    const selectedTime = date.getTime();

    if (selectedTime < currentTime) {
      // Show an error message if the selected date is before today
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
        titleRS="N200"
        titleHours="/Hr"
      />
      <View>
        {parkingSlots.map((item: any, index: any) => {
          return (
            <View key={index}>
              {item.booked && (
                <Text style={styles.selCar}>{item.parkingLotName}</Text>
              )}
            </View>
          );
        })}
      </View>

      <View style={styles.contain}>
        <Button title="Open" onPress={() => setOpen(!open)} />
        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={date => handleDateConfirm(date)}
          onCancel={() => {
            setOpen(false);
          }}
        />
        {/* <InputRange /> */}
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={estimatedTime}
          placeholder="Estimate Hours:"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={checkInTime}
          placeholder="Check-in Time:"
          keyboardType="numeric"
        />
        <CustomButton
          onPress={bookSpace}
          title={'Book Space'}
          titleStyle={styles.title}
        />
      </View>
      <Modal isVisible={modalVisible}>
        <View>
          <Text>Confirm your action</Text>
          <Button title="Confirm" onPress={handleConfirm} />
          <Button title="Cancel" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </>
  );
};

export default BookSpace;

const styles = StyleSheet.create({
  contain: {flex: 1, backgroundColor: 'white', paddingHorizontal: 16, gap: 40},
  title: {
    backgroundColor: COLORS.secondary,
    marginTop: pixelSizeVertical(24),
    paddingHorizontal: pixelSizeHorizontal(20),
    paddingVertical: pixelSizeVertical(14),
    textAlign: 'center',
    fontSize: fontPixel(16),
    color: COLORS.white,
    fontFamily: 'OpenSans-Bold',
    lineHeight: 24,
  },
  mainspace: {
    backgroundColor: 'white',
    paddingTop: 33,
    paddingHorizontal: 16,
  },
  selCar: {
    textAlign: 'center',
    paddingBottom: 14,
    fontSize: fontPixel(18),
    fontFamily: 'OpenSans-SemiBold',
    color: COLORS.secondary,
    backgroundColor: 'white',
  },
  selRender: {
    flex: 0.5,
    backgroundColor: 'white',
    flexDirection: 'column',
    elevation: 10,
    paddingVertical: 20,
    paddingHorizontal: 14,
  },
  container: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    padding: 10,
  },
});
