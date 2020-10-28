let saveButton = document.querySelector(".saveBtn");
let userInput = document.querySelector(".time-block");
let today = document.querySelector("#currentDay");
let userInputSpan = document.querySelector("#user-input");
let day = document.querySelector("#currentDay");
let now = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(now)
let timeIds = ["#8", "#9", "#10"];


displayDailyTask();
displayCurrentDateTime();

// 
function logTask() {
    let task = document.querySelector(".time-block").value;
    console.log(task);
    localStorage.setItem("task", task);
}

// 
function displayDailyTask() {
    let task = localStorage.getItem("task");

    userInputSpan.innerHTML = task;
}

// 
function displayCurrentDateTime() {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    setInterval(displayCurrentDateTime, 1000)
} 



saveButton.addEventListener("click", logTask);