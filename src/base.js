import Firebase from 'firebase';

const app = Firebase.initializeApp({
	apiKey: "AIzaSyBDCtUUQrOICCbwrqRcXZAqCSegpJxNaos",
    authDomain: "about-me-redux-app-bsg.firebaseapp.com",
    databaseURL: "https://about-me-redux-app-bsg.firebaseio.com"
});

export default app.database();