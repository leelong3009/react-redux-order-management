import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import NavBar from './components/navigation/NavBar';
import SideBar from './components/navigation/SideBar';
import Content from './components/Content';
import { Provider } from 'react-redux';
import store from './store/configureStore';

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
