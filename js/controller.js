class Quiz {
  constructor(questions) {
    this.questions = questions;
    this.questionIndex = 0;
    this.vitaminD = 0;
    this.vitaminC = 0;
    this.vitaminB1 = 0;
    this.vitaminB6 = 0;
    this.plantProtein = 0;
    this.wheyProtein = 0;
    this.riboflavin = 0;
    this.calcium = 0;
  }
  getQuestion() {
    return this.questions[this.questionIndex];
  }
  isEnded() {
    return this.questions.length === this.questionIndex;
  }
  answer(answer) {
    this.questionIndex++;
    if (this.questionIndex === 1) {
      document.getElementById("choice1").setAttribute("visibility", "visible");
      document.getElementById("choice2").setAttribute("visibility", "visible");
      document.getElementById("choice3").setAttribute("visibility", "visible");
      document.getElementById("choice4").setAttribute("visibility", "visible");
    }
  }
}
