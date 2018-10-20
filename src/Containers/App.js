import React, { Component } from 'react';

import CardList from '../Components/CardList/CardList';
import SearchBox from '../Components/SearchBox/SearchBox';
import Scroll from '../Components/Scroll/Scroll';
import ErrorBoundry from  '../Components/ErrorBoundry';
import './App.css';

import 'tachyons';

class App extends Component {
  constructor(){
    super()
    this.state = {
      robots:[],
      searchField:"",
      checked:false
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then( users => this.setState({ robots: users}))
  }

  ChangeField = (event) => {
    this.setState({
      searchField:event.target.value
    })
  }

  AlphabeticOrder = () => {
    this.setState((state) => ({
      checked: !state.checked
    }))
  }

  Compare = (a,b) =>{

    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  }
  render(){
    const { robots, searchField, checked } = this.state;
    const filteredRobots = robots.filter( robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
      || robot.email.toLowerCase().includes(searchField.toLowerCase())
    })
    console.log(filteredRobots)

    checked
    ? (filteredRobots.sort(this.Compare))
    : console.log(checked)

    return (!robots.length)
    ? <h1>Loading ... </h1>
    : (
        <div className="tc">
          <div className="bg">
            <h1>Robot Friends</h1>
            <SearchBox
              ChangeField={this.ChangeField}
              AlphabeticOrder={this.AlphabeticOrder}
             />
          </div>
            <Scroll>
              <ErrorBoundry>
                <CardList robots={filteredRobots} />
              </ErrorBoundry>
            </Scroll>
        </div>
      )

  }
}

export default App;
