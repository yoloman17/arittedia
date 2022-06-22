import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getAuth, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";
import { getDatabase} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";


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

});

var num1=0,num2=0,result=0;
//Activity 1
let activity1=[10];

//Activity 2
let operation1=[6];
let operation2=[6];
let operation3=[6];
let operation4=[6];
let operation5=[6];
let operation6=[6];
let operation7=[6];
let operation8=[6];
let operation9=[6];
let operation10=[6];
let operation11=[6];
let operation12=[6];
let operation13=[6];
let operation14=[6];
let operation15=[6];
let operation16=[6];

//------------------get buttons------------------

const play2=document.getElementById("play");
const stop2=document.getElementById("stop");
const finisActivityTemplate1=document.getElementById("finishActivity");

//------------------play------------------

play2.addEventListener('click',(e)=>{
    clickPlay2();
})

function clickPlay2(){
    if(checkPlay==true){
        completePlay();
        textPlay();
        addPlay();
        subtractionPlay();
        
    }
}


function completePlay(){
    //objects complete
    const complete=new Complete();

    //get values
    complete.getValuesActivity1(1);

    //enable complete inputs
    complete.enableInput(1,10);

}

function textPlay(){
    //objects text
    const text=new Text();

    //disable texts
    text.disableText(1,2);
}

function addPlay(){

    //objects adds
    const add1=new OperationAdd();
    const add2=new OperationAdd();
    const add3=new OperationAdd();
    const add4=new OperationAdd();
    const add5=new OperationAdd();
    const add6=new OperationAdd();
    const add7=new OperationAdd();
    const add8=new OperationAdd();

    //get values add
    add1.getValuesAdd(1,1);
    add2.getValuesAdd(10,2);
    add3.getValuesAdd(19,3);
    add4.getValuesAdd(28,4);
    add5.getValuesAdd(37,5);
    add6.getValuesAdd(46,6);
    add7.getValuesAdd(55,7);
    add8.getValuesAdd(64,8);


    //disable input add
    add1.disableInput(1,6);
    add2.disableInput(10,15);
    add3.disableInput(19,24);
    add4.disableInput(28,33);
    add5.disableInput(37,42);
    add6.disableInput(46,51);
    add7.disableInput(55,60);
    add8.disableInput(64,69);

    //enable input add
    add1.enableInput(7,9);
    add2.enableInput(16,18);
    add3.enableInput(25,27);
    add4.enableInput(34,36);
    add5.enableInput(43,45);
    add6.enableInput(52,54);
    add7.enableInput(61,63);
    add8.enableInput(70,72);

}

function subtractionPlay(){

    //objects subtractions
    const subtraction1=new OperationSubtraction();
    const subtraction2=new OperationSubtraction();
    const subtraction3=new OperationSubtraction();
    const subtraction4=new OperationSubtraction();
    const subtraction5=new OperationSubtraction();
    const subtraction6=new OperationSubtraction();
    const subtraction7=new OperationSubtraction();
    const subtraction8=new OperationSubtraction();

    //get values subtraction
    subtraction1.getValuesSubtraction(73,9);
    subtraction2.getValuesSubtraction(82,10);
    subtraction3.getValuesSubtraction(91,11);
    subtraction4.getValuesSubtraction(100,12);
    subtraction5.getValuesSubtraction(109,13);
    subtraction6.getValuesSubtraction(118,14);
    subtraction7.getValuesSubtraction(127,15);
    subtraction8.getValuesSubtraction(136,16);   


    //disable input subtraction
    subtraction1.disableInput(73,78);
    subtraction2.disableInput(82,87);
    subtraction3.disableInput(91,96);
    subtraction4.disableInput(100,105);
    subtraction5.disableInput(109,114);
    subtraction6.disableInput(118,123);
    subtraction7.disableInput(127,132);
    subtraction8.disableInput(136,141);

    //enable input subtraction
    subtraction1.enableInput(79,81);
    subtraction2.enableInput(88,90);
    subtraction3.enableInput(97,99);
    subtraction4.enableInput(106,108);
    subtraction5.enableInput(115,117);
    subtraction6.enableInput(124,126);
    subtraction7.enableInput(133,135);
    subtraction8.enableInput(142,144);

}



