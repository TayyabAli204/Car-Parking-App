import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  FlatList,
} from 'react-native';
import React from 'react';

import MenuSearchBar from '../../components/MenuSearchBar';

const HomeScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <StatusBar
          translucent={false}
          backgroundColor={'white'}
          barStyle={'dark-content'}
        />
        <ImageBackground
          source={require('../../assets/img/homescreen/mapimg.png')}
          resizeMode="cover"
          style={styles.image}>
          {/* <MenuSearchBar  MenuSearchBarStyle={styles.mainspace} title="Faisalabad"/> */}
        </ImageBackground>
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  mainspace: {
    paddingTop: 33,
    paddingHorizontal: 16,
  },
});
