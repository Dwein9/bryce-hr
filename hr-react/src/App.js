import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      homers: null
    };
  }

  componentDidMount(){
    const URL = 'https://www.baseball-reference.com/players/gl.fcgi?id=stantmi03&t=b&year=2017'

    var request = new XMLHttpRequest();
    request.open("GET", URL);

    request.onload = function(){
      var text = request.responseText
      console.log( text.split('<tbody>')[1].split('batting_gamelogs.').slice(-1)[0].split('data-stat="HR" >')[1].split('<')[0])
    };
    request.send();
  }


  render() {
    return (
      <div>
        {this.state.homers}
      </div>
    );
  }
}

export default App;
