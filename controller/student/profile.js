import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getAuth, onAuthStateChanged, deleteUser} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";
import { getDatabase,ref,get,child, remove} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";


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
  if (user) {
    const uid = user.uid;
    const dbref=ref(database);
    get(child(dbref,"user/Student/"+user.uid))
    .then((snapshot)=>{
        if(snapshot.exists()){
            Name.value=snapshot.val().Nombre.toUpperCase()+" "+snapshot.val().Apellido.toUpperCase();
            Email.value=snapshot.val().Correo.toUpperCase();
            Password.value=snapshot.val().Contraseña;
        }
    });

  } else {
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
});

logout.addEventListener('click',(e)=>{
  Swal.fire({
      title: '¿Estás seguro que quieres cerrar sesion?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Sí, Ciérrala!'
    }).then((result) => {
      if (result.isConfirmed) {
        auth.signOut();
        window.location.href="/views/user/homePage/homePage.html";
      }
    });
});

delete1.addEventListener('click',(e)=>{
const user = auth.currentUser;
Swal.fire({
  title: '¿Estás seguro que quieres eliminar tu cuenta?',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  cancelButtonText: 'Cancelar',
  confirmButtonText: 'Sí, Elimínala!'
}).then((result) => {
  if (result.isConfirmed) {
    deleteUser(user).then(() => {
      remove(ref(database,"user/Student/"+user.uid))
      .then(()=>{
        window.location.href="/views/user/homePage/homePage.html";
      })
      .catch((error)=>{
        Swal.fire({
          title:'ARITTEDIA',
          text: 'La cuenta que quiere eliminar no existe',
          icon: 'error'
        });           
      })
    }).catch((error) => {
      Swal.fire({
        title:'ARITTEDIA',
        text: 'La cuenta que quiere eliminar no existe',
        icon: 'error'
      });       
    });
    
  }
}); 

});

