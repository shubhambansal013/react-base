import React, { Component } from 'react';

class Home extends Component {
  componentWillMount() {
    return false;
  }

  render() {
    return (
      <div>
      Home!!

      go to <a href="/list">list</a>
      </div>
    )
  }

}

export default Home
