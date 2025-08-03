document.addEventListener("DOMContentLoaded", function () {
    // Select DOM Elements:
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Load tasks from localStorage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        storedTasks.forEach(task => addTask(task, false)); // false = don't save again
    }

    // Save tasks to localStorage
    function saveTasks(tasks) {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Add Task function
    function addTask(taskText, save = true) {
        if (typeof taskText !== "string") { 
            taskText = taskInput.value.trim(); // If not passed in, get from input
        }

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create list item
        const listItem = document.createElement("li");
        listItem.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        // Remove task event
        removeButton.onclick = function () {
            listItem.remove();
            let storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
            storedTasks = storedTasks.filter(task => task !== taskText);
            saveTasks(storedTasks);
        };

        // Append button to item, and item to list
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Save to localStorage if needed
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
            storedTasks.push(taskText);
            saveTasks(storedTasks);
        }

        taskInput.value = ""; // Clear input
    }

    // Event Listeners
    addButton.addEventListener("click", () => addTask());
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") addTask();
    });

    // Load tasks on page load
    loadTasks();
});
