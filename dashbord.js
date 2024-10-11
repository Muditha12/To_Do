function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskValue = taskInput.value.trim();

    if (taskValue) {
        const taskList = document.getElementById("taskList");

        // Create a new list item (li)
        const newTask = document.createElement("li");

        // Add task text
        newTask.textContent = taskValue;

        // Create a delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";
        deleteButton.onclick = function () {
            taskList.removeChild(newTask);
        };

        // Add delete button to the task
        newTask.appendChild(deleteButton);

        // Add the new task to the task list
        taskList.appendChild(newTask);

        // Clear the input field
        taskInput.value = "";
    } else {
        alert("Please enter a task.");
    }
}
