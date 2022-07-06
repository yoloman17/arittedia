import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getAuth, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";
import { getDatabase, ref, get, child } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyBn40G81kdADOJHVvYd0Xdt2Bd9SvQQrYQ",
    authDomain: "arittedia.firebaseapp.com",
    projectId: "arittedia",
    storageBucket: "arittedia.appspot.com",
    messagingSenderId: "365791144611",
    appId: "1:365791144611:web:3c78dfa2121591d2c36d16",
    measurementId: "G-H8G5KJ25BD"
    
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);

onAuthStateChanged(auth, (user) => {
  if (!user) {
    Swal.fire({
        title: 'No hay usuarios logueados',
        icon: 'error',
        confirmButtonColor: '#d33',
        confirmButtonText: 'Ok',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeydownPropagation: false
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href="/views/user/loginPage/loginPage.html";
        }
      });
  }
  else {
    const uid = user.uid;
    const dbref=ref(database);
    get(child(dbref,"user/Student/"+user.uid))
    .then((snapshot)=>{
        if(snapshot.exists()){
          Swal.fire({
            title: 'Esta página es solo para profesores',
            icon: 'error',
            confirmButtonColor: '#d33',
            confirmButtonText: 'Ok',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            stopKeydownPropagation: false
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href="/views/user/loginPage/loginPage.html";
            }
          });
          
        }
    });
  } 

});