function update() {
  if (quiz.isEnded()) {
    goToDashboard();
  } else {
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestion().question;

    var choices = quiz.getQuestion().choices;
    for (var i = 0; i < choices.length; i++) {
      var element = document.getElementById("choice" + (i + 1));
      element.innerHTML = choices[i];
      answer("button" + (i + 1), i, choices[i]);
    }
    showProgress();
  }
}

function goToDashboard() {
  localStorage.setItem("day", 6);
  window.location.href = "loading.html";
}

function answer(id, answer) {
  var button = document.getElementById(id);
  button.onclick = function() {
    quiz.answer(answer);
    update();
  };
}

function showProgress() {
  var currentQuestion = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML =
    "Question " + (currentQuestion + 1) + " of " + (quiz.questions.length + 1);
}

var questions = [
  new Question("How long do you spend outdoors daily?", [
    "<1 hour",
    "1 hour",
    "3 hours",
    "6 hours",
    ">6 hours"
  ]),
  new Question("How many fruits are in your daily diet?", [
    "None",
    "<1 cup",
    "1-2 cups",
    "2 cups",
    "2+ cups"
  ])
];

var quiz;
var name;

function initialize() {
  name = document.getElementById("name").value;
  if (name == "" || name == " ") {
    return;
  }
  localStorage.setItem("name", name);
  document.getElementById("name").outerHTML = "";
  document.getElementById("submit").outerHTML = "";
  document.getElementById("progress").style.marginTop = "2rem";
  document.getElementById("button1").style.visibility = "visible";
  document.getElementById("button2").style.visibility = "visible";
  document.getElementById("button3").style.visibility = "visible";
  document.getElementById("button4").style.visibility = "visible";
  document.getElementById("button5").style.visibility = "visible";
  quiz = new Quiz(questions);
  update();
}
