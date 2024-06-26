// Retrieve recipe data from localStorage
let recipeList = JSON.parse(localStorage.getItem("recipeList")) || [];

// Function to populate ingredient list
function populateIngredientList(ingredients) {
    let ingredientList = document.getElementById("ingredientList");
    ingredientList.innerHTML = "";
    ingredients.forEach(ingredient => {
        let li = document.createElement("li");
        li.innerHTML = `
            <input type="text" name="ingredientName" placeholder="Ingredient Name" value="${ingredient.name}">
            <input type="number" name="ingredientQuantity" placeholder="Quantity" min=0 max=99 value="${ingredient.quantity}">
        `;
        ingredientList.appendChild(li);
    });
}

// Function to populate form fields with recipe data
function populateForm(recipeId) {
    let recipe = recipeList.find(recipe => recipe.recipe_id === recipeId);
    if (recipe) {
        document.getElementById("recipe_name").value = recipe.recipe_name;
        document.getElementById("recipe_id").value = recipe.recipe_id;
        document.getElementById("course").value = recipe.course;
        populateIngredientList(recipe.ingredients);
        document.getElementById("description").value = recipe.description;
    }
}

// Function to add ingredient input fields
function addIngredient() {
    let li = document.createElement("li");
    li.innerHTML = `
        <input type="text" name="ingredientName" placeholder="Ingredient Name">
        <input type="number" name="ingredientQuantity" placeholder="Quantity" min=0 max=99>
    `;
    document.getElementById("ingredientList").appendChild(li);
}

// Function to update the recipe
function updateRecipe() {
    let recipeId = parseInt(document.getElementById("recipe_id").value);
    let ingredients = [];
    document.querySelectorAll("#ingredientList li").forEach(item => {
        let ingredientName = item.querySelector('input[name="ingredientName"]').value;
        let ingredientQuantity = item.querySelector('input[name="ingredientQuantity"]').value;
        if (ingredientName && ingredientQuantity) {
            ingredients.push({ name: ingredientName, quantity: ingredientQuantity });
        }
    });

    // Update the recipe in the recipeList array
    let recipeIndex = recipeList.findIndex(recipe => recipe.recipe_id === recipeId);
    if (recipeIndex !== -1) {
        recipeList[recipeIndex] = {
            recipe_id: recipeId,
            recipe_name: document.getElementById("recipe_name").value,
            course: document.getElementById("course").value,
            ingredients: ingredients,
            description: document.getElementById("description").value
        };
        
        // Save the updated recipeList to localStorage
        localStorage.setItem("recipeList", JSON.stringify(recipeList));
        alert("Recipe updated successfully!");
    } else {
        alert("Recipe not found!");
    }
}


window.onload = function() {
    let urlParams = new URLSearchParams(window.location.search);
    let recipeId = parseInt(urlParams.get('id'));
    populateForm(recipeId);
};


document.getElementById("updateBtn").addEventListener("click", updateRecipe);
