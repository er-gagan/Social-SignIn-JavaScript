function facebookSignIn() {
  var provider = new firebase.auth.FacebookAuthProvider();
  // provider.addScope('user_birthday');
  // firebase.auth().languageCode = 'it';

  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      // var credential = result.credential;

      // The signed-in user info.
      var user = result.user;
      console.log(user.displayName);
      console.log(user.email);
      console.log(user.photoURL);
      console.log(user.uid);
      console.log(user.providerData[0].providerId);
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      // var accessToken = credential.accessToken;

      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;

      // ...
    });
}
