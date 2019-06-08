var calories;
var totalFat;
var saturatedFat;
var cholesterol;
var sodium;
var totalCarbohydrates;
var dietaryFiber;
var sugars;
var protein;
var calories1;
var calories2;

function getData() {
  var foodName = document.getElementById("myText").value;

  fetch(
    "https://api.nutritionix.com/v1_1/search/" +
      foodName +
      "?results=0:20&fields=item_name,brand_name,item_id,nf_calories,nf_total_fat,nf_saturated_fat,nf_trans_fatty_acid,nf_cholesterol,nf_sodium,nf_total_carbohydrate,nf_dietary_fiber,nf_sugars,nf_protein&appId=62c73137&appKey=25bf33dc3657fea53a11d052cc75c79e"
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      let obj = myJson;
      calories1 = obj.hits[0].fields.nf_calories;
      calories2 = obj.hits[0].fields.nf_calories;
      totalFat = obj.hits[0].fields.nf_total_fat;
      saturatedFat = obj.hits[0].fields.nf_saturated_fat;
      cholesterol = obj.hits[0].fields.nf_cholesterol;
      sodium = obj.hits[0].fields.nf_sodium;
      totalCarbohydrates = obj.hits[0].fields.nf_total_carbohydrate;
      dietaryFiber = obj.hits[0].fields.nf_dietary_fiber;
      sugars = obj.hits[0].fields.nf_sugars;
      protein = obj.hits[0].fields.nf_protein;
    });

  if (localStorage.getItem("day") == 1);
  {
    document.getElementById("r1").innerHTML = "Calories: " + calories1;
  }
  if (localStorage.getItem("day") == 2);
  {
    document.getElementById("r1").innerHTML = "Calories: " + calories2;
  }

  document.getElementById("r2").innerHTML = "Total Fat: " + totalFat;
  document.getElementById("r3").innerHTML = "Saturated Fat: " + saturatedFat;
  document.getElementById("r4").innerHTML = "Cholesterol: " + cholesterol;
  document.getElementById("r5").innerHTML = "Sodium: " + sodium;
  document.getElementById("r6").innerHTML =
    "Total Carbohydrates: " + totalCarbohydrates;
  document.getElementById("r7").innerHTML = "Dietary Fiber: " + dietaryFiber;
  document.getElementById("r8").innerHTML = "Sugars: " + sugars;
  document.getElementById("r9").innerHTML = "Protein: " + protein;

  localStorage.setItem("calories1", localStorage.getItem("calories1") + calories1);
  localStorage.setItem("calories2", localStorage.getItem("calories2") + calories2);

  
  
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