//------------------stop------------------

stop2.addEventListener('click',(e)=>{
    clickStop2();
})



function clickStop2(){
    if(checkStop==true){

        completeStop();
        textStop();
        addStop();
        subtractionStop();
    }
}

function completeStop(){
    //objects complete
    const complete=new Complete();
    
    //disable complete inputs
    complete.disableInput(1,10);
}

function textStop(){
    //objects enable
    const text=new Text();

    //enable texts
    text.enableText(1,2);
}

function addStop(){
    //objects adds
    const add1=new OperationAdd();
    const add2=new OperationAdd();
    const add3=new OperationAdd();
    const add4=new OperationAdd();
    const add5=new OperationAdd();
    const add6=new OperationAdd();
    const add7=new OperationAdd();
    const add8=new OperationAdd();

    //disable input add
    add1.disableInput2(7,9);
    add2.disableInput2(16,18);
    add3.disableInput2(25,27);
    add4.disableInput2(34,36);
    add5.disableInput2(43,45);
    add6.disableInput2(52,54);
    add7.disableInput2(61,63);
    add8.disableInput2(70,72);

    //enable input add
    add1.enableInput2(1,6);
    add2.enableInput2(10,15);
    add3.enableInput2(19,24);
    add4.enableInput2(28,33);
    add5.enableInput2(37,42);
    add6.enableInput2(46,51);
    add7.enableInput2(55,60);
    add8.enableInput2(64,69);

}

function subtractionStop(){
    //objects subtractions
    const subtraction1=new OperationSubtraction();
    const subtraction2=new OperationSubtraction();
    const subtraction3=new OperationSubtraction();
    const subtraction4=new OperationSubtraction();
    const subtraction5=new OperationSubtraction();
    const subtraction6=new OperationSubtraction();
    const subtraction7=new OperationSubtraction();
    const subtraction8=new OperationSubtraction();

    //disable input subtraction
    subtraction1.disableInput2(79,81);
    subtraction2.disableInput2(88,90);
    subtraction3.disableInput2(97,99);
    subtraction4.disableInput2(106,108);
    subtraction5.disableInput2(115,117);
    subtraction6.disableInput2(124,126);
    subtraction7.disableInput2(133,135);
    subtraction8.disableInput2(142,144);

    //enable input subtraction
    subtraction1.enableInput2(73,78);
    subtraction2.enableInput2(82,87);
    subtraction3.enableInput2(91,96);
    subtraction4.enableInput2(100,105);
    subtraction5.enableInput2(109,114);
    subtraction6.enableInput2(118,123);
    subtraction7.enableInput2(127,132);
    subtraction8.enableInput2(136,141);

}



//------------------finish activity------------------

finisActivityTemplate1.addEventListener('click',(e)=>{
    //objects complete
    const complete=new Complete();

    //objects adds
    const add1=new OperationAdd();
    const add2=new OperationAdd();
    const add3=new OperationAdd();
    const add4=new OperationAdd();
    const add5=new OperationAdd();
    const add6=new OperationAdd();
    const add7=new OperationAdd();
    const add8=new OperationAdd();

    //objects subtraction
    const subtraction1=new OperationSubtraction();
    const subtraction2=new OperationSubtraction();
    const subtraction3=new OperationSubtraction();
    const subtraction4=new OperationSubtraction();
    const subtraction5=new OperationSubtraction();
    const subtraction6=new OperationSubtraction();
    const subtraction7=new OperationSubtraction();
    const subtraction8=new OperationSubtraction();

    //check activity
    complete.checkActivity1(1);

    //check adds
    add1.checkOperationAdd(7,1);
    add2.checkOperationAdd(16,2);
    add3.checkOperationAdd(25,3);
    add4.checkOperationAdd(34,4);
    add5.checkOperationAdd(43,5);
    add6.checkOperationAdd(52,6);
    add7.checkOperationAdd(61,7);
    add8.checkOperationAdd(70,8);

    //check subtraction
    subtraction1.checkOperationSubtraction(79,9);
    subtraction2.checkOperationSubtraction(88,10);
    subtraction3.checkOperationSubtraction(97,11);
    subtraction4.checkOperationSubtraction(106,12);
    subtraction5.checkOperationSubtraction(115,13);
    subtraction6.checkOperationSubtraction(124,14);
    subtraction7.checkOperationSubtraction(133,15);
    subtraction8.checkOperationSubtraction(142,16);

})

