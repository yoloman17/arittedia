//--------------------------------------------//----------------------------//----------------//

const input1 = document.getElementById("i1");
const input2 = document.getElementById("i2");
const input3 = document.getElementById("i3");
const input4 = document.getElementById("i4");
const input5 = document.getElementById("i5");
const input6 = document.getElementById("i6");
const input7 = document.getElementById("i7");
const input8 = document.getElementById("i8");
const input9 = document.getElementById("i9");
const input10 = document.getElementById("i10");
const input11 = document.getElementById("i11");
const input12 = document.getElementById("i12");
const input13 = document.getElementById("i13");
const input14 = document.getElementById("i14");
const input15 = document.getElementById("i15");
const input16 = document.getElementById("i16");


const finishActivity2 = document.getElementById("finishActivity");
const play3=document.getElementById("play");
const stop3=document.getElementById("stop");

play3.addEventListener('click',(e)=>{
    clearText();
    drag();
});

stop3.addEventListener('click',(e) =>{
    returnText();
    
});

finishActivity.addEventListener('click',(e) =>{
    checkActivity1();
});


function clearText() {
    input1.value = '';
    input2.value = '';
    input3.value = '';
    input4.value = '';
    input5.value = '';
    input6.value = '';
    input7.value = '';
    input8.value = '';
    input9.value = '';
    input10.value = '';
    input11.value = '';
    input12.value = '';
    input13.value = '';
    input14.value = '';
    input15.value = '';
    input16.value = '';
}

function returnText (){
    if (input1.value.length == 0){
        input1.value = '583';
        input1.style.color = "black";
        input1.style.borderColor = "black";
    }else{
        input1.value = '583';
        input1.style.color = "black";
        input1.style.borderColor = "black";
    }

    if (input2.value.length == 0){
        input2.value = '585';
        input2.style.color = "black";
        input2.style.borderColor = "black";
    }else{
        input2.value = '585';
        input2.style.color = "black";
        input2.style.borderColor = "black";
    }

    if (input3.value.length == 0){
        input3.value = '394';
        input3.style.color = "black";
        input3.style.borderColor = "black";
    }else{
        input3.value = '394';
        input3.style.color = "black";
        input3.style.borderColor = "black";
    }

    if (input4.value.length == 0){
        input4.value = '396';
        input4.style.color = "black";
        input4.style.borderColor = "black";
    }else{
        input4.value = '396';
        input4.style.color = "black";
        input4.style.borderColor = "black";
    }

    if (input5.value.length == 0){
        input5.value = '199';
        input5.style.color = "black";
        input5.style.borderColor = "black";
    }else{
        input5.value = '199';
        input5.style.color = "black";
        input5.style.borderColor = "black";
    }

    if (input6.value.length == 0){
        input6.value = '201';
        input6.style.color = "black";
        input6.style.borderColor = "black";
    }else{
        input6.value = '201';
        input6.style.color = "black";
        input6.style.borderColor = "black"; 
    }

    if (input7.value.length == 0){
        input7.value = '377';
        input7.style.color = "black";
        input7.style.borderColor = "black";
    }else{
        input7.value = '377';
        input7.style.color = "black";
        input7.style.borderColor = "black";
    }

    if (input8.value.length == 0){
        input8.value = '379';
        input8.style.color = "black";
        input8.style.borderColor = "black";
    }else{
        input8.value = '379';
        input8.style.color = "black";
        input8.style.borderColor = "black";
    }

    if (input9.value.length == 0){
        input9.value = '894';
        input9.style.color = "black";
        input9.style.borderColor = "black";
    }else{
        input9.value = '894';
        input9.style.color = "black";
        input9.style.borderColor = "black";
    }

    if (input10.value.length == 0){
        input10.value = '896';
        input10.style.color = "black";
        input10.style.borderColor = "black";
    }else{
        input10.value = '896';
        input10.style.color = "black";
        input10.style.borderColor = "black";

    }

    if (input11.value.length == 0){
        input11.value = '776';
        input11.style.color = "black";
        input11.style.borderColor = "black";
    }else{
        input11.value = '776';
        input11.style.color = "black";
        input11.style.borderColor = "black";
    }

    if (input12.value.length == 0){
        input12.value = '778';
        input12.style.color = "black";
        input12.style.borderColor = "black";
    }else{
        input12.value = '778';
        input12.style.color = "black";
        input12.style.borderColor = "black";
    }

    if (input13.value.length == 0){
        input13.value = '677';
        input13.style.color = "black";
        input13.style.borderColor = "black";
    }else{
        input13.value = '677';
        input13.style.color = "black";
        input13.style.borderColor = "black";
    }

    if (input14.value.length == 0){
        input14.value = '679';
        input14.style.color = "black";
        input14.style.borderColor = "black";
    }else{
        input14.value = '679';
        input14.style.color = "black";
        input14.style.borderColor = "black";
    }

    if (input15.value.length == 0){
        input15.value = '449';
        input15.style.color = "black";
        input15.style.borderColor = "black";
    }else{
        input15.value = '449';
        input15.style.color = "black";
        input15.style.borderColor = "black";
    }

    if (input16.value.length == 0){
        input16.value = '451';
        input16.style.color = "black";
        input16.style.borderColor = "black";
    }else{
        input16.value = '451';
        input16.style.color = "black";
        input16.style.borderColor = "black";
    }

}

