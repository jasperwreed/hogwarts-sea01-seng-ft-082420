import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import HogContainer from "./HogContainer";
import Filter from "./Filter"

// name: 'Babe',
// specialty: 'Being incredibly cute',
// greased: false,
// weight: 2.0,
// 'highest medal achieved': 'bronze'

class App extends Component {

  state = {
    hogs: hogs,
    filter: {
      greased: false
    },
    sort: 'name'
  }

  onFilterHogs = () => {
    this.setState({
      ...this.state,
      filter: {
        greased: true
      }
    })
    console.log('hi')
  }

  findGreasedHogs = () => {
    
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <HelloWorld />
        <Filter onFilterHogs={this.onFilterHogs} />
        <HogContainer hogs={this.state.hogs} />
      </div>
    );
  }
}

export default App;
