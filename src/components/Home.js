import React, { Component } from 'react';
import Banner from './layout/Banner';
import TechDrillDownMap from './TechDrillDownMap';
import TimeLine from './TimeLine';
import Projects from './Projects';

class Home extends Component {


	renderAboutText(text) {
		var obj = {__html: text};
		return (<div dangerouslySetInnerHTML={obj}></div>);
	}
	

	render() {

		//this.props.aboutmeText();

		return (

			<section className="posts">

			<div id="about-me" className="row">


			<div className="col-xs-12 title">	
			<h1 className="section">About Me</h1>
			</div>

			<div className="col-xs-12">	
			<img src="me.png" className="img-responsive img-circle pic" alt="Me" width="200" height="200" />
			</div>

			<div className="col-xs-12">
				{this.renderAboutText(this.props.home.aboutmeText)}
			</div>

			</div>

			<div id="skills" className="row">
				<div className="col-xs-12">
					<h1 className="section">Skills</h1>
				</div>
			</div>
			<div className="row">		

				<div className="col-xs-12">
					<TechDrillDownMap></TechDrillDownMap>
				</div>
				<div className="col-xs-12">
					<p> This site is built with <img src="react.png" width="120" height="35" className="tech-logo img-responsive" alt="React.js"></img> and 
					<img src="redux.png" width="120" height="30" className="tech-logo img-responsive" alt="Redux"></img> and lives in <em>CDN Netlify</em>. View the <a href="https://github.com/bsgiovanini/about-me-redux-app" target="_blank">github repo here</a></p>
				</div>

			</div>

			<div id="projects" className="row">
				<div className="col-xs-12">
					<h1 className="section">Projects</h1>
				</div>

				<div className="col-xs-12">
					<p>Here are some personal projects I have developed during my free time</p>
				</div>

				<div className="col-xs-12"> 
					<Projects></Projects>
				</div>
			</div>

			<div id="history" className="row">
				<div className="col-xs-12">
					<h1 className="section">My History</h1>
				</div>

				<div className="col-xs-12"> 
					<TimeLine></TimeLine>
				</div>
			</div>

			<div id="contact" className="row with-background">
			<div className="col-xs-12">
			<h1>Contact</h1>
			</div>
			<div className="col-xs-12">
			<p className="contact-text">Contact me at <em>mr(at)brunogiovanini.com</em> or call <em>+55 21 99727 2664</em></p>
			</div>
			</div>


			<Banner />

			</section>

		);
	}
}

export default Home;