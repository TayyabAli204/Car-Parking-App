import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Switch,
  ScrollView,
  TextInput,
  Alert,
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
import Modal from 'react-native-modal';
const BookSpace = () => {
  const dispatch = useDispatch();
  const navigation: any = useNavigation();
  const [estimatedTime, onChangeText] = useState('');
  const [checkInTime, onChangeNumber] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const {parkingSlots, bookSpaces} = useSelector(
    (state: any) => state.parkingSlotSlice,
  );
  console.log(bookSpaces, parkingSlots, 'this is from store estimaitd time');
  const bookSpace = () => {
    console.log("estimatedTime",estimatedTime)
    console.log("checkInTime",checkInTime)

    dispatch(setBookSpace({estimatedTime, checkInTime}));

    setModalVisible(true);
  };
  const handleConfirm = async () => {
    try {
      parkingSlots.forEach(async (item:any, index:any) => {
        if (item.booked == true) {
          const res = await axios.post(
            'http://192.168.50.2:8000/parkingSlot/book',
            item,
          );
        }
      });
      setModalVisible(false);
    } catch (error) {
      console.log(error, 'error while setting estimated time');
    }
  };

  return (
    <>
      <StatusBar
        translucent={false}
        backgroundColor={'white'}
        barStyle={'dark-content'}
      />
      <MenuSearchBar MenuSearchBarStyle={styles.mainspace} title="Lekki Gardens Car Park A" titleRS="N200" titleHours="/Hr" />
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
