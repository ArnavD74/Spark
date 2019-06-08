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
    this.potassium = 0;
    this.magnesium = 0;
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
    if (answer == "<1 hour") {
      this.vitaminD += 10;
    }
    if (answer == "1 hour") {
      this.vitaminD += 8;
    }
    if (answer == "3 hours") {
      this.vitaminD += 5;
    }
    if (answer == "6 hours") {
      this.vitaminD += 3;
    }
    if (answer == ">6 hours") {
      this.vitaminD += 0;
    }

    if (answer == "None") {
      this.vitaminC += 10;
    }
    if (answer == "<1 cup") {
      this.vitaminC += 7;
    }
    if (answer == "1-2 cups") {
      this.vitaminC += 3;
    }
    if (answer == "2 cups") {
      this.vitaminC += 2;
    }
    if (answer == "2+ cups") {
      this.vitaminC += 0;
    }

    if (answer == "Never") {
      this.vitaminB1 += 4;
      this.vitaminB6 += 10;
      this.wheyProtein += 10;
    }
    if (answer == "Rarely") {
      this.vitaminB1 += 3;
      this.vitaminB6 += 6;
      this.wheyProtein += 5;
    }
    if (answer == "Sometimes") {
      this.vitaminB1 += 2;
      this.vitaminB6 += 4;
    }
    if (answer == "Often") {
      this.vitaminB1 += 1;
      this.vitaminB6 += 2;
      this.plantProtein += 5;
    }
    if (answer == "Always") {
      this.plantProtein += 10;
    }

    if (answer == "Barely any") {
      this.riboflavin += 10;
      this.calcium += 15;
    }
    if (answer == "Small amount") {
      this.riboflavin += 8;
      this.calcium += 11;
    }
    if (answer == "Medium amount") {
      this.riboflavin += 5;
      this.calcium += 7;
    }
    if (answer == "Large amount") {
      this.riboflavin += 2;
      this.calcium += 3;
    }
    if (answer == "Extremely large amount") {
      this.riboflavin += 0;
      this.calcium += 0;
    }

    if (answer == "Not at all") {
      this.potassium += 11;
      this.magnesium += 11;
    }
    if (answer == "Not very often") {
      this.potassium += 8;
      this.magnesium += 8;
    }
    if (answer == "Every once in a while") {
      this.potassium += 5;
      this.magnesium += 5;
    }
    if (answer == "Yes, usually in every other meal") {
      this.potassium += 3;
      this.magnesium += 3;
    }
    if (answer == "Always, in all meals") {
      this.potassium += 0;
      this.magnesium += 0;
    }

    if (answer == "1 - 2 hours") {
      this.potassium += 9;
      this.magnesium += 9;
    }
    if (answer == "2 - 5 hours") {
      this.potassium += 7;
      this.magnesium += 7;
      this.calcium += 1;
    }
    if (answer == "5 - 8 hours") {
      this.potassium += 5;
      this.magnesium += 5;
      this.calcium += 3;
    }
    if (answer == "8 - 10 hours") {
      this.potassium += 3;
      this.magnesium += 3;
      this.calcium += 6;
    }
    if (answer == "10+ hours") {
      this.calcium += 10;
    }

    if (answer == "None or 1 time a week") {
      this.sugars += 10;
      this.totalCarbohydrates += 10;
      this.protein += 7;
      this.sodium += 7;
      this.totalFat += 7;
    }
    if (answer == "2 or 3 times a week") {
      this.sugars += 8;
      this.totalCarbohydrates += 8;
      this.protein += 6;
      this.sodium += 6;
      this.totalFat += 6;
    }
    if (answer == "4 or 5 times a week") {
      this.sugars += 6;
      this.totalCarbohydrates += 6;
      this.protein += 5;
      this.sodium += 3;
      this.totalFat += 3;
    }
    if (answer == "6 times a week") {
      this.sugars += 3;
      this.totalCarbohydrates += 3;
      this.protein += 3;
      this.sodium += 2;
      this.totalFat += 2;
    }
    if (answer == "Every day") {
      this.protein += 2;
    }

    if (answer == "0 per week, only water!") {
      this.sugars += 12;
    }
    if (answer == "1 - 3 per week") {
      this.sugars += 8;
    }
    if (answer == "4 - 6 per week") {
      this.sugars += 4;
    }
    if (answer == "7 - 9 per week") {
      this.sugars += 2;
    }
    if (answer == "10+ per week") {
    }

    if (answer == "19 degrees F and below") {
    }
    if (answer == "20 degrees to  49 degrees F") {
      this.sodium += 2;
      this.magnesium += 2;
      this.potassium += 2;
    }
    if (answer == "50 degrees to 69 degrees F") {
      this.sodium += 5;
      this.magnesium += 4;
      this.potassium += 3;
    }
    if (answer == "70 degrees to 100 degrees F") {
      this.sodium += 6;
      this.magnesium += 5;
      this.potassium += 4;
    }
    if (answer == "Above 100 degrees F") {
      this.sodium += 8;
      this.magnesium += 6;
      this.potassium += 5;
    }

    localStorage.setItem("vitaminD", this.vitaminD);
    localStorage.setItem("vitaminC", this.vitaminC);
    localStorage.setItem("vitaminB1", this.vitaminB1);
    localStorage.setItem("vitaminB6", this.vitaminB6);
    localStorage.setItem("plantProtein", this.plantProtein);
    localStorage.setItem("wheyProtein", this.wheyProtein);
    localStorage.setItem("riboflavin", this.riboflavin);
    localStorage.setItem("calcium", this.calcium);
    localStorage.setItem("potassium", this.potassium);
    localStorage.setItem("magnesium", this.magnesium);
  }
}
