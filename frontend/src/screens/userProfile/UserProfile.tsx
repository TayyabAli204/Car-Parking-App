import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Platform,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import BackIcon from '../../assets/img/setting/leftIcon.svg';
import ButtonWithImg from '../../components/ButtonWithText';
import TickIcon from '../../assets/img/setting/tickIcon.svg';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {DemoButton} from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-picker';
const includeExtra = true;

const EditProfile = ({navigation}: any) => {
  const oldEmail = useSelector((state: any) => state.userSlice);

  console.log('dkjashfkljdashn', oldEmail);

  const [name, onChangeName] = useState('');
  const [email, onChangeEmail] = useState('');
  const [isRequiredEmail, setIsRequiredEmail] = useState(false);
  const [imageData, setImage] = useState<any>(null);

  const onButtonPress = (type: any, options: any) => {
    launchImageLibrary(options, response => {
      console.log('Image Res', response);
      setImage(response?.assets?.[0] || null);
    });
  };

  useEffect(() => {
    async function name() {
      const storedImageUri = await AsyncStorage.getItem('imageUri');
      console.log(storedImageUri);
      setImage({
        uri: storedImageUri,
      });
    }
    name();
    // updateProfile()
  }, []);

  const updateProfile = async () => {
    const validateEmail = () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      console.log(emailRegex.test(email));
      return emailRegex.test(email);
    };

    if (!validateEmail()) {
      setIsRequiredEmail(true);
    } else {
      try {
        const res = await axios.post(
          'https://long-jade-wasp-robe.cyclic.app/auth/updateProfile',
          {
            newName: name,
            newEmail: email,
            oldEmail: oldEmail,
          },
        );
        if (imageData?.uri) {
          console.log(imageData.uri);
          await AsyncStorage.setItem('imageUri', imageData.uri);
        }

        const storedImageUri = await AsyncStorage.getItem('imageUri');
        if (storedImageUri !== null) {
          setImage({
            uri: storedImageUri,
          });
          console.log('storeImageURI', storedImageUri);
        }

        await AsyncStorage.removeItem('token');
        navigation.navigate('Login');
      } catch (error) {
        console.log(error, 'error in updating');
      }
    }
  };
  return (
    <View style={styles.parent}>
      <View style={styles.header}>
        <View style={styles.headerChild}>
          
          <BackIcon />
          <Text style={styles.headerText1}>Settings</Text>
        </View>
        <Text style={styles.headerText}>Edit Profile</Text>
        <View style={{height: 16, width: 76}}></View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="cover"
            resizeMethod="scale"
            style={styles.image}
            source={
              imageData?.uri
                ? {uri: imageData?.uri}
                : require('../../assets/img/ProfilePicture.png')
            }
          />
        </View>
        <DemoButton
          onPress={() =>
            onButtonPress('library', {
              selectionLimit: 1,
              mediaType: 'photo',
              includeBase64: false,
              includeExtra,
            })
          }>
          Change Image
        </DemoButton>
      </View>

      <ScrollView>
        <View>
          <Text style={styles.emailLable}>Full Name</Text>
          <TextInput
            onChangeText={onChangeName}
            value={name}
            placeholder="Michael Antonio"
            placeholderTextColor={'#C8C5CB'}
            style={styles.emailInput}
            onFocus={() => {
              setIsRequiredEmail(false);
            }}
            onBlur={() => {
              setIsRequiredEmail(false);
            }}
          />

          {isRequiredEmail && (
            <Text style={{color: 'red', fontSize: 12}}>Enter Valid Email</Text>
          )}

          <Text style={styles.emailLable}>Email Address</Text>
          <TextInput
            onChangeText={onChangeEmail}
            value={email}
            placeholder="anto_michael@gmail.com"
            placeholderTextColor={'#C8C5CB'}
            style={styles.emailInput}
            onFocus={() => {
              setIsRequiredEmail(false);
            }}
            onBlur={() => {
              setIsRequiredEmail(false);
            }}
          />

          {isRequiredEmail && (
            <Text style={{color: 'red', fontSize: 12}}>Enter Valid Email</Text>
          )}
        </View>
        <Text style={styles.text}>
          Changing email address information means you need to re-login to the
          apps.
        </Text>
        <View>
          <ButtonWithImg
            onPress={updateProfile}
            buttonStyle={styles.button1}
            titleStyle={styles.buttonText1}
            title={'Save Changes'}
            Imgg={<TickIcon />}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 23,
    borderBottomWidth: 1,
    borderBottomColor: '#EFEEF0',
  },
  headerText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    fontFamily: 'Inter-Medium',
  },
  headerText1: {
    color: '#180E25',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    fontFamily: 'Inter-Medium',
  },
  headerChild: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 24,
    gap: 10,
    paddingVertical: 8,
    borderColor: '#613EEA',
    borderWidth: 1,
    borderRadius: 25,
  },
  buttonText: {
    color: '#613EEA',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    fontFamily: 'Inter-Medium',
  },
  buttonParent: {},
  profileSec: {
    display: 'flex',
    alignItems: 'center',
    borderBottomColor: '#EFEEF0',
    borderBottomWidth: 1,
    paddingBottom: 24,
    marginHorizontal: 16,
  },
  emailLable: {
    fontSize: 16,
    lineHeight: 38,
    fontWeight: '500',
    fontFamily: 'Inter-Medium',
    color: '#180E25',
    marginTop: 26,
    marginHorizontal: 16,
  },
  emailInput: {
    color: 'gray',
    borderColor: '#C8C5CB',
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginHorizontal: 16,
  },
  text: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '400',
    fontFamily: 'Inter-Medium',
    color: '#C8C5CB',
    marginTop: 12,
    marginHorizontal: 16,
  },
  buttonText1: {fontSize: 16, lineHeight: 22, color: 'white'},
  button1: {
    backgroundColor: '#613EEA',
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 50,
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginTop: 80,
    marginHorizontal: 16,
  },
  buttonContainer: {
    flexDirection: 'column',
    marginVertical: 8,
  },
  imageContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  image: {
    height: 120,
    width: 120,
    marginTop: 24,
    borderRadius: 80,
  },
});

interface Action {
  title: string;
  type: 'capture' | 'library';
  options: ImagePicker.CameraOptions | ImagePicker.ImageLibraryOptions;
}

const actions: Action[] = [
  {
    title: 'Change Image',
    type: 'library',
    options: {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
      includeExtra,
    },
  },
];

if (Platform.OS === 'ios') {
  actions.push({
    title: 'Take Image or Video\n(mixed)',
    type: 'capture',
    options: {
      saveToPhotos: true,
      mediaType: 'mixed',
      includeExtra,
      presentationStyle: 'fullScreen',
    },
  });
}
