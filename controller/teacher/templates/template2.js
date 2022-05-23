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
    }else{
        input2.value = '585';
    }
    if (input3.value.length == 0){
        input3.value = '394';
    }
    if (input4.value.length == 0){
        input4.value = '396';
    }
    if (input5.value.length == 0){
        input5.value = '199';
    }
    if (input6.value.length == 0){
        input6.value = '201';
    }
    if (input7.value.length == 0){
        input7.value = '377';
    }
    if (input8.value.length == 0){
        input8.value = '379';
    }
    if (input9.value.length == 0){
        input9.value = '894';
    }
    if (input10.value.length == 0){
        input10.value = '896';
    }
    if (input11.value.length == 0){
        input11.value = '776';
    }
    if (input12.value.length == 0){
        input12.value = '778';
    }
    if (input13.value.length == 0){
        input13.value = '677';
    }
    if (input14.value.length == 0){
        input14.value = '679';
    }
    if (input15.value.length == 0){
        input15.value = '449';
    }
    if (input16.value.length == 0){
        input16.value = '451';
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
    const state = item.option('chosenClass'); 
    console.log(state);
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


