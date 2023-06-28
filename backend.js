let isRight = [1, 2, 3, 1, 1, 1, 4, 4, 3, 2];
let selectedOpcion = [];
let howManyCorrect = 0;

function Answers(question, selected) {
  selectedOpcion[question] = selected.value;
  id = "q" + question;

  labels = document.getElementById(id).childNodes;
  labels[3].style.backgroundColor = "white";
  labels[5].style.backgroundColor = "white";
  labels[7].style.backgroundColor = "white";
  labels[9].style.backgroundColor = "white";
  selected.parentNode.style.backgroundColor = "green";
}
function CorrectAnswers() {
  howManyCorrect = 0;
  for (i = 0; i < isRight.length; i++) {
    if (selectedOpcion[i] == isRight[i]) {
      howManyCorrect++;
    }
  }
  document.getElementById("result").innerHTML = howManyCorrect;
}