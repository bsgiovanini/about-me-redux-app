import React, { Component } from 'react';
import Banner from './layout/Banner';

class Home extends Component {


  render() {

    return (

      	<section className="posts">
  
  			<section className="post banner">
			    <h1 className="post-title">I build <em>scalable</em>, <em>maintainable</em> and <em>secure</em> enterprise web applications.</h1>
    			<p>for <em>agencies</em>, <em>bluechips</em>, <em>start-ups</em> and sometimes, <em>myself</em>. <a href="#"> Find out More</a></p>

			</section>
  
		  	<section className="post clearfix">

				<h2>Technologies I build with:</h2>

				<article className="skill-item clearfix">
					<h4>Client Side JS</h4>
					<ul className="">
						<li><em>Backbone</em></li>
						<li><em><b>*</b><b>*</b>React</em>
							<ul>
								<li><em><b>*</b>Redux</em></li>
								<li><em>Flux</em></li>
							</ul>
						</li>
						<li><em>D3</em></li>
					</ul>
				</article>


				<article className="skill-item clearfix">
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
				</article>

				<article className="skill-item clearfix">
					<h4>Testing</h4>
					<ul>
						<li><em>Jasmine</em></li>
						<li><em>Karma</em></li>
						<li><em>Protractor</em></li>
						<li><em>Jest</em></li>
					</ul>
				</article>

				<article className="skill-item clearfix">
					<h4>Deployment</h4>
					<ul className="clearfix">
						<li><em><b>*</b>Nginx</em></li>
						<li><em><b>*</b>Webpack</em></li>
						<li><em>Gulp</em></li>
						<li><em>Grunt</em></li>
					</ul>
				</article>

				<div className="exclaimation">
					<em><b>*</b> This site is built with these technologies. View the <a href="https://github.com/bsgiovanini/portfolio-redux-app">github repo here</a>.</em><br/>
					<em><b>**</b> Yep, I know React can be used on the server side too. This site is Isomorphical rendered.</em>
				</div>

  			</section>


  			<section className="post clearfix">

				<h2>Companies I have worked with:</h2>

				<ul className="clients">
					<li className="goldmans-logo">Petrobras</li>
					<li className="orange-logo">Concrete Solutions</li>
					<li className="tesco-logo">Anc</li>
					<li className="timeout-logo">Timeout</li>
					<li className="wiley-logo">John Wiley and Sons</li>
					<li className="covestor-logo">Covestor</li>
					<li className="shipserv-logo">Shipserv</li>
				</ul>

			</section>

			<Banner />

  		</section>
  
    );
  }
}

export default Home;