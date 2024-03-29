import React, { Component } from 'react';
import axios from 'axios';

export default class Guilds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guilds: []
    };
    this.getAllGuilds = this.getAllGuilds.bind(this);
  }

  componentDidMount(){
    this.getAllGuilds();
  }

  getAllGuilds = () => {
    axios.get('http://localhost:8000/api/all-guilds')
        .then((response) => {
            this.setState({ guilds: response.data })
            console.log(this.state)
        })
        .catch((error) => {
            console.error("Can't get guilds", error)
        })
}

  render() {
    console.log(this.state, "state is here")
    return (
      <div>
        {this.state.guilds.map((guild, index) => {
          return (
            <p>{guild.name}</p>
          )
        })}
      </div>
    )
  }
}
