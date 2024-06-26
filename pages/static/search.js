$(document).ready(function() {
  $('#searchInput').on('keyup', function() {
    var query = $(this).val();
    $.ajax({
      url: $('#searchForm').attr('action'),
      data: {
        'query': query
      },
      success: function(data) {
        var results = '';
        data.forEach(function(recipe) {
          results += `<div class="recipeCard">
                        <h3>${recipe.recipe_name}</h3>
                        <p>${recipe.description}</p>
                      </div>`;
        });
        $('#allRecipes').html(results);
      }
    });
  });
});















// document.addEventListener('DOMContentLoaded', function() {
//   const input = document.getElementById('searchInput');
//   const resultsContainer = document.getElementById('allRecipes');

//   input.addEventListener('keyup', function() {
//     const query = input.value.trim().toLowerCase();
//     const searchUrl = `/search/?q=${encodeURIComponent(query)}`;

//     fetch(searchUrl, {
//       method: 'GET',
//       headers: {
//         'X-Requested-With': 'XMLHttpRequest'
//       }
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Network response was not ok: ${response.statusText}`);
//       }
//       return response.json();
//     })
//     .then(data => {
//       resultsContainer.innerHTML = '';
//       if (data.length > 0) {
//         data.forEach(recipe => {
//           const recipeElement = document.createElement('div');
//           recipeElement.classList.add('recipeCard');
//           recipeElement.innerHTML = `
//             <h3>${recipe.recipe_name}</h3>
//             <p>${recipe.description}</p>
//             <p>${recipe.ingredients}</p>
//             <p>${recipe.quantity}</p>
//           `;
//           resultsContainer.appendChild(recipeElement);
//         });
//       } else {
//         resultsContainer.innerHTML = '<p>No recipes found.</p>';
//       }
//     })
//     .catch(error => {
//       console.error('Error:', error);
//       resultsContainer.innerHTML = 'An error occurred while searching for recipes. Please try again later.';
//     });
//   });
// });
























// document.addEventListener('DOMContentLoaded', function() {
//   const input = document.getElementById('searchInput');
//   const resultsContainer = document.getElementById('allRecipes');

//   input.addEventListener('keyup', function() {
//     const query = input.value.trim().toLowerCase();
//     const searchUrl = `/search/?q=${encodeURIComponent(query)}`;

//     fetch(searchUrl, {
//       method: 'GET',
//       headers: {
//         'X-Requested-With': 'XMLHttpRequest'
//       }
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Network response was not ok: ${response.statusText}`);
//       }
//       return response.json();
//     })
//     .then(data => {
//       resultsContainer.innerHTML = '';
//       if (data.length > 0) {
//         data.forEach(recipe => {
//           const recipeElement = document.createElement('div');
//           recipeElement.classList.add('recipeCard');
//           recipeElement.innerHTML = `
//             <h3>${recipe.recipe_name}</h3>
//             <p>${recipe.description}</p>
//             <p>${recipe.ingredients}</p>
//             <p>${recipe.quantity}</p>
//           `;
//           resultsContainer.appendChild(recipeElement);
//         });
//       } else {
//         resultsContainer.innerHTML = '<p>No recipes found.</p>';
//       }
//     })
//     .catch(error => {
//       console.error('Error:', error);
//       resultsContainer.innerHTML = 'An error occurred while searching for recipes. Please try again later.';
//     });
//   });
// });















// let recipeList = [];

//     if (localStorage.getItem("recipeList") != null) {
//       recipeList = JSON.parse(localStorage.getItem("recipeList"));
//     }

//     var searchValue = document.getElementById("searchInput");

//     searchValue.addEventListener("keyup", function () {
//       var temp = "";
//       for (var i = 0; i < recipeList.length; i++) {
//         if (
//           recipeList[i].recipe_name
//             .toLowerCase().includes(searchValue.value.trim().toLowerCase())
            
//         ) {
//           var x = `<div class= "recipeCard">

//               <h3>${recipeList[i].recipe_name}</h3>
//               <p>${recipeList[i].description}</p>

//               </div>`;
//           temp += x;
//         }
//       }
//       document.querySelector("#allRecipes").innerHTML = temp;
      
//     });

// *********************************************************************
//     $(document).ready(function() {
//       // Function to fetch and display recipes via AJAX
//       function fetchRecipes(searchTerm) {
//           $.ajax({
//               url: '/get-recipes/',  // Replace with your Django view URL
//               type: 'GET',
//               data: {
//                   'search': searchTerm
//               },
//               dataType: 'json',
//               success: function(data) {
//                   displayRecipes(data);  // Call function to display recipes
//               },
//               error: function(xhr, errmsg, err) {
//                   console.log(xhr.status + ': ' + xhr.responseText);
//               }
//           });
//       }

//       // Function to display recipes
//       function displayRecipes(recipes) {
//           var temp = "";
//           for (var i = 0; i < recipes.length; i++) {
//               var x = `<div class="recipeCard">
//                           <h3>${recipes[i].recipe_name}</h3>
//                           <p>${recipes[i].description}</p>
//                        </div>`;
//               temp += x;
//           }
//           document.querySelector("#allRecipes").innerHTML = temp;
//       }

//       // Event listener for search input
//       $('#searchInput').on('keyup', function() {
//           var searchValue = $(this).val().trim().toLowerCase();
//           if (searchValue.length > 0) {
//               fetchRecipes(searchValue);  // Fetch recipes based on search input
//           } else {
//               $('#allRecipes').empty();  // Clear recipes if search input is empty
//           }
//       });
//   });

