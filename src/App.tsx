import * as React from 'react';
import './App.css';
import Test from './Test'

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit many things fast much faster <code>src/App.js</code> and save to reload.
        </p>
          <Test />
      </div>

    );
  }
}

export default App;
