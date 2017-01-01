import React, { Component } from 'react';
import Banner from './layout/Banner';
import TechDrillDownMap from './TechDrillDownMap';
import TimeLine from './TimeLine';
class Home extends Component {

	

	render() {

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
			<p>Brazilian guy who <em>believes</em> that <em>knowledge</em> has <em>no limit</em>. Ambitious, tenacious, and well-accomplished IT professional working essentially as Full stack developer in the past 10 years. I build <em>scalable</em>, <em>maintainable</em> and <em>secure</em> enterprise web applications. </p>
			<p>Nowadays, I've been specializing in Javascript and related Front End Frameworks. Moreover, I have a passion for computational intelligence and Drones applications. My knowledge includes Web Development technologies such as Javascript, CSS, HTML5, Java, C#, Grails, Agile Methodologies, Unit Testing. Besides, I have knowledge in UAV's with experience in Python, C++ and Artificial Intelligence algorithms.</p>
			<p>Welcome to my personal website! It is still under construction. Feel free to <a href="#contact">contact me</a> as you wish! More content will be avaiable soon. Enjoy it! I hope to see you soon. Cheers!</p>
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