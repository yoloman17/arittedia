//------------------get buttons------------------

const play2=document.getElementById("play");
const stop2=document.getElementById("stop");

//------------------play------------------

play2.addEventListener('click',(e)=>{
    clickPlay2();
})

function clickPlay2(){
    if(checkPlay==true){
        disableInputs();
        enableInputs();
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
    }
}

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

//------------------enable inputs------------------

function enableInputs(){

    //complete
    for(i=1;i<=10;i++){
        document.getElementById("number"+i).disabled=false;
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

//------------------disable inputs2------------------

function disableInputs2(){

    //complete
    for(i=1;i<=10;i++){
        document.getElementById("number"+i).disabled=true;
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

