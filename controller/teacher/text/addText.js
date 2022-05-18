const pencil=document.getElementById("text");
const board=document.getElementById("board");

pencil.addEventListener('dragend',(e)=>{
    addText();
})

const addText = event=>{
    const text=document.createElement('textarea');
    text.classList.add('addText');
    board.append(text);

}