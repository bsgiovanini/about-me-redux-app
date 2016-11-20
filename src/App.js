import React, { Component } from 'react';
import './styles/index.scss';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Home from './components/Home';


class App extends Component {
  render() {
    return (
      <div>
        
        <div className="wrap">
          <Header />
          <div className="container content">
            <Home/>
          </div>
        </div>
        <label className="sidebar-toggle"></label>
      </div>
    );
  }
}

export default App;
