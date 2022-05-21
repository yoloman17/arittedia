var cont;

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
        getValuesActivity1();
        getValuesActivity2();
        disableInputs();
        enableInputs();
        disableTexts();
    }
}

//------------------stop------------------

stop2.addEventListener('click',(e)=>{
    clickStop2();
})

function clickStop2(){
    if(checkStop==true){
        disableInputs2();
        enableInputs2();
        enableTexts()
    }
}

//------------------finish activity------------------

finisActivityTemplate1.addEventListener('click',(e)=>{
    checkActivity1();
    checkActivity2();
})

//------------------disable inputs------------------

function disableInputs(){
    
    //operation 1
    for(i=1;i<=6;i++){
        document.getElementById("num"+i).disabled=true;
    }

    //operation 2
    for(i=7;i<=15;i++){
        document.getElementById("num"+i).disabled=true;
    }

    //operation 3
    for(i=19;i<=24;i++){
        document.getElementById("num"+i).disabled=true;
    }

    //operation 4
    for(i=28;i<=33;i++){
        document.getElementById("num"+i).disabled=true;
    }

    //operation 5
    for(i=37;i<=42;i++){
        document.getElementById("num"+i).disabled=true;
    }

    //operation 6
    for(i=46;i<=51;i++){
        document.getElementById("num"+i).disabled=true;
    }

    //operation 7
    for(i=55;i<=60;i++){
        document.getElementById("num"+i).disabled=true;
    }

    //operation 8
    for(i=64;i<=69;i++){
        document.getElementById("num"+i).disabled=true;
    }

    //operation 9
    for(i=73;i<=78;i++){
        document.getElementById("num"+i).disabled=true;
    }

    //operation 10
    for(i=82;i<=87;i++){
        document.getElementById("num"+i).disabled=true;
    }

    //operation 11
    for(i=91;i<=96;i++){
        document.getElementById("num"+i).disabled=true;
    }

    //operation 12
    for(i=100;i<=105;i++){
        document.getElementById("num"+i).disabled=true;
    }

    //operation 13
    for(i=109;i<=114;i++){
        document.getElementById("num"+i).disabled=true;
    }

    //operation 14
    for(i=118;i<=123;i++){
        document.getElementById("num"+i).disabled=true;
    }

    //operation 15
    for(i=127;i<=132;i++){
        document.getElementById("num"+i).disabled=true;
    }

    //operation 16
    for(i=136;i<=141;i++){
        document.getElementById("num"+i).disabled=true;
    }

}

//------------------disable texts------------------

function disableTexts(){
    for(i=1;i<=2;i++){
        document.getElementById("text"+i).contentEditable=false;
    }
}


//------------------enable inputs------------------

function enableInputs(){

    //complete
    for(i=1;i<=10;i++){
        document.getElementById("number"+i).value="";
        document.getElementById("number"+i).placeholder=i+".";
    }

    //operation 1
    for(i=7;i<=9;i++){
        document.getElementById("num"+i).disabled=false;
    }

    //operation 2
    for(i=16;i<=18;i++){
        document.getElementById("num"+i).disabled=false;
    }

    //operation 3
    for(i=25;i<=27;i++){
        document.getElementById("num"+i).disabled=false;
    }

    //operation 4
    for(i=34;i<=36;i++){
        document.getElementById("num"+i).disabled=false;
    }

    //operation 5
    for(i=43;i<=45;i++){
        document.getElementById("num"+i).disabled=false;
    }

    //operation 6
    for(i=52;i<=54;i++){
        document.getElementById("num"+i).disabled=false;
    }

    //operation 7
    for(i=61;i<=63;i++){
        document.getElementById("num"+i).disabled=false;
    }

    //operation 8
    for(i=70;i<=72;i++){
        document.getElementById("num"+i).disabled=false;
    }

    //operation 9
    for(i=79;i<=81;i++){
        document.getElementById("num"+i).disabled=false;
    }

    //operation 10
    for(i=88;i<=90;i++){
        document.getElementById("num"+i).disabled=false;
    }

    //operation 11
    for(i=97;i<=99;i++){
        document.getElementById("num"+i).disabled=false;
    }

    //operation 12
    for(i=106;i<=108;i++){
        document.getElementById("num"+i).disabled=false;
    }

    //operation 13
    for(i=115;i<=117;i++){
        document.getElementById("num"+i).disabled=false;
    }

    //operation 14
    for(i=124;i<=126;i++){
        document.getElementById("num"+i).disabled=false;
    }

    //operation 15
    for(i=133;i<=135;i++){
        document.getElementById("num"+i).disabled=false;
    }

    //operation 16
    for(i=142;i<=144;i++){
        document.getElementById("num"+i).disabled=false;
    }

}

