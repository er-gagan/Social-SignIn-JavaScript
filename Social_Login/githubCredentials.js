function githubSignIn() {
  var provider = new firebase.auth.GithubAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      // var credential = result.credential;

      // // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      // var token = credential.accessToken;

      // The signed-in user info.
      var user = result.user;
      console.log(user.displayName);
      console.log(user.email);
      console.log(user.photoURL);
      console.log(user.uid);
      console.log(user.providerData[0].providerId);
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
}
