document.addEventListener("DOMContentLoaded", function () {

    //Select DOM Elements:
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    //Create the addTask Function:
    function addTask () {
       const taskText = taskInput.Value.trim();  
        if (taskText === "") {
        alert("Please enter a task.");
        return;
    }
    //Task Creation and Removal:
    if (taskText !== "") {
     const listItem = document.createElement("li") //Create a new li element.
     listItem.textContent = taskText;

     const removeButton = document.createElement("button") //Create button element
     removeButton.textContent = "Remove";
     removeButton.className = "remove-btn"; // Set classname

     //Assign onclick event to remove the task
     removeButton.onclick = function () {
        taskItem.remove();
     }

      listItem.appendChild(removeButton) //Append elements
      taskList.appendChild(listItem)
      
      taskInput.value = ""; //Clear input field
    }
    }

    // Attach Event Listeners:
    addButton.addEventListener("click", addTask); // Add event listener to call addtask

    //Add event listener for keypress event 
    taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
})