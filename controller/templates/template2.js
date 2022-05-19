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




new Sortable(elements,{
    group: {
        name: 'posicion',
        pull: 'clone',
        put: false // Do not allow items to be put into this list
    },
    animation: 150,
    sort: true // To disable sorting: set sort to false
});

const confirmdiv1 = Sortable.create(position,{
    group: 'posicion',
    filter: '.filtered',
    animation: 150,
    disabled: false
});

new Sortable(position2,{
    group: 'posicion',
    filter: '.filtered',
    animation: 150,
});

new Sortable(position3,{
    group: 'posicion',
    filter: '.filtered',
    animation: 150,
});

new Sortable(position4,{
    group: 'posicion',
    filter: '.filtered',
    animation: 150,
    dragoverBubble: true,
});

new Sortable(position5,{
    group: 'posicion',
    filter: '.filtered',
    animation: 150,
    dragoverBubble: true,
});

new Sortable(position6,{
    group: 'posicion',
    filter: '.filtered',
    animation: 150,
    dragoverBubble: true,
});

new Sortable(position7,{
    group: 'posicion',
    filter: '.filtered',
    animation: 150,
    dragoverBubble: true,
});

new Sortable(position8,{
    group: 'posicion',
    filter: '.filtered',
    animation: 150,
    dragoverBubble: true,
});

new Sortable(position9,{
    group: 'posicion',
    filter: '.filtered',
    animation: 150,
    dragoverBubble: true,
});

new Sortable(position10,{
    group: 'posicion',
    filter: '.filtered',
    animation: 150,
    dragoverBubble: true,
});

new Sortable(position11,{
    group: 'posicion',
    filter: '.filtered',
    animation: 150,
    dragoverBubble: true,
});

new Sortable(position12,{
    group: 'posicion',
    filter: '.filtered',
    animation: 150,
    dragoverBubble: true,
});

new Sortable(position13,{
    group: 'posicion',
    filter: '.filtered',
    animation: 150,
    dragoverBubble: true,
});

const btnconfirm = document.getElementById('confirm');
btnconfirm.addEventListener('click',()=>{
    const state = confirmdiv1.option('disabled');
    confirmdiv1.option('disabled', !state);
})