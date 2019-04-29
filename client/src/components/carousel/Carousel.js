import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './carousel.scss';
import { Carousel } from 'react-responsive-carousel';
const carouselImages = [{
  src: "https://res.cloudinary.com/the-sage-mages/image/upload/v1552323249/samples/animals/kitten-playing.gif",
  legend: "Pic of Cat"
},
{
  src: 'http://lorempixel.com/output/cats-q-c-640-480-10.jpg',
  legend: "more pics of cats"
}]
export default class MyCarousel extends Component {
  isClicked() {
    console.log('clickered!');
  }
  render() {
    return (
      <div className={styles.carouselContainer} >
        <Carousel
          autoPlay
          stopOnHover
          showIndicators={false}
          onClickThumb={this.isClicked}
          showThumbs={true}
          width='100'
          dynamicHeight={false}
          showIndicators
        >

          <img src={carouselImages[0].src} />
          <img src={carouselImages[0].src} />
          <img src={carouselImages[0].src} />
          <img src={carouselImages[0].src} />
          <img src={carouselImages[0].src} />
          <img src={carouselImages[0].src} />


        </Carousel>
      </div>

    )
  }
}
