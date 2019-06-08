var calories;
var totalFat;
var saturatedFat;
var transFat;
var cholestrol;
var sodium;
var totalCarbohydrates;
var dietaryFiber;
var totalSugar;
var protein;

var vitaminA;
var vitaminC;
var vitaminD;
var vitaminE;
var vitaminK;
var Thiamine;
var Riboflavin;
var Niacin;
var vitaminB6;
var vitaminB12;

function getData() {
  var foodName = document.getElementById("myText").value;

  // const Http = new XMLHttpRequest();
  // const url =
  //   "https://api.nutritionix.com/v1_1/search/" +
  //   foodName +
  //   "?results=0:20&fields=item_name,brand_name,item_id,nf_calories,nf_total_fat,nf_saturated_fat,nf_trans_fatty_acid,nf_cholesterol,nf_sodium,nf_total_carbohydrate,nf_dietary_fiber,nf_sugars,nf_protein&appId=62c73137&appKey=25bf33dc3657fea53a11d052cc75c79e";
  // Http.open("GET", url);
  // Http.send();

  // Http.onreadystatechange = e => {
  //   var obj = JSON.parse(Http.responseText);
  // };

  fetch(
    "https://api.nutritionix.com/v1_1/search/" +
      foodName +
      "?results=0:20&fields=item_name,brand_name,item_id,nf_calories,nf_total_fat,nf_saturated_fat,nf_trans_fatty_acid,nf_cholesterol,nf_sodium,nf_total_carbohydrate,nf_dietary_fiber,nf_sugars,nf_protein&appId=62c73137&appKey=25bf33dc3657fea53a11d052cc75c79e"
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(
        JSON.stringify(myJson).substring(
          JSON.stringify(myJson).indexOf("nf_calories"),
          JSON.stringify(myJson).indexOf("nf_calories") + 20
        )
      );
    });

  console.log(obj.total_hits);

  if (foodName == "Apple") {
    calories = 95;
    totalFat = 0.3;
    saturatedFat = 0.1;
    transFat = 0;
    cholestrol = 0;
    sodium = 1.8;
    totalCarbohydrates = 25;
    dietaryFiber = 4.4;
    totalSugar = 19;
    vitaminA = 2;
    vitaminC = 14;
    vitaminD = 0;
    vitaminE = 0;
    vitaminK = 0;
    Thiamine = 0;
    Riboflavin = 0;
    Niacin = 0;
    vitaminB6 = 0;
    vitaminB12 = 0;
    protein = 0.5;
    score = 86;
  }

  if (foodName == "Banana") {
    calories = 105;
    totalFat = 0.4;
    saturatedFat = 0.1;
    transFat = 0;
    cholestrol = 0;
    sodium = 1.2;
    totalCarbohydrates = 27;
    dietaryFiber = 3.1;
    totalSugar = 14;
    vitaminA = 1.5;
    vitaminC = 17;
    vitaminD = 0;
    vitaminE = 0;
    vitaminK = 0;
    Thiamine = 0;
    Riboflavin = 0;
    Niacin = 0;
    vitaminB6 = 0;
    vitaminB12 = 0;
    protein = 1.3;
  }

  if (foodName == "Sprite") {
    calories = 140;
    totalFat = 0;
    saturatedFat = 0;
    transFat = 0;
    cholestrol = 0;
    sodium = 65;
    totalCarbohydrates = 38;
    dietaryFiber = 0;
    totalSugar = 38;
    vitaminA = 0;
    vitaminC = 0;
    vitaminD = 0;
    vitaminE = 0;
    vitaminK = 0;
    Thiamine = 0;
    Riboflavin = 0;
    Niacin = 0;
    vitaminB6 = 0;
    vitaminB12 = 0;
    protein = 0.2;
  }

  document.getElementById("r1").innerHTML = "Calories: " + calories;
  document.getElementById("r2").innerHTML = "Total Fat: " + totalFat;
  document.getElementById("r3").innerHTML = "Saturated Fat: " + saturatedFat;
  document.getElementById("r4").innerHTML = "Trans Fat: " + transFat;
  document.getElementById("r5").innerHTML = "Cholestrol: " + cholestrol;
  document.getElementById("r6").innerHTML = "Sodium: " + sodium;
  document.getElementById("r7").innerHTML =
    "Total Carbohydrates: " + totalCarbohydrates;
  document.getElementById("r8").innerHTML = "Dietary Fiber: " + dietaryFiber;
  document.getElementById("r9").innerHTML = "Total Sugar: " + totalSugar;
  document.getElementById("r10").innerHTML = "Vitamin A: " + vitaminA;
  document.getElementById("r11").innerHTML = "Vitamin C: " + vitaminC;
  document.getElementById("r12").innerHTML = "Vitamin D: " + vitaminD;
  document.getElementById("r12").innerHTML = "Vitamin E: " + vitaminE;
  document.getElementById("r13").innerHTML = "Vitamin K: " + vitaminK;
  document.getElementById("r14").innerHTML = "Thiamine: " + Thiamine;
  document.getElementById("r15").innerHTML = "Riboflavin: " + Riboflavin;
  document.getElementById("r16").innerHTML = "Niacin: " + Niacin;
  document.getElementById("r17").innerHTML = "Vitamin B6: " + vitaminB6;
  document.getElementById("r18").innerHTML = "Vitamin B12: " + vitaminB12;
  document.getElementById("r19").innerHTML = "Protein: " + protein;

  localStorage.setItem("calories", localStorage.getItem("calories") + calories);
  localStorage.setItem("totalfat", calories);
  localStorage.setItem("saturatedfat", calories);
  localStorage.setItem("transfat", calories);
  localStorage.setItem("cholesterol", calories);
  localStorage.setItem("sodium", calories);
  localStorage.setItem("dietaryfiber", calories);
  localStorage.setItem("sugar", calories);
}
