import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";


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
const analytics = getAnalytics(app);
const auth = getAuth();
const database = getDatabase(app);
var password = document.getElementById('password').value;


register.addEventListener('click',(e) => {
    //variables
    
    var name=document.getElementById('name').value;
    var last_name=document.getElementById('last_name').value;
    var select = document.getElementById('rol');
    var options=document.getElementsByTagName("option");
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirm_password = document.getElementById('confirm_password').value;
    var encrypt_password = encPass(password.value);

    

    if((password==confirm_password)&&((options[select.value-1].innerHTML)!='Elige una opción')
        && (verify()==true)){
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ... user.uid
                sendEmailVerification(auth.currentUser);
                if(options[select.value-1].innerHTML=='Profesor'){
                    set(ref(database, 'user/Teacher/' + user.uid), {
                        Nombre: name,
                        Apellido: last_name,
                        Correo: email,
                        Rol: options[select.value-1].innerHTML,
                        Contraseña: encrypt_password,
                    }
                    
                    ).then(() => {
                        // Data saved successfully!
                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 10000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                              toast.addEventListener('mouseenter', Swal.stopTimer)
                              toast.addEventListener('mouseleave', Swal.resumeTimer)
                            }
                          })
                          
                          Toast.fire({
                            icon: 'success',
                            title: 'Usuario registrado de forma correcta. Ahora verifica tu correo'
                          }) 
                        form.reset();               
                    })
                    .catch((error) => {
                        // The write failed...
                        alert(error);
                        form.reset(); 
                    });
                }
                else if(options[select.value-1].innerHTML=='Estudiante'){
                    set(ref(database, 'user/Student/' + user.uid), {
                        Nombre: name,
                        Apellido: last_name,
                        Correo: email,
                        Rol: options[select.value-1].innerHTML,
                        Contraseña: encrypt_password,
                    }
                    
                    ).then(() => {
                        // Data saved successfully!
                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 10000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                              toast.addEventListener('mouseenter', Swal.stopTimer)
                              toast.addEventListener('mouseleave', Swal.resumeTimer)
                            }
                          })
                          Toast.fire({
                            icon: 'success',
                            title: 'Usuario registrado de forma correcta. Ahora verifica tu correo'
                          }) 
                        form.reset();                    
                    })
                    .catch((error) => {
                        // The write failed...
                        alert(error);
                        form.reset(); 
                    });
                }

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                Swal.fire({
                    title:'ARITTEDIA',
                    text: 'El correo que intenta registrar ya está en uso',
                    icon: 'error'
                });
                form.reset(); 
            });
    }else if(password!=confirm_password){
        Swal.fire({
            title:'ARITTEDIA',
            text: 'Las contraseñas no coinciden',
            icon: 'error',
            confirmButtonText:'OK'

        });
        form.reset(); 
    }
    else if(options[select.value-1].innerHTML=='Elige una opción'){
        Swal.fire({
            title:'ARITTEDIA',
            text: 'Selecciona un rol',
            icon: 'error'
        });
        form.reset(); 
    }
    else if(verify()==false){
        Swal.fire({
            title:'ARITTEDIA',
            text: 'Debe llenar todos los campos',
            icon: 'error'
        });
        form.reset();         
    }
});

function verify(){
    var name = document.getElementById('name').value;
    var last_name = document.getElementById('last_name').value;

    if((name.length==0)||(last_name.length==0)){
        return false;
    }
    else{
        return true;
    }
}

function encPass(password){
    var encrypted = btoa(password);
    return encrypted
}



