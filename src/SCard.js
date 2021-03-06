import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, Image, Text, View } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import Util from "./utils";

class SCard extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        top: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired
    };

    render() {
        return (
            <View
                key={this.props.id}
                style={[
                    styles.scard,
                    { top: this.props.top, width: this.props.width }
                ]}
            >
                <Image
                    style={{ width: this.props.width - 2, height: 350 }}
                    source={{ uri: this.props.img }}
                />
                <View style={Util.cardInfo}>
                    <View>
                        <Text style={Util.cardText}>
                            {this.props.name}, very old{" "}
                            <Icon
                                name="ios-checkmark-circle"
                                size={18}
                                color="#208bf6"
                            />
                        </Text>
                    </View>
                    <View style={Util.cardIcon}>
                        <View style={Util.cardIconContainer}>
                            <Icon name="ios-people" size={25} color="#fc6b6d" />
                            <Text
                                style={[
                                    Util.cardIconText,
                                    { color: "#fc6b6d" }
                                ]}
                            >
                                0
                            </Text>
                        </View>
                        <View style={Util.cardIconContainer}>
                            <Icon name="ios-book" size={25} color="#cecece" />
                            <Text
                                style={[
                                    Util.cardIconText,
                                    { color: "#cecece" }
                                ]}
                            >
                                0
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default SCard;

const styles = StyleSheet.create({
    scard: {
        width: Util.size.width - 20,
        height: 410,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#e1e1e1",
        position: "relative",
        backgroundColor: "#fff",
        top: 13
    }
});
