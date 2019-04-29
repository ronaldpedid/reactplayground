import React, { Component } from 'react';
import { Horizontal } from './components/slider/Slider';
import { Dice } from './components/dice/Dice';
import { ColoredToggleSwitch } from './components/toggles/Toggle';
import MurryCard from './components/cards/Card';
import styles from './index.scss';
import { Checkbox, RadioButton } from './components/checkbox/Checkbox';
import MyCarousel, { Carousel } from './components/carousel/Carousel';

class App extends Component {
  render() {
    const imgSrc = 'https://www.fillmurray.com/284/196';
    const imgSrc1 = 'https://www.fillmurray.com/300/200';
    const imgSrc2 = 'https://www.fillmurray.com/460/300';
    const imgSrc3 = 'https://www.fillmurray.com/140/200';
    const imgAlt = 'Hello World!';
    const bill = {
      title: "Murray",
      desc: "Mr. Bill Murray",
      imgSrc: imgSrc,
      alt: imgAlt
    }
    return (
      <div>
        <h1>Hello World!</h1>
        <Horizontal />
        <Dice />
        <ColoredToggleSwitch />
        <section className={styles.cardRow}>
          <MurryCard title={bill.title} desc={bill.desc} imgSrc={bill.imgSrc} alt={bill.imgAlt} />
          <MurryCard title={bill.title} desc={bill.desc} imgSrc={imgSrc1} alt={imgAlt} />
        </section>
        <section className={styles.cardRow}>
          <MurryCard title={bill.title} desc={bill.desc} imgSrc={imgSrc2} alt={imgAlt} />
          <MurryCard title={bill.title} desc={bill.desc} imgSrc={imgSrc3} alt={imgAlt} />
        </section>
        <section>
          1. Hello World? <Checkbox name="one" />
          2. Hello World? <Checkbox name="one" />
          3. Hello World? <Checkbox name="one" />
        </section>
        <section>
          <MyCarousel />
        </section>
      </div>
    )
  }
}

export default App;
