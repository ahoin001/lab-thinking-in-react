import React, { Component } from 'react';
import './App.css';
import list from './data.json'
import Table from './components/table'
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

      items: list.data

    }

  }

  render() {
    console.log(this.state.items);
    
    return (
      <div>


        <h1> Welcome to IronStore </h1>
        <Table allItems = {this.state.items}/>

      </div>
    );
  }
}
