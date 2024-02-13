// Function to add a new task to the list
function addTask() {
  var taskInput = document.getElementById("taskInput");
  var prioritySelect = document.getElementById("prioritySelect");
  var dueDateInput = document.getElementById("dueDateInput");
  var taskList = document.getElementById("taskList");

  var task = document.createElement("div");
  task.classList.add("task");
  task.innerHTML =
    taskInput.value +
    " - Priority: " +
    prioritySelect.value +
    " - Due Date: " +
    dueDateInput.value;

  // Add buttons for editing and deleting
  var editButton = document.createElement("button");
  editButton.innerHTML = "Edit";
  editButton.addEventListener("click", function () {
    editTask(task);
  });

  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.addEventListener("click", function () {
    deleteTask(task);
  });

  task.appendChild(editButton);
  task.appendChild(deleteButton);

  taskList.appendChild(task);

  // Clear input fields after adding the task
  taskInput.value = "";
  prioritySelect.value = "low";
  dueDateInput.value = "";
}

// Function to edit a task
function editTask(task) {
  var newTaskDescription = prompt("Enter the updated task description:");
  task.innerHTML =
    newTaskDescription +
    " - Priority: " +
    task.querySelector("select").value +
    " - Due Date: " +
    task.querySelector("input[type='date']").value;
}

// Function to delete a task
function deleteTask(task) {
  task.remove();
}
