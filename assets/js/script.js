

//allows user to drag and drop timeslots//
$( function() {
  $( "#sortable" ).sortable();
} );

// create array to hold tasks for saving
var tasksArr = {};

//sets time at top of page//
var displayCurrentTime = document.querySelector("#currentDay");
var currentTime = moment();
displayCurrentTime.textContent = currentTime.format("dddd MMMM Do YYYY");

//event.preventDefault();


//sets the colours for the time slots whether due, overdue, or pastdue//
var colourTimeSlots = function (event) {
  event.preventDefault();
    var timeSlots = document.getElementsByClassName("task");
    var timeNow = moment().hour();

    for (var hour = 9; hour <= 21; hour++) {

    var timeSlot = timeSlots[hour-9];
  
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


//saves data to local storage as a string
var saveTasks = JSON.stringify(task);
  localStorage.setItem("task", saveTasks);

  // var saveTasks = function() {
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // };



//load tasks from local storage
var loadTasks = function() {
  var savedTasks = JSON.parse(localStorage.getItem("taskArr"));
  console.log(loadTasks);

  if (!savedTasks){
    return false;
  }
  console.log("Saved tasks found!")
  //else, load up saved tasks

  //parse into an array of objects
  savedTasks = JSON.parse(savedTasks);

// if nothing in localStorage, create a new object to track all task status arrays
if (!tasksArr) {
  tasksArr = {
     0900: [],
     1000: [],
     1100: [],
     1200: [],
     1300: [],
     1400: [],
     1500: [],
     1600: [],
     1700: [],
     1800: [],
     1900: [],
     2000: [],
     2100: [],
  };
}
};



  saveTasks();

  loadTasks();