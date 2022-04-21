// selectors
const form = document.getElementById("form");
const result= document.getElementById("result");
const icon= document.getElementById("icons");
const inputField = document.getElementById("inputField");

// EventListeners
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    formSubmit()
})

icon.addEventListener("click", ()=>{
    formSubmit()
})

window.addEventListener('DOMContentLoaded', (event) => {
   getTodos()
});



// Functions

const formSubmit = ()=>{

    if(inputField.value === ""){
        alert("Enter a value")
    }else{
        const inputValue = inputField.value
   
//  parentElement
    const newElement = document.createElement("div");
    newElement.classList.add("results")
    const h3 = document.createElement("h3");
    h3.innerHTML = inputValue
    newElement.appendChild(h3)
    
    //  LocalStorage
    saveTodos(inputField.value)

    // completeBtn
    const completeIcon =  document.createElement("icon");
    completeIcon.innerHTML = `<i class="fa-solid fa-check"></i>`
    // completeIcon.classList.add("complete-btn")
    newElement.appendChild(completeIcon)

    // deleteBtn
    const deleteIcon =  document.createElement("icon");
    deleteIcon.innerHTML = `<i class="fa-solid fa-trash"></i>`
    // deleteIcon.classList.add("trash-btn")
    newElement.appendChild(deleteIcon)
    
    result.appendChild(newElement)
    newElement.addEventListener("click", (e)=>{
        deleteTodos(e.target)
    });

    inputField.value = ""

    inputField.focus()
    }
 
}

const deleteTodos = (e)=>{

    let todoItem = e.parentElement.parentElement
  if(e.classList[1] === "fa-trash"){
    todoItem.classList.add("fall");
    deleteLocal(todoItem)
    todoItem.addEventListener("transitionend", ()=>{
        todoItem.remove()
    })
  }else if(e.classList[1] === "fa-check"){
    e.parentElement.parentElement.classList.toggle("active")
  }
}


// Saving to localStorage
const saveTodos = (todo)=>{
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = []
    }   else{
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    todos.push(todo)

    localStorage.setItem("todos", JSON.stringify(todos))
}

// Display the todos from localStorage
const getTodos = ()=>{
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = []
    }else{
        todos = JSON.parse(localStorage.getItem("todos"))
    }

    todos.forEach(todo =>{

        let inputValue = todo
   
        //  parentElement
            const newElement = document.createElement("div");
            newElement.classList.add("results");
            const h3 = document.createElement("h3");
            h3.innerHTML = inputValue
            newElement.appendChild(h3);
        
            // completeBtn
            const completeIcon =  document.createElement("icon");
            completeIcon.innerHTML = `<i class="fa-solid fa-check"></i>`
            // completeIcon.classList.add("complete-btn");
            newElement.appendChild(completeIcon);

            // deleteBtn
            const deleteIcon =  document.createElement("icon");
            deleteIcon.innerHTML = `<i class="fa-solid fa-trash"></i>`
            // deleteIcon.classList.add("trash-btn")
            newElement.appendChild(deleteIcon) 
            
            result.appendChild(newElement)
            newElement.addEventListener("click", (e)=>{
                deleteTodos(e.target)
            });
    });

};

// delete from localStorage
const deleteLocal = (item)=>{
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = []
    }else{
     todos = JSON.parse(localStorage.getItem("todos"));
    }

    const todoIndex = (item.innerText);

    todos.splice(todos.indexOf(todoIndex), 1);
    
    localStorage.setItem("todos", JSON.stringify(todos))
}

// prompt("hello")