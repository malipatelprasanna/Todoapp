const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskDateTime = document.getElementById("taskDateTime");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {

    const taskText = taskInput.value.trim();
    const taskTime = taskDateTime.value;

    if(taskText === ""){
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");
    li.classList.add("task-item");

    li.innerHTML = `

        <div class="task-content">

            <h3>${taskText}</h3>

            <p>${taskTime}</p>

        </div>

        <div class="task-buttons">

            <button class="complete-btn">
                Complete
            </button>

            <button class="edit-btn">
                Edit
            </button>

            <button class="delete-btn">
                Delete
            </button>

        </div>
    `;

    taskList.appendChild(li);

    taskInput.value = "";
    taskDateTime.value = "";

    const completeBtn =
    li.querySelector(".complete-btn");

    const editBtn =
    li.querySelector(".edit-btn");

    const deleteBtn =
    li.querySelector(".delete-btn");

    completeBtn.addEventListener("click", () => {

        li.classList.toggle("completed");
    });

    editBtn.addEventListener("click", () => {

        const newTask = prompt(
            "Edit your task:",
            li.querySelector("h3").innerText
        );

        if(newTask !== null){
            li.querySelector("h3").innerText =
            newTask;
        }
    });

    deleteBtn.addEventListener("click", () => {

        li.remove();
    });

});