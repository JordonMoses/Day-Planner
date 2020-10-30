let saveButton = document.querySelector("button");
let userInput = document.querySelector(".time-block");
let today = document.querySelector("#currentDay");
let userInputSpan = document.querySelector("#user-input");
let day = document.querySelector("#currentDay");
let now = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(now)

// let timeIds = ["#8", "#9", "#10"];

// let timesObject = { 
//     "8:00am" : 

// }


displayDailyTask();
displayCurrentDateTime();

// Logs the users input
function logTask() {
    let task = $(this).siblings(".time-block").val();
    let hourss = $(this).parent().attr("id");
    console.log(task);
    localStorage.setItem(hourss, task);
}



// 
function displayDailyTask() {
    $("#8").val(localStorage.getItem("hour8"))
    $("#9").val(localStorage.getItem("hour9"))
    $("#10").val(localStorage.getItem("hour10"))
    $("#11").val(localStorage.getItem("hour11"))
    $("#12").val(localStorage.getItem("hour12"))
    $("#1").val(localStorage.getItem("hour1"))
    $("#2").val(localStorage.getItem("hour2"))
    $("#3").val(localStorage.getItem("hour3"))
    $("#4").val(localStorage.getItem("hour4"))
    $("#5").val(localStorage.getItem("hour5"))
 
}

// Display current date and time at the top of the page
function displayCurrentDateTime() {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    setInterval(displayCurrentDateTime, 1000)
} 

// function updateColor() {
//     let hour = 

//     let time = moment(hour)
//     console.log (time)

//     // if (moment().isAfter()) {
//     //     .addClass(".past")
//     // } else if (moment().isBefore()) {
//     //     .addClass(".future")
//     // } else {
//     //     .addClass(".present")
//     // }

// make sure to remove classes 

// }

$(document).on("click", ".saveBtn", logTask);

// ------------ Test or unused code ------------
// $(".saveBtn").on("click", function(){
//     let task = document.querySelector(".time-block").value;
//     console.log(task);
//     localStorage.setItem("task", task);
// })