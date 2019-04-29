import React, { Component } from 'react';
import styles from './card.scss';

export class Card extends Component {
  constructor(props, context) {
    super(props, context);
    const {
      title,
      desc,
      src,
      alt,
      className,
      onClick
    } = this.props;
    console.log(context);
    console.log(props);
  }

  render() {
    return (
      <div onClick={this.props.onClick} className={this.props.className}>
        {this.props.children}
      </div>
    )
  }
}

export class CardImage extends Component {
  render() {
    return (<img className={this.props.className} src={this.props.src} alt={this.props.alt} />)
  }
}
export class CardTitle extends Component {
  render() {
    return (<h1 className={this.props.className}>{this.props.title}</h1>)
  }
}
export class CardDesc extends Component {
  render() {
    return (<p className={this.props.className}>{this.props.desc}</p>)
  }
}
export class CardContentContainer extends Component {
  render() {
    return (<div className={this.props.className}>{this.props.children}</div>)
  }
}

//specific cards

export default class MurryCard extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      grayscale: true
    }
    const { imgSrc, imgAlt, title, desc } = this.props;
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    if (this.state.grayscale) {
      return this.setState({ grayscale: false });
    } else {
      return this.setState({ grayscale: true });
    }
  }
  render() {
    return (
      <div className={styles.grayscaleHover}>
        {this.state.grayscale ?
          <Card onClick={this.handleClick} className={styles.cardContainerG}>

            <CardImage
              className={styles.cardImageG}
              src={this.props.imgSrc}
              alt={this.props.imgAlt} />
            <CardContentContainer>
              <CardTitle title={this.props.title} className={styles.cardTitleG}>{this.props.title}</CardTitle>
              <CardDesc className={styles.cardDesc} desc={this.props.desc}>{this.props.desc}</CardDesc>
            </CardContentContainer>
          </Card>

          :

          <Card className={styles.cardContainer} onClick={this.handleClick}>
            <CardImage
              className={styles.cardImage}
              src={this.props.imgSrc}
              alt={this.props.imgAlt} />
            <CardContentContainer>
              <CardTitle title={this.props.title} className={styles.cardTitleG}>{this.props.title}</CardTitle>
              <CardDesc className={styles.cardDesc} desc={this.props.desc}>{this.props.desc}</CardDesc>
            </CardContentContainer>
          </Card>}
      </div>

    )
  }
}