function checkActivity1(){
    if (input1.value == "583" && checkStop == true){
        input1.style.color = "green";
        input1.style.borderColor = "green";
    }else{
        input1.style.color = "red";
        input1.style.borderColor = "red"; 
    }

    if (input2.value == "585" && checkStop == true){
        input2.style.color = "green";
        input2.style.borderColor = "green";
    }else{
        input2.style.color = "red";
        input2.style.borderColor = "red"; 
    }

    if (input3.value == "394" && checkStop == true){
        input3.style.color = "green";
        input3.style.borderColor = "green";
    }else{
        input3.style.color = "red";
        input3.style.borderColor = "red"; 
    }

    if (input4.value == "396" && checkStop == true){
        input4.style.color = "green";
        input4.style.borderColor = "green";
    }else{
        input4.style.color = "red";
        input4.style.borderColor = "red"; 
    }

    if (input5.value == "199" && checkStop == true){
        input5.style.color = "green";
        input5.style.borderColor = "green";
    }else{
        input5.style.color = "red";
        input5.style.borderColor = "red"; 
    }

    if (input6.value == "201" && checkStop == true){
        input6.style.color = "green";
        input6.style.borderColor = "green";
    }else{
        input6.style.color = "red";
        input6.style.borderColor = "red"; 
    }

    if (input7.value == "377" && checkStop == true){
        input7.style.color = "green";
        input7.style.borderColor = "green";
    }else{
        input7.style.color = "red";
        input7.style.borderColor = "red"; 
    }

    if (input8.value == "379" && checkStop == true){
        input8.style.color = "green";
        input8.style.borderColor = "green";
    }else{
        input8.style.color = "red";
        input8.style.borderColor = "red"; 
    }

    if (input9.value == "894" && checkStop == true){
        input9.style.color = "green";
        input9.style.borderColor = "green";
    }else{
        input9.style.color = "red";
        input9.style.borderColor = "red"; 
    }

    if (input10.value == "896" && checkStop == true){
        input10.style.color = "green";
        input10.style.borderColor = "green";
    }else{
        input10.style.color = "red";
        input10.style.borderColor = "red"; 
    }

    if (input11.value == "776" && checkStop == true){
        input11.style.color = "green";
        input11.style.borderColor = "green";
    }else{
        input11.style.color = "red";
        input11.style.borderColor = "red"; 
    }

    if (input12.value == "778" && checkStop == true){
        input12.style.color = "green";
        input12.style.borderColor = "green";
    }else{
        input12.style.color = "red";
        input12.style.borderColor = "red"; 
    }

    if (input13.value == "677" && checkStop == true){
        input13.style.color = "green";
        input13.style.borderColor = "green";
    }else{
        input13.style.color = "red";
        input13.style.borderColor = "red"; 
    }

    if (input14.value == "679" && checkStop == true){
        input14.style.color = "green";
        input14.style.borderColor = "green";
    }else{
        input14.style.color = "red";
        input14.style.borderColor = "red"; 
    }

    if (input15.value == "449" && checkStop == true){
        input15.style.color = "green";
        input15.style.borderColor = "green";
    }else{
        input15.style.color = "red";
        input15.style.borderColor = "red"; 
    }

    if (input16.value == "451" && checkStop == true){
        input16.style.color = "green";
        input16.style.borderColor = "green";
    }else{
        input16.style.color = "red";
        input16.style.borderColor = "red"; 
    }

    




}









