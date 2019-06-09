var totalFat;
var saturatedFat;
var cholesterol;
var sodium;
var totalCarbohydrates;
var dietaryFiber;
var sugars;
var protein;
var calories;

function getData() {
  var foodName = document.getElementById("myText").value;

  fetch(
    "https://api.nutritionix.com/v1_1/search/" +
      foodName +
      "?results=0:20&fields=item_name,brand_name,item_id,nf_calories,nf_total_fat,nf_saturated_fat,nf_trans_fatty_acid,nf_cholesterol,nf_sodium,nf_total_carbohydrate,nf_dietary_fiber,nf_sugars,nf_protein&appId=c384e200&appKey=05c2a9df560a5f221ce395890835678f"
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      let obj = myJson;
      calories = obj.hits[0].fields.nf_calories;
      totalFat = obj.hits[0].fields.nf_total_fat;
      saturatedFat = obj.hits[0].fields.nf_saturated_fat;
      cholesterol = obj.hits[0].fields.nf_cholesterol;
      sodium = obj.hits[0].fields.nf_sodium;
      totalCarbohydrates = obj.hits[0].fields.nf_total_carbohydrate;
      dietaryFiber = obj.hits[0].fields.nf_dietary_fiber;
      sugars = obj.hits[0].fields.nf_sugars;
      protein = obj.hits[0].fields.nf_protein;
    });

  if (calories > 0) {
    localStorage.setItem(
      "calories" + localStorage.getItem("day"),
      parseInt(localStorage.getItem("calories" + localStorage.getItem("day"))) +
        calories
    );
  }

  document.getElementById("r1").innerHTML = "Calories: " + calories;
  document.getElementById("r2").innerHTML = "Total Fat: " + totalFat;
  document.getElementById("r3").innerHTML = "Saturated Fat: " + saturatedFat;
  document.getElementById("r4").innerHTML = "Cholesterol: " + cholesterol;
  document.getElementById("r5").innerHTML = "Sodium: " + sodium;
  document.getElementById("r6").innerHTML =
    "Total Carbohydrates: " + totalCarbohydrates;
  document.getElementById("r7").innerHTML = "Dietary Fiber: " + dietaryFiber;
  document.getElementById("r8").innerHTML = "Sugars: " + sugars;
  document.getElementById("r9").innerHTML = "Protein: " + protein;

  localStorage.setItem("totalfat", localStorage.getItem("totalfat") + totalFat);

  localStorage.setItem(
    "saturatedfat",
    localStorage.getItem("saturatedfat") + saturatedFat
  );

  localStorage.setItem(
    "cholesterol",
    localStorage.getItem("cholesterol") + cholesterol
  );

  localStorage.setItem("sodium", localStorage.getItem("sodium") + sodium);
  localStorage.setItem(
    "dietaryfiber",
    localStorage.getItem("dietaryfiber") + dietaryFiber
  );

  localStorage.setItem("sugars", localStorage.getItem("sugars") + sugars);
}
