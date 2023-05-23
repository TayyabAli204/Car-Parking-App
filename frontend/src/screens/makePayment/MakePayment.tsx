// import { CardField, useStripe } from '@stripe/stripe-react-native';
// import { View } from 'react-native';

// function PaymentScreen() {
//   // ...
//   return (
//     <View>
//       <CardField
//         postalCodeEnabled={true}
//         placeholders={{
//           number: '4242 4242 4242 4242',
//         }}
//         cardStyle={{
//           backgroundColor: '#FFFFFF',
//           textColor: '#000000',
//         }}
//         style={{
//           width: '100%',
//           height: 50,
//           marginVertical: 30,
//         }}
//         onCardChange={(cardDetails) => {
//           console.log('cardDetails', cardDetails);
//         }}
//         onFocus={(focusedField) => {
//           console.log('focusField', focusedField);
//         }}
//       />
//     </View>
//   );
// }

import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { CardField, confirmPayment } from '@stripe/stripe-react-native';
import CustomButton from '../../components/CustomButton';
import { heightPixel, pixelSizeHorizontal } from '../../utils/ResponsiveStyle';
import COLORS from '../../consts/colors';
import axios from 'axios';
export default function MakePayment() {
   const [cardInfo, setCardInfo] = useState(null)
  const fetchCardDetails =(cardDetails:any)=>{
    // console.log("my  cardDetails",cardDetails)
    if(cardDetails.complete){
      setCardInfo(cardDetails)
    }else{
      setCardInfo(null)
    }
  }


  

  const onDone = async ()=>{
    // console.log("cardInfocardInfocardInfo",cardInfo)
    // let apiData = 
    

    try {
      const res = await  axios.post("http://192.168.50.9:8000/payment-sheet",{
        amount: 1000,
        currency : "usd"
      })
      console.log("payment intent create sucessfully...",res.data)
    
      if(res?.data?.paymentIntent){
          var paymentConfrmR:any = await confirmPayment(res?.data?.paymentIntent,{paymentMethodType:'Card'})
          console.log("paymentConfrmR",paymentConfrmR)
      }

 
    } catch (error) {
      console.log("error",error)
      
    }

  }
     // if(!!cardInfo){
    //   try {
    //     const getToken = await createToken( {cardInfo,type:"Card" })
    //     console.log("getToken",getToken)
      
    //   } catch (error) {
        
    //   }
    // }
  return (
        <View style={styles.container}>

      <CardField
        postalCodeEnabled={false}
        placeholders={{
          number: '4242 4242 4242 4242',
        }}
        cardStyle={{
          backgroundColor: '#FFFFFF',
          textColor: '#000000',
        }} 
        style={{
          width: '100%',
          height: 50,
          marginVertical: 30,
        }}
        onCardChange={(cardDetails) => {
          fetchCardDetails(cardDetails)
          // console.log('cardDetails', cardDetails);
        }}
        onFocus={(focusedField) => {
          console.log('focusField', focusedField);
        }}
      />
      <CustomButton title="Make Payment" buttonStyle={[styles.buttonStyle,{backgroundColor: cardInfo? COLORS.lightBlue : COLORS.grey}]} onPress={()=>onDone()} titleStyle={styles.titleStyle} disabled={!cardInfo} />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
   flex:1,
   padding:pixelSizeHorizontal(16),

  },
  buttonStyle:{
    height:heightPixel(56),
    
    borderRadius:6,
    justifyContent:'center',
    alignItems:'center',
  },
  titleStyle:{
    fontFamily:"OpenSans-SemiBold",
    color:COLORS.white,

  }
})