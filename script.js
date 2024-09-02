document.addEventListener('DOMContentLoaded', () => {
    const recipes = [
        { title: 'aloo paratha', category: 'punjabi', ingredients: ['aloo','flour'], image:'https://tse4.mm.bing.net/th?id=OIP.b8hRyQ733h-hxQNcL6p5uQHaLG&pid=Api&P=0&h=180' },
        { title: 'dal makhni', category: 'marathi', ingredients: ['dal','makkhan'], image: 'https://tse3.mm.bing.net/th?id=OIP.CAu2uBkRUz5-1hRSeTQmXQAAAA&pid=Api&P=0&h=180' },
        { title: 'panerr tikka', category: 'indori', ingredients: ['paneer','onion','masala'], image: 'https://tse3.mm.bing.net/th?id=OIP.a19W5LlfzLbz1oNd_mYPLgHaLH&pid=Api&P=0&h=180' },
        { title: 'dal masala', category: 'rajasthani', ingredients: ['dal','onion','masala'], image: 'https://tse2.mm.bing.net/th?id=OIP.3lXNVbNbogVY0vUxvEwmAgHaLH&pid=Api&P=0&h=180' },
        { title: 'shahi paneer', category: 'banarsi', ingredients: ['paneer','onion','curry','masala'], image: 'https://tse1.mm.bing.net/th?id=OIP.NEsjeBv7QXZMZMo-M7ylNgHaLH&pid=Api&P=0&h=180' },
        { title: 'matar paneer', category: 'gujrati', ingredients: ['paneer','matar','onion','masala'], image: 'https://tse2.mm.bing.net/th?id=OIP.-EOgGNYvnLSQrsaucIa9iQHaLO&pid=Api&P=0&h=180' },
        // Add more recipes as needed

    ];

    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const recipesContainer = document.getElementById('recipes');
    const shoppingListItems = document.getElementById('shopping-list-items');
    const generateListButton = document.getElementById('generate-list');

    function displayRecipes(recipesToDisplay) {
        recipesContainer.innerHTML = '';
        recipesToDisplay.forEach(recipe => {
            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipe');
            recipeDiv.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.title}">
                <h3>${recipe.title}</h3>
                <p>Category: ${recipe.category}</p>
                <button class="add-to-list">Add Ingredients to List</button>
            `;
            recipesContainer.appendChild(recipeDiv);

            recipeDiv.querySelector('.add-to-list').addEventListener('click', () => {
                addIngredientsToShoppingList(recipe.ingredients);
            });
        });
    }

    function addIngredientsToShoppingList(ingredients) {
        ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.textContent = ingredient;
            shoppingListItems.appendChild(li);
        });
    }

    function filterRecipes() {
        const searchText = searchInput.value.toLowerCase();
        const filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(searchText));
        displayRecipes(filteredRecipes);
    }

    searchButton.addEventListener('click', filterRecipes);
    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            filterRecipes();
        }
    });

    generateListButton.addEventListener('click', () => {
        shoppingListItems.innerHTML = ''; // Clear the list before generating
        const ingredients = recipes.flatMap(recipe => recipe.ingredients);
        ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.textContent = ingredient;
            shoppingListItems.appendChild(li);
        });
    });

    // Display all recipes initially
    displayRecipes(recipes);
});
