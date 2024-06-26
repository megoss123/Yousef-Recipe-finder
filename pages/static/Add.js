let recipe_name = document.getElementById("recipe_name");
let recipe_id = document.getElementById("recipe_id");
let course = document.getElementById("course");
let IngredientName = document.getElementById("IngredientName");
let IngredientQuantity = document.getElementById("IngredientQuantity");
let description = document.getElementById("description");
let addBtn = document.getElementById("addBtn");
let ingredientList = document.getElementById("ingredientList");

let recipeList = JSON.parse(localStorage.getItem("recipeList")) || [];

function addIngredient() {
    let li = document.createElement("li");
    li.innerHTML = `
        <input type="text" name="ingredientName" placeholder="Ingredient Name">
        <input type="number" name="ingredientQuantity" placeholder="Quantity" min=0 max=99>
    `;
    ingredientList.appendChild(li);
}

function addNewRecipe() {
    let ingredients = [];
    ingredientList.querySelectorAll("li").forEach(item => {
        let ingredientName = item.querySelector('input[name="ingredientName"]').value;
        let ingredientQuantity = item.querySelector('input[name="ingredientQuantity"]').value;
        if (ingredientName && ingredientQuantity) {
            ingredients.push(`${ingredientName}: ${ingredientQuantity}`);
        }
    });

    let Recipe = {
        recipe_name: recipe_name.value,
        recipe_id: parseInt(recipe_id.value),
        course: course.value,
        ingredients: ingredients.join(", "),
        description: description.value
    };

    recipeList.push(Recipe);
    localStorage.setItem("recipeList", JSON.stringify(recipeList));
    alert("Recipe added successfully!");

    document.querySelector("form").reset();
    ingredientList.innerHTML = `
        <li>
            <input type="text" name="ingredientName" placeholder="Ingredient Name" id="IngredientName">
            <input type="number" name="ingredientQuantity" placeholder="Quantity" min=0 max=99 id="IngredientQuantity">
        </li>
    `;
}

addBtn.addEventListener("click", addNewRecipe);




// let recipe_name = document.getElementById("recipe_name");
//       let recipe_id = document.getElementById("recipe_id");
//       let course = document.getElementById("course");
//       let IngredientName = document.getElementById("IngredientName");
//       let IngredientQuantity = document.getElementById("IngredientQuantity");
//       let description = document.getElementById("description");
//       let addBtn = document.getElementById("addBtn");

//       let recipeList = [];

//       function addNewRecipe()
//       {

//         let Recipe = {
//           recipe_name : recipe_name.value,
//           description: description.value,
//           recipe_id : recipe_id.value ,
//           course : course.value,
//           IngredientName: IngredientName.value,
//           IngredientQuantity: IngredientQuantity.value,
//           description: description.value
//         }
           
//         recipeList.push(Recipe);
        
    
//       //  update recipelist 
//         localStorage.setItem("recipeList" , JSON.stringify(recipeList));
        

       
//       }

//       addBtn.addEventListener("click" , addNewRecipe);
