import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getDatabase,set,ref,child,get} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";
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

//------------------get buttons------------------

var assignTemplete1=localStorage.getItem("template1");

//------------------get board------------------

var boardTemplate1=localStorage.getItem("boardTemplate1");


//------------------assign activity------------------

assignActivity.addEventListener('click',(e)=>{
  if(assignTemplete1=='true'){
    //prueba.insertAdjacentHTML('afterend',boardTemplate1);
    if(verify()==true){
      var assignNameActivity=document.getElementById('assignNameActivity').value;
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const dbref=ref(database);
          get(child(dbref,'user/Teacher/'+user.uid+'/Activity/'+assignNameActivity.toLowerCase()))
          .then((snapshot)=>{
              if(snapshot.exists()){
                Swal.fire({
                  title:'ARITTEDIA',
                  text: 'El nombre que ingresate ya está en uso',
                  icon: 'error'
                })
                form.reset(); 
              }
              else if(verifyDate()==true){
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
                    localStorage.removeItem("template1");
                    localStorage.removeItem("boardTemplate1");
                    window.location.href="/views/teacher/homePage/homePage.html";
                  }
                });
              }
              else if(verifyDate()!=true){
                Swal.fire({
                  title:'ARITTEDIA',
                  text: 'La fecha que ingresaste es incorrecta',
                  icon: 'error'
                })
                form.reset();  
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
      
      set(ref(database,'user/Teacher/'+user.uid+'/Activity/'+assignNameActivity.toLowerCase()+'/'),{
        Nombre_actividad: assignNameActivity,
        Fecha_inicio: startDate,
        Fecha_fin: finishDate,
        Hora_inicio: startHour,
        Hora_fin: finishHour,
        Actividad: boardTemplate1
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





