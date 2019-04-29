import React, { Component } from 'react';
import styles from './counter.scss';


export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0 //can save to db for something like likes/up votes
    }
    this.tickUp = this.tickUp.bind(this);
    this.tickDown = this.tickDown.bind(this);
  }
  tickUp() { //can attach api call to update database counter

    this.setState({ counter: this.state.counter + 1 });
  }
  tickDown() { //can attach api call to update database counter
    if (this.state.counter === 0) {
      this.setState({ counter: this.state.counter - 0 });
    } else {
      this.setState({ counter: this.state.counter - 1 });
    }
  }
  render() {
    return (
      <div>
        <div className={styles.counterUp} onClick={this.tickUp}>
          UP
        </div>
        <div className={styles.counter}>
          {this.state.counter}
        </div>
        <div className={styles.counterDown} onClick={this.tickDown}>
          DOWN
        </div>
      </div>
    )
  }
}
