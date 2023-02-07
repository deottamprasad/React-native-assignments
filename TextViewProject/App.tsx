import React from "react";
import { Button, View, Text, NativeModules, StyleSheet } from "react-native";
import { TextView } from "./TextView";

const App = () => {


  return (
      <View style={styles.container}>
        <TextView 
        style={{ 
          flex: 1,
          fontSize: 12}}
        color='#000000'
        text="Some Text" />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  }
});

export default App;