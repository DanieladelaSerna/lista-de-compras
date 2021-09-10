//1- traer el valor de los 3 input 
//2- guardar el valor de cada input en una variable distinta
//3- escrbir una nueva funcion, donde por cada click del boton agregar se agregue un nuevo item
//4- tomar el valor de cada input y agregarlo como contenido cada vez que se cree un nuevo item
//5- borrar cada item 






function addItem(){
    let taskValue = document.getElementById("input-task").value;
    let inputTask2 = document.getElementById("input-task2").value;
    let inputTask3 = document.getElementById("input-task3").value;
    if (taskValue != "" && inputTask2 != "" && inputTask3 != "") {
    let precioFinal = (inputTask2 * inputTask3);
        
        addElement(taskValue, inputTask2, inputTask3, precioFinal);
        setTimeout(function(){ generateTotal(); }, 100);
         
    }
}


var totalNumber = 0;

function generateTotal(){
    
    const span  = document.getElementById("total");
    let sum = 0;
    
    
    const allNumbers = [];
    

    const total = document.createTextNode(totalNumber);
    /*if (span.hasChildNodes()) {
        span.removeChild(total);
        total= document.createTextNode(totalNumber);
    
        
     console.log(123)}*/
    
    span.appendChild(total);
    const allItems = document.getElementsByClassName("list-item");
    console.log(allItems);
    for (let i = 0; i <allItems.length; i++) {
     const itemTotal = allItems[i].firstChild.lastChild.firstChild.firstChild.textContent;
     console.log( typeof(itemTotal));
     const itemTotalNumber = Number(itemTotal);
     allNumbers.push(itemTotalNumber);
     console.log(allNumbers);
        
    }

    for (let i= 0; i < allNumbers.length; i++) {
        sum = sum + allNumbers[i];
        span.innerHTML= sum;
        console.log(totalNumber);
      
    }
}

function addElement(task, task2, task3, task4){
    const lista = document.getElementById("list");
    const item = document.createElement("div");
    let precioFinal = document.createElement("span");
    item.classList.add("list-item");
    item.setAttribute("data-id", "1");
    lista.appendChild(item); 

    
    const ul = document.createElement("ul");
    ul.classList.add("ul");
    precioFinal.classList.add("ul");
     precioFinal.appendChild(ul);

    
    item.appendChild(ul);

    const text = document.createTextNode (task);
    const text2 = document.createTextNode (task2);
    const text3 = document.createTextNode (task3);
    const text4 = document.createTextNode (task4);
   
    ul.appendChild(text);
    ul.appendChild(text2);
    ul.appendChild(text3);
    ul.appendChild(text4);
    

    const btn = document.createElement("button");
    btn.addEventListener("click", remove)
    
    item.appendChild(btn);
    const btnContent= document.createTextNode("Borrar");
    btn.appendChild(btnContent);
    
    
    
    }

    
function remove(e) {
    const deleteBtn = e.target.parentNode.parentNode.parentNode;
    document.getElementById("list").removeChild(deleteBtn);
    setTimeout(function(){ generateTotal(); }, 100);
 
 }
    


