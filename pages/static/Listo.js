document.addEventListener("DOMContentLoaded", function() {
    let recipeListContainer = document.getElementById('recipe-list');
    
    let initialRecipes = [
        {
            recipe_id: 1,
            recipe_name: "Pasta",
            ingredients: "Pasta: 200g, Tomatoes: 2, Garlic: 3 cloves",
            description: "A classic Italian pasta recipe."
        },
        {
            recipe_id: 2,
            recipe_name: "Pizza",
            ingredients: "Flour: 500g, Cheese: 200g, Tomato Sauce: 100g",
            description: "Delicious homemade pizza."
        },
        {
            recipe_id: 3,
            recipe_name: "Salmon",
            ingredients: "Salmon: 2 fillets, Lemon: 1, Dill: 1 tbsp",
            description: "Grilled salmon with lemon and dill."
        }
    ];

    let storedRecipes = JSON.parse(localStorage.getItem("recipeList")) || [];

    
    let combinedRecipes = initialRecipes.concat(storedRecipes.filter(storedRecipe => {
        return !initialRecipes.some(initialRecipe => initialRecipe.recipe_id === storedRecipe.recipe_id);
    }));

    localStorage.setItem("recipeList", JSON.stringify(combinedRecipes));

    
    let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) || {};
    let isAdmin = loggedInUser.isAdmin;

    
    combinedRecipes.forEach(function(recipe) {
        let recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe');
        recipeElement.setAttribute('data-recipe-id', recipe.recipe_id);
        recipeElement.innerHTML = `
            <h2>${recipe.recipe_name}</h2>
            <p class="ingredients">${recipe.ingredients}</p>
            <p class="description">${recipe.description}</p>
            <button class="details">Details</button>
            ${isAdmin ? '<button class="delete">Delete</button>' : ''}
        `;

        recipeElement.querySelector('.details').addEventListener('click', function() {
            alert(recipe.ingredients);
        });

        if (isAdmin) {
            recipeElement.querySelector('.delete').addEventListener('click', function() {
                let recipeId = recipe.recipe_id;
                combinedRecipes = combinedRecipes.filter(r => r.recipe_id !== recipeId);
                localStorage.setItem("recipeList", JSON.stringify(combinedRecipes));
                recipeListContainer.removeChild(recipeElement);
            });
        }

        recipeListContainer.appendChild(recipeElement);
    });
});















// let recipeListContainer = document.getElementById('recipe-list');
// let recipeElements = recipeListContainer.querySelectorAll('.recipe');

// let recipeList = [];

// if (localStorage.getItem("recipeList") != null) {
//     recipeList = JSON.parse(localStorage.getItem("recipeList"));
// }

// let existingRecipeNames = new Set(recipeList.map(recipe => recipe.recipe_name));

// recipeElements.forEach(function(recipeElement) {
//     let recipeName = recipeElement.querySelector('h2').textContent;
//     let recipeIngredients = recipeElement.querySelector('.ingredients').textContent;
//     let description = recipeElement.querySelector('.description').textContent;

//     if (!existingRecipeNames.has(recipeName)) {
//         let recipe = {
//             recipe_name: recipeName,
//             ingredients: recipeIngredients,
//             description: description
//         };

//         recipeList.push(recipe);
//         existingRecipeNames.add(recipeName);
//     }

//     let detailsButton = recipeElement.querySelector('button');
//     detailsButton.addEventListener('click', function() {
//         alert(recipeIngredients);
//     });
// });

// localStorage.setItem('recipeList', JSON.stringify(recipeList));





        
//         let recipeElements = recipeListContainer.querySelectorAll('.recipe');

        
//         let recipeList =[];

//         if (localStorage.getItem("recipeList") != null) {
//             recipeList = JSON.parse(localStorage.getItem("recipeList"));
//           }

        
//         recipeElements.forEach(function(recipeElement) {
//             let recipeName = recipeElement.querySelector('h2').textContent;
//             let recipeIngredients = recipeElement.querySelector('.ingredients').textContent;
//             let disc_ription = recipeElement.querySelector('.description').textContent;

//             let recipe = {
//                 recipe_name: recipeName,
//                 ingredients: recipeIngredients,
//                 description : disc_ription
                 
//              };

//             recipeList.push(recipe);
            
          

//         });
// localStorage.setItem('recipeList', JSON.stringify(recipeList));  
        
        