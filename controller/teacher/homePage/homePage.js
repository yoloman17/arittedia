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

var activities=[];
var nameActivities;

onAuthStateChanged(auth, (user) => {
  if (user) {
    const dbref=ref(database);
    const uid = user.uid;
    get(child(dbref,'user/Teacher/'+user.uid+'/'))
    .then((snapshot)=>{
        if(snapshot.exists()){
          if(snapshot.val().Actividad_asignada!=null){
            for(var i=0;i<snapshot.val().Actividad_asignada.length;i++){
              activities.push(snapshot.val().Actividad_asignada[i]);
              get(child(dbref,'Activity/'+activities[i]))
              .then((snapshot)=>{
                  if(snapshot.exists()){
                      if(snapshot.val().Uid_teacher==user.uid){

                        //------------------Create Elements-------------------------
                        const activity=document.createElement('div');
                        const tittleActivity=document.createElement('h2');
                        const puzzle=document.createElement('ion-icon');
                        const link=document.createElement('a');
                        const start=document.createElement('h4');
                        const finish=document.createElement('h4');

                        //listAddAssignActivityTeacher.insertAdjacentHTML('afterend',snapshot.val().link);

                        //------------------Assign values-------------------------
                        activity.className="activity";
                        puzzle.className="puzzle";
                        start.className="start";
                        finish.className="finish";

                        tittleActivity.textContent=snapshot.val().Nombre_actividad;
                        link.href=snapshot.val().link;
                        puzzle.name="extension-puzzle-outline";
                        start.textContent="Inicio: "+snapshot.val().Hora_inicio+" "+snapshot.val().Fecha_inicio;
                        finish.textContent="Fin: "+snapshot.val().Hora_fin+" "+snapshot.val().Fecha_fin;

                        //------------------Add elemtns-------------------------
                        listAddAssignActivityTeacher.appendChild(activity);
                        activity.appendChild(tittleActivity);
                        activity.appendChild(puzzle);
                        activity.appendChild(link);
                        activity.appendChild(start);
                        activity.appendChild(finish);
                        link.appendChild(puzzle);


                        //------------------Add elemtns-------------------------
                        puzzle.addEventListener('click',(e)=>{
                          nameActivities=snapshot.val().Nombre_actividad.toLowerCase()+snapshot.val().Fecha_fin+
                          snapshot.val().Hora_fin+snapshot.val().Fecha_inicio+snapshot.val().Hora_inicio;

                          localStorage.setItem('nameActivities',nameActivities);
                        })

                      }
                  }
              })
                
            }
          }
        }
    });
  }
});






