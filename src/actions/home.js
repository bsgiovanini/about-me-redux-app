export const REQUEST_ABOUT_ME_TEXT = 'REQUEST_ABOUT_ME_TEXT';

export function requestAboutMeText() {
  return {
    type: REQUEST_ABOUT_ME_TEXT
  };
}

export const RECEIVE_ABOUT_ME_TEXT = 'RECEIVE_ABOUT_ME_TEXT';
export function receiveAboutMeText(text) {
  return {
    type: RECEIVE_ABOUT_ME_TEXT,
    aboutmeText: text
  };
}


export function fetchText() {
	return function(dispatch) {
		dispatch(requestAboutMeText())

		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const data = `
					<p>Brazilian guy who <em>believes</em> that <em>knowledge</em> has <em>no limit</em>. Ambitious, tenacious, and well-accomplished IT professional working essentially as Full stack developer in the past 10 years. I build <em>scalable</em>, <em>maintainable</em> and <em>secure</em> enterprise web applications. </p>
					<p>Nowadays, I've been specializing in Javascript and related Front End Frameworks. Moreover, I have a passion for computational intelligence and Drones applications. My knowledge includes Web Development technologies such as Javascript, CSS, HTML5, Java, C#, Grails and Unit Testing supported by Agile Methodologies. Recently, I became M.Sc. in UAV applications having developed control algorithms in Python, C++ and studied Artificial Intelligence algorithms.</p>
					<p>Welcome to my personal website! It is still under construction. Feel free to <a href='#contact'>contact me</a> as you wish! More content will be avaiable soon. Enjoy it! I hope to see you soon. Cheers!</p>`;
				resolve(data);
			}, 10);
		}).then((data) => dispatch(receiveAboutMeText(data))); 
	}
}




