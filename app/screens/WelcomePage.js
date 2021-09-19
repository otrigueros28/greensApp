import React from 'react';
import { ImageBackground, View, Image, StyleSheet, Text} from 'react-native';


function WelcomePage(props) {
  return (
   <ImageBackground
   style={styles.background}
   source={require("../../assets/back.jpg")}
  >
    <View style= {styles.logoContainer}>
        <Image style= {styles.logo} source= {require("../../assets/logo.jpg")}></Image>
        <Text> Trade Earths Bounty</Text>
    </View>
    <View style= {styles.loginButton}>
      <Text style= {styles.buttonText}>Login</Text>
    </View>
    <View style= {styles.registerButton}>
      <Text style= {styles.buttonText}>Register</Text>
    </View>
  </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  loginButton:{
    width: '100%',
    height: 70,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  registerButton:{
    width: '100%',
    height: 70,
    backgroundColor: 'lightgrey',
    alignItems: 'center'
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 90,
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 25,
    top: 20
  }
})

export default WelcomePage;
