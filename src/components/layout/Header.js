import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
	    <header className="jumbotron jumbotron-bg-lg jumbotron-bg-md jumbotron-bg-sm jumbotron-bg-xs">
			<nav className="navbar navbar-default">
			    {/*Brand and toggle get grouped for better mobile display*/}
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>
			      <a className="navbar-brand" href="#"><span className="glyphicon glyphicon-home" aria-hidden="true"></span></a>
			    </div>

			    {/* Collect the nav links, forms, and other content for toggling*/}
			    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			      <ul className="nav navbar-nav">
			        <li><a href="#"><span className="glyphicon glyphicon-user" aria-hidden="true"></span><span className="hidden-sm">About Me</span></a></li>
			        <li><a href="#"><span className="glyphicon glyphicon-book" aria-hidden="true"></span><span className="hidden-sm">My Skills</span></a></li>
			        <li><a href="#"><span className="glyphicon glyphicon-cd" aria-hidden="true"></span><span className="hidden-sm">Who I Worked With</span></a></li>
			        <li><a href="#"><span className="glyphicon glyphicon-education" aria-hidden="true"></span><span className="hidden-sm">My Education</span></a></li>
			        <li><a href="#"><span className="fa fa-linkedin-square fa-lg" aria-hidden="true"></span><span className="hidden-sm">My Linkedin</span></a></li>
			        <li><a href="#"><span className="glyphicon glyphicon-cloud" aria-hidden="true"></span><span className="hidden-sm">Portfolio</span></a></li>
			      </ul>
			      <ul className="nav navbar-nav navbar-right">
			        <li><a href="#"><span className="glyphicon glyphicon-envelope" aria-hidden="true"></span><span className="hidden-sm">Contact</span></a></li>
			      </ul>
			    </div>{/*navbar-collapse*/}
			  
			</nav>
			<div className="persona">
				<h1>Bruno S. Giovanini</h1>
				<h2>Front End / Full Stack Developer</h2>
				<h4>Based in Rio de Janeiro - Brazil</h4>
			</div>
			<h4 className="dictation">"There is no personal growth, no change in your life if you never try"</h4>
			<h6 className="dictation author">Theodore Roosevelt</h6>
		</header>
		

    );
  }
}

export default Header;