const taskContainer = document.querySelector('#task-container');
const inputTask = document.querySelector('#input-task');
const addTask = document.querySelector('#add-task');

addTask.addEventListener('click', () => {
    const task = document.createElement('div');
    task.classList.add('task')

    const li = document.createElement('li');
    li.innerText = inputTask.value;
    task.append(li);

    const checkBox = document.createElement('button');
    checkBox.classList.add('checkTask');
    checkBox.innerHTML = '<i class="fa-solid fa-check"></i>';
    task.append(checkBox);

    const deleteBox = document.createElement('button');
    deleteBox.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteBox.classList.add('deleteTask');
    task.append(deleteBox);

    if (inputTask.value === '') {
        alert('Please Enter data first!');
    }
    else {
        taskContainer.append(task);
    }

    inputTask.value = '';

    checkBox.addEventListener('click', () => {
        // console.log(checkBox.parentElement.firstChild);
        checkBox.classList.toggle('doneTask');
        if (checkBox.classList.contains('doneTask')) {
            checkBox.parentElement.firstChild.style.textDecoration = 'line-through';
        }
        else {
            checkBox.parentElement.firstChild.style.textDecoration = 'none';
        }
    });

    deleteBox.addEventListener('click', (e) => {
        console.log(e.target);
        deleteBox.parentElement.remove();
    });

    task.addEventListener('click', (e) => {
        console.log(e.target.tagName);
        if (e.target.tagName === 'LI' || e.target.tagName === 'DIV') {

            checkBox.classList.toggle('doneTask');
            if (checkBox.classList.contains('doneTask')) {
                checkBox.parentElement.firstChild.style.textDecoration = 'line-through';
            }
            else {
                checkBox.parentElement.firstChild.style.textDecoration = 'none';
            }
        }
    })
    saveData();

});

