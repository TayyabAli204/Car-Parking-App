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
import AnimatedLottieView from 'lottie-react-native';
import Modal from 'react-native-modal';
import {useNavigation} from '@react-navigation/native';
export default function MakePayment() {
  const navigation: any = useNavigation();
  const [cardInfo, setCardInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [showBtnTitle, setBtnTitle] = useState('Make Payment');

  const {selectedSpot, selectedArea, parkingSlot} = useSelector(
    (state: any) => state.parkingSlotSlice,
  );
  // console.log("selectedSpot",selectedSpot)
  const fetchCardDetails = (cardDetails: any) => {
    // console.log("my  cardDetails",cardDetails)
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
    console.log('apiData.amount', apiData);

    setBtnTitle('Payment Succesful!');
    try {
      const res = await axios.post(
        'https://long-jade-wasp-robe.cyclic.app/payment-sheet',
        apiData,
      );
      console.log('payment intent create sucessfully...', res.data);

      if (res?.data?.paymentIntent) {
        var paymentConfrmR: any = await confirmPayment(
          res?.data?.paymentIntent,
          {paymentMethodType: 'Card'},
        );
        console.log('paymentConfrmR', paymentConfrmR);

        // Alert.alert("Payment Successfully...!!!");

        setShowLoader(false);
        setShowAnimation(true);
      }
    } catch (error) {
      console.log('error', error);
    } finally {
      setTimeout(() => {
        setShowAnimation(false);

        navigation.navigate('ParkingHistory');
      }, 1000);
    }
  };
  // if(!!cardInfo){
  //   try {
  //     const getToken = await createToken( {cardInfo,type:"Card" })
  //     console.log("getToken",getToken)

  //   } catch (error) {

  //   }
  // }

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
      {/* {showAnimation ? (
        <AnimatedLottieView
          source={require('../../consts/success-lotties.json')}
          autoPlay
          loop
        />
      ) : ( */}
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
      {/* )} */}
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
