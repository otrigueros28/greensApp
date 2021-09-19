import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, SafeAreaView, Alert, Button, TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button color ="white" title = "Click Me" onPress= {() =>
      Alert.alert("Title", "it was clicked", [
        {text: "yes"},
        {text: "no"}]
        )}/>
      <Text>beginning of something new, not sure what</Text>
      <TouchableOpacity>
        <Image
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300"}} />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
