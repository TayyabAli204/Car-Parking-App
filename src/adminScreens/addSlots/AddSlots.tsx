import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import COLORS from '../../consts/colors';
import {useDispatch, useSelector} from 'react-redux';
import {addLocationAsync} from '../../store/adminSlice';
import ReactNativeModal from 'react-native-modal';

const BookedSlots = () => {
  const {showLoader, parkingSlots} = useSelector(
    (state: any) => state.adminSlice,
  );
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<String>();

  return (
    <View style={styles.container}>
      {
        <ReactNativeModal isVisible={showLoader}>
          <ActivityIndicator size={'large'} color={COLORS.white} />
        </ReactNativeModal>
      }
      <TouchableOpacity onPress={() => dispatch(addLocationAsync(formData))}>
        <Text style={styles.txtInp}>Add Location</Text>
      </TouchableOpacity>

      <TextInput
        onChangeText={text => setFormData(text)}
        value={formData}
        style={styles.txtInp}
      />
    </View>
  );
};

export default BookedSlots;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    gap: 100,
    backgroundColor: COLORS.white,
  },
  heading: {
    color: COLORS.primary,
  },
  txtInp: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    color: COLORS.primary,
  },
});
