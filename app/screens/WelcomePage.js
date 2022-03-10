import React from 'react';
import { ImageBackground, View, Image, StyleSheet, Text} from 'react-native';
import { borderBottomColor, borderLeftColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


function WelcomePage(props) {
  return (
   <ImageBackground
   style={styles.background}
   source={require("../../assets/back2.jpg")}
  >
    <View style= {styles.logoContainer}>
      <Text style= {styles.titleText}>Sublime</Text>
       {/*<Image style= {styles.logo} source= {require("../../assets/logo.jpg")}></Image>   not sure about a logo, will need to find one that i like and make it work*/}
        <Text style= {styles.subheader}> Trade Earths Bounty</Text>
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
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 20
  },
  registerButton:{
    width: '100%',
    height: 70,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    borderRadius: 20
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 330,
    left: 0
  },
  buttonText: {
    fontSize: 25,
    top: 20
  },
  titleText: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  subheader: {
    fontSize:20
  }
})

export default WelcomePage;
