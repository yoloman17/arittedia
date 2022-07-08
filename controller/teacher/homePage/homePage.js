/*
var activityTemplate1=localStorage.getItem("activityAssignTeacher");

if((activityTemplate1)==null){
    listAddAssignActivityTeacher.insertAdjacentHTML('afterend',"");    
}
else{
    listAddAssignActivityTeacher.insertAdjacentHTML('afterend',activityTemplate1);    
}


*/

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getDatabase,ref,child,get} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";

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

var activity=[];

if(localStorage.getItem("activity")!=null){
    activity=JSON.parse(localStorage.getItem("activity"));
    for(var i=0;i<activity.length;i++){
        const dbref=ref(database);
        get(child(dbref,'Activity/'+activity[i].toLowerCase()))
        .then((snapshot)=>{
            if(snapshot.exists()){
                listAddAssignActivityTeacher.insertAdjacentHTML('afterend',snapshot.val().link);
            }
        });
    }
}





