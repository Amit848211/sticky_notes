let color=document.querySelector("#color");
let textarea=document.querySelector("#textarea");
let button=document.querySelector("button");
let buttom=document.querySelector(".buttom");
textarea.addEventListener("input",(e)=>{
     textarea.style.backgroundColor=color.value;
     textarea.style.color="white"
})

button.addEventListener("click",(e)=>{
    if (textarea.value==""){
        alert("hey first write a text")
    }
    else{
        createElement(textarea.value);

    }
    deleteButton();
})
function createElement(notes){
    let div1 = document.createElement('div');
    buttom.appendChild(div1);

    div1.innerHTML = `<p>${notes}</p>
    <button class ="delete">Delete</button>`;
    div1.style.color = color.value;
}

function deleteButton(){
    let dlt = document.querySelectorAll(".delete");
    dlt.forEach(element => {
        element.addEventListener("click", ()=>{
            element.parentElement.remove();
        }) 
    });
   
}