//------------------class complete------------------

class Complete{
    Complete(){
        var limi;
        var lims;
        var cont;
    }

    //enable and disable inputs
    enableInput(limi,lims){
        for(var i=limi;i<=lims;i++){
            document.getElementById("number"+i).value="";
            document.getElementById("number"+i).placeholder=i+".";
        }
    }

    disableInput(limi,lims){
        for(var i=limi;i<=lims;i++){
            document.getElementById("number"+i).disabled="";
            document.getElementById("number"+i).placeholder="";
            document.getElementById("number"+i).value=activity1[i-1];
            document.getElementById("number"+i).style.color="black";
            document.getElementById("number"+i).style.borderColor="black";
    
        }
    }

    getValuesActivity1(cont){
        for(var i=0;i<10;i++){
            activity1.splice(i,1,document.getElementById("number"+cont).value);
            cont++;
        }
    }

    checkActivity1(cont){
        let solutionActivity1=[10];
        for(var i=0;i<10;i++){

            solutionActivity1.splice(i,1,document.getElementById("number"+cont).value);
    
            if(activity1[i]==solutionActivity1[i]){
                document.getElementById("number"+cont).style.color="green";
                document.getElementById("number"+cont).style.borderColor="green";
                document.getElementById("number"+cont).disabled="true";
    
            }
            else{
                document.getElementById("number"+cont).style.color="red";
                document.getElementById("number"+cont).style.borderColor="red";
                document.getElementById("number"+cont).disabled="true";            
            }
            cont++;
        }
    }

}

//------------------class text------------------

class Text extends Complete{
    Text(){
    }

    disableText(limi,lims){
        for(var i=limi;i<=lims;i++){
            document.getElementById("text"+i).contentEditable=false;
        }
    }

    enableText(limi,lims){
        for(var i=limi;i<=lims;i++){
            document.getElementById("text"+i).contentEditable=true;
        }
    }


}


//------------------class add------------------

class OperationAdd extends Complete{
    OperationAdd(){
        var operation;
    }

    //disable add and enable add

    disableInput(limi,lims){
        for(var i=limi;i<=lims;i++){
            document.getElementById("num"+i).disabled=true;
        }
    }

    enableInput(limi,lims){
        for(var i=limi;i<=lims;i++){
            document.getElementById("num"+i).disabled=false;
        }        
    }

    disableInput2(limi,lims){
        for(var i=limi;i<=lims;i++){
            document.getElementById("num"+i).disabled=true;
            document.getElementById("num"+i).style.color="black";
            document.getElementById("num"+i).style.borderColor="black";
            document.getElementById("num"+i).value=""; 
        }
    }

    enableInput2(limi,lims){
        for(var i=limi;i<=lims;i++){
            document.getElementById("num"+i).disabled=false;
        }        
    }

    getValuesAdd(cont,operation){

        //get add1
        if(operation==1){
            for(var i=0;i<6;i++){
                operation1.splice(i,1,document.getElementById("num"+cont).value);
                cont++;
            }
        }
        //get add2
        else if(operation==2){
            for(var i=0;i<6;i++){
                operation2.splice(i,1,document.getElementById("num"+cont).value);
                cont++;
            }            
        }
        //get add3
        else if(operation==3){
            for(var i=0;i<6;i++){
                operation3.splice(i,1,document.getElementById("num"+cont).value);
                cont++;
            }            
        }
        //get add4
        else if(operation==4){
            for(var i=0;i<6;i++){
                operation4.splice(i,1,document.getElementById("num"+cont).value);
                cont++;
            }            
        }
        //get add5
        else if(operation==5){
            for(var i=0;i<6;i++){
                operation5.splice(i,1,document.getElementById("num"+cont).value);
                cont++;
            }            
        }
        //get add6
        else if(operation==6){
            for(var i=0;i<6;i++){
                operation6.splice(i,1,document.getElementById("num"+cont).value);
                cont++;
            }            
        }
        //get add7
        else if(operation==7){
            for(var i=0;i<6;i++){
                operation7.splice(i,1,document.getElementById("num"+cont).value);
                cont++;
            }            
        }
        //get add8
        else if(operation==8){
            for(var i=0;i<6;i++){
                operation8.splice(i,1,document.getElementById("num"+cont).value);
                cont++;
            }            
        }

    }


