import React from 'react';

class Projects extends React.Component {
	render() {

		return (

			<div className="project">
				<a target="_blank" href="https://bsgiovanini.github.io/percolation">
					<img src="percolation_project.png" width="200" height="100" alt="Percolation Project"/>
					<span className="project-description">Percolation</span>
				</a>
			</div> 

		);
	}
}

export default Projects;