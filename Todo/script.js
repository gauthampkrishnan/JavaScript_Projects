//Selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listener
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);

//Function

function addTodo(event){
    //prevent form from submittng
    event.preventDefault();
    //Todo div
    const todoSDiv =document.createElement("div");
    todoSDiv.classList.add("todo");
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoSDiv.appendChild(newTodo);
    //Checked mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoSDiv.appendChild(completedButton);

    const trashButton = document.createElement('button');
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoSDiv.appendChild(trashButton);
 
    //Append to list
    todoList.appendChild(todoSDiv);
    //clear todo input value
    todoInput.value="";
}

function deleteCheck(e){
    const item  = e.target;
    if(item.classList[0]==='trash-btn'){
        const todo = item.parentElement;
        todo.remove();
    }
}
