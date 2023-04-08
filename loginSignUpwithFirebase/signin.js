
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSPXMjU-bhz3pJhvZbGZ_O9hRYH0wkjBU",
  authDomain: "wealth-wizards5000.firebaseapp.com",
  databaseURL: "https://wealth-wizards5000-default-rtdb.firebaseio.com",
  projectId: "wealth-wizards5000",
  storageBucket: "wealth-wizards5000.appspot.com",
  messagingSenderId: "782499607192",
  appId: "1:782499607192:web:1102017a58ea71700496ed"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

  
//   console.log(app);

function checkLogin() {
  const userLoggedIn = localStorage.getItem("IsLoggedIn");

  if (userLoggedIn) {
    // User is logged in, so redirect to the home page
    window.location.href = '/home.html';
  } else {
    // User is not logged in, so do nothing (stay on the sign-in page)
    console.log("User is not logged in.");
  }
}

checkLogin();


  //----- New Registration code start	  
  const auth = getAuth(app);
  
  //----- End

  //----- Login code start	  
  document.getElementById("signInBtn").addEventListener("click", function() {
      var email =  document.getElementById("email").value;
      var password = document.getElementById("password").value;

      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        alert(user.email+" Login successfully!!!");
        localStorage.setItem("IsLoggedIn",true)
        //Redirect to different page after login
        window.location.href = '/home.html';
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        alert(errorMessage);
      });		  		  
  });
  //----- End

  //----- Logout code start	  
  // document.getElementById("logout").addEventListener("click", function() {
  //     signOut(auth).then(() => {
  //         // Sign-out successful.
  //         console.log('Sign-out successful.');
  //         alert('Sign-out successful.');
  //         document.getElementById('logout').style.display = 'none';
  //       }).catch((error) => {
  //         // An error happened.
  //         console.log('An error happened.');
  //       });		  		  
  // });
  //----- End

  export default app;
