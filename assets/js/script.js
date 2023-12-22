console.log("working");

var recipeSelect = document.getElementById("ChooseRecipe");
var showIngredientList = document.getElementById("showIngredientList");
var searchBtn = document.getElementById("searchBtn");
var showIt = document.getElementById("showIt");
var errorRecipe = document.getElementById("err-recipe");
var recipeImage = document.getElementById("recipeImage");
var showInstructiontionList = document.getElementById("showInstructionList");


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
    //var theIngredients = data.hits[0].recipe.ingredients;
     
      myRecipies = data.hits;
  
    console.log(data.hits[0].recipe.label);
    console.log(typeof(data.hits));

    var theList = [];


        for (var i = 0; i < 10; i++){
        console.log(data.hits[i].recipe.label);
        theList.push(data.hits[i].recipe.label);
    }

      console.log(theList);

    // for (const key in myRecipies ){
    //     //instrucionsArray.push(theInstructions[key]);
    //     console.log(myRecipies[key]);
    //   //  console.log("me");
    // }

    var theIngredients;
   
    // var ingredientsArray = [];

    var ingredientsArray;
    
    var instrucionsArray = [];

    // getting instructions from recipe
      var theInstructions = data.hits[0].recipe.instructionLines;
    console.log(typeof(theInstructions));

    for (const key in theInstructions ){
        instrucionsArray.push(theInstructions[key]);
        console.log(theInstructions[key]);
      //  console.log("me");
    }
  console.log(instrucionsArray);

  for (var i = 0; i < instrucionsArray.length; i++){
    var liE = document.createElement("li");
    liE.innerText = instrucionsArray[i];
    showInstructiontionList.appendChild(liE);
    
   }
   

//    console.log(typeof(data.hits));
//     for (var i = 0; i < 10; i++){
//         console.log(data.hits[i].recipe.label);
//     }

// var recipies = data.hits




// recipeList();

// function recipeList(){
//     for (const key in recipies ){
       
//        console.log(recipies[key].recipe.label);
//        theList.push(recipies[key].recipe.label);
//     }
    
// }

// console.log(theList);

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
    showIngredientList.replaceChildren();
    var recipeChosen = document.getElementById("ChooseRecipe").value;
   showIt.innerHTML = recipeChosen;
   console.log(recipeChosen);

   if (recipeChosen == data.hits[0].recipe.label){
    // checkRecipe(data.hits[0].recipe.label, data.hits[0].recipe.ingredients);
    theIngredients = data.hits[0].recipe.ingredients
    
    displayIngredients(theIngredients);
    recipeImage.src = data.hits[0].recipe.image;
    
   } else if (recipeChosen == data.hits[1].recipe.label){
    // checkRecipe(data.hits[0].recipe.label, data.hits[0].recipe.ingredients);
    theIngredients = data.hits[1].recipe.ingredients
    
    recipeImage.src = data.hits[1].recipe.image;
    displayIngredients(theIngredients);
    
   }
        
   


   function displayIngredients(theIngredientsR){
    
    ingredientsArray = [];
    showIngredientList.replaceChildren();
    console.log("match");
    for (const key in theIngredientsR ){
        //console.log(`${key}: ${theIngredients[key].text}`);
        console.log(theIngredientsR[key].text);
        ingredientsArray.push(theIngredientsR[key].text);
    }

    console.log(ingredientsArray);

    for (var i = 0; i < ingredientsArray.length; i++){
        var liE = document.createElement("li");
        liE.innerText = ingredientsArray[i];
        showIngredientList.appendChild(liE);
        
       }
   }

  

   


   
//        function checkRecipe(recipeLabel, recipeIngredients){
//             theIngredients = recipeIngredients;
//    if (recipeChosen == recipeLabel){
//    // theIngredients = recipeIngredients;
//      displayIngredients();
   
//    }else if(recipeChosen == data.hits[1].recipe.label) {
//     theIngredients = data.hits[1].recipe.ingredients
//     ingredientsArray = [];
//     showIngredientList.replaceChildren();
//     console.log("match");
//     for (const key in theIngredients ){
//         //console.log(`${key}: ${theIngredients[key].text}`);
//         console.log(theIngredients[key].text);
//         ingredientsArray.push(theIngredients[key].text);
//     }

//     console.log(ingredientsArray);

//     for (var i = 0; i < ingredientsArray.length; i++){
//         var liE = document.createElement("li");
//         liE.innerText = ingredientsArray[i];
//         showIngredientList.appendChild(liE);
        
//        }
   
//    } else{
//     showIngredientList.replaceChildren();
//     console.log("not match");
    
//     errorRecipe.innerHTML = "Recipe not found!";

//    }


//        }
}


})//end  of then call


$(function () { 
    console.log("jquery");















 });