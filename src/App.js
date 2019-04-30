import React from 'react';
import './App.css';
import axios from 'axios';

import Character from './Character';

// To do Ajax in a React app:
// 0. optional: install axios
// 1. you need a class component
// 2. add ajax requests (componentDidMount is the "earliest")

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 1,
      characters: [] // By default, set your state to an empty
    };
  }

  componentDidMount() {
    // 1. What is this?
    // - it's a "React Lifecycle Method"

    // 2. When is it called?
    // - it is called right after the very first .render()

    // 3. Who calls it?
    // - React will call the method for you.

    // 4. When do I need it?
    // - it's usefull for starting timers (using setInterval or requestAnimationFrame)
    // - or if you're fetching data from an API to load to the component's state
  }

  componentWillUnmount() {
    // When does this get called?
    // If the component has already been drawn to the page
    // and it will no longer be drawn to the page, React will call this method for you
    // - Examples: Using React Router to switch between "screens" or a ternary conditionally rendering a component
  }

  render() {
    return (
      <div>
        <button onClick={this._decrementPageNumber}>previous</button>
        <button onClick={this._incrementPageNumber}>next</button>
        {this.state.characters.map((c, i) => <Character key={i} character={c} />)}
      </div>
    );
  }

  _getCharactersForPage = async () => {
    const response = await axios.get(`https://www.anapioficeandfire.com/api/characters?page=${this.state.pageNumber}&pageSize=10`);
    console.log(response.data);
    this.setState({
      characters: response.data
    }, () => {
      console.log('done setting state');
    })
  }

  _incrementPageNumber = () => {
    this.setState({
      pageNumber: this.state.pageNumber + 1
    }, () => {
      this._getCharactersForPage();
    })
  }

  _decrementPageNumber = () => {
    this.setState({
      pageNumber: this.state.pageNumber - 1
    }, this._getCharactersForPage); // equivalent alternative version to the one in _incrementPageNumber
  }
  
}

export default App;
