import React, { Component } from "react";
import { View } from "react-native";

import Card from "./Card";
import Util from "./utils";
import SwipeCard from "./SwipeCard";

class Cards extends Component {
    constructor() {
        super();
        const imgs = ["minion1", "minion2", "minion3", "minion4"];
        const names = ["Stuart", "Bob", "Kevin", "Dave"];

        this.state = { imgs, names };
    }

    _next() {
        const imgs = this.state.imgs;
        imgs.pop();
        this.setState({ imgs });
    }

    render() {
        const { names, imgs } = this.state;
        const cards = imgs.map((elem, index) => {
            return (
                <Card
                    key={index}
                    name={names[index]}
                    img={elem}
                    top={30 - index * 4}
                    width={Util.size.width - 38 + index * 4}
                    left={18 - index * 2}
                />
            );
        });
        return (
            <View>
                {cards}
                <SwipeCard next={() => this._next()} />
            </View>
        );
    }
}

export default Cards;
