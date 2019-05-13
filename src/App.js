import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Content from './components/Content';
import { Provider } from 'react-redux';
import { store } from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavBar />
        <div id='wrapper'>
          <SideBar />
          <Content />
        </div>
      </Provider>
    );
  }
}

export default App;
