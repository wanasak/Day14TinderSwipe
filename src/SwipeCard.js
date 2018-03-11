import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import SwipeCards from "react-native-swipe-cards";

import SCard from "./SCard";
import Util from "./utils";

class SwipeCard extends Component {
    static propType = {
        next: PropTypes.func.isRequired
    };

    constructor() {
        super();
        const imgs = ["minion1", "minion2", "minion3", "minion4", "minion5"];
        const names = ["Stuart", "Bob", "Kevin", "Dave", "Jerry"];
        const cards = imgs.map((elm, index) => {
            return {
                id: `sc${index}`,
                img: imgs[4 - index],
                name: names[4 - index],
                top: 13 + index * 4,
                width: Util.size.width - 22 - index * 4
            };
        });
        this.state = { cards };
    }

    _handleYup(card) {
        this.props.next();
    }

    _handleNope(card) {
        this.props.next();
    }

    render() {
        return (
            <SwipeCards
                cards={this.state.cards}
                renderCard={card => <SCard key={card.id} {...card} />}
                handleYup={() => this._handleYup()}
                handleNope={() => this._handleNope()}
                showYup={false}
                showNope={false}
            />
        );
    }
}

export default SwipeCard;
