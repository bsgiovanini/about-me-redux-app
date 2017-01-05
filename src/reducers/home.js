import { RECEIVE_ABOUT_ME_TEXT } from '../actions/home';

export default function home(state = {aboutmeText: ""}, action) {
  switch (action.type) {
	case RECEIVE_ABOUT_ME_TEXT:
	    return {
	    	aboutmeText : action.aboutmeText
	    };
	  default:
	    return state;
	}
}