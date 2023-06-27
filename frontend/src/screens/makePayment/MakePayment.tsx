import {
  StyleSheet,
  Alert,
  View,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {CardField, confirmPayment} from '@stripe/stripe-react-native';
import CustomButton from '../../components/CustomButton';
import {heightPixel, pixelSizeHorizontal} from '../../utils/ResponsiveStyle';
import MenuSearchBar from '../../components/MenuSearchBar';
import COLORS from '../../consts/colors';
import {useSelector} from 'react-redux';
import axios from 'axios';
import Modal from 'react-native-modal';
import {useNavigation} from '@react-navigation/native';
export default function MakePayment() {
  const navigation: any = useNavigation();
  const [cardInfo, setCardInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [showBtnTitle, setBtnTitle] = useState('Make Payment');

  const {selectedSpot, selectedArea, parkingSlot} = useSelector(
    (state: any) => state.parkingSlotSlice,
  );
  const fetchCardDetails = (cardDetails: any) => {
    if (cardDetails.complete) {
      setCardInfo(cardDetails);
    } else {
      setCardInfo(null);
    }
  };

  const onDone = async () => {
    setShowLoader(true);
    console.log('cardInfocardInfocardInfo', cardInfo);
    let apiData = {
      amount: selectedSpot.perHourFee,
      currency: 'usd',
    };
    try {
      const res = await axios.post(
        'https://long-jade-wasp-robe.cyclic.app/payment-sheet',
        apiData,
      );

      if (res?.data?.paymentIntent) {
        var paymentConfrmR: any = await confirmPayment(
          res?.data?.paymentIntent,
          {paymentMethodType: 'Card'},
        );
        setShowLoader(false);
        
      }
    } catch (error) {
      console.log('error', error);
    } finally {
      setTimeout(() => {
        setBtnTitle('Payment Succesful!');
        navigation.navigate('ParkingHistory');
      }, 1500);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={false}
        backgroundColor={'white'}
        barStyle={'dark-content'}
      />
      {
        <Modal isVisible={showLoader}>
          <ActivityIndicator
            size={'large'}
            color={COLORS.white}></ActivityIndicator>
        </Modal>
      }
      <MenuSearchBar
        MenuSearchBarStyle={styles.mainspace}
        title={selectedArea}
        titleSlotName={selectedSpot.parkingLotName}
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.cardRs}>
          Total Fee = {'N' + selectedSpot.perHourFee}
        </Text>
        <Text style={styles.cardDetail}>Select preferred card</Text>
        <Image
          source={require('../../assets/img/card_purple.jpeg')}
          style={{borderRadius: 10, marginVertical: 12}}
        />
      </View>
      <Text style={styles.cardDetail}>Input new card details</Text>
      <CardField
        postalCodeEnabled={false}
        placeholders={{
          number: '4242 4242 4242 4242',
        }}
        cardStyle={{
          backgroundColor: 'white',
          textColor: COLORS.grey,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: '#CCCCCC',
          placeholderColor: COLORS.grey,
        }}
        style={{
          width: '100%',
          height: 80,
          marginVertical: 30,
        }}
        onCardChange={cardDetails => {
          fetchCardDetails(cardDetails);
        }}
        onFocus={focusedField => {
          console.log('focusField', focusedField);
        }}
      />

        <CustomButton
          title={showBtnTitle}
          buttonStyle={[
            styles.buttonStyle,
            {backgroundColor: cardInfo ? COLORS.lightBlue : COLORS.grey},
          ]}
          onPress={() => onDone()}
          titleStyle={styles.titleStyle}
          disabled={!cardInfo && !loading}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: pixelSizeHorizontal(16),
    backgroundColor: 'white',
  },
  buttonStyle: {
    height: heightPixel(56),

    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    fontFamily: 'OpenSans-SemiBold',
    color: COLORS.white,
  },
  mainspace: {
    backgroundColor: 'white',
    paddingTop: 33,
    paddingHorizontal: 14,
  },
  cardDetail: {
    color: COLORS.grey,
    textAlign: 'center',
    fontSize: 14,
    letterSpacing: 2,
  },
  cardRs: {
    color: COLORS.black,
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
  },
});
