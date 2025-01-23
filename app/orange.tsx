import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const OrangePage = () => {
  return (
    <View style={styles.container}>
      <Text>Orange</Text>
      <Image 
        source={require('../assets/orange.png')}  
        style={styles.image}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 300,
    width: 300
  },
});

export default OrangePage;