//-----------------------------------------//------------------------------//------------------//

const minor=document.getElementById("minor");
const higher=document.getElementById("higher");
const equal=document.getElementById("equal");
const elements = document.getElementById("icons");
const position = document.getElementById("position");
const position2 = document.getElementById("position2");
const position3 = document.getElementById("position3");
const position4 = document.getElementById("position4");
const position5 = document.getElementById("position5");
const position6 = document.getElementById("position6");
const position7 = document.getElementById("position7");
const position8 = document.getElementById("position8");
const position9 = document.getElementById("position9");
const position10 = document.getElementById("position10");
const position11 = document.getElementById("position11");
const position12 = document.getElementById("position12");
const position13 = document.getElementById("position13");
const btnconfirm = document.getElementById('confirm');
const Delete = document.getElementById('delete');



function drag(){
        const item = Sortable.create(elements,{
        group: {
            name: 'posicion',
            pull: 'clone',
            put: false, 
            
        },
        chosenClass: "ola",
        animation: 150,
        sort: true,    

    });
}




const confirmdiv1 = Sortable.create(position,{
    group: 'posicion',
    filter: '.filtered',
    animation: 150,
});

const confirmdiv2 = Sortable.create(position2,{
    group: 'posicion',
    filter: '.filtered',
    animation: 150,
});

const confirmdiv3 = Sortable.create(position3,{
    group: 'posicion',
    filter: '.filtered',
    animation: 150,
});

const confirmdiv4 = Sortable.create(position4,{
    group: 'posicion',
    filter: '.filtered',
    animation: 150,
});

const confirmdiv5 = Sortable.create(position5,{
    group: 'posicion',
    filter: '.filtered',
    animation: 150,
});

const confirmdiv6 = Sortable.create(position6,{
    group: 'posicion',
    filter: '.filtered',
    animation: 150,
});

const confirmdiv7 = Sortable.create(position7,{
    group: 'posicion',
    filter: '.filtered',
    animation: 150,
});

const confirmdiv8 = Sortable.create(position8,{
    group: 'posicion',
    filter: '.filtered',
    animation: 150,
});

const confirmdiv9 = Sortable.create(position9,{
    group: 'posicion',
    filter: '.filtered',
    animation: 150,
});

const confirmdiv10 = Sortable.create(position10,{
    group: 'posicion',
    filter: '.filtered',
    animation: 150,
});

const confirmdiv11 = Sortable.create(position11,{
    group: 'posicion',
    filter: '.filtered',
    animation: 150,
});

const confirmdiv12 = Sortable.create(position12,{
    group: 'posicion',
    filter: '.filtered',
    animation: 150,
});

const confirmdiv13 = Sortable.create(position13,{
    group: 'posicion',
    filter: '.filtered',
    animation: 150,
});

const delete1 = Sortable.create(Delete,{
    group: {
        name: 'deletes',
        put: true,
        pull: false,
    },
    onAdd: () => {
        console.log('muevo');
    }

});

Delete.addEventListener('click',()=>{
    
    
});

btnconfirm.addEventListener('click',()=>{
    const state = confirmdiv1.option('disabled');
    confirmdiv1.option('disabled', !state);    
    const state2 = confirmdiv2.option('disabled');
    confirmdiv2.option('disabled', !state);    
    const state3 = confirmdiv3.option('disabled');
    confirmdiv3.option('disabled', !state);
    const state4 = confirmdiv4.option('disabled');
    confirmdiv4.option('disabled', !state);
    const state5 = confirmdiv5.option('disabled');
    confirmdiv5.option('disabled', !state);
    const state6 = confirmdiv6.option('disabled');
    confirmdiv6.option('disabled', !state);
    const state7 = confirmdiv7.option('disabled');
    confirmdiv7.option('disabled', !state);
    const state8 = confirmdiv8.option('disabled');
    confirmdiv8.option('disabled', !state);
    const state9 = confirmdiv9.option('disabled');
    confirmdiv9.option('disabled', !state);
    const state10 = confirmdiv10.option('disabled');
    confirmdiv10.option('disabled', !state);
    const state11 = confirmdiv11.option('disabled');
    confirmdiv11.option('disabled', !state);
    const state12 = confirmdiv12.option('disabled');
    confirmdiv12.option('disabled', !state);
    const state13 = confirmdiv13.option('disabled');
    confirmdiv13.option('disabled', !state);

})


