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
      answer("button" + (i + 1), choices[i]);
    }
    showProgress();
  }
}

function goToDashboard() {
  var vitamins = [
    localStorage.getItem("vitaminD"),
    localStorage.getItem("vitaminC"),
    localStorage.getItem("vitaminB1"),
    localStorage.getItem("vitaminB6")
  ];

  var proteins = [
    localStorage.getItem("plantProtein"),
    localStorage.getItem("wheyProtein")
  ];

  var powders = [
    localStorage.getItem("riboflavin"),
    localStorage.getItem("calcium"),
    localStorage.getItem("potassium"),
    localStorage.getItem("magnesium")
  ];

  var vitaminsLength = vitamins.length;
  var proteinsLength = proteins.length;
  var powdersLength = powders.length;
  var vitaminsMax = parseInt(vitamins[0]);
  var proteinsMax = parseInt(vitamins[0]);
  var powdersMax = parseInt(vitamins[0]);
  var highestVitamin = 0;
  var highestProtein = 0;
  var highestPowder = 0;

  for (var i = 0; i < vitaminsLength; i++) {
    if (parseInt(vitamins[i]) > vitaminsMax) {
      vitaminsMax = parseInt(vitamins[i]);
      highestVitamin = i;
    }
  }

  for (var j = 0; j < proteinsLength; j++) {
    if (parseInt(proteins[j]) > proteinsMax) {
      vitaminsMax = parseInt(proteins[j]);
      highestProtein = j;
    }
  }

  for (var k = 0; k < powdersLength; k++) {
    if (parseInt(powders[k]) > powdersMax) {
      vitaminsMax = parseInt(powders[k]);
      highestPowder = k;
    }
  }

  if (highestVitamin == 0) {
    localStorage.setItem("vitamin", "Vitamin D");
  }
  if (highestVitamin == 1) {
    localStorage.setItem("vitamin", "Vitamin C");
  }
  if (highestVitamin == 2) {
    localStorage.setItem("vitamin", "Vitamin B1");
  }
  if (highestVitamin == 3) {
    localStorage.setItem("vitamin", "Vitamin B6");
  }

  if (highestProtein == 0) {
    localStorage.setItem("protein", "Plant Protein");
  }
  if (highestProtein == 1) {
    localStorage.setItem("protein", "Whey Protein");
  }

  if (highestPowder == 0) {
    localStorage.setItem("powder", "Riboflavin");
  }
  if (highestPowder == 1) {
    localStorage.setItem("powder", "Calcium");
  }
  if (highestPowder == 2) {
    localStorage.setItem("powder", "Potassium");
  }
  if (highestPowder == 3) {
    localStorage.setItem("powder", "Magnesium");
  }

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
  ]),
  new Question("Do you include many nuts and red meats in your diet?", [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Always"
  ]),
  new Question("How much dairy do you eat?", [
    "Barely any",
    "Small amount",
    "Medium amount",
    "Large amount",
    "Extremely large amount"
  ]),
  new Question("Do you include beans and legumes in your diet?", [
    "Always, in all meals",
    "Yes, usually in every other meal",
    "Every once in a while",
    "Not very often",
    "Not at all"
  ]),
  new Question("How many hours of sleep do you get?", [
    "1 - 2 hours",
    "2 - 5 hours",
    "5 - 8 hours",
    "8 - 10 hours",
    "10+ hours"
  ]),
  new Question("Do you regularly eat white bread and wheat products?", [
    "None or 1 time a week",
    "2 or 3 times a week",
    "4 or 5 times a week",
    "6 or 7 times a week",
    "Every day"
  ]),
  new Question(
    "How often do you sugary beverages e.g juice, soda, sweet tea?",
    [
      "0 per week, only water!",
      "1 - 3 per week",
      "4 - 6 per week",
      "7 - 9 per week",
      "10+ per week"
    ]
  ),
  new Question(
    "Per week, how many hours do you think you are sedentary or sitting down?",
    [
      "<2 hours",
      "2 - 4 per week",
      "5 - 7 per week",
      "7 - 10 per week ",
      "11+ per week"
    ]
  ),
  new Question("What is the typical climate of the place where you live?", [
    "19 degrees F and below",
    "49 degrees to  20 degrees F",
    "69 degrees F to 50 degrees",
    "100 degrees F to 70 degrees",
    "Above 100 degrees F"
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
