class Quiz {
  constructor(questions) {
    this.questions = questions;
    this.questionIndex = 0;
    this.score = 0;
  }
  getQuestion() {
    return this.questions[this.questionIndex];
  }
  isEnded() {
    return this.questions.length === this.questionIndex;
  }
  answer(answer) {
    this.questionIndex++;
    // increment score based on category of answer
  }
}
