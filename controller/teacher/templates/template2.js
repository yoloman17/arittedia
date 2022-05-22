const minor=document.getElementById("minor");
const higher=document.getElementById("higher");
const equal=document.getElementById("equal");
const elements = document.getElementById("icons");
const position = document.getElementById("position1");
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
        ghostClass: "sortable-ghost",   
        removeCloneOnHide: true,
    },

    animation: 150,
    sort: true,    

});

const confirmdiv1 = Sortable.create(position,{
    group: 'posicion',
    filter: '.filtered',
    removeCloneOnHide: true,
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
    const state = item.option('ghostClass' ,);
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



