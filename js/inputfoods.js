var calories;
var totalFat;
var saturatedFat;
var transFat;
var cholestrol;
var sodium;
var totalCarbohydrates;
var dietaryFiber;
var totalSugar;
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

function getData(){
    
    var foodName = document.getElementById("myText").value;

    if(foodName == 'Apple'){
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
        score = 86;

        
    }

    if(foodName == 'Banana'){
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
    }

    if(foodName == 'Sprite'){
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
    }
}