//------------------enable texts------------------

function enableTexts(){
    for(i=1;i<=2;i++){
        document.getElementById("text"+i).value;
    }
}

//------------------disable inputs2------------------

function disableInputs2(){

    //complete
    for(i=1;i<=10;i++){
        document.getElementById("number"+i).disabled="";
        document.getElementById("number"+i).placeholder="";
        document.getElementById("number"+i).value=activity1[i];
        document.getElementById("number"+i).style.color="black";
        document.getElementById("number"+i).style.borderColor="black";

    }

    //operation 1
    for(i=7;i<=9;i++){
        document.getElementById("num"+i).disabled=true;
    }

    //operation 2
    for(i=16;i<=18;i++){
        document.getElementById("num"+i).disabled=true;
    }

    //operation 3
    for(i=25;i<=27;i++){
        document.getElementById("num"+i).disabled=true;
    }

    //operation 4
    for(i=34;i<=36;i++){
        document.getElementById("num"+i).disabled=true;
    }

    //operation 5
    for(i=43;i<=45;i++){
        document.getElementById("num"+i).disabled=true;
    }

    //operation 6
    for(i=52;i<=54;i++){
        document.getElementById("num"+i).disabled=true;
    }

    //operation 7
    for(i=61;i<=63;i++){
        document.getElementById("num"+i).disabled=true;
    }

    //operation 8
    for(i=70;i<=72;i++){
        document.getElementById("num"+i).disabled=true;
    }

    //operation 9
    for(i=79;i<=81;i++){
        document.getElementById("num"+i).disabled=true;
    }

    //operation 10
    for(i=88;i<=90;i++){
        document.getElementById("num"+i).disabled=true;
    }

    //operation 11
    for(i=97;i<=99;i++){
        document.getElementById("num"+i).disabled=true;
    }

    //operation 12
    for(i=106;i<=108;i++){
        document.getElementById("num"+i).disabled=true;
    }

    //operation 13
    for(i=115;i<=117;i++){
        document.getElementById("num"+i).disabled=true;
    }

    //operation 14
    for(i=124;i<=126;i++){
        document.getElementById("num"+i).disabled=true;
    }

    //operation 15
    for(i=133;i<=135;i++){
        document.getElementById("num"+i).disabled=true;
    }

    //operation 16
    for(i=142;i<=144;i++){
        document.getElementById("num"+i).disabled=true;
    }

}


//------------------enable inputs2------------------

function enableInputs2(){

    //operation 1
    for(i=1;i<=6;i++){
        document.getElementById("num"+i).disabled=false;
    }

    //operation 2
    for(i=10;i<=15;i++){
        document.getElementById("num"+i).disabled=false;
    }

    //operation 3
    for(i=19;i<=24;i++){
        document.getElementById("num"+i).disabled=false;
    }

    //operation 4
    for(i=28;i<=33;i++){
        document.getElementById("num"+i).disabled=false;
    }

    //operation 5
    for(i=37;i<=42;i++){
        document.getElementById("num"+i).disabled=false;
    }

    //operation 6
    for(i=46;i<=51;i++){
        document.getElementById("num"+i).disabled=false;
    }

    //operation 7
    for(i=55;i<=60;i++){
        document.getElementById("num"+i).disabled=false;
    }

    //operation 8
    for(i=64;i<=69;i++){
        document.getElementById("num"+i).disabled=false;
    }

    //operation 9
    for(i=73;i<=78;i++){
        document.getElementById("num"+i).disabled=false;
    }

    //operation 10
    for(i=82;i<=87;i++){
        document.getElementById("num"+i).disabled=false;
    }

    //operation 11
    for(i=91;i<=96;i++){
        document.getElementById("num"+i).disabled=false;
    }

    //operation 12
    for(i=100;i<=105;i++){
        document.getElementById("num"+i).disabled=false;
    }

    //operation 13
    for(i=109;i<=114;i++){
        document.getElementById("num"+i).disabled=false;
    }

    //operation 14
    for(i=118;i<=123;i++){
        document.getElementById("num"+i).disabled=false;
    }

    //operation 15
    for(i=127;i<=132;i++){
        document.getElementById("num"+i).disabled=false;
    }

    //operation 16
    for(i=136;i<=141;i++){
        document.getElementById("num"+i).disabled=false;
    }
}


