

//allows user to drag and drop timeslots//
$( function() {
  $( "#sortable" ).sortable();
} );


//sets time at top of page//
var displayCurrentTime = document.querySelector("#currentDay");
var currentTime = moment();
displayCurrentTime.textContent = currentTime.format("dddd MMMM Do YYYY");

//loads the page/ planner//
function loadPlanner(){

  var timeSlots = getElementsByClassName("task");

}


var colourTimeSlots = function () {

    var timeSlots = getElementsByClassName("task");
    var timeNow = moment().hour();
 for (var i = 0; i < timeSlots.length; i++);

        var timeSlot = timeBlocks[i];
        var hourTimeSlot = parseInt(timeBlock.parentElement.id);

        if (hourTimeSlot === hour) {
          timeSlot.classList.add("present");
      }
      else if (hourTimeSlot < hour) {
          timeSlot.classList.add("past");
      }
      else if (hourTimeSlot > hour) {
          timeSlot.classList.add("future")
      }
}



window.onload = function() {
  //will need to ensure is loading current day
  //will need to load time block colours
  //will need to load the schedule
};

  
