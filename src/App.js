import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import NavBar from './components/navigation/NavBar';
import SideBar from './components/navigation/SideBar';
import Customer from './components/pages/Customer';
import Order from './components/pages/Order';
import Product from './components/pages/Product';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavBar />
        <div id='wrapper'>
          <Router>
            <SideBar />
            <Switch>
              <Route path='/customer' component={Customer} />
              <Route path='/order' component={Order} />
              <Route path='/product' component={Product} />
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
