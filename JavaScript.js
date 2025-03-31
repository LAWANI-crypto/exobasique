const container2 = document.querySelector('.container2');
const button2 = document.querySelector('.button2');
const button = document.querySelector('button');
const listetaches = document.querySelector(".listetaches");
const valeurInput = document.querySelector(".valeurInput"); 

const nombreTaches = document.querySelector(".nombreTaches");
const totaltasks = document.querySelector(".totaltasks");
const filters = document.querySelectorAll(".filter");
const form = document.querySelector("form")

const tasks = []; 
let state ="all";


button2.addEventListener("click", () => {
    container2.style.display = 'block';
    button2.style.display = 'none';
});

button.addEventListener("click", () => {
    container2.style.display = 'none';
    button2.style.display = 'block';
 
   
});

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const textInput = valeurInput.value.trim();
    if (textInput === "") return; 
    const task = {
        name: textInput,
        state: "undone",
    };

    tasks.push(task); 
    valeurInput.value = ""; 

    reRender(); 


})
const render = function () { tasks.forEach((task) => {
        if (state === "undone" && task.state === "done") {
            return; 
        }
        if (state === "done" && task.state === "undone") {
            return; 
        }
        const nouvelElement = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        checkbox.checked = (task.state === "done");

        const label = document.createElement("label");
        const span = document.createElement("span");
        span.textContent = task.name;

        checkbox.addEventListener("click", () => {
            if (checkbox.checked) {
                task.state = "done"; 
            } else {
                task.state = "undone"; 
            }
            reRender(); 
        });
        label.appendChild(checkbox);
        label.appendChild(span);
        nouvelElement.appendChild(label);
        listetaches.appendChild(nouvelElement);
    });
};



const reRender = function() {
    listetaches.innerHTML = "";
    render(); 
    mettreAjour();
};

function mettreAjour() {
   
    totaltasks.textContent="/"+tasks.length;

    const nombreCochees = tasks.filter(task => task.state === "done").length; 
    nombreTaches.textContent = nombreCochees; 
}

filters.forEach((filter) => (
    filter.addEventListener("click", (e) => {
        filters.forEach((fil) => fil.style.borderColor = "transparent")
    
        filter.style.borderColor = "#60a5fa"
        state = filter.dataset.state
        
        reRender();
       
    })
    
))
render();









  




























  

 
