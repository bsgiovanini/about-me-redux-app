import React, { Component } from 'react';
import Banner from './layout/Banner';
import ReactHighcharts from 'react-highcharts';
import Highcharts from 'highcharts';

class Home extends Component {

  getHighChartsData() {

    var colors = Highcharts.getOptions().colors,
        categories = ['Siplex','Reservoir Vigilance', 'Concrete Solutions'],
        data = [{
            y: 20,
            color: colors[1],
            drilldown: {
                name: 'Front End / Full Stack Developer',
                categories: ['Obj Oriented Javascript', 'Jquery', 'CSS3', 'Bootstrap', 'HTML5', 'C# MVC5', 'NHibernate', 'Oracle DB'],
                data: [4, 4, 2.5, 1.5, 3, 2, 1.5, 1.5],
                color: colors[1]
            }
        }, {
            y: 60,
            color: colors[2],
            drilldown: {
                name: 'Front End / Full Stack Developer',
                categories: ['Obj Oriented Javascript', 'Dojo Toolkit', 'Highcharts', 'CSS3', 'HTML5', 'Grails','Oracle DB'],
                data: [12, 11, 7, 7, 8, 10, 5],
                color: colors[2]
            }
        },
        {
            y: 20,
            color: colors[0],
            drilldown: {
                name: 'Back End Developer',
                categories: ['Weblogic Portal', 'Oracle DB', 'Hibernate', 'Java 5.0'],
                data: [5, 5, 5, 5],
                color: colors[0]
            }
        }],
        browserData = [],
        versionsData = [],
        i,
        j,
        dataLen = data.length,
        drillDataLen,
        brightness;


    // Build the data arrays
    for (i = 0; i < dataLen; i += 1) {

        // add browser data
        browserData.push({
            name: categories[i],
            y: data[i].y,
            color: data[i].color
        });

        // add version data
        drillDataLen = data[i].drilldown.data.length;
        for (j = 0; j < drillDataLen; j += 1) {
            brightness = 0.2 - (j / drillDataLen) / 5;
            versionsData.push({
                name: data[i].drilldown.categories[j],
                y: data[i].drilldown.data[j],
                color: Highcharts.Color(data[i].color).brighten(brightness).get()
            });
        }
    }

    // Create the chart
    return {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Technologies per Companies'
        },
        yAxis: {
            title: {
                text: 'Job Experience'
            }
        },
        plotOptions: {
            pie: {
                shadow: false,
                center: ['50%', '50%']
            }
        },
        tooltip: {
        	formatter: function () {
                return this.point.name;
            }
        },
        series: [{
            name: 'Companies - years',
            data: browserData,
            size: '60%',
            dataLabels: {
                formatter: function () {
                    return this.y > 5 ? this.point.name : null;
                },
                color: '#000000',
                distance: -30
            }
        }, {
            name: 'Technologies',
            data: versionsData,
            size: '80%',
            innerSize: '60%',
            dataLabels: {
                formatter: function () {
                    // display only if larger than 1
                    return this.y > 1 ? '<b>' + this.point.name + '</b> ' : null;
                }
            }
        }]
    }
  };


  render() {

    return (

      	<section className="posts">
  
  			<div id="who-i-am" className="row">


  				<div className="col-xs-12 title">	
  					<h1>Welcome to my World!</h1>
  				</div>

  				<div className="col-xs-12">	
  					<img src="me.jpg" className="img-responsive img-circle pic" alt="Me" width="200" height="200" />
  				</div>
  				
  				<div className="col-xs-12">
  					<p>Brazilian guy who <em>believes</em> that <em>knowledge</em> has <em>no limit</em>. Ambitious, tenacious, and well-accomplished IT professional working essentially as Full stack developer in the past 10 years. I build <em>scalable</em>, <em>maintainable</em> and <em>secure</em> enterprise web applications. </p>
  					<p>Nowadays, I've been specializing in Javascript and related Front End Frameworks. Moreover, I have a passion for computational intelligence and Drones applications. My knowledge includes Web Development technologies such as Javascript, CSS, HTML5, Java, C#, Grails, Agile Methodologies, Unit Testing. Besides, I have knowledge in UAV's with experience in Python, C++, UAVs and Artificial Intelligence algorithms.</p>
  				</div>
			    
			</div>
  
		  	<div id="skills" className="row">
		  		<div className="col-xs-12">
  					<h1>Technologies I build with:</h1>
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
					<em><b>*</b> This site is built with these technologies. View the <a href="https://github.com/bsgiovanini/about-me-redux-app" target="_blank">github repo here</a>.</em><br/>
					<em><b>**</b> Yep, I know React can be used on the server side too. This site is Isomorphical rendered.</em>
				</div>

  			</div>

  			


  			<div className="row">

  				<div className="col-xs-12">
  					<h1>Companies I have worked with:</h1>
  				</div>
  				<div className="col-xs-12">
  					<ul className="clients">
						<div className="col-lg-6 col-sm-12">
							<a href="http://www.petrobras.com.br" target="_blank"><img src="Logo_petrobras.gif" className="img-responsive pic" alt="Petrobras" width="150" height="100" /></a>
						</div>

						<div className="col-lg-6 col-sm-12">
							<a href="http://www.concretesolutions.com.br" target="_blank"><img src="Logo_ConcreteSolutions.png" className="img-responsive pic" alt="Concrete Solutions" width="150" height="100" /></a>
						</div>
					</ul>
  				</div>
			</div>

			<div className="row">
  				<div className="col-xs-12">
  					<ReactHighcharts config={this.getHighChartsData()}></ReactHighcharts>
  				</div>
  			</div>

			<div className="row with-background">
				<div className="col-xs-12">
					<h1>Contact</h1>
				</div>
				<div className="col-xs-12">
					<p className="contact-text">Contact me at <em>bsgiovanini(at)gmail.com</em> or call <em>+55 21 99727 2664</em></p>
				</div>
			</div>

			<Banner />

  		</section>
  
    );
  }
}

export default Home;