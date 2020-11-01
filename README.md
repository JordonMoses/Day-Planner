# Day-Planner #

## Project Overview ##

This day planner utlizes local storage to store user inputs from a text area and display them in the text area even after refresh. The application also lets the user now what workday hours have passed by changing color based on time of day. Gray for past, red for present, and green for suture. 

The application also displays the time, down to the second, so that information is readily available to the user. 

## Screenshot ##
![Day Planner Screenshot](https://user-images.githubusercontent.com/70240665/97811596-44f08f00-1c41-11eb-9d71-30b598355ac0.png)

## JavaCript Sample ##
function logTask() {
    let task = $(this).siblings(".time-block").val();
    let hourss = $(this).parent().attr("id");
    localStorage.setItem(hourss, task);
}

## HTML Sample ##

      <div class="row" id="hour9">
        <div class="col-1">
          <div class="hour">9:00am</div>
        </div>
        <textarea class="time-block" id="9"></textarea>
        <button class="saveBtn"><i class="fas fa-2x fa-save"></i></button>
      </div>

## Deployed Application ##
https://jordonmoses.github.io/Day-Planner/



