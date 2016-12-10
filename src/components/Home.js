import React, { Component } from 'react';
import Banner from './layout/Banner';

class Home extends Component {


  render() {

    return (

      	<section className="posts">
  
  			<div id="who-i-am" className="row">


  				<div className="col-xs-12 title">	
  					<h2>About Me</h2>
  				</div>

  				<div className="col-xs-12">	
  					<img src="me.jpg" className="img-responsive img-circle pic" alt="Me" width="200" height="200" />
  				</div>
  				
  				<div className="col-xs-12">
  					<h2>I build <em>scalable</em>, <em>maintainable</em> and <em>secure</em> enterprise web applications.</h2>
    				<p>for <em>agencies</em>, <em>bluechips</em>, <em>start-ups</em> and sometimes, <em>myself</em>. <a href="#"> Find out More</a></p>
  				</div>
			    
			</div>
  
		  	<div id="skills" className="row">
		  		<div className="col-xs-12">
  					<h2>Technologies I build with:</h2>
  				</div>
		  	</div>
		  	<div className="row">		
		  		<div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
		  			<h4>Client Side JS</h4>
					<ul>
						<li><em>Backbone</em></li>
						<li><em><b>*</b><b>*</b>React</em>
							<ul>
								<li><em><b>*</b>Redux</em></li>
								<li><em>Flux</em></li>
							</ul>
						</li>
						<li>Elm</li>
						
					</ul>
		  		</div>
		  		<div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
		  			<h4>Server Side JS</h4>
					<ul>
						<li><em>MongoDB</em></li>
						<li><em><b>*</b>Node</em>
							<ul>
								<li><em><b>*</b>Express</em></li>
								<li><em>Hapi</em></li>
							</ul>
						</li>
					</ul>
		  		</div>

		  		<div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
		  			<h4>Deployment</h4>
					<ul>
						<li><em><b>*</b>Nginx</em></li>
						<li><em><b>*</b>Webpack</em></li>
						<li><em>Gulp</em></li>
						<li><em>Grunt</em></li>
					</ul>
		  		</div>

		  		<div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
		  			<h4>Testing</h4>
					<ul>
						<li><em>Jasmine</em></li>
						<li><em>Karma</em></li>
						<li><em>Protractor</em></li>
						<li><em>Jest</em></li>
					</ul>
		  		</div>

		  		

				<div className="col-xs-12">
					<em><b>*</b> This site is built with these technologies. View the <a href="https://github.com/bsgiovanini/portfolio-redux-app">github repo here</a>.</em><br/>
					<em><b>**</b> Yep, I know React can be used on the server side too. This site is Isomorphical rendered.</em>
				</div>

  			</div>


  			<div className="row">

  				<div className="col-xs-12">
  					<h2>Companies I have worked with:</h2>
  				</div>
  				<div className="col-xs-12">
  					<ul className="clients">
						<li className="petro-logo">
							<h3>Petrobras</h3>

						</li>

						<li className="cs-logo">
							<h3>Concrete Solutions</h3>
						</li>
					</ul>
  				</div>
				

			</div>

			<Banner />

  		</section>
  
    );
  }
}

export default Home;