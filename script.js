document.getElementById('addButton').addEventListener('click', function () {
    let taskInput = document.getElementById('taskInput');
    if (taskInput.value.trim() === '') {
        alert('Пожалуйста, введите задачу');
        return;
    }

    let taskList = document.getElementById('taskList');
    let listItem = document.createElement('li');
    listItem.className = 'task';

    let taskText = document.createElement('span');
    taskText.className = "task-text"
    taskText.textContent = taskInput.value;

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить';
    deleteButton.className = "delete-btn"
    deleteButton.addEventListener('click', function () {
        listItem.remove();
    });

    listItem.appendChild(taskText);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    taskInput.value = '';
});
