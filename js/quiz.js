// NOTE If you need add questions, add to the correctAnswers[]
let correctAnswers = [1, 2, 4, 4, 1, 2, 1, 1, 4, 2, 1, 1, 2, 1, 1]
let selectedAnswers = []
let questionInputs = []
let questionInputLabels = []
let howManyCorrectAnswers = 0

function GetAnswers(questionIndex, input) {
  // No input? Get out of function runtime execution
  if (!input) {
    return
  }

  // The question index is + 1 because we start with "q0" on the html
  let id = `q${questionIndex + 1}_${input.value}`
  let answerInput = document.getElementById(id)
  let answerInputLabel = document.querySelector(`label[for="${id}"]`)

  // Store what answers the user selected to compare later on ShowCorrectAnswers()
  selectedAnswers[questionIndex] = parseInt(input.value)
  questionInputs[questionIndex] = answerInput
  // Store the labels for highlighting later
  questionInputLabels[questionIndex] = answerInputLabel
}

function ShowCorrectAnswers() {
  // Reset counter
  howManyCorrectAnswers = 0

  // Compare each answers with each correct answers
  correctAnswers.forEach((correctAnswer, index) => {
    if (selectedAnswers[index] === correctAnswers[index]) {
      howManyCorrectAnswers++
    }
  })

  // Hightlight correct and incorrect answers for each input
  questionInputs.forEach((input, index) => {
    if (parseInt(input.value) === correctAnswers[index]) {
      questionInputLabels[index].classList.add('quiz-correct-answer')
    } else {
      questionInputLabels[index].classList.add('quiz-incorrect-answer')
    }
  })

  // Display the number of correct answers
  document.getElementById(
    'result'
  ).innerHTML = `${howManyCorrectAnswers}/${correctAnswers.length}`
}
