import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Home = ({navigation, route}) => {
    return (
        <View style={styles.container} >
            <Text style={styles.text1}>Home Page</Text>
            <Text>Your Email: {route.params.propEmail}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"yellow",
        paddingTop:20,
        alignItems: "center",
    },
    text1: {
        fontWeight: "bold",
        fontSize: 50,
    }
})

export default Home;


