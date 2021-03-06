let saveButton = document.querySelector("button");
let userInput = document.querySelector(".time-block");
let today = document.querySelector("#currentDay");
let userInputSpan = document.querySelector("#user-input");
let day = document.querySelector("#currentDay");
let now = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(now);



displayDailyTask();
displayCurrentDateTime();
updateColor();

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
    $("#13").val(localStorage.getItem("hour1"))
    $("#14").val(localStorage.getItem("hour2"))
    $("#15").val(localStorage.getItem("hour3"))
    $("#16").val(localStorage.getItem("hour4"))
    $("#17").val(localStorage.getItem("hour5"))

}

// Display current date and time at the top of the page
function displayCurrentDateTime() {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    setInterval(displayCurrentDateTime, 1000)
}

function updateColor() {
    let currentTime = moment().hours()
    console.log(currentTime)
    
    $(".time-block").each(function () {
        console.log($(this))
        let timeId = parseInt($(this).attr("id"))
        console.log(timeId)

        if (timeId < currentTime) {
            $(this).addClass("past")
        } else if (timeId === currentTime) {
            $(this).removeClass("past")
            $(this).addClass("present")
        }
        if (timeId > currentTime) {
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
        }

    });
}


$(document).on("click", ".saveBtn", logTask);

// ------------ Test or unused code ------------
// $(".saveBtn").on("click", function(){
//     let task = document.querySelector(".time-block").value;
//     console.log(task);
//     localStorage.setItem("task", task);
// })