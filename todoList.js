const todo_List=[{
    name: 'make dinner',
    dueDate: '2022-12-22'
}];
renderTodoList();

function renderTodoList(){
    let todolistHTML ='';
    for(let i=0; i<todo_List.length; i++){
        const todoObject = todo_List[i];
        // const name = todoObject.name;
        const {name, dueDate} = todoObject;
        // const dueDate = todoObject.dueDate;
        const html = `
            <div>${name}</div>
            <div> ${dueDate}</div>
                
            <button onclick="
             todo_List.splice(${i},1);
             renderTodoList();
            " class="delete-todo-button">Delete</button>
           
        `;
        todolistHTML += html;
    }
    

    document.querySelector('.js-todo-list').innerHTML = todolistHTML;
}

function addTodo(){
   const inputElement = document.querySelector('.js-name-input');
   const name = inputElement.value;
   const dateInputElement = document.querySelector('.js-duedate');
   const dueDate = dateInputElement.value;
   todo_List.push({
    // name: name,
    // dueDate: dueDate;
    name , dueDate
   });
   
   inputElement.value ='';
   renderTodoList();
}