    checkOperationAdd(cont,operation){

        //check add1
        if(operation==1){
            num1=0;
            num2=0;
            result=0;

            let resultOperation1=[3];
    
            for(var i=0;i<3;i++){
                resultOperation1.splice(i,1,document.getElementById("num"+cont).value);
                cont++;
            }
        
            for(var i=0;i<6;i++){
        
                if(i<3){
                    num1=num1+operation1[i];
                    result=result+resultOperation1[i];
                }
                else if (i>2 && i<6){
                    num2=num2+operation1[i];           
                }
        
            }
            
            cont=7;
            for(var i=0;i<1;i++){
                for(var j=0;j<3;j++){
                    if((parseInt(num1,10)+parseInt(num2,10))==parseInt(result,10)){
                        document.getElementById("num"+cont).style.color="green";
                        document.getElementById("num"+cont).style.borderColor="green";
                        document.getElementById("num"+cont).disabled="true";              
                    }
                    else{
                        document.getElementById("num"+cont).style.color="red";
                        document.getElementById("num"+cont).style.borderColor="red";
                        document.getElementById("num"+cont).disabled="true";             
                    }
                    cont++;
                }
            }
        }
        //check add2
        else if(operation==2){
            num1=0;
            num2=0;
            result=0;
        
            let resultOperation2=[3];
        
            for(i=0;i<3;i++){
                resultOperation2.splice(i,1,document.getElementById("num"+cont).value);
                cont++;
            }
        
            for(i=0;i<6;i++){
        
                if(i<3){
                    num1=num1+operation2[i];
                    result=result+resultOperation2[i];
                }
                else if (i>2 && i<6){
                    num2=num2+operation2[i];           
                }
        
            }
            
            cont=16;
            for(i=0;i<1;i++){
                for(j=0;j<3;j++){
                    if((parseInt(num1,10)+parseInt(num2,10))==parseInt(result,10)){
                        document.getElementById("num"+cont).style.color="green";
                        document.getElementById("num"+cont).style.borderColor="green";
                        document.getElementById("num"+cont).disabled="true";              
                    }
                    else{
                        document.getElementById("num"+cont).style.color="red";
                        document.getElementById("num"+cont).style.borderColor="red";
                        document.getElementById("num"+cont).disabled="true";             
                    }
                    cont++;
                }
            }
        }
        //check add3
        else if(operation==3){
            num1=0;
            num2=0;
            result=0;
        
            let resultOperation3=[3];
        
            for(i=0;i<3;i++){
                resultOperation3.splice(i,1,document.getElementById("num"+cont).value);
                cont++;
            }
        
            for(i=0;i<6;i++){
        
                if(i<3){
                    num1=num1+operation3[i];
                    result=result+resultOperation3[i];
                }
                else if (i>2 && i<6){
                    num2=num2+operation3[i];           
                }
        
            }
            
            cont=25;
            for(i=0;i<1;i++){
                for(j=0;j<3;j++){
                    if((parseInt(num1,10)+parseInt(num2,10))==parseInt(result,10)){
                        document.getElementById("num"+cont).style.color="green";
                        document.getElementById("num"+cont).style.borderColor="green";
                        document.getElementById("num"+cont).disabled="true";              
                    }
                    else{
                        document.getElementById("num"+cont).style.color="red";
                        document.getElementById("num"+cont).style.borderColor="red";
                        document.getElementById("num"+cont).disabled="true";             
                    }
                    cont++;
                }
            }
        }
        //check add4
        else if(operation==4){
            num1=0;
            num2=0;
            result=0;
        
            let resultOperation4=[3];
        
            for(i=0;i<3;i++){
                resultOperation4.splice(i,1,document.getElementById("num"+cont).value);
                cont++;
            }
        
            for(i=0;i<6;i++){
        
                if(i<3){
                    num1=num1+operation4[i];
                    result=result+resultOperation4[i];
                }
                else if (i>2 && i<6){
                    num2=num2+operation4[i];           
                }
        
            }
            
            cont=34;
            for(i=0;i<1;i++){
                for(j=0;j<3;j++){
                    if((parseInt(num1,10)+parseInt(num2,10))==parseInt(result,10)){
                        document.getElementById("num"+cont).style.color="green";
                        document.getElementById("num"+cont).style.borderColor="green";
                        document.getElementById("num"+cont).disabled="true";              
                    }
                    else{
                        document.getElementById("num"+cont).style.color="red";
                        document.getElementById("num"+cont).style.borderColor="red";
                        document.getElementById("num"+cont).disabled="true";             
                    }
                    cont++;
                }
            }
        }
        //check add5
        else if(operation==5){
            num1=0;
            num2=0;
            result=0;
        
            let resultOperation5=[3];
        
            for(i=0;i<3;i++){
                resultOperation5.splice(i,1,document.getElementById("num"+cont).value);
                cont++;
            }
        
            for(i=0;i<6;i++){
        
                if(i<3){
                    num1=num1+operation5[i];
                    result=result+resultOperation5[i];
                }
                else if (i>2 && i<6){
                    num2=num2+operation5[i];           
                }
        
            }
            
            cont=43;
            for(i=0;i<1;i++){
                for(j=0;j<3;j++){
                    if((parseInt(num1,10)+parseInt(num2,10))==parseInt(result,10)){
                        document.getElementById("num"+cont).style.color="green";
                        document.getElementById("num"+cont).style.borderColor="green";
                        document.getElementById("num"+cont).disabled="true";              
                    }
                    else{
                        document.getElementById("num"+cont).style.color="red";
                        document.getElementById("num"+cont).style.borderColor="red";
                        document.getElementById("num"+cont).disabled="true";             
                    }
                    cont++;
                }
            }
        }
        //check add6
        else if(operation==6){
            num1=0;
            num2=0;
            result=0;
        
            let resultOperation6=[3];
        
            for(i=0;i<3;i++){
                resultOperation6.splice(i,1,document.getElementById("num"+cont).value);
                cont++;
            }
        
            for(i=0;i<6;i++){
        
                if(i<3){
                    num1=num1+operation6[i];
                    result=result+resultOperation6[i];
                }
                else if (i>2 && i<6){
                    num2=num2+operation6[i];           
                }
        
            }
            
            cont=52;
            for(i=0;i<1;i++){
                for(j=0;j<3;j++){
                    if((parseInt(num1,10)+parseInt(num2,10))==parseInt(result,10)){
                        document.getElementById("num"+cont).style.color="green";
                        document.getElementById("num"+cont).style.borderColor="green";
                        document.getElementById("num"+cont).disabled="true";              
                    }
                    else{
                        document.getElementById("num"+cont).style.color="red";
                        document.getElementById("num"+cont).style.borderColor="red";
                        document.getElementById("num"+cont).disabled="true";             
                    }
                    cont++;
                }
            }
        }
        //check add7
        else if(operation==7){
            num1=0;
            num2=0;
            result=0;
        
            let resultOperation7=[3];
        
            for(i=0;i<3;i++){
                resultOperation7.splice(i,1,document.getElementById("num"+cont).value);
                cont++;
            }
        
            for(i=0;i<6;i++){
        
                if(i<3){
                    num1=num1+operation7[i];
                    result=result+resultOperation7[i];
                }
                else if (i>2 && i<6){
                    num2=num2+operation7[i];           
                }
        
            }
            
            cont=61;
            for(i=0;i<1;i++){
                for(j=0;j<3;j++){
                    if((parseInt(num1,10)+parseInt(num2,10))==parseInt(result,10)){
                        document.getElementById("num"+cont).style.color="green";
                        document.getElementById("num"+cont).style.borderColor="green";
                        document.getElementById("num"+cont).disabled="true";              
                    }
                    else{
                        document.getElementById("num"+cont).style.color="red";
                        document.getElementById("num"+cont).style.borderColor="red";
                        document.getElementById("num"+cont).disabled="true";             
                    }
                    cont++;
                }
            }
        }
        //check add8
        else if(operation==8){
            num1=0;
            num2=0;
            result=0;
        
            let resultOperation8=[3];
        
            for(i=0;i<3;i++){
                resultOperation8.splice(i,1,document.getElementById("num"+cont).value);
                cont++;
            }
        
            for(i=0;i<6;i++){
        
                if(i<3){
                    num1=num1+operation8[i];
                    result=result+resultOperation8[i];
                }
                else if (i>2 && i<6){
                    num2=num2+operation8[i];           
                }
        
            }
            
            cont=70;
            for(i=0;i<1;i++){
                for(j=0;j<3;j++){
                    if((parseInt(num1,10)+parseInt(num2,10))==parseInt(result,10)){
                        document.getElementById("num"+cont).style.color="green";
                        document.getElementById("num"+cont).style.borderColor="green";
                        document.getElementById("num"+cont).disabled="true";              
                    }
                    else{
                        document.getElementById("num"+cont).style.color="red";
                        document.getElementById("num"+cont).style.borderColor="red";
                        document.getElementById("num"+cont).disabled="true";             
                    }
                    cont++;
                }
            }            
        }
    }
}