//get values activity 1

function getValuesActivity1(){
    cont=1;
    for(i=0;i<10;i++){
        activity1.splice(i,1,document.getElementById("number"+cont).value);
        cont++;
    }
}

//check activity 1

function checkActivity1(){
    let solutionActivity1=[10];

    cont=1;
    for(i=0;i<10;i++){
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

//get values activity 2

function getValuesActivity2(){

    //operation 1
    cont=1;
    for(i=0;i<6;i++){
        operation1.splice(i,1,document.getElementById("num"+cont).value);
        cont++;
    }

    //operation 2
    cont=10;
    for(i=0;i<6;i++){
        operation2.splice(i,1,document.getElementById("num"+cont).value);
        cont++;
    }

    //operation 3
    cont=19;
    for(i=0;i<6;i++){
        operation3.splice(i,1,document.getElementById("num"+cont).value);
        cont++;
    }

    //operation 4
    cont=28;
    for(i=0;i<6;i++){
        operation4.splice(i,1,document.getElementById("num"+cont).value);
        cont++;
    }

    //operation 5
    cont=37;
    for(i=0;i<6;i++){
        operation5.splice(i,1,document.getElementById("num"+cont).value);
        cont++;
    }

    //operation 6
    cont=46;
    for(i=0;i<6;i++){
        operation6.splice(i,1,document.getElementById("num"+cont).value);
        cont++;
    }

    //operation 7
    cont=55;
    for(i=0;i<6;i++){
        operation7.splice(i,1,document.getElementById("num"+cont).value);
        cont++;
    }

    //operation 8
    cont=64;
    for(i=0;i<=6;i++){
        operation8.splice(i,1,document.getElementById("num"+cont).value);
        cont++;
    }

    //operation 9
    cont=73;
    for(i=0;i<=6;i++){
        operation9.splice(i,1,document.getElementById("num"+cont).value);
        cont++;
    }

    //operation 10
    cont=82;
    for(i=0;i<=6;i++){
        operation10.splice(i,1,document.getElementById("num"+cont).value);
        cont++
    }

    //operation 11
    cont=91;
    for(i=0;i<=6;i++){
        operation11.splice(i,1,document.getElementById("num"+cont).value);
        cont++;
    }

    //operation 12
    cont=100;
    for(i=0;i<=6;i++){
        operation12.splice(i,1,document.getElementById("num"+cont).value);
        cont++;
    }

    //operation 13
    cont=109;
    for(i=0;i<=6;i++){
        operation13.splice(i,1,document.getElementById("num"+cont).value);
        cont++;
    }

    //operation 14
    cont=118;
    for(i=0;i<=6;i++){
        operation14.splice(i,1,document.getElementById("num"+cont).value);
        cont++;
    }

    //operation 15
    cont=127;
    for(i=0;i<=6;i++){
        operation15.splice(i,1,document.getElementById("num"+cont).value);
        cont++;
    }

    //operation 16
    cont=136;
    for(i=0;i<=6;i++){
        operation16.splice(i,1,document.getElementById("num"+cont).value);
        cont++;
    }
}

//check activity 1

function checkActivity2(){
    //operation 1

    let resultOperation1=[3];
    var num1=0,num2=0,result=0;

    cont=7;
    for(i=0;i<3;i++){
        resultOperation1.splice(i,1,document.getElementById("num"+cont).value);
        cont++;
    }

    for(i=0;i<9;i++){

        if(i<3){
            num1=num1+parseInt(operation1[i],10);
        }
        else if (i<6){
            num2=num2+parseInt(operation1[i],10);           
        }
        else if(i<9){
            result=result+parseInt(resultOperation1[i],10);
        }

    }
    
    cont=7;
    for(i=0;i<1;i++){
        for(j=0;j<3;j++){
            if((num1+num2)==result){
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








