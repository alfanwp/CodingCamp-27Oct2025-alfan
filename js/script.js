
let todos =[];
function validateForm(todo,date){
    if(todo.trim() === ''|| date === ''){
        alert('Please enter a todo item and select a due date');
        return false;
    }
    return true;
}

function addTodo() {
    const todoInput = document.getElementById('todo-input').value;
    const todoDate = document.getElementById('todo-date').value;

    if(!validateForm(todoInput,todoDate)){
        alert('form validation failed, please check your input');
    } else {
        todos.push ({task: todoInput, dueDate: todoDate});
        console.log{'Current Todos', todos};
    }
}

function deleteTodo(){
    
}

function filterTodo(){
    
}