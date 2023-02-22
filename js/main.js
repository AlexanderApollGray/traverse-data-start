// TRAVERSE DATA CYU ASSIGNMENT START CODE

// Load Data From Files
let surveyData;
fetch("data/survey-results.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (surveyData = strData.split(/\r?\n/)));

let ageData;
fetch("data/age-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (ageData = strData.split(/\r?\n/)));

let numberData;
fetch("data/number-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (numberData = strData.split(/\r?\n/)));

// Output Element Variable
let outputEl = document.getElementById("output");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "survey") {
    traverseSurveyData();
  } else if (selection === "ages") {
    traverseAgeData();
  } else if (selection === "numbers") {
    traverseNumberData();
  }
}

// Menu Option Functions
function traverseSurveyData() {
  // List the number of "Yes", "No", or "Maybe" responses
  let countYes = 0;
  let countNo = 0;
  let countMaybe = 0;

  for (let i = 0; i < surveyData.length; i++) {
    if (surveyData[i] === "Yes") {
      countYes++;
    } else if (surveyData[i] === "No") {
      countNo++;
    } else {
      countMaybe++;
    }
  }
  outputEl.innerHTML = `<h2>Survey Data</h2>
  <p>Yes: ${countYes}</p>
  <p>No: ${countNo}</p>
  <p>Maybe: ${countMaybe}</p>`
}

function traverseAgeData() {
  // List the data in 4 age groups
  let count18 = 0;
  let count35 = 0;
  let count65 = 0;
  let count108 = 0;

  for (let i = 0; i < ageData.length; i++) {
    if (ageData[i] < 18) {
      count18++;
    } else if (ageData[i] < 36) {
      count35++;
    } else if (ageData[i] < 66) {
      count65++;
    } else {
      count108++;
    }

    outputEl.innerHTML = `<h2>Age Data</h2>
    <p>Under 18: ${count18}</p>
    <p>18 to 35: ${count35}</p>
    <p>36 to 65: ${count65}</p>
    <p>Above 65: ${count108}</p>`
  }
}
function traverseNumberData() {
  // List the amount of odd or even numbers 
  let countEven = 0;
  let countOdd = 0;

  for (let i = 0; i < numberData.length; i++) {
    if (numberData[i] % 2 === 0) {
      countEven++;
    } else {
      countOdd++;
    }
  }

  outputEl.innerHTML = `<h2>Number Data</h2>
  <p>Odd Numbers: ${countEven}</p>
  <p>Even Numbers: ${countOdd}</p>`
}
