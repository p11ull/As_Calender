var ordinalArr = ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th","th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th","th", "st" ];

var divIdArr = [6,7,8,9,10,11,12,13,14,15,16,17,18];

const today = dayjs();


//function to produce header date ordinal

function OrdinalIndicator(day) {
return ordinalArr[day];
}

//function to format cell backgrounds according to the time

function updateCells() {
 var currentHr = dayjs().format("H")
  for (i = 0; i < divIdArr.length; i++) {
    if (divIdArr[i] < currentHr) {
    $("#"+ divIdArr[i]).css("background-color", "#d3d3d3");
      } 
    else if (divIdArr[i] > currentHr) {
    $("#"+ divIdArr[i]).css("background-color", "#77dd77");
      } 
    else {
    $("#"+ divIdArr[i]).css("background-color", "#ff6961");
      }
  }
}

//functions for saving and retrieving to andor from local storage.

function activitySave(ID) {
  localStorage.setItem(ID, document.getElementById(ID).value);
}

function getLocalStorage() {
for (let i = 0; i < divIdArr.length; i++) {
var inputContent = localStorage.getItem(divIdArr[i]);
$("#"+ divIdArr[i]).attr('value', inputContent)
}
}

//top level function which runs upon index.html loading 
function pageFunction() {
  updateCells();
  setInterval(updateCells, 1000);
  $("#currentDay").text(today.format("dddd,"+" "+"MMMM DD")+ OrdinalIndicator(today.format("D")));
  getLocalStorage();
}


$( document ).ready(pageFunction());


  
