import React, { Component } from 'react';
import './styles/index.scss';
import Header from './components/layout/Header';
import Home from './components/Home';


class Main extends Component {

  render() {
    
    return (    
          <div className="mainContent">
              <Header />
              <div className="container-fluid content">
                {!this.props.children && <Home/>}
                {this.props.children}
              </div>
          </div>     
        
      
    );
  }
}

export default Main;