import React, { Component } from 'react';
import './styles/index.scss';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Home from './components/Home';
import classNames from 'classnames';


class Main extends Component {

  constructor(){
    super();
    this.eventToggleSidebar = this.eventToggleSidebar.bind(this)
  }

  eventToggleSidebar(e) {
    e.preventDefault();
    this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  render() {
    const { layout, toggleSidebar } = this.props;
    const { sidebarOpen } = layout;
    const layoutClass = classNames({open : sidebarOpen});
    
    return (
      <div className={layoutClass}> 
        <Sidebar layout={layout} toggleSidebar={toggleSidebar} />      
        <div className="wrap">
          <Header />
          <div className="container content">
            {!this.props.children && <Home layout={layout} toggleSidebar={toggleSidebar} />}
            {this.props.children}
          </div>
        </div>
        <label className="sidebar-toggle" onClick={this.eventToggleSidebar}></label>
      </div>
    );
  }
}

export default Main;