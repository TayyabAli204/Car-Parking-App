import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const AboutUs = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.description}>
        Welcome to our revolutionary car parking app! We are proud to introduce a user-friendly and efficient solution to the common problem of finding parking spaces. Our app is designed to make your parking experience convenient, hassle-free, and reliable. At "SwiftPark", we understand the frustration of searching for available parking spots, especially in busy urban areas. Our mission is to simplify this process and help you save time and effort. Whether you're a daily commuter, a visitor exploring a new city, or simply in need of a parking spot for an event, our app is here to assist you.
      </Text>
    
      <Text style={styles.featureTitle}>Key Features</Text>
      <View style={styles.featureContainer}>
        <View style={styles.featureItem}>
          <Text style={styles.featureIcon}>1</Text>
          <Text style={styles.featureText}>Real-time Availability</Text>
        </View>
        <View style={styles.featureItem}>
          <Text style={styles.featureIcon}>2</Text>
          <Text style={styles.featureText}>Easy Navigation</Text>
        </View>
        <View style={styles.featureItem}>
          <Text style={styles.featureIcon}>3</Text>
          <Text style={styles.featureText}>Reservation System</Text>
        </View>
        <View style={styles.featureItem}>
          <Text style={styles.featureIcon}>4</Text>
          <Text style={styles.featureText}>Payment Options</Text>
        </View>
        <View style={styles.featureItem}>
          <Text style={styles.featureIcon}>5</Text>
          <Text style={styles.featureText}>User-Friendly Interface</Text>
        </View>
      </View>
     
      <Text style={styles.note}>
        Note: This is a fictional description of a car parking app and can be customized according to your app's specific features and offerings.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
    color: '#666666',
    lineHeight: 22,
    textAlign: 'left',
  },
  featureTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
    textAlign: 'center',
  },
  featureContainer: {
    marginVertical: 20,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  featureIcon: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginRight: 12,
  },
  featureText: {
    flex: 1,
    fontSize: 16,
    color: '#666666',
    lineHeight: 22,
  },
  note: {
    fontSize: 14,
    fontStyle: 'italic',
    marginTop: 16,
    color: '#999999',
    textAlign: 'center',
  },
});

export default AboutUs;