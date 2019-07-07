var firebase = require('firebase');
var firebaseui = require('firebaseui');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://team19-8586d.firebaseio.com"
});

var db = admin.firestore();


// ui.start('#firebaseui-auth-container', {
//     signInOptions = [
//       firebase.auth.PhoneAuthProvider.PROVIDER_ID
//     ],
//     // Other config options...
//   });

//   // Initialize the FirebaseUI Widget using Firebase.
// var ui = new firebaseui.auth.AuthUI(firebase.auth());



<h1>Welcome to My Awesome App</h1>
<div id="firebaseui-auth-container"></div>
<div id="loader">Loading...</div>

var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true;
      },
      uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none';
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: '<url-to-redirect-to-on-success>',
    signInOptions: [
     
      firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>',
    // Privacy policy url.
    privacyPolicyUrl: '<your-privacy-policy-url>'
  };

  // The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);