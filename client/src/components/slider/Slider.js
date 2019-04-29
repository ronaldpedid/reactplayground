import React, { Component } from 'react';
import styles from './slider.scss';
import Slider from 'react-rangeslider';

export class Horizontal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: 0
    }
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeComplete = this.handleChangeComplete.bind(this);
  }

  handleChangeStart() {
    console.log('change event started');
  };

  handleChange(value) {
    this.setState({ value: value });
  }

  handleChangeComplete() {
    console.log('Change event completed.');
    console.log({ newValue: this.state.value });
  }


  render() {
    const { value } = this.state;

    const formatdol = value => value + ' $';

    return (
      <div className={styles.slider}>
        <Slider
          min={0}
          max={1000}
          value={value}
          className={styles.custom}
          format={formatdol}
          onChangeStart={this.handleChangeStart}
          onChange={this.handleChange}
          onChangeComplete={this.handleChangeComplete} />

        <div className={styles.value}>{formatdol(value)}</div>
      </div>
    )
  }


}