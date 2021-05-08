addTask = () => {
    //to add a new task

    let task = document.getElementById("newTask").value;

    if (task.trim() == "") {   //empty task
        return;
    }

    let taskcode = task.replaceAll(" ", "-");  //for the ID attribute

    let taskHTML = `<tr id=${taskcode}tr><td colspan="3">${task}</td>
                    <td class="button-bg"><button class="delBtn" id=${taskcode} onclick="deleteTask(this.id)"><i class="fas fa-trash-alt"></i></button></td></tr>`;


    document.getElementById("tasklist").innerHTML += taskHTML;

    document.getElementById("newTask").value = "";

    //execute the AddTask servlet and store the task in the database
    window.open(`http://localhost:8080/todoapp/AddTask?newTask=${task}`);

}

deleteTask = (id) => {
    //to delete an existing task

    let task = id.replaceAll("-", " ");  //for the ID attribute

    let rowID = id + "tr";
    console.log(rowID);
    document.getElementById(rowID).style.display = "none";

    //execute the DeleteTask servlet and delete the task in the database
    window.open(`http://localhost:8080/todoapp/DeleteTask?newTask=${task}`);
}

clearTasks = () => {
    //to clear all tasks

    document.getElementById("tasklist").innerHTML = "";

    //execute the TruncateTasks servlet and clear all tasks in the database
    window.open(`http://localhost:8080/todoapp/TruncateTasks`);
}