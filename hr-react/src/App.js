import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sayHi: "Hi!",
    };
  }

  render() {
    return (
      <div>
        {this.state.sayHi}
      </div>
    );
  }
}
export default App;
