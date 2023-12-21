console.log("working");

var recipeSelect = document.getElementById("ChooseRecipe");
var showIngredientList = document.getElementById("showIngredientList");
var searchBtn = document.getElementById("searchBtn");
var showIt = document.getElementById("showIt");









var url = "https://api.edamam.com/api/recipes/v2?type=public&q=Chicken&app_id=7446fad3&app_key=c948828625f59288cf410564484402b1";

fetch(url)
//.then(response => response.json())
.then(function(response){
    return response.json();
})
//.then(data => console.log(data))
.then(function(data){
    console.log(data);
    console.log(data.hits[0].recipe.label);
    console.log(data.hits[0].recipe.image);
    console.log(data.hits[0].recipe.ingredients[0].text);
    console.log(typeof(data.hits[0].recipe.ingredients))
    // for(var i = 0; i < ingredients.length; i++){
    //     console.log(data.hits[0].recipe.ingredients[i].text);
    // }
    var theIngredients = data.hits[0].recipe.ingredients;

    var ingredientsArray = [];

    for (const key in theIngredients ){
        //console.log(`${key}: ${theIngredients[key].text}`);
        console.log(theIngredients[key].text);
        ingredientsArray.push(theIngredients[key].text);
    }

    console.log(ingredientsArray);

    for (var i = 0; i < ingredientsArray.length; i++){
        var liE = document.createElement("li");
        liE.innerText = ingredientsArray[i];
        showIngredientList.appendChild(liE);
        
       }

    // getting instructions from recipe
      var theInstructions = data.hits[0].recipe.instructionLines;
    console.log(typeof(theInstructions));

    for (const key in theInstructions ){
       
        console.log(theInstructions[key]);
    }

//    console.log(typeof(data.hits));
//     for (var i = 0; i < 10; i++){
//         console.log(data.hits[i].recipe.label);
//     }

var recipies = data.hits

var theList = [];



recipeList();

function recipeList(){
    for (const key in recipies ){
       
       // console.log(recipies[key].recipe.label);
       theList.push(recipies[key].recipe.label);
    }
    
}

var optionSelection;

console.log(theList);
console.log(theList[0])
for (var i =0; i < theList.length; i++){
    console.log(theList[i]);
    optionSelection += "<option>"+ theList[i] + "</option>";
    
}

recipeSelect.innerHTML = optionSelection;

// show recipe when selected
searchBtn.addEventListener("click", showTheRecipe);

function showTheRecipe(){
    var recipeChosen = document.getElementById("ChooseRecipe").value;
   showIt.innerHTML = recipeChosen;
   console.log(recipeChosen);
           
   if (recipeChosen == data.hits[0].recipe.label){
    console.log("match");
   }else{
    console.log("not match")

   }


}


})//end  of then call


$(function () { 
    console.log("jquery");















 });