//------------------class subtraction------------------

class OperationSubtraction extends OperationAdd{

    OperationSubtraction(){
    }

    getValuesSubtraction(cont,operation){
        //get subtraction1
        if(operation==9){
            for(var i=0;i<6;i++){
                operation9.splice(i,1,document.getElementById("num"+cont).value);
                cont++;
            }
        }
        //get subtraction2
        else if(operation==10){
            for(var i=0;i<6;i++){
                operation10.splice(i,1,document.getElementById("num"+cont).value);
                cont++;
            }            
        }
        //get subtraction3
        else if(operation==11){
            for(var i=0;i<6;i++){
                operation11.splice(i,1,document.getElementById("num"+cont).value);
                cont++;
            }            
        }
        //get subtraction4
        else if(operation==12){
            for(var i=0;i<6;i++){
                operation12.splice(i,1,document.getElementById("num"+cont).value);
                cont++;
            }            
        }
        //get subtraction5
        else if(operation==13){
            for(var i=0;i<6;i++){
                operation13.splice(i,1,document.getElementById("num"+cont).value);
                cont++;
            }            
        }
        //get subtraction6
        else if(operation==14){
            for(var i=0;i<6;i++){
                operation14.splice(i,1,document.getElementById("num"+cont).value);
                cont++;
            }            
        }
        //get subtraction7
        else if(operation==15){
            for(var i=0;i<6;i++){
                operation15.splice(i,1,document.getElementById("num"+cont).value);
                cont++;
            }            
        }
        //get subtraction8
        else if(operation==16){
            for(var i=0;i<6;i++){
                operation16.splice(i,1,document.getElementById("num"+cont).value);
                cont++;
            }            
        }
    }

