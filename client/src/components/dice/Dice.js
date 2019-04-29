import React, { Component } from 'react'
import styles from './dice.scss';
export class Dice extends Component {
  constructor(props, ) {
    super(props);
    this.state = {
      value: 1
    }
    this.diceRoll = this.diceRoll.bind(this);
  }
  diceRoll(e) {
    e.preventDefault();
    let n = Math.floor(Math.random() * 6) + 1;
    console.log('CURRENT_ROLL:' + n);
    this.setState({ value: n })
  }
  render() {
    return (
      <div>
        <div className={styles.diceBlock}>
          <div className={styles.diceValue}>{this.state.value}</div>
        </div>
        <button onClick={this.diceRoll}>Roll</button>
      </div>
    )
  }
}
