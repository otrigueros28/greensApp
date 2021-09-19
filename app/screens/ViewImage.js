import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

function ViewImage(props) {
  return (
    <View style= {styles.container}>
      <View style= {styles.closeIcon}>
        <Text> X </Text>
      </View>
      <View style= {styles.deleteIcon}>
        <Text> D </Text>
      </View>
      <Image resizeMode= "contain" style = {styles.image} source={require("../../assets/lemon-grove.jpg")}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%'
  },
  closeIcon: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    position: 'absolute',
    top: 30,
    left: 30,
  },
  deleteIcon:{
    width: 40,
    height: 40,
    backgroundColor: 'red',
    position: 'absolute',
    top: 30,
    right: 30
  }
})

export default ViewImage;
