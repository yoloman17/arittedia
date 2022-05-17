import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";

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

sendCode.addEventListener('click',(e)=>{
    var email=document.getElementById('email').value;
    if(verify()==true){
      sendPasswordResetEmail(auth, email)
      .then(() => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 300000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'El código ha sido enviado a su correo'
        }) 
      form.reset();  
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire({
          title:'ARITTEDIA',
          text: 'El correo que ingresó no está registrado',
          icon: 'error'
       });
       form.reset();
      });
    }
    else{
      Swal.fire({
        title:'ARITTEDIA',
        text: 'Debe digitar el correo electrónico',
        icon: 'error'
    });     
    }
});

function verify(){
  var email=document.getElementById('email').value;

  if(email.length==0){
      return false;
  }
  else{
      return true;
  }
}
