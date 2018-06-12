import React, { Component } from 'react';
import ReadJSON from '../ReadJSON';
import './styles.css';

class Home extends Component {
  render() {
    return(
      <section className="main">
        <div>
          <h1>This is: Home Component</h1>
        </div>
        <div>
          <h2>Displaying JSON data</h2>
          <ReadJSON />
        </div>
      </section>
    );
  }
}

export default Home;