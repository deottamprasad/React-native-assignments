import React, {useState} from "react";
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Image } from "react-native";


const Login = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(false);
    const handlePress = () => {
      isLogin && navigation.navigate("Home",{propEmail:email})
      setIsLogin(false);
    }
    const handleEmail = (email) => {
      setEmail(email);
      if(password.length>0&&email.length>0)
        setIsLogin(true);
   }
   const handlePass = (password) => {
     setPassword(password);
     if(password.length>0&&email.length>0)
       setIsLogin(true);
   }
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{uri:"https://assets.nationbuilder.com/themes/5d1ad55ac2948011ce17704b/attachments/original/1553643295/login.png?1553643295"}} /> 
        <View style={styles.welcomeContainer} >
          <Text style={styles.welcomeText1}>Hello User</Text>
          <Text style={styles.welcomeText2}>Please Login!</Text>
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            keyboardType="email-address"
            placeholder="Email."
            placeholderTextColor="#003f5c"
            value={email}
            onChangeText={handleEmail}
          /> 
        </View> 
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            value={password}
            onChangeText={handlePass}
          /> 
        </View> 
        <TouchableOpacity style={styles.loginBtn} onPress={handlePress}>
          <Text style={styles.loginText} >LOGIN</Text> 
        </TouchableOpacity> 
        <TouchableOpacity>
          <Text style={styles.forgotButton}>Forgot Password?</Text> 
        </TouchableOpacity> 
      </View> 
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
    forgotButton: {
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
  

  export default Login;
