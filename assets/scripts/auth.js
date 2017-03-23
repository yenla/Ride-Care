(function(){
  // Initialize Firebase
const config = {
    apiKey: "AIzaSyBvFgVMLCfItT60zKYhP6CD5YGXlPaEGjY",
    authDomain: "ride-care-1490149439585.firebaseapp.com",
    databaseURL: "https://ride-care-1490149439585.firebaseio.com",
    storageBucket: "ride-care-1490149439585.appspot.com",
    messagingSenderId: "323500810844"
	
	};

	firebase.initializeApp(config);

	var database = firebase.database();

	const auth = firebase.auth();

	auth.signInAnonymously();

	auth.signOut();

	auth.onAuthStateChanged(user => {});

	// Get elemtens 

	const btnLogin = document.getElementById('btnLogin');
	const btnLogout = document.getElementById('btnLogout');


	// Click event for sign in
	btnLogin.addEventListener('click', e => {
		firebase.auth().signInAnonymously();

	});

	// Click even for sign out
	btnLogout.addEventListener('click', e => {
		firebase.auth().signOut();

	});

	// condition statement to show the log out button
	firebase.auth().onAuthStateChanged(firebaseUser => {
		console.log(firebaseUser);

		if(firebaseUser) {
			btnLogout.classList.remove('hide');
		} else {
			btnLogout.classList.add('hide');
		}

	});

}());
