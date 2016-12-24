import React, { Component } from 'react';

class Banner extends Component {

  render() {

    return (
	    <footer className="contact-banner">
      		<ul className="list-inline">
      			<li className="social-linkedin">
					<a href="https://linkedin.com/in/bsgiovanini" target="_blank"><i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i></a>
				</li>
				<li className="social-github">
					<a href="https://github.com/bsgiovanini" target="_blank"><i className="fa fa-github-square fa-3x" aria-hidden="true"></i></a>
				</li>
				<li className="social-twitter">
					<a href="https://twitter.com/bsgiovanini" target="_blank"><i className="fa fa-twitter-square fa-3x" aria-hidden="true"></i></a>
				</li>
				<li className="social-facebook">
					<a href="https://www.facebook.com/bsgiovanini" target="_blank"><i className="fa fa-facebook-square fa-3x" aria-hidden="true"></i></a>
				</li>
				<li className="social-google-plus">
					<a href="https://plus.google.com/bsgiovanini" target="_blank"><i className="fa fa-google-plus-square fa-3x" aria-hidden="true"></i></a>
				</li>
			</ul>

      	</footer>
    );
  }
}

export default Banner;