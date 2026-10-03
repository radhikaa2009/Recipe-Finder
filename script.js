async function searchRecipes() {

    const searchInput = document.getElementById("searchInput");
    const recipeContainer = document.getElementById("recipeContainer");
    const message = document.getElementById("message");

    const searchText = searchInput.value.trim();

    if (searchText === "") {
        message.textContent = "Please enter a recipe name.";
        recipeContainer.innerHTML = "";
        return;
    }

    message.textContent = "Finding delicious recipes...";
    recipeContainer.innerHTML = "";
message.textContent = "TESTING";
return;

    try {

        const url =
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(searchText)}`;

        const response = await fetch(url);

        const data = await response.json();

        if (!data.meals) {

            message.textContent =
                "No recipes found. Try another search.";

            return;
        }

        message.textContent =
            `${data.meals.length} recipe(s) found`;

        data.meals.forEach(meal => {

            const card = document.createElement("div");

            card.className = "recipe-card";

            card.innerHTML = `
                <img 
                    src="${meal.strMealThumb}" 
                    alt="${meal.strMeal}"
                >

                <h2>${meal.strMeal}</h2>

                <button onclick="showRecipe('${meal.idMeal}')">
                    View Recipe
                </button>
            `;

            recipeContainer.appendChild(card);

        });

    } catch (error) {

        console.error(error);

        message.textContent =
            "Unable to load recipes. Please check your internet connection.";

    }
}


async function showRecipe(mealId) {

    try {

        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        );

        const data = await response.json();

        const meal = data.meals[0];

        let ingredients = "";

        for (let i = 1; i <= 20; i++) {

            const ingredient =
                meal[`strIngredient${i}`];

            const measure =
                meal[`strMeasure${i}`];

            if (
                ingredient &&
                ingredient.trim() !== ""
            ) {

                ingredients +=
                    `<li>${measure} ${ingredient}</li>`;
            }
        }

        const recipeContainer =
            document.getElementById("recipeContainer");

        recipeContainer.innerHTML = `

            <div class="recipe-card">

                <img
                    src="${meal.strMealThumb}"
                    alt="${meal.strMeal}"
                >

                <h2>${meal.strMeal}</h2>

                <p style="padding: 0 17px;">
                    <strong>Category:</strong>
                    ${meal.strCategory || "Not available"}
                </p>

                <p style="padding: 8px 17px;">
                    <strong>Cuisine:</strong>
                    ${meal.strArea || "Not available"}
                </p>

                <h3 style="padding: 15px 17px 5px;">
                    Ingredients
                </h3>

                <ul style="padding: 5px 35px 15px;">
                    ${ingredients}
                </ul>

                <h3 style="padding: 10px 17px;">
                    Instructions
                </h3>

                <p style="padding: 0 17px 20px; line-height: 1.7;">
                    ${meal.strInstructions}
                </p>

            </div>
        `;

        window.scrollTo({
            top: recipeContainer.offsetTop - 80,
            behavior: "smooth"
        });

    } catch (error) {

        console.error(error);

        document.getElementById("message").textContent =
            "Unable to load recipe details.";

    }
}

function goToResults() {

    const searchInput = document.getElementById("searchInput");

    const searchText = searchInput.value.trim();

    if (searchText === "") {

        alert("Please enter a recipe name.");

        return;
    }

    window.location.href =
        "recipes.html?search=" +
        encodeURIComponent(searchText);
}
async function loadResultsPage() {

    const params = new URLSearchParams(window.location.search);
    const searchText = params.get("search");

    const title = document.getElementById("resultsTitle");
    const subtitle = document.getElementById("resultsSubtitle");
    const container = document.getElementById("recipeContainer");
    const message = document.getElementById("message");

    if (!searchText) {
        title.textContent = "Discover Recipes";
        subtitle.textContent = "Search for something delicious";
        return;
    }

    title.textContent = "Recipes for " + searchText;
    subtitle.textContent = "Discover delicious recipes";

    container.innerHTML = "";
    message.textContent = "Finding delicious recipes...";

    /* LOCAL RECIPES */

    const localResults = localRecipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchText.toLowerCase()) ||
    recipe.category.toLowerCase().includes(searchText.toLowerCase()) ||
    recipe.cuisine.toLowerCase().includes(searchText.toLowerCase()) ||
    recipe.ingredients.some(ingredient =>
        ingredient.toLowerCase().includes(searchText.toLowerCase())
    )
);

    /* DISPLAY LOCAL RECIPES FIRST */

    localResults.forEach(recipe => {

        const card = document.createElement("div");

        card.className = "recipe-card";

        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">

            <h2>${recipe.name}</h2>

            <p style="padding: 0 17px 5px;">
                ${recipe.cuisine} Cuisine
            </p>

            <button
    onclick="openLocalRecipe('${recipe.id}')"
>
    View Recipe
</button>

        `;

        container.appendChild(card);
    });

    /* API RECIPES */

    try {

        const response = await fetch(
            "https://www.themealdb.com/api/json/v1/1/search.php?s=" +
            encodeURIComponent(searchText)
        );

        const data = await response.json();

        if (data.meals) {

            data.meals.forEach(meal => {

                const card = document.createElement("div");

                card.className = "recipe-card";

                card.innerHTML = `
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}">

                    <h2>${meal.strMeal}</h2>

                    <p style="padding: 0 17px 5px;">
                        ${meal.strArea || "International"} Cuisine
                    </p>

                   <button
    onclick="openApiRecipe('${meal.idMeal}')"
>
    View Recipe
</button>


                `;

                container.appendChild(card);
            });
        }

    } catch (error) {

        console.log("API error:", error);

    }

    /* FINAL MESSAGE */

    const totalRecipes =
        container.querySelectorAll(".recipe-card").length;

    if (totalRecipes === 0) {

        message.textContent =
            "No recipes found. Try another search.";

    } else {

        message.textContent =
            totalRecipes + " recipe(s) found";

    }
}

        

