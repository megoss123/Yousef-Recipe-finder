
function toggleButtons(item) {
    var buttons = item.querySelectorAll('button');
    buttons.forEach(function(button) {
        button.classList.toggle('hidden');
    });
}

function removeRecipe(button) {
    var listItem = button.parentElement;
    listItem.remove();
}

function inspectRecipe(button) {
    var recipeName = button.parentElement.querySelector('a').innerText;
    var infoArea = document.getElementById('infoArea');
    infoArea.innerHTML = '<h2>Recipe Information:</h2>' +
                         '<p>Name: ' + recipeName + '</p>' +
                         '<p>Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>' +
                         '<p>Instructions: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>';
}

function addNewRecipe() {
    var list = document.getElementById('recipeList');
    var newItem = document.createElement('li');
    newItem.innerHTML = '<a href="#">New Recipe</a>' +
                        '<button type="button" class="hidden" onclick="removeRecipe(this)">Remove</button>' +
                        '<button type="button" class="hidden" onclick="inspectRecipe(this)">Inspect</button>';
    list.appendChild(newItem);

    toggleButtons(newItem);
}

document.getElementById('addRecipeButton').addEventListener('click', addNewRecipe);
