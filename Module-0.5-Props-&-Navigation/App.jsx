
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login";

import Home from "./Home";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
	name="Login"
	component={Login}
	options={{title:"Login", headerShown:false}} />
        <Stack.Screen
        name="Home"
        component={Home}
        options={{title:"Home"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height:100,
    width: 100,
    marginBottom: 40,
  },
  welcomeContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  welcomeText1: {
    fontSize: 30
  },
  welcomeText2: {
    fontSize: 17
  },
  inputView: {
    backgroundColor: "#D3D3D3",
    borderRadius: 10,
    width: "90%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "blue",
  },
  loginText: {
    color: "white",
  }
});

export default App;
