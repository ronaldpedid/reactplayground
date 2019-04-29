import React, { Component } from 'react';
import styles from './checkbox.scss';


export class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    if (!this.state.checked) {
      this.setState({ checked: true });
    } else {
      this.setState({ checked: false });
    }
  }
  render() {
    return (
      <input
        type="checkbox"
        id={this.props.id}
        className={this.state.checked ? styles.true : styles.false}
        value={this.state.checked}
        defaultChecked={this.state.checked}
        onChange={this.handleClick}
        name={this.props.name}
      />
    )
  }
}

