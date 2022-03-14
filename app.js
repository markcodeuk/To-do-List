//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");


//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

//Functions

function addTodo(event)

{

//prevents form from submitting
event.preventDefault();


//todo div

const todoDiv = document.createElement('div');
todoDiv.classList.add('todo');

// create li

const newTodo = document.createElement('li');
newTodo.innerText = todoInput.value; //shows input from the text entered by the form
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);

//check mark button

const completedButton = document.createElement('button');
completedButton.innerHTML = '<i class="fas fa-check"></i>';
completedButton.classList.add("completed-btn");
todoDiv.appendChild(completedButton);

//check mark button

const trashButton = document.createElement('button');
trashButton.innerHTML = '<i class="fas fa-trash"></i>';
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);

//append to list

todoList.appendChild(todoDiv);

// clear todo input value
todoInput.value = ""; // clears the text from the previous input once submitted

}

function deleteCheck(e)

{
  const item = e.target;

  //delete todo

  if(item.classList[0] === 'trash-btn') //when user clicks on trash button
  {
      const todo = item.parentElement;
      // animation
      todo.classList.add("fall");
      todo.addEventListener("transitionend", function() {
        todo.remove();
      });
  } 



  //check mark
  if(item.classList[0] === 'completed-btn') //when user clicks on tick button
  {
      const todo = item.parentElement;
      todo.classList.toggle("completed");
  } 

}

// filter results

function filterTodo(e) {
const todos = todoList.childNodes;
todos.forEach(function(todo){
switch(e.target.value){
    case "all":
        todo.style.display = "flex";
        break;
    case "completed":
        if(todo.classList.contains("completed")){

            todo.style.display = "flex";
        } else{
            todo.style.display = "none";

        }
        break;

    case "uncompleted":
    
    if(!todo.classList.contains("completed")) {

        todo.style.display = "flex";
    } else{
        todo.style.display = "none";
    }
    break;


}

});
}