import React, { Component } from 'react'
import styles from './toggle.scss';

export class ColoredToggleSwitch extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      toggled: false
    }

    this.changeToggleState = this.changeToggleState.bind(this);
  }

  changeToggleState() {
    if (!this.state.toggled) {
      console.log('on');
      return this.setState({ toggled: true })
    }
    if (this.state.toggled) {
      console.log('off');
      return this.setState({ toggled: false })
    }
  }
  render() {
    return (
      <div className={styles.toggleBox} onClick={this.changeToggleState}>
        {this.state.toggled ? <div className={styles.toggledOn}></div> : <div className={styles.toggledOff}></div>}
      </div>
    )
  }
}