    checkOperationSubtraction(cont,operation){

        //check subtraction1
        if(operation==9){
            num1=0;
            num2=0;
            result=0;
            
            let resultOperation9=[3];
    
            for(var i=0;i<3;i++){
                resultOperation9.splice(i,1,document.getElementById("num"+cont).value);
                cont++;
            }
        
            for(var i=0;i<6;i++){
        
                if(i<3){
                    num1=num1+operation9[i];
                    result=result+resultOperation9[i];
                }
                else if (i>2 && i<6){
                    num2=num2+operation9[i];           
                }
        
            }
            
            cont=79;
            for(var i=0;i<1;i++){
                for(var j=0;j<3;j++){
                    if((parseInt(num1,10)-parseInt(num2,10))==parseInt(result,10)){
                        document.getElementById("num"+cont).style.color="green";
                        document.getElementById("num"+cont).style.borderColor="green";
                        document.getElementById("num"+cont).disabled="true";              
                    }
                    else{
                        document.getElementById("num"+cont).style.color="red";
                        document.getElementById("num"+cont).style.borderColor="red";
                        document.getElementById("num"+cont).disabled="true";             
                    }
                    cont++;
                }
            }
        }
        //check subtraction2
        else if(operation==10){
            num1=0;
            num2=0;
            result=0;
        
            let resultOperation10=[3];
        
            for(i=0;i<3;i++){
                resultOperation10.splice(i,1,document.getElementById("num"+cont).value);
                cont++;
            }
        
            for(i=0;i<6;i++){
        
                if(i<3){
                    num1=num1+operation10[i];
                    result=result+resultOperation10[i];
                }
                else if (i>2 && i<6){
                    num2=num2+operation10[i];           
                }
        
            }
            
            cont=88;
            for(i=0;i<1;i++){
                for(j=0;j<3;j++){
                    if((parseInt(num1,10)-parseInt(num2,10))==parseInt(result,10)){
                        document.getElementById("num"+cont).style.color="green";
                        document.getElementById("num"+cont).style.borderColor="green";
                        document.getElementById("num"+cont).disabled="true";              
                    }
                    else{
                        document.getElementById("num"+cont).style.color="red";
                        document.getElementById("num"+cont).style.borderColor="red";
                        document.getElementById("num"+cont).disabled="true";             
                    }
                    cont++;
                }
            }
        }
        //check subtraction3
        else if(operation==11){
            num1=0;
            num2=0;
            result=0;
        
            let resultOperation11=[3];
        
            for(i=0;i<3;i++){
                resultOperation11.splice(i,1,document.getElementById("num"+cont).value);
                cont++;
            }
        
            for(i=0;i<6;i++){
        
                if(i<3){
                    num1=num1+operation11[i];
                    result=result+resultOperation11[i];
                }
                else if (i>2 && i<6){
                    num2=num2+operation11[i];           
                }
        
            }
            
            cont=97;
            for(i=0;i<1;i++){
                for(j=0;j<3;j++){
                    if((parseInt(num1,10)-parseInt(num2,10))==parseInt(result,10)){
                        document.getElementById("num"+cont).style.color="green";
                        document.getElementById("num"+cont).style.borderColor="green";
                        document.getElementById("num"+cont).disabled="true";              
                    }
                    else{
                        document.getElementById("num"+cont).style.color="red";
                        document.getElementById("num"+cont).style.borderColor="red";
                        document.getElementById("num"+cont).disabled="true";             
                    }
                    cont++;
                }
            }
        }
        //check subtraction4
        else if(operation==12){
            num1=0;
            num2=0;
            result=0;
        
            let resultOperation12=[3];
        
            for(i=0;i<3;i++){
                resultOperation12.splice(i,1,document.getElementById("num"+cont).value);
                cont++;
            }
        
            for(i=0;i<6;i++){
        
                if(i<3){
                    num1=num1+operation12[i];
                    result=result+resultOperation12[i];
                }
                else if (i>2 && i<6){
                    num2=num2+operation12[i];           
                }
        
            }
            
            cont=106;
            for(i=0;i<1;i++){
                for(j=0;j<3;j++){
                    if((parseInt(num1,10)-parseInt(num2,10))==parseInt(result,10)){
                        document.getElementById("num"+cont).style.color="green";
                        document.getElementById("num"+cont).style.borderColor="green";
                        document.getElementById("num"+cont).disabled="true";              
                    }
                    else{
                        document.getElementById("num"+cont).style.color="red";
                        document.getElementById("num"+cont).style.borderColor="red";
                        document.getElementById("num"+cont).disabled="true";             
                    }
                    cont++;
                }
            }
        }
        //check subtraction5
        else if(operation==13){
            num1=0;
            num2=0;
            result=0;
        
            let resultOperation13=[3];
        
            for(i=0;i<3;i++){
                resultOperation13.splice(i,1,document.getElementById("num"+cont).value);
                cont++;
            }
        
            for(i=0;i<6;i++){
        
                if(i<3){
                    num1=num1+operation13[i];
                    result=result+resultOperation13[i];
                }
                else if (i>2 && i<6){
                    num2=num2+operation13[i];           
                }
        
            }
            
            cont=115;
            for(i=0;i<1;i++){
                for(j=0;j<3;j++){
                    if((parseInt(num1,10)-parseInt(num2,10))==parseInt(result,10)){
                        document.getElementById("num"+cont).style.color="green";
                        document.getElementById("num"+cont).style.borderColor="green";
                        document.getElementById("num"+cont).disabled="true";              
                    }
                    else{
                        document.getElementById("num"+cont).style.color="red";
                        document.getElementById("num"+cont).style.borderColor="red";
                        document.getElementById("num"+cont).disabled="true";             
                    }
                    cont++;
                }
            }
        }
        //check subtraction6
        else if(operation==14){
            num1=0;
            num2=0;
            result=0;
        
            let resultOperation14=[3];
        
            for(i=0;i<3;i++){
                resultOperation14.splice(i,1,document.getElementById("num"+cont).value);
                cont++;
            }
        
            for(i=0;i<6;i++){
        
                if(i<3){
                    num1=num1+operation14[i];
                    result=result+resultOperation14[i];
                }
                else if (i>2 && i<6){
                    num2=num2+operation14[i];           
                }
        
            }
            
            cont=124;
            for(i=0;i<1;i++){
                for(j=0;j<3;j++){
                    if((parseInt(num1,10)-parseInt(num2,10))==parseInt(result,10)){
                        document.getElementById("num"+cont).style.color="green";
                        document.getElementById("num"+cont).style.borderColor="green";
                        document.getElementById("num"+cont).disabled="true";              
                    }
                    else{
                        document.getElementById("num"+cont).style.color="red";
                        document.getElementById("num"+cont).style.borderColor="red";
                        document.getElementById("num"+cont).disabled="true";             
                    }
                    cont++;
                }
            }
        }
        //check subtraction7
        else if(operation==15){
            num1=0;
            num2=0;
            result=0;
        
            let resultOperation15=[3];
        
            for(i=0;i<3;i++){
                resultOperation15.splice(i,1,document.getElementById("num"+cont).value);
                cont++;
            }
        
            for(i=0;i<6;i++){
        
                if(i<3){
                    num1=num1+operation15[i];
                    result=result+resultOperation15[i];
                }
                else if (i>2 && i<6){
                    num2=num2+operation15[i];           
                }
        
            }
            
            cont=133;
            for(i=0;i<1;i++){
                for(j=0;j<3;j++){
                    if((parseInt(num1,10)-parseInt(num2,10))==parseInt(result,10)){
                        document.getElementById("num"+cont).style.color="green";
                        document.getElementById("num"+cont).style.borderColor="green";
                        document.getElementById("num"+cont).disabled="true";              
                    }
                    else{
                        document.getElementById("num"+cont).style.color="red";
                        document.getElementById("num"+cont).style.borderColor="red";
                        document.getElementById("num"+cont).disabled="true";             
                    }
                    cont++;
                }
            }
        }
        //check subtraction8
        else if(operation==16){
            num1=0;
            num2=0;
            result=0;
        
            let resultOperation16=[3];
        
            for(i=0;i<3;i++){
                resultOperation16.splice(i,1,document.getElementById("num"+cont).value);
                cont++;
            }
        
            for(i=0;i<6;i++){
        
                if(i<3){
                    num1=num1+operation16[i];
                    result=result+resultOperation16[i];
                }
                else if (i>2 && i<6){
                    num2=num2+operation16[i];           
                }
        
            }
            
            cont=142;
            for(i=0;i<1;i++){
                for(j=0;j<3;j++){
                    if((parseInt(num1,10)-parseInt(num2,10))==parseInt(result,10)){
                        document.getElementById("num"+cont).style.color="green";
                        document.getElementById("num"+cont).style.borderColor="green";
                        document.getElementById("num"+cont).disabled="true";              
                    }
                    else{
                        document.getElementById("num"+cont).style.color="red";
                        document.getElementById("num"+cont).style.borderColor="red";
                        document.getElementById("num"+cont).disabled="true";             
                    }
                    cont++;
                }
            }            
        }
    }

}






