import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Menu from './Menu';
import ChatList from './ChatList';


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div className='ui container'>
        <Menu />
        <ChatList />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
