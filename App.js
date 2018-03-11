/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Cards from "./src/Cards";
import Util from "./src/utils";

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.nav}>
                    <Icon name="ios-settings" size={35} color="#cecece" />
                    <Image
                        style={styles.logo}
                        source={require("./src/img/tinder.png")}
                    />
                    <Icon name="ios-chatbubbles" size={35} color="#cecece" />
                </View>
                <View style={styles.actionContainer}>
                    <View style={styles.smallAction}>
                        <Icon name="ios-refresh" size={30} color="#fdcd6d" />
                    </View>
                    <View style={styles.largeAction}>
                        <Icon name="md-close" size={45} color="#fc6c6e" />
                    </View>
                    <View style={styles.largeAction}>
                        <Icon name="md-heart" size={45} color="#52cb93" />
                    </View>
                    <View style={styles.smallAction}>
                        <Icon name="ios-pin" size={30} color="#318ff6" />
                    </View>
                </View>
                <Cards />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        width: Util.size.width,
        height: Util.size.height
    },
    nav: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 20,
        height: 65,
        paddingHorizontal: 15,
        borderBottomColor: "#ebebeb",
        borderBottomWidth: 1
    },
    logo: {
        width: 91,
        height: 39
    },
    actionContainer: {
        flexDirection: "row",
        paddingHorizontal: 7.5,
        top: Util.size.height * 4 / 5,
        position: "absolute"
    },
    smallAction: {
        width: Util.size.width === 375 ? 70 : 60,
        height: Util.size.width === 375 ? 70 : 60,
        borderColor: "#f5f5f5",
        borderWidth: 10,
        borderRadius: 35,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 5
    },
    largeAction: {
        width: Util.size.width === 375 ? 110 : 100,
        height: Util.size.width === 375 ? 110 : 100,
        borderColor: "#f5f5f5",
        borderWidth: 10,
        borderRadius: 55,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 5
    }
});
