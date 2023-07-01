// Declare and initialize variables
let isRight = [1, 3, 4, 4, 1, 2, 1, 1, 4, 2];
let arraysLength = [2, 4, 4, 4, 2, 4, 3, 2, 4, 2];
let selectedArraysPosition = [];
let selectedOpcion = [];
let howManyCorrect = 0;

// Function to handle user-selected answers
function Answers(question, selected) {
  // Store the selected option for the question
  selectedOpcion[question] = selected.value;

  // Generate the ID for the question element
  let id = "q" + question;

  // Get the child nodes (labels) of the question element
  let labels = document.getElementById(id).childNodes;

  // Initialize a counter variable
  let e = 1;

  // Loop through the labels based on the selected array length
  for (let i = 0; i < selectedArraysPosition; i++) {
    // Increment the counter by 2
    e = e + 2;

    // Set the background color of the label to white
    labels[e].style.backgroundColor = "white";
  }

  // Set the background color of the selected option to green
  selected.parentNode.style.backgroundColor = "green";
}

// Function to calculate the number of correct answers
function CorrectAnswers() {
  // Reset the counter
  howManyCorrect = 0;

  // Iterate over the isRight array
  for (let i = 0; i < isRight.length; i++) {
    // Check if the selected option matches the correct answer
    if (selectedOpcion[i] == isRight[i]) {
      // Increment the counter if the answer is correct
      howManyCorrect++;
    }
  }

  // Display the number of correct answers
  document.getElementById("result").innerHTML = howManyCorrect;
}
