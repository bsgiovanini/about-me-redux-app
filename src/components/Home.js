import React, { Component } from 'react';
import Banner from './layout/Banner';
import ReactHighcharts from 'react-highcharts';
import Highcharts from 'highcharts';
import Heatmap from 'highcharts-heatmap';
import Treemap from 'highcharts-treemap';


class Home extends Component {

	getDrillDownData () {
		var data = {
            'Front End Development': {
                'Javascript': {
                    'React.js': '49.3',
                    'Redux': '50.0',
                    'Dojo Toolkit': '50.1',
                    'Vanilla Javascript': '50.4',
                    'JQuery': '60.3',
                    'Highcharts': '45.3',
                    'Jasmine': '40'
                },
                'CSS3': {
                	'Sass': '49.3',
                    'Bootstrap 3': '50.1',
                    'Media Queries': '50.4'                 
                },
                'HTML5': {
                	'Tags': '50.0',
                	'API': '50.0'
                }

            },
            'Back End Development': {
                'Javascript': {
                    'Express.js': '116.8',
                    'Isomorphical': '100.0'
                },
                'JVM':{
                	'Groovy and Grails': '100',
                	'JAVA 5': '50'
                },
                'C#': {
                	'MVC5': '100',
                	'NUnit': '30'
                },  
                'Ruby': {
                	'Rails 5': '100'
                },
                'DataBase': {
                	'Oracle': '50',
                	'Hibernate': '50'
                }
            }
        },
        points = [],
        techP,
        techVal,
        techI = 0,
        technologyP,
        technologyI,
        causeP,
        causeI,
        tech,
        technology,
        cause;

	    for (tech in data) {
	        if (data.hasOwnProperty(tech)) {
	            techVal = 0;
	            techP = {
	                id: 'id_' + techI,
	                name: tech,
	                color: Highcharts.getOptions().colors[techI]
	            };
	            technologyI = 0;
	            for (technology in data[tech]) {
	                if (data[tech].hasOwnProperty(technology)) {
	                    technologyP = {
	                        id: techP.id + '_' + technologyI,
	                        name: technology,
	                        parent: techP.id
	                    };
	                    points.push(technologyP);
	                    causeI = 0;
	                    for (cause in data[tech][technology]) {
	                        if (data[tech][technology].hasOwnProperty(cause)) {
	                            causeP = {
	                                id: technologyP.id + '_' + causeI,
	                                name: cause,
	                                parent: technologyP.id,
	                                value: Math.round(+data[tech][technology][cause])
	                            };
	                            techVal += causeP.value;
	                            points.push(causeP);
	                            causeI = causeI + 1;
	                        }
	                    }
	                    technologyI = technologyI + 1;
	                }
	            }
	            techP.value = Math.round(techVal / technologyI);
	            points.push(techP);
	            techI = techI + 1;
	        }
	    }
	    return {
	        series: [{
	            type: 'treemap',
	            layoutAlgorithm: 'squarified',
	            allowDrillToNode: true,
	            animationLimit: 1000,
	            dataLabels: {
	                enabled: false

	            },

	            levelIsConstant: false,
	            tooltip : {
	            	useHTML: true,
	            	pointFormat: '<b>{point.name}</b>',
	            },
	            
	            levels: [{
	                level: 1,
	                dataLabels: {
	                    enabled: true,
	                    style: {
	                    	'fontSize': "20px"
	                    }

	                },
	                borderWidth: 4,
	                borderColor: "#000000",

	    
	            }],
	            data: points
	        }],
	        title: {
	            text: ''
	        }
	    };

	}


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

  	console.log(Highcharts, Heatmap, Treemap);

	Heatmap(Highcharts);
	Treemap(Highcharts);	

	this.getDrillDownData();

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
  					<p>Nowadays, I've been specializing in Javascript and related Front End Frameworks. Moreover, I have a passion for computational intelligence and Drones applications. My knowledge includes Web Development technologies such as Javascript, CSS, HTML5, Java, C#, Grails, Agile Methodologies, Unit Testing. Besides, I have knowledge in UAV's with experience in Python, C++, UAVs and Artificial Intelligence algorithms.</p>
  				</div>
			    
			</div>
  
		  	<div id="skills" className="row">
		  		<div className="col-xs-12">
  					<h1 className="section">Skills</h1>
  				</div>
		  	</div>
		  	<div className="row">		
		  		
		  		<div className="col-xs-12">
		  			<ReactHighcharts config={this.getDrillDownData()}></ReactHighcharts>
		  		</div>

		  		

				<div className="col-xs-12">
					<p> This site is built with <img src="react.png" width="120" height="35" class="tech-logo img-responsive" alt="React.js"></img> and 
					<img src="redux.png" width="120" height="30" class="tech-logo img-responsive" alt="Redux"></img> and lives in <em>CDN Netlify</em>. View the <a href="https://github.com/bsgiovanini/about-me-redux-app" target="_blank">github repo here</a>.</p>
					
				</div>

  			</div>

  			


  			<div id="companies" className="row">

  				<div className="col-xs-12">
  					<h1 className="section">Companies I have worked with</h1>
  				</div>
  				<div className="col-xs-12">
  					<ul className="companies">
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

			<div id="contact" className="row with-background">
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