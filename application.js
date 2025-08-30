const todoForm = document.getElementById('todo');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', (e)=> {
    e.preventDefault();


    const todoText = todoInput.value;

    if (todoText != ''){
        const listItem = document.createElement('li');
        listItem.className = 'items';
        
        listItem.innerHTML = `<span>${todoText}</span> <button class = "delete">Delete</button> <button class = "complete">Complete</button>`;

        const completeButton = listItem.querySelector('.complete');
        completeButton.addEventListener('click',()=>{
            listItem.remove();
        });


        const deleteButton = listItem.querySelector('.delete');
        deleteButton.addEventListener('click',()=>{
            listItem.remove();
        });

        todoList.appendChild(listItem);
        todoInput.value = '';
    }
});
