import React, { Component } from "react";
import Coin from "./Coin";
import { arrayIndex } from "./flipcoin";

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
      {
        side: "tails",
        imgSrc:
          "https://upload.wikimedia.org/wikipedia/commons/5/5a/98_quarter_reverse.png",
      },
    ],
  };

  constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  flipCoin() {
    const newCoin = arrayIndex(this.props.coins);
    this.setState((st) => {
      return {
        currCoin: newCoin,
        nFlips: st.nFlips + 1,
        nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
        nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0),
      };
    });
  }

  handleClick(e) {
    this.flipCoin();
  }

  render() {
    return (
      <div>
        <h2>Let's Flip a Coin!!</h2>
        {this.state.currCoin && <Coin info={this.state.currCoin} />}
        <button onClick={this.handleClick}>Flip Me!</button>
        <h3>
          Out of {this.state.nFlips} flips, there have been {this.state.nHeads}{" "}
          heads and {this.state.nTails} tails.
        </h3>
      </div>
    );
  }
}

export default CoinContainer;
