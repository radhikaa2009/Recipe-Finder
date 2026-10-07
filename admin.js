let editingId = null;


// =========================
// GET RECIPES
// =========================

function getRecipes() {

    return JSON.parse(
        localStorage.getItem("adminRecipes")
    ) || [];
}


// =========================
// ADMIN LOGIN
// =========================

function adminLogin() {

    let username =
        document.getElementById("username").value.trim();

    let password =
        document.getElementById("password").value;


    if (
        username === "admin" &&
        password === "1234"
    ) {

        document.getElementById(
            "loginSection"
        ).style.display = "none";


        document.getElementById(
            "adminPanel"
        ).style.display = "flex";


        displayAdminRecipes();

    }

    else {

        document.getElementById(
            "loginMessage"
        ).textContent =
            "Invalid username or password.";
    }
}


// =========================
// CREATE / UPDATE
// =========================

function saveRecipe() {

    let name =
        document.getElementById(
            "recipeName"
        ).value.trim();


    let category =
        document.getElementById(
            "category"
        ).value.trim();


    let cuisine =
        document.getElementById(
            "cuisine"
        ).value.trim();


    let time =
        document.getElementById(
            "time"
        ).value.trim();


    let image =
        document.getElementById(
            "image"
        ).value.trim();


    let ingredientsText =
        document.getElementById(
            "ingredients"
        ).value.trim();


    let instructions =
        document.getElementById(
            "instructions"
        ).value.trim();


    if (
        !name ||
        !ingredientsText ||
        !instructions
    ) {

        alert(
            "Please enter recipe name, ingredients and instructions."
        );

        return;
    }


    let recipes = getRecipes();


    let recipeData = {

        name: name,

        category: category,

        cuisine: cuisine,

        time: time,

        image: image,

        ingredients:
            ingredientsText
                .split(",")
                .map(
                    item => item.trim()
                )
                .filter(Boolean),

        instructions: instructions
    };


    // UPDATE

    if (editingId !== null) {

        let index =
            recipes.findIndex(
                recipe =>
                    recipe.id === editingId
            );


        if (index !== -1) {

            recipes[index] = {

                ...recipes[index],

                ...recipeData
            };
        }


        alert(
            "Recipe updated successfully!"
        );

    }


    // CREATE

    else {

        recipes.push({

            id: Date.now(),

            ...recipeData
        });


        alert(
            "Recipe added successfully!"
        );
    }


    localStorage.setItem(

        "adminRecipes",

        JSON.stringify(recipes)
    );


    clearForm();

    displayAdminRecipes();
}


// =========================
// READ
// =========================

function displayAdminRecipes() {

    let recipes = getRecipes();


    let list =
        document.getElementById(
            "recipeList"
        );


    let count =
        document.getElementById(
            "recipeCount"
        );


    count.textContent =
        recipes.length;


    list.innerHTML = "";


    if (recipes.length === 0) {

        list.innerHTML =

            `<div class="empty">

                No recipes yet.

                <br>

                Add your first recipe above.

            </div>`;

        return;
    }


    recipes.forEach(
        recipe => {

            let item =
                document.createElement(
                    "div"
                );


            item.className =
                "recipe-item";


            item.innerHTML = `

                <h3>
                    ${recipe.name}
                </h3>

                <p class="recipe-meta">

                    ${recipe.cuisine || "Cuisine not set"}

                    ·

                    ${recipe.category || "Category not set"}

                    ·

                    ${recipe.time || "Time not set"}

                </p>


                <div class="recipe-actions">

                    <button
                        class="edit-btn"
                        onclick="editRecipe(${recipe.id})"
                    >
                        Edit
                    </button>


                    <button
                        class="delete-btn"
                        onclick="deleteRecipe(${recipe.id})"
                    >
                        Delete
                    </button>

                </div>
            `;


            list.appendChild(item);
        }
    );
}


// =========================
// UPDATE
// =========================

function editRecipe(id) {

    let recipes =
        getRecipes();


    let recipe =
        recipes.find(
            item =>
                item.id === id
        );


    if (!recipe) {

        return;
    }


    document.getElementById(
        "recipeName"
    ).value =
        recipe.name || "";


    document.getElementById(
        "category"
    ).value =
        recipe.category || "";


    document.getElementById(
        "cuisine"
    ).value =
        recipe.cuisine || "";


    document.getElementById(
        "time"
    ).value =
        recipe.time || "";


    document.getElementById(
        "image"
    ).value =
        recipe.image || "";


    document.getElementById(
        "ingredients"
    ).value =

        (recipe.ingredients || [])
            .join(", ");


    document.getElementById(
        "instructions"
    ).value =
        recipe.instructions || "";


    editingId = id;


    document.getElementById(
        "formTitle"
    ).textContent =
        "Update Recipe";


    document.getElementById(
        "modePill"
    ).textContent =
        "UPDATE";


    document.getElementById(
        "saveBtn"
    ).textContent =
        "✓ Update Recipe";


    window.scrollTo({

        top: 0,

        behavior: "smooth"
    });
}


// =========================
// DELETE
// =========================

function deleteRecipe(id) {

    let confirmDelete =
        confirm(
            "Delete this recipe?"
        );


    if (!confirmDelete) {

        return;
    }


    let recipes =
        getRecipes();


    recipes =
        recipes.filter(

            recipe =>
                recipe.id !== id
        );


    localStorage.setItem(

        "adminRecipes",

        JSON.stringify(recipes)
    );


    if (editingId === id) {

        clearForm();
    }


    displayAdminRecipes();
}


// =========================
// CLEAR FORM
// =========================

function clearForm() {

    document.getElementById(
        "recipeName"
    ).value = "";


    document.getElementById(
        "category"
    ).value = "";


    document.getElementById(
        "cuisine"
    ).value = "";


    document.getElementById(
        "time"
    ).value = "";


    document.getElementById(
        "image"
    ).value = "";


    document.getElementById(
        "ingredients"
    ).value = "";


    document.getElementById(
        "instructions"
    ).value = "";


    editingId = null;


    document.getElementById(
        "formTitle"
    ).textContent =
        "Add New Recipe";


    document.getElementById(
        "modePill"
    ).textContent =
        "CREATE";


    document.getElementById(
        "saveBtn"
    ).textContent =
        "＋ Add Recipe";
}


// =========================
// LOGOUT
// =========================

function adminLogout() {

    document.getElementById(
        "adminPanel"
    ).style.display = "none";


    document.getElementById(
        "loginSection"
    ).style.display = "flex";


    clearForm();
}
