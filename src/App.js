import React, { Component } from 'react';
import { Cover, Sampark, IAmAkshar, Demos } from './components';
import { BrowserRouter as Router } from 'react-router-dom';
class App extends Component {

  render() {
    return (
      <Router>
        <div className='App'>
          <Cover />
          <Sampark />
          <IAmAkshar />
          <Demos />
        </div>
      </Router>
    );
  }
}

export default App;
