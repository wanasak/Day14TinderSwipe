import React from "react";
import { PixelRatio } from "react-native";
import Dimensions from "Dimensions";

const Util = {
    ratio: PixelRatio.get(),
    pixel: 1 / PixelRatio.get(),
    size: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
    },
    post(url, data, callback) {
        const fetchOptions = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        };

        fetch(url, fetchOptions)
            .then(response => {
                return response.json();
            })
            .then(responseData => {
                callback(responseData);
            });
    },
    key: "BDKHFSDKJFHSDKFHWEFH-REACT-NATIVE",
    cardInfo: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 60,
        paddingLeft: 20,
        paddingRight: 5
    },
    cardText: {
        fontSize: 20,
        fontWeight: "500",
        color: "#423e39"
    },
    cardIcon: {
        flexDirection: "row"
    },
    cardIconContainer: {
        width: 50,
        flexDirection: "row",
        alignItems: "center"
    },
    cardIconText: {
        paddingLeft: 5,
        fontWeight: "500",
        fontSize: 16
    }
};

export default Util;
