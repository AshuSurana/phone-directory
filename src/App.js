
import React, { Component } from 'react';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div>
             
        <Header/>
        <label htmlFor='name'>Name: </label>
        <input id='name' type='text' placeholder='Type here'></input>
      </div>
      
    );
  }
}

export default App;
