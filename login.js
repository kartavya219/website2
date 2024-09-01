
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyDGckQfAmZN5iV7YtGLJibnfqwu3PjS1Nk",
    authDomain: "gurmehar-b5cc1.firebaseapp.com",
    projectId: "gurmehar-b5cc1",
    storageBucket: "gurmehar-b5cc1.appspot.com",
    messagingSenderId: "249662286891",
    appId: "1:249662286891:web:556fda9098beed95c40e6e",
    measurementId: "G-GCM8HHQ279"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();


const submit = document.getElementById('submit');

submit.addEventListener("click", function (event) {
    event.preventDefault()

    const email = document.getElementById('enrollmentNo').value;
    const password = document.getElementById('password').value;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            
            if (email == '102316120@thapar.edu' ){
                window.location.href = "1\\1.html"
            }
            else if (email == '102316188@thapar.edu' ){
                window.location.href = "2\\2.html"
            }
            else if (email == '102316100@thapar.edu' ){
                window.location.href = "3\\3.html"
            }
            else if (email == '102316110@thapar.edu' ){
                window.location.href = "4\\4.html"
            }
            
            


        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Invalid ID/Password")
        });

})