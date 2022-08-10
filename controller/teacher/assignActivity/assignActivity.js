import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getDatabase,set,ref,child,get,update} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";
import { getAuth,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";

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
var activitiesStudent=[];

//------------------get buttons------------------

var assignTemplete1=localStorage.getItem("template1");

//------------------get board------------------

var boardTemplate1=localStorage.getItem("boardTemplate1");

//------------------close window------------------

window.addEventListener('beforeunload',function(e){
  e.preventDefault();
  e.returnValue='';
  if(e.cancelable==true){
    localStorage.removeItem("template1");
    localStorage.removeItem("boardTemplate1");
  }

})

//------------------assign activity------------------

assignActivity.addEventListener('click',(e)=>{
  var cont=0;
  if(assignTemplete1=='true'){
    //prueba.insertAdjacentHTML('afterend',boardTemplate1);
    if(verify()==true){
      var assignNameActivity=document.getElementById('assignNameActivity').value;
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const dbref=ref(database);
          const uid = user.uid;
          get(child(dbref,'user/Teacher/'+user.uid+'/'))
          .then((snapshot)=>{
              if(snapshot.exists()){
                if(snapshot.val().Actividad_asignada!=null){
                  for(var i=0;i<snapshot.val().Actividad_asignada.length;i++){
                    if(snapshot.val().Actividad_asignada[i]==assignNameActivity.toLowerCase()){
                      cont++;
                      Swal.fire({
                        title:'ARITTEDIA',
                        text: 'El nombre que ingresate ya está en uso',
                        icon: 'error'
                      })
                      form.reset(); 
                    }
                  }
                }
                if((verifyDate()==true)&&(cont==0)){
                  confirmMessage();
                }
                if(verifyDate()!=true){
                  Swal.fire({
                    title:'ARITTEDIA',
                    text: 'La fecha que ingresaste es incorrecta',
                    icon: 'error'
                  })
                  form.reset();  
                }
              }
          });
        }
        else{
          Swal.fire({
            title:'ARITTEDIA',
            text: 'No hay usuarios logueados',
            icon: 'error'
          })
          form.reset();
        }
      });
    }
    else{
      Swal.fire({
        title:'ARITTEDIA',
        text: 'Debes llenar todos los campos',
        icon: 'error'
      })
      form.reset();
    }
  }
});


//------------------verify inputs------------------

function verify(){
  var assignNameActivity=document.getElementById('assignNameActivity').value;
  var startDate=document.getElementById('startDate').value;
  var finishDate=document.getElementById('finishDate').value;
  var startHour=document.getElementById('startHour').value;
  var finishHour=document.getElementById('finishHour').value;

  if((assignNameActivity.length==0)||(startDate.length==0)||(finishDate.length==0)||(startHour.length==0)||
  (finishHour.length==0)){
    return false;
  }
  else{
    return true;
  }
  
}

//------------------ConfirmMessage------------------

function confirmMessage(){
  Swal.fire({
    title: '¿Estás seguro que quieres asignar esta actividad?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Sí, asígnala!'
  }).then((result) => {
    if (result.isConfirmed) {
      setData();
      setIdActivity();
      setIdActivityStudent();
      localStorage.removeItem("template1");
      localStorage.removeItem("boardTemplate1");
      Swal.fire({
        title: 'Tu actividad ya fue asignada',
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Ok',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeydownPropagation: false
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href="/views/teacher/homePage/homePage.html";
        }
      });
    }
  });
}

//------------------verify Dates------------------

function verifyDate(){
  var startDate=document.getElementById('startDate').value;
  var finishDate=document.getElementById('finishDate').value;
  var startHour=document.getElementById('startHour').value;
  var finishHour=document.getElementById('finishHour').value;

  var actualDate=new Date();
  var selectDateStart=new Date(startDate+'T'+startHour);
  var selectDateFinish=new Date(finishDate+'T'+finishHour);

  if((selectDateStart<actualDate)||(selectDateStart>=selectDateFinish)){
    return false;
  }
  else{
    return true;
  }
}

//------------------set data------------------

function setData(){
  var assignNameActivity=document.getElementById('assignNameActivity').value;
  var startDate=document.getElementById('startDate').value;
  var finishDate=document.getElementById('finishDate').value;
  var startHour=document.getElementById('startHour').value;
  var finishHour=document.getElementById('finishHour').value;

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      
      set(ref(database,'Activity/'+assignNameActivity.toLowerCase()+finishDate+finishHour+startDate+startHour+'/'),{
        Nombre_actividad: assignNameActivity,
        Fecha_inicio: startDate,
        Fecha_fin: finishDate,
        Hora_inicio: startHour,
        Hora_fin: finishHour,
        Actividad: boardTemplate1,
        Uid_teacher: user.uid,
        link: addActivity(),
        Estado: "Asignada"
      });
  
    }
  });

}

//------------------set IdactivityStudent------------------

function setIdActivityStudent(){
  var assignNameActivity=document.getElementById('assignNameActivity').value;
  var startDate=document.getElementById('startDate').value;
  var finishDate=document.getElementById('finishDate').value;
  var startHour=document.getElementById('startHour').value;
  var finishHour=document.getElementById('finishHour').value;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      const dbref=ref(database);
      get(child(dbref,'user/Student/'))
      .then((snapshot)=>{
        if(snapshot.exists()){
          if(snapshot.val().Actividad_asignada!=null){
            for(var i=0;i<snapshot.val().Actividad_asignada.length;i++){
              activitiesStudent.push(snapshot.val().Actividad_asignada[i].toLowerCase());
            }
          }
        }
        activitiesStudent.push(assignNameActivity.toLowerCase()+finishDate+finishHour+startDate+startHour);
        update(ref(database, 'user/Student/'), {
          Actividad_asignada: activitiesStudent
        });
      });
    } 
    
  });
}
//------------------set Idactivity------------------

function setIdActivity(){
  var assignNameActivity=document.getElementById('assignNameActivity').value;
  var startDate=document.getElementById('startDate').value;
  var finishDate=document.getElementById('finishDate').value;
  var startHour=document.getElementById('startHour').value;
  var finishHour=document.getElementById('finishHour').value;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      const dbref=ref(database);
      get(child(dbref,'user/Teacher/'+user.uid+'/'))
      .then((snapshot)=>{
        if(snapshot.exists()){
          if(snapshot.val().Actividad_asignada!=null){
            for(var i=0;i<snapshot.val().Actividad_asignada.length;i++){
              activities.push(snapshot.val().Actividad_asignada[i].toLowerCase());
            }
          }
        }
        activities.push(assignNameActivity.toLowerCase()+finishDate+finishHour+startDate+startHour);
        update(ref(database, 'user/Teacher/'+user.uid+'/'), {
          Actividad_asignada: activities
        });
      });
    } 
    
  });
}

//------------------add activity------------------

function addActivity(){
  var link;

  if(assignTemplete1=='true'){
    link="/views/teacher/templates/template1/AssignTemplate1.html"
  }

  return link;

}





