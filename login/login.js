import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
      // Your Firebase configuration
      const firebaseConfig = {
            apiKey: "AIzaSyCttdTmQbpirrtL8h6rztxzz2rY7-cxxh0",
            authDomain: "bg-koordinate.firebaseapp.com",
            databaseURL: "https://bg-koordinate-default-rtdb.europe-west1.firebasedatabase.app",
            projectId: "bg-koordinate",
    storageBucket: "bg-koordinate.appspot.com",
    messagingSenderId: "16168187625",
    appId: "1:16168187625:web:9d9734146515b514d16278",
    measurementId: "G-7WGDCSB8WG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Function to handle sign in
function signIn() {
      const email = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.error(errorMessage);
            });
      }