import React from 'react';
import ReactHighcharts from 'react-highcharts';
import Highcharts from 'highcharts';
import Heatmap from 'highcharts-heatmap';
import Treemap from 'highcharts-treemap';

class TechDrillDownMap extends React.Component {

	getConfig () {
		var data = {
			'Front End Development': {
				'JavaScript': {
					'React.js': '49.3',
					'Redux': '50.0',
					'Dojo Toolkit': '50.1',
					'Vanilla JavaScript': '50.4',
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
				'JavaScript': {
					'Express.js': '50.8',
					'Node.js': '50.0'
				},
				'JVM':{
					'Groovy and Grails': '100',
					'JAVA': '50'
				},
				'C#': {
					'MVC5': '100',
					'NUnit': '30'
				},  
				'Ruby': {
					'Rails': '100'
				},
				'DataBase': {
					'Oracle': '50',
				},
				'ORM': {
					'Hibernate': '30',
					'NHibernate': '30',
					'Gorm': '30'            
				}
			},
			'Miscelaneous': {
				'Deploy': {
					'Jenkins': '20',
					'Docker': '20',
					'CDN': '20'
				},
				'Version Control': {
					'Git': '20',
					'SVN': '20'
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
				text: 'Tech Drilldown Chart'
			}
		};

	}

	render () {

		Heatmap(Highcharts);
		Treemap(Highcharts);

		return (
			<ReactHighcharts config={this.getConfig()}></ReactHighcharts>
		)

		
	}
}

export default TechDrillDownMap;