function searchFromResults() {

    const input =
        document.getElementById("resultsSearchInput");

    const searchText =
        input.value.trim();

    if (searchText === "") {

        alert("Please enter a recipe name.");

        return;
    }

    window.location.href =
        "recipes.html?search=" +
        encodeURIComponent(searchText);
}
if (window.location.pathname.endsWith("recipes.html")) {
    loadResultsPage();
}
function showLocalRecipe(recipeId) {

    const recipe =
        localRecipes.find(
            item => item.id === recipeId
        );

    if (!recipe) {
        return;
    }

    const container =
        document.getElementById("recipeContainer");

    container.innerHTML = `

        <div class="recipe-card">

            <img
                src="${recipe.image}"
                alt="${recipe.name}"
            >

            <h2>
                ${recipe.name}
            </h2>

            <p style="padding: 0 17px 5px;">
                <strong>Category:</strong>
                ${recipe.category}
            </p>

            <p style="padding: 0 17px 10px;">
                <strong>Cuisine:</strong>
                ${recipe.cuisine}
            </p>

            <h3 style="padding: 15px 17px 8px;">
                Ingredients
            </h3>

            <ul style="padding: 5px 35px 15px;">

                ${recipe.ingredients
                    .map(item => `<li>${item}</li>`)
                    .join("")}

            </ul>

            <h3 style="padding: 10px 17px;">
                Instructions
            </h3>

            <p style="
                padding: 0 17px 25px;
                line-height: 1.7;
            ">
                ${recipe.instructions}
            </p>

        </div>
    `;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
function openLocalRecipe(recipeId) {

    window.location.href =
        "recipe.html?type=local&id=" +
        encodeURIComponent(recipeId);
}


function openApiRecipe(mealId) {

    window.location.href =
        "recipe.html?type=api&id=" +
        encodeURIComponent(mealId);
}
async function loadRecipeDetails() {

    const params =
        new URLSearchParams(window.location.search);

    const type =
        params.get("type");

    const id =
        params.get("id");

    const details =
        document.getElementById("recipeDetails");

    const message =
        document.getElementById("message");


    if (!type || !id) {

        message.textContent =
            "Recipe not found.";

        return;
    }


    /* =========================
       LOCAL RECIPE
    ========================= */

    if (type === "local") {

        const recipe =
            localRecipes.find(
                item => item.id === id
            );

        if (!recipe) {

            message.textContent =
                "Recipe not found.";

            return;
        }

        message.textContent = "";

        details.innerHTML = `

            <div class="detail-card">

                <img
                    src="${recipe.image}"
                    alt="${recipe.name}"
                >

                <div class="detail-content">

                    <p class="section-label">
                        ${recipe.category}
                    </p>

                    <h1>
                        ${recipe.name}
                    </h1>

                    <p class="recipe-cuisine">
                        ${recipe.cuisine} Cuisine
                    </p>
                    <p class="recipe-cuisine">
    ⏱️ Cooking Time: ${recipe.cookingTime || "Not specified"}
</p>
<button
    class="favorite-btn"
    onclick="toggleFavorite('local', '${recipe.id}')"
>
    ♡ Add to Favourites
</button>

                    <h2>
                        Ingredients
                    </h2>

                    <ul>

                        ${recipe.ingredients
                            .map(
                                item =>
                                `<li>${item}</li>`
                            )
                            .join("")}

                    </ul>


                    <h2>
                        Instructions
                    </h2>
<div class="instructions">
    <ol>
        ${recipe.instructions.map(step => `<li>${step}</li>`).join("")}
    </ol>
</div>

                </div>

            </div>

        `;

        return;
    }


    /* =========================
       API RECIPE
    ========================= */

    if (type === "api") {

        try {

            const response =
                await fetch(
                    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
                );

            const data =
                await response.json();

            if (!data.meals) {

                message.textContent =
                    "Recipe not found.";

                return;
            }

            const meal =
                data.meals[0];


            let ingredients = "";


            for (
                let i = 1;
                i <= 20;
                i++
            ) {

                const ingredient =
                    meal[`strIngredient${i}`];

                const measure =
                    meal[`strMeasure${i}`];


                if (
                    ingredient &&
                    ingredient.trim() !== ""
                ) {

                    ingredients += `
                        <li>
                            ${measure || ""}
                            ${ingredient}
                        </li>
                    `;
                }
            }


            message.textContent = "";


            details.innerHTML = `

                <div class="detail-card">

                    <img
                        src="${meal.strMealThumb}"
                        alt="${meal.strMeal}"
                    >

                    <div class="detail-content">

                        <p class="section-label">
                            ${meal.strCategory || "RECIPE"}
                        </p>

                        <h1>
                            ${meal.strMeal}
                        </h1>

                        <p class="recipe-cuisine">
                            ${meal.strArea || "International"} Cuisine
                        </p>
<button
    class="favorite-btn"
    onclick="toggleFavorite('api', '${meal.idMeal}')"
>
    ♡ Add to Favourites
</button>

                        <h2>
                            Ingredients
                        </h2>

                        <ul>
                            ${ingredients}
                        </ul>


                        <h2>
                            Instructions
                        </h2>

                        <p class="instructions">
                            ${meal.strInstructions || "Instructions not available."}
                        </p>

                    </div>

                </div>

            `;

        } catch (error) {

            console.error(error);

            message.textContent =
                "Unable to load recipe details.";

        }

    }

}
if (window.location.pathname.endsWith("recipe.html")) {
    loadRecipeDetails();
}
function toggleFavorite(type, id) {

    let favorites =
        JSON.parse(
            localStorage.getItem("favorites")
        ) || [];


    const exists =
        favorites.some(
            item =>
                item.type === type &&
                item.id === id
        );


    if (exists) {

        favorites =
            favorites.filter(
                item =>
                    !(
                        item.type === type &&
                        item.id === id
                    )
            );

        alert("Removed from favourites.");

    } else {

        favorites.push({
            type: type,
            id: id
        });

        alert("Recipe added to favourites ❤️");
    }


    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

}
async function loadFavoritesPage() {

    const container =
        document.getElementById("favouritesContainer");

    const message =
        document.getElementById("message");


    let favorites =
        JSON.parse(
            localStorage.getItem("favorites")
        ) || [];


    if (favorites.length === 0) {

        message.textContent =
            "You haven't saved any favourite recipes yet.";

        return;
    }


    message.textContent =
        favorites.length +
        " favourite recipe(s)";


    container.innerHTML = "";


    for (const favorite of favorites) {


        /* =========================
           LOCAL RECIPE
        ========================= */

        if (favorite.type === "local") {

            const recipe =
                localRecipes.find(
                    item =>
                        item.id === favorite.id
                );


            if (!recipe) {
                continue;
            }


            const card =
                document.createElement("div");

            card.className =
                "recipe-card";


            card.innerHTML = `

                <img
                    src="${recipe.image}"
                    alt="${recipe.name}"
                >

                <h2>
                    ${recipe.name}
                </h2>

                <p style="padding: 0 17px 5px;">
                    ${recipe.cuisine} Cuisine
                </p>

                <button
                    onclick="openLocalRecipe('${recipe.id}')"
                >
                    View Recipe
                </button>

            `;


            container.appendChild(card);

        }


        /* =========================
           API RECIPE
        ========================= */

        if (favorite.type === "api") {

            try {

                const response =
                    await fetch(
                        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${favorite.id}`
                    );


                const data =
                    await response.json();


                if (!data.meals) {
                    continue;
                }


                const meal =
                    data.meals[0];


                const card =
                    document.createElement("div");

                card.className =
                    "recipe-card";


                card.innerHTML = `

                    <img
                        src="${meal.strMealThumb}"
                        alt="${meal.strMeal}"
                    >

                    <h2>
                        ${meal.strMeal}
                    </h2>

                    <p style="padding: 0 17px 5px;">
                        ${meal.strArea || "International"} Cuisine
                    </p>

                    <button
                        onclick="openApiRecipe('${meal.idMeal}')"
                    >
                        View Recipe
                    </button>
                    

                `;


                container.appendChild(card);


            } catch (error) {

                console.error(error);

            }

        }

    }

}
if (
    window.location.pathname.endsWith("favourites.html")
) {
    loadFavoritesPage();
}
function searchCuisine(cuisine) {

    window.location.href =
        "recipes.html?search=" +
        encodeURIComponent(cuisine);
}
function removeFavorite(type, id) {

    let favorites =
        JSON.parse(localStorage.getItem("favorites")) || [];

    favorites = favorites.filter(
        item =>
            !(item.type === type && item.id === id)
    );

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

    alert("Recipe removed from favourites.");

    loadFavoritesPage();
}