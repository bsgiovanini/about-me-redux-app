import React, { Component } from 'react';
import './styles/index.scss';
import Header from './components/layout/Header';
import Home from './components/Home';
//import base from './base'


class Main extends Component {

  componentWillMount() {
    //this.ref = base.syncState('aboutmeText',{
    //  context: this.props,
   // //  state: 'aboutmeText'
   // });
  }

  compoenentWillUnmount() {
    //base.removeBinding(this.ref);
  }

  render() {
    
    return (    
          <div className="mainContent">
              <Header />
              <div className="container-fluid content">
                {!this.props.children && <Home aboutmeText={this.props.aboutmeText} home={this.props.home} />}
                {this.props.children}
              </div>
          </div>     
        
      
    );
  }
}

export default Main;