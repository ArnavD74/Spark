function update() {
  if (quiz.isEnded()) {
    // generate results
  } else {
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestion().question;

    var choices = quiz.getQuestion().choices;
    for (var i = 0; i < choices.length; i++) {
      var element = document.getElementById("choice" + (i + 1));
      element.innerHTML = choices[i];
      answer("button" + (i + 1), choices[i]);
    }
  }
}

function answer(id, answer) {
  var button = document.getElementById(id);
  button.onclick = function() {
    quiz.answer(answer);
    update();
  };
}

var questions = [
  new Question("Question1?", ["choice 1", "choice 2", "choice 3", "choice 4"]),
  new Question("Question2?", ["choice 1", "choice 2", "choice 3", "choice 4"])
];

var quiz;

function initialize() {
  quiz = new Quiz(questions);
  update();
}
