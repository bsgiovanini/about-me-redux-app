import React from 'react';

class TimeLine extends React.Component {
	render () {
		return (
			<div className="ketmain">

				<ul className="kettimeline">

				<li className="timelineunit">
				<input className="ketradio" id="unit8" name="units" type="radio" />
				<div className="meta">
				<label className="title" htmlFor="unit8">Full Stack Developer - Siplex System</label>
				<span className="ketdate">Dec 2015 - Now</span>
				<a href="#" className="job-position-hint hint--top" data-hint="Job Position - Petrobras">
				<label className="ketcircle" htmlFor="unit8" >
				<img alt="Siplex - Petrobras" src="petrobras.png" className="job-position-hint" />
				</label>
				</a>
				</div>
				<div className="ketcontent job-position-hint">
				<p>
				<b>Petrobras - Siplex System - Brazil</b><br></br>
				Evaluation of oil and field exploration opportunities. <br></br>
				Working as full stack developer, responsible for providing and supporting end-to-end web solutions (front and back-end) for geologistics requirements.
				Technologies: Object Oriented Javascript (JQuery and Bootstrap) / HTML5 / CSS3 / Microsoft environment (.NET MVC5) / Typescript / Nhibernate / Oracle DB

				</p>
				</div>
				</li>

				<li className="timelineunit">
				<input className="ketradio" id="unit7" name="units" type="radio"  />
				<div className="meta">
				<label className="title" htmlFor="unit7">M.Sc in Defense Engineering - Robotics and Computational Intelligence</label>
				<span className="ketdate">Mar 2014 - Aug 2016</span>
				<a href="#" className="hint--top" data-hint="Education - IME">
				<label className="education-hint ketcircle" htmlFor="unit7">
				<img alt="IME" src="ime.png" className="education-hint" />
				</label>
				</a>
				</div>
				<div className="ketcontent education-hint">
				<p>
				<b>Military Engineering Institute - Brazil</b><br></br>
				Subject: "A collision avoidance approach assisting remotely operated quadrotors"<br></br>
				Publications: <br></br>
				</p>
				</div>
				</li>


				<li className="timelineunit">
				<input className="ketradio" id="unit6" name="units" type="radio"  />
				<div className="meta">
				<label className="title" htmlFor="unit6">Business Intelligence Specialist</label>
				<span className="ketdate">Jan 2009 - Dec 2010</span>
				<a href="#" className="hint--top education-hint" data-hint="Education - PUC">
				<label className="ketcircle" htmlFor="unit6">
				<img alt="PUC" src="puc.png" className="education-hint"/>
				</label>
				</a>
				</div>
				<div className="ketcontent education-hint">
				<p>
				<b>Pontificial Catholic University - Brazil</b><br></br>
				Subject: "Genetic programming applied on reservoir history adjustment study"
				</p>
				</div>
				</li>

				<li className="timelineunit">
				<input className="ketradio" id="unit5" name="units" type="radio"  />
				<div className="meta">
				<label className="title" htmlFor="unit5">Full Stack Developer - Vigilance Reservoir System</label>
				<span className="ketdate">Jun 2008 - Dec 2015</span>
				<a href="#" className="hint--top job-position-hint" data-hint="Job Position - Petrobras">
				<label className="ketcircle" htmlFor="unit5">
				<img alt="Vigilance Reservoir - Petrobras" src="petrobras.png"  className="job-position-hint" />
				</label>
				</a>
				</div>
				<div className="ketcontent job-position-hint">
				<p>
				<b>Petrobras - Vigilance Reservoir System - Brazil</b><br></br>
				Monitoring reservoir production variables with graphics, integrated vision with other company systems. <br></br>
				Responsible for leading, architecting, providing and supporting solution with strong interface interaction (Javascript) to Reservoir Engineers.
				Technologies: Object Oriented Javascript (Dojo Toolkit and JQuery) / CSS / Grails / Hibernate / Tomcat / PI Systems / Oracle DB
				</p>
				</div>
				</li>

				<li className="timelineunit">
				<input className="ketradio" id="unit4" name="units" type="radio" />
				<div className="meta">
				<label className="title" htmlFor="unit4">Back End Developer</label>
				<span className="ketdate">Jul 2007 - Jan 2008</span>
				<a href="#" className="hint--top job-position-hint" data-hint="Job Position - Concrete Solutions">
				<label className="ketcircle" htmlFor="unit4">
				<img alt="Concrete Solutions" src="cs.png" className="job-position-hint" />
				</label>
				</a>
				</div>
				<div className="ketcontent job-position-hint">
				<p>
				<b>Concrete Solutions - Brazil</b><br></br>
				Americanas.com/Partnership: Developing Business JAVA EE Web solution for B2W company (http://www.b2wdigital.com/).
				Technologies: Javascript / HTML / CSS / Oracle Weblogic Portal Framework / Hibernate / Spring Framework
				</p>
				</div>
				</li>
				<li className="timelineunit">
				<input className="ketradio" id="unit3" name="units" type="radio" />
				<div className="meta">
				<label className="title" htmlFor="unit3">Bachelor in Computer Science</label>
				<span className="ketdate">May 2002 - Sep 2007</span>
				<a href="#" className="hint--top education-hint" data-hint="Education - UFRJ">
				<label className="ketcircle" htmlFor="unit3">
				<img alt="UFRJ" src="ufrj.png" className="education-hint" />
				</label>
				</a>
				</div>
				<div className="ketcontent education-hint">
				<p>
				<b>Federal University of Rio de Janeiro - Brazil</b><br></br>
				Subject: "CELLVOX: A mobile application for the vision disabled people"
				</p>
				</div>
				</li>
				</ul>

			</div>
		)
	}
}

export default TimeLine;