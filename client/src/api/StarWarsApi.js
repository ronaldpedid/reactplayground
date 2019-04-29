import React, { Component } from 'react'

export default class StarWarsApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
  }
 async componentDidMount() {
    await fetch('https://swapi.co/api/people/1')
      .then(response => response.json())
      .then(data => this.setState({ data }))
      .then(data => console.log(this.state.data));
  }
  render() {
    return (
      <div>
        <p>{this.state.data.name} </p>
        <p>{this.state.data.height} </p>
        <p>{this.state.data.mass} </p>
        <p>{this.state.data.hair_color} </p>
        <p>{this.state.data.skin_color} </p>
        <p>{this.state.data.eye_color} </p>
      </div>
    )
  }
}
