import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  pixelSizeHorizontal,
  pixelSizeVertical,
  fontPixel,
  heightPixel,
} from '../utils/ResponsiveStyle';
import COLORS from '../consts/colors';
const ActiveSession = () => {
  return (
    <>
      <View style={styles.hello1}>
        <View style={styles.hello2}>
          <View style={styles.hello3}>
            <Text style={styles.hello4}>$40/Hr</Text>
          </View>
          <View style={{marginTop: 9, marginRight: 23}}>
            <Text style={styles.hello5}> Lekki Gardens Car Park A</Text>
            <Text style={styles.hello6}>Space 4c</Text>
          </View>
        </View>
        <View style={styles.hello7}></View>
        <View style={styles.hello8}>
          <Text style={styles.hello9}>Time Remaining</Text>
          <Text style={styles.hello10}>01hr : 30min</Text>
        </View>
      </View>
    </>
  );
};

export default ActiveSession;

const styles = StyleSheet.create({
  hello1: {
    backgroundColor: 'white',
    width: '100%',
    marginTop: 11,
    height: heightPixel(105),
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  hello2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: pixelSizeHorizontal(13),
  },
  hello3: {
    backgroundColor: COLORS.secondary,
    borderRadius: 6,
    marginVertical: 12,
  },
  hello4: {
    color: 'white',
    fontSize: fontPixel(16),
    fontFamily: 'OpenSans-Bold',
    padding: 5,
  },
  hello5: {
    color: COLORS.grey,
    fontSize: fontPixel(16),
    fontFamily: 'OpenSans-SemiBold',
  },
  hello6: {
    color: COLORS.grey,
    alignSelf: 'flex-end',
    fontSize: fontPixel(14),
    fontFamily: 'OpenSans-SemiBold',
  },
  hello7: {
    borderWidth: 1,
    borderColor: COLORS.grey,
    opacity: 0.4,
    marginHorizontal: pixelSizeHorizontal(15),
  },
  hello8: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: pixelSizeHorizontal(15),
    marginTop: 9,
  },
  hello9: {
    fontSize: fontPixel(16),
    color: COLORS.grey,
    fontFamily: 'OpenSans-Regular',
  },
  hello10: {
    fontSize: fontPixel(16),
    color: COLORS.grey,
    fontFamily: 'OpenSans-Bold',
  },
});
