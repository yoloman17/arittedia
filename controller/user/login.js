import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";
import { getDatabase,ref,update,get,child} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";


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

login.addEventListener('click',(e)=>{
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var select=document.getElementById("rol");
    var options=document.getElementsByTagName("option");
    var rol;
    var encrypt_password = encPass(password.value);

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const last_login=Date();
        const dbref=ref(database);
        if((options[select.value-1].innerHTML)=='Profesor'){
            get(child(dbref,'user/Teacher/' + user.uid))
            .then((snapshot)=>{
                if(snapshot.exists()){
                    rol=snapshot.val().Rol;
                    update(ref(database, 'user/Teacher/' + user.uid), {
                        Último_ingreso: last_login,
                        Contraseña: encrypt_password,
                    }
                    ).then(()=>{
                        window.location.href="/views/teacher/homePage/homePage.html";                
                    })
                }
                else{
                    Swal.fire({
                        title:'ARITTEDIA',
                        text: 'El usuario no es profesor',
                        icon: 'error'
                    });
                    form.reset(); 
                }
            })
            .catch((error)=>{
                alert('error1');
            }); 
        } 
            
        else if((options[select.value-1].innerHTML)=='Estudiante'){
            get(child(dbref,'user/Student/' + user.uid))
            .then((snapshot)=>{
                if(snapshot.exists()){
                    rol=snapshot.val().Rol;
                    update(ref(database, 'user/Student/' + user.uid), {
                        Último_ingreso: last_login,
                        Contraseña: encrypt_password,
                    }
                    ).then(()=>{
                        window.location.href="/views/student/homePage/homePage.html";                 
                    })
                    
                }
                else{
                    Swal.fire({
                        title:'ARITTEDIA',
                        text: 'El usuario no es estudiante',
                        icon: 'error'
                    });
                    form.reset();  
                }
            })
            .catch((error)=>{
                alert('error2');
            }); 
        }
        else if((options[select.value-1].innerHTML)=='Elige una opción'){
            Swal.fire({
                title:'ARITTEDIA',
                text: 'Selecciona un rol',
                icon: 'error'
            });
            form.reset();            
        }            
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire({
            title:'ARITTEDIA',
            text: 'El correo, el rol o la contraseña son incorrectos',
            icon: 'error'
        });
        form.reset();
    });
});

function encPass(password){
    var encrypted = btoa(password);
    return encrypted
}












