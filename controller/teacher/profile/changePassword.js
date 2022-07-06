import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getAuth, onAuthStateChanged, updatePassword} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";
import { getDatabase,ref,get,child,update} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";


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

change.addEventListener('click',(e)=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            const dbref=ref(database);
            var new_password = document.getElementById('new_password').value;
            var confirm_password = document.getElementById('confirm_password').value;
            var encrypt_password = encPass(new_password.value);
            if(verify()==true){
                if(new_password==confirm_password){
                    Swal.fire({
                        title: '¿Estás seguro que cambiar tu contraseña?',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        cancelButtonText: 'Cancelar',
                        confirmButtonText: 'Sí, cámbiala!'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                updatePassword(user, new_password).then(() => {

                                  }).catch((error) => {
                                      alert(error)
                                  });
                                update(ref(database, 'user/Teacher/' + user.uid),{
                                Contraseña: encrypt_password,
                            })
                                .then(()=>{
                                    window.location.href="/views/user/loginPage/loginPage.html";
                                })
                                .catch((error)=>{
                                        alert(error);
                                });
                            }
                        });
                }
                else{
                    Swal.fire({
                        title:'ARITTEDIA',
                        text: 'Las contraseñas deben ser iguales',
                        icon: 'error'
                    });
                    form.reset();                    
                }                         
            }
            else{
                Swal.fire({
                    title:'ARITTEDIA',
                    text: 'Debe llenar todos los campos',
                    icon: 'error'
                });
                form.reset();   
            }
      
        } 
        else {
            console.log("No hay ningún usuario logueado");
        }
    });
});

function verify(){
    var new_password = document.getElementById('new_password').value;
    var confirm_password = document.getElementById('confirm_password').value;

    if((new_password.length==0)||(confirm_password.length==0)){
        return false;
    }
    else{
        return true;
    }

    


}

function encPass(new_password){
    var encrypted = btoa(new_password);
    return encrypted
}
