// JavaScript authentication file
$(function() {
    var config = {
    apiKey: "AIzaSyBIvQkQZ6OIWkUBS7-3TutHJ2m6BqIajHI",
    authDomain: "signinsignup-3ebdb.firebaseapp.com",
    databaseURL: "https://signinsignup-3ebdb.firebaseio.com",
    storageBucket: "signinsignup-3ebdb.appspot.com",
    messagingSenderId: "858941382174"
    };
    firebase.initializeApp(config);
    // Initialize Firebase

    // Sign Up: Function to create account on firebase, then redirect to index.html
    var signUp = function() {
        // Get email, password, and display name
        //give them all variables
            var dname = $('#dname').val();
            var email = $('#email').val();
            var psw = $('#psw').val();
            console.log(dname, email, psw);
        // Create user, then set the user's display name

        firebase.auth().createUserWithEmailAndPassword(email, psw).then(function(user){     
            user.updateProfile({
                displayName:dname //set display name to display name
            }).then(function(){
                window.location = 'index.html'
            })
            //displays error message
        }).catch(function(error) {
                alert(error.message);

        }

    };

    // SignIn: Function to authenticate on Firebase, then redirect to index.html
    var signIn = function() {
        var email = $('#email').val();
        var psw = $('#psw').val();
        // Get email and password
        firebase.auth().createUserWithEmailAndPassword(email, psw).then(function(user){  
            window.location = 'index.html'
        }) .catch(function(error) {
                alert(error.message);

        // Authenticate using email and password, then redirect

    };

    // Sign out: Function to log a user out of firebase
    var signOut = function() {
        // Sign out, then redirect



    };

    // Assign event lister to form submission
    $('form').on('submit', function(event){
        event.preventDefault();
        var formId = $('signup').attr('signup');
        if (formId == 'signup') {
            signUp();
        } else if (formId == 'signin') {
            signIn();
        }
    });


    // Assign click event to logout button



    // Authentication Change: see if a user is already signed in, and redirect

            // Rediriect to index.html if there is a user and the pathname isn't '/'

            // Redirect to sign-in if there is NOT a user and the pathname IS '/'

});
