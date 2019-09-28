import React, { Component } from 'react';
import './App.css';
import list from './data.json'
import Table from './components/table'
import Searchbar from "./components/search";
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

      items: list.data, // This data will not be manipulated , so we can always have all the data
      visibleItems: list.data //This List will be manipulated

    }

  }


  // Provided a string, will set state to list of items that has that string in it
  refineItemList = (query, showUnstocked) => {

    // Copy state of all items
    // Every time this function is called ,the data we filter from is ALL the data
    // Without a copy, once we filter the data, we can not get it back by backspacing next time this function is called
    let clone = [...this.state.items]

    let newList = clone.filter((eachItem) => {

      if (showUnstocked) {
        // return items that contain the user input letters , even if unstocked 
        return eachItem.name.toUpperCase().includes(query.toUpperCase());
      }
      else {
        // Return list of items that are in stock AND Match search query
        return eachItem.stocked && eachItem.name.toUpperCase().includes(query.toUpperCase());
      }

    })

    this.setState({
      //Change items returned to user into the filtered list
      visibleItems: newList
    })

  }

  render() {
    // console.log(this.state.items);

    return (
      <div>


        <h1> Welcome to IronStore </h1>
        <Searchbar
          searchLogic={this.refineItemList} />

        <Table allItems={this.state.visibleItems} />

      </div>

    );
  }
}
