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
  // Count the number of "Yes", "No", and "Maybe" responses,
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
  // Traverse the ageData array to:
  // Count the number of ages under 18,
  // Count the number of ages between 18 and 35, inclusive
  // Count the number of ages between 36 and 65, inclusive
  // Count the number of ages above 65,
  // and output the results in the outputEl.
  let count18 = 0;
  let count35 = 0;
  let count65 = 0;
  let count108 = 0;

  for (let i = 0; i < ageData.length; i++) {
    if (ageData[i] < 18) {
      count18++;
    } else if (ageData[i] >= 18 < 36) {
      count35++;
    } else if (ageData[i] >= 36 < 66) {
      count65++;
    } else {
      count108++;
    }

    outputEl.innerHTML = "Age Data";
    console.log(ageData);
  }
}
function traverseNumberData() {
  // Traverse the numberData array to:
  // Count the number of even numbers,
  // Count the number of odd numbers,
  // and output the results in the outputEl.

  outputEl.innerHTML = "Number Data";
  console.log(numberData);
}
