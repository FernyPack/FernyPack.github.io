document.getElementById("add-task-btn").addEventListener("click", function() {
    const taskInput = document.getElementById("task-input");
    const taskValue = taskInput.value.trim();

    if (taskValue !== "") {
        const taskCount = document.getElementById("bulleted-list").children.length + 1;

        const bulletedLi = document.createElement("li");
        bulletedLi.textContent = `Task ${taskCount}: ${taskValue}`;

        const numberedLi = document.createElement("li");
        numberedLi.textContent = `Task ${taskCount}: ${taskValue}`;

        document.getElementById("bulleted-list").appendChild(bulletedLi);
        document.getElementById("numbered-list").appendChild(numberedLi);

        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
});
