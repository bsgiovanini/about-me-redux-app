import Firebase from '../base';

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
		console.log("Firebase", Firebase);
		Firebase.ref('/aboutmeText').on('value', snapshot => {
			dispatch(receiveAboutMeText(snapshot.val()));
		});
	}
}




