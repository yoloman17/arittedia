//------------------get buttons------------------

const play=document.getElementById("play");
const stop=document.getElementById("stop");
var checkPlay=true;
var checkStop=false;


//------------------play------------------

play.addEventListener('click',(e)=>{
    clickPlay();
})

function clickPlay(){
    if(checkPlay==true){
        disableElements();
        enableElements()
        checkPlay=false;
        checkStop=true;
    }
}

//------------------stop------------------

stop.addEventListener('click',(e)=>{
    clickStop();
})


function clickStop(){
    if(checkStop==true){
        enableElements2();
        disableElements2()
        checkStop=false;
        checkPlay=true;
    }
    
}

//------------------disable elements------------------

function disableElements(){
    //character
    document.getElementById("character").style.color="gray";
    document.getElementById("character").style.cursor="auto";

    //add
    document.getElementById("add").style.color="gray";
    document.getElementById("add").style.cursor="auto";

    //minus
    document.getElementById("minus").style.color="gray";
    document.getElementById("minus").style.cursor="auto";

    //multiplication
    document.getElementById("multiplication").style.color="gray";
    document.getElementById("multiplication").style.cursor="auto";

    //division
    document.getElementById("division").style.color="gray";
    document.getElementById("division").style.cursor="auto";

    //text
    document.getElementById("text").style.color="gray";
    document.getElementById("text").style.cursor="auto";

    //table
    document.getElementById("table").style.color="gray";
    document.getElementById("table").style.cursor="auto";

    //puzzle
    document.getElementById("puzzle").style.color="gray";
    document.getElementById("puzzle").style.cursor="auto";

    //help
    document.getElementById("help").style.color="gray";
    document.getElementById("help").style.cursor="auto";

    //map
    document.getElementById("map").style.color="gray";
    document.getElementById("map").style.cursor="auto";

    //delete
    document.getElementById("delete").style.color="gray";
    document.getElementById("delete").style.cursor="auto";
    
    //select
    document.getElementById("select").style.color="gray";
    document.getElementById("select").style.cursor="auto";

    //config
    document.getElementById("config").style.color="gray";
    document.getElementById("config").style.cursor="auto";

    //play
    document.getElementById("play").style.color="gray";
    document.getElementById("play").style.cursor="auto";
    
    //saveActivity
    document.getElementById("saveActivityTemplate1").style.display="none";

    //assignActivity
    document.getElementById("assignActivityTemplate1").style.display="none";


}

//------------------enable stop, button------------------

function enableElements(){
    //stop
    document.getElementById("stop").style.color="black";
    document.getElementById("stop").style.cursor="pointer";

    //finishActivity
    document.getElementById("finishActivityTemplate1").style.display="inline";

}

//------------------enable elements------------------

function enableElements2(){
    //character
    document.getElementById("character").style.color="black";
    document.getElementById("character").style.cursor="pointer";

    //add
    document.getElementById("add").style.color="black";
    document.getElementById("add").style.cursor="pointer";

    //minus
    document.getElementById("minus").style.color="black";
    document.getElementById("minus").style.cursor="pointer";

    //multiplication
    document.getElementById("multiplication").style.color="black";
    document.getElementById("multiplication").style.cursor="pointer";

    //division
    document.getElementById("division").style.color="black";
    document.getElementById("division").style.cursor="pointer";

    //text
    document.getElementById("text").style.color="black";
    document.getElementById("text").style.cursor="pointer";

    //table
    document.getElementById("table").style.color="black";
    document.getElementById("table").style.cursor="pointer";

    //puzzle
    document.getElementById("puzzle").style.color="black";
    document.getElementById("puzzle").style.cursor="pointer";

    //help
    document.getElementById("help").style.color="black";
    document.getElementById("help").style.cursor="pointer";

    //map
    document.getElementById("map").style.color="black";
    document.getElementById("map").style.cursor="pointer";

    //delete
    document.getElementById("delete").style.color="black";
    document.getElementById("delete").style.cursor="pointer";
    
    //select
    document.getElementById("select").style.color="black";
    document.getElementById("select").style.cursor="pointer";

    //config
    document.getElementById("config").style.color="black";
    document.getElementById("config").style.cursor="pointer";

    //play
    document.getElementById("play").style.color="black";
    document.getElementById("play").style.cursor="pointer";

    //saveActivity
    document.getElementById("saveActivityTemplate1").style.display="inline";

    //assignActivity
    document.getElementById("assignActivityTemplate1").style.display="inline";

}

//------------------disable stop, button------------------

function disableElements2(){
    //stop
    document.getElementById("stop").style.color="gray";
    document.getElementById("stop").style.cursor="auto"; 
    
    //finishActivity
    document.getElementById("finishActivityTemplate1").style.display="none";
}