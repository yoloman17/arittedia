import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getDatabase,ref,child,get} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";
import { getAuth, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";

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
const database = getDatabase(app);
const auth = getAuth();

var activity=localStorage.getItem('nameActivities');

onAuthStateChanged(auth, (user) => {
  if (user) {
    const dbref=ref(database);
    const uid = user.uid;
    get(child(dbref,'Activity/'+activity+'/'))
    .then((snapshot)=>{
        if(snapshot.exists()){
            mainBoard.insertAdjacentHTML('afterbegin',snapshot.val().Actividad);
        }
    });
  }
});