let isRight = [1, 2, 3, 1, 1, 1, 4, 4, 3, 2];
let arraysLength = [2, 4, 4, 4, 4, 4, 4, 4, 4, 4];
let selectedArraysPosition = [];
let selectedOpcion = [];
let howManyCorrect = 0;

function Answers(question, selected) {
  selectedOpcion[question] = selected.value;
  let id = "q" + question;
  selectedArraysPosition = arraysLength[question];

  let labels = document.getElementById(id).childNodes;
  e = 1;
  for (i = 0; i < selectedArraysPosition; i++) {
    e = e + 2;
    labels[e].style.backgroundColor = "white";
  }
  selected.parentNode.style.backgroundColor = "green";
}

function CorrectAnswers() {
  howManyCorrect = 0;
  for (let i = 0; i < isRight.length; i++) {
    if (selectedOpcion[i] == isRight[i]) {
      howManyCorrect++;
    }
  }
  document.getElementById("result").innerHTML = howManyCorrect;
}
