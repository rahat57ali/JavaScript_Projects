const API_KEY = "275d58779ccf4e22af03e792e8819fff";
const recipeListEl = document.getElementById("recipe-list");

function displayRecipies(recipes){
    recipeListEl.innerHTML="";
    recipes.forEach((recipe) => {
        const recipeItemEl = document.getElementById("li");
        recipeItemEl.classList.add("recipe-item");
        recipeImageEl = document.getElementById("img");
        recipeImageEl.src = recipe.image;
        recipeImageEl.alt = "recipe image";

        
    })
}