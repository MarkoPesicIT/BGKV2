// Update import statements to use Firebase 9 modular SDK
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getFirestore, collection, addDoc, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";
document.addEventListener("DOMContentLoaded", function () {
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
    const auth = getAuth(app);
    const firestore = getFirestore(app);

    // Function to handle registration
    document.getElementById("regstrujse").addEventListener("click", register);

    async function register() {
      const email = document.getElementById('regusername').value;
      const password = document.getElementById('regpassword').value;
  
      // Check if email is empty
      if (!email) {
          console.error("Error: Email field is empty.");
          return; // Exit the function if email is empty
      }
  
      try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
          console.log("Success: User registered with email:", user.email);
  
          // Add user information to Firestore users collection
          await addDoc(collection(firestore, "users"), {
              email: user.email,
              password: password,
              id: user.uid // Assuming Firebase automatically generates a unique ID for users
          });
  
          console.log("User information added to Firestore collection 'users'");
      } catch (error) {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorMessage);
      }
  }
  
  

    // Function to handle sign in
    document.getElementById("signInDugme").addEventListener("click", signIn);

    async function signIn() {
        const email = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("Success: User signed in with email:", user.email);
            // You can add any further actions after successful sign-in here
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorMessage);
        }
    }
});


document.addEventListener('DOMContentLoaded', function () {
      const loginForm = document.getElementById('loginForm');
      const registracijaForm = document.getElementById('registracijaForm');
      const registracijaButton = document.getElementById('registracija');
  
      // Initially, set loginForm as active and registracijaForm as inactive
      loginForm.classList.add('activeForm');
      registracijaForm.classList.add('notActiveForm');
  
      // Add event listener to the registracija button
      registracijaButton.addEventListener('click', function () {
          // Toggle active and inactive classes between loginForm and registracijaForm
          loginForm.classList.toggle('activeForm');
          registracijaForm.classList.toggle('activeForm');
          loginForm.classList.toggle('notActiveForm');
          registracijaForm.classList.toggle('notActiveForm');
      });
  });
  
  document.addEventListener('DOMContentLoaded', function () {
        const loginForm = document.getElementById('loginForm');
        const registracijaForm = document.getElementById('registracijaForm');
        const registracijaButton = document.getElementById('nazadnaPrijavu');
    
        loginForm.classList.add('activeForm');
        registracijaForm.classList.add('notActiveForm');
    
        registracijaButton.addEventListener('click', function () {
            registracijaForm.classList.toggle('activeForm');
            loginForm.classList.toggle('activeForm');
            registracijaForm.classList.toggle('notActiveForm');
            loginForm.classList.toggle('notActiveForm');
        });
    });