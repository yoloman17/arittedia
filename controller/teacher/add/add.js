var allAdds=[]


add.addEventListener('click',(e)=>{
    if(checkPlay==true){
        Swal.fire({
            title:'Añade una suma',
            input:'select',
            inputPlaceholder:'Selecciona la cantidad de sumandos',
            inputOptions:{
                'Sumandos':{
                    2:2,
                    3:3,
                    4:4,
                    5:5,
                }
            },
            showCancelButton:true,
            inputValidator:(addingUp)=>{
                if(!addingUp){
                    return "Selecciona la cantidad de sumandos";
                }
            }

        })
        .then(addingUp=>{
            if(addingUp.value==2){
                Swal.fire({
                    title:'Asigna los valores',
                    html:
                        '<input type="number" id="number1"></input>'+
                        '<br></br>'+
                        '<input type="number" id="number2"></input>',
                    showCancelButton:true,
                    preConfirm:()=>{ 
                        var number1=(document.getElementById('number1').value);
                        var number2=(document.getElementById('number2').value);

                        var adds={
                            addingsUp:addingUp.value,
                            valueAddingUp:[number1,number2]
                        }
                        allAdds.push(Object.values(adds)); 
                    }
                })
                .then((result)=>{
                    if(result.isConfirmed){
  
                    }
                })
            }
        })
        
    }
})

//------------------createAdd------------------

function createAdd(){
    
}





