

//allows user to drag and drop timeslots//
$( function() {
  $( "#sortable" ).sortable();
} );


//sets time at top of page//
var displayCurrentTime = document.querySelector("#currentDay");
var currentTime = moment();
displayCurrentTime.textContent = currentTime.format("dddd MMMM Do YYYY");



//sets the colours for the time slots whether due, overdue, or pastdue//
var colourTimeSlots = function () {
  debugger
    var timeSlots = document.getElementsByClassName("task");
    var timeNow = moment().hour();

    for (var hour = 9; hour <= 21; hour++) {

    var timeSlot = timeSlots[hour-9];
    //var hourTimeSlot = parseInt(timeSlot.parentElement.id);
    var currentHour = timeNow;

        if (currentHour === hour) {
          timeSlot.classList.add("present");
      }
      else if (currentHour > hour) {
          timeSlot.classList.add("past");
      }
      else if (currentHour < hour) {
          timeSlot.classList.add("future")
      }
}
}

colourTimeSlots();


  
