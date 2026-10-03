
const localRecipes = [

    // =========================
    // PIZZAS
    // =========================

    {
        id: "margherita-pizza",
        name: "Margherita Pizza",
        cookingTime: "25 minutes",
        category: "Main Course",
        cuisine: "Italian",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Margherita%20Pizza.jpg",
        ingredients: [
            "Pizza base",
            "Tomato sauce",
            "Mozzarella cheese",
            "Fresh basil leaves",
            "Olive oil",
            "Oregano"
        ],
        instructions: [
            "Preheat the oven to about 220°C.",
            "Place the pizza base on a baking tray and spread tomato sauce evenly over it.",
            "Add grated mozzarella cheese over the sauce.",
            "Arrange fresh basil leaves on top and sprinkle oregano.",
            "Drizzle a small amount of olive oil over the pizza.",
            "Bake for about 10–15 minutes until the cheese melts and the base becomes crisp.",
            "Remove from the oven, allow it to cool slightly and serve hot."
        ]
    },

    {
        id: "pepperoni-pizza",
        name: "Pepperoni Pizza",
        cookingTime: "25 minutes",
        category: "Main Course",
        cuisine: "Italian",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Pepperoni%20Pizza.jpg",
        ingredients: [
            "Pizza base",
            "Pizza sauce",
            "Mozzarella cheese",
            "Pepperoni slices",
            "Oregano",
            "Chilli flakes"
        ],
        instructions: [
            "Preheat the oven to about 220°C.",
            "Place the pizza base on a baking tray and spread pizza sauce over it.",
            "Cover the sauce with grated mozzarella cheese.",
            "Arrange pepperoni slices evenly over the cheese.",
            "Sprinkle oregano and chilli flakes according to taste.",
            "Bake for about 10–15 minutes until the cheese is melted and the crust is golden.",
            "Slice the pizza and serve it hot."
        ]
    },

    {
        id: "farmhouse-pizza",
        name: "Farmhouse Pizza",
        cookingTime: "30 minutes",
        category: "Main Course",
        cuisine: "Italian",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Farmhouse%20Pizza-Domino%27s-Ahmedabad-Gujarat-202013-1.jpg",
        ingredients: [
            "Pizza base",
            "Pizza sauce",
            "Mozzarella cheese",
            "Capsicum",
            "Onion",
            "Mushroom",
            "Tomato",
            "Oregano"
        ],
        instructions: [
            "Preheat the oven to about 220°C.",
            "Spread pizza sauce evenly over the pizza base.",
            "Add a generous layer of mozzarella cheese.",
            "Arrange sliced capsicum, onion, mushroom and tomato over the cheese.",
            "Sprinkle oregano and chilli flakes for extra flavour.",
            "Bake for about 15 minutes until the vegetables are cooked and the cheese melts.",
            "Cut into slices and serve the farmhouse pizza hot."
        ]
    },

    {
        id: "four-cheese-pizza",
        name: "Four Cheese Pizza",
        cookingTime: "25 minutes",
        category: "Main Course",
        cuisine: "Italian",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Four%20cheese%20pizza.jpg",
        ingredients: [
            "Pizza base",
            "Tomato sauce",
            "Mozzarella cheese",
            "Cheddar cheese",
            "Parmesan cheese",
            "Gorgonzola cheese",
            "Oregano"
        ],
        instructions: [
            "Preheat the oven to about 220°C.",
            "Place the pizza base on a baking tray and spread tomato sauce over it.",
            "Add mozzarella, cheddar, parmesan and gorgonzola cheese evenly.",
            "Sprinkle oregano over the cheese mixture.",
            "Bake for about 10–15 minutes until all the cheeses melt completely.",
            "Check that the crust is lightly golden and crisp.",
            "Remove from the oven, slice and serve while hot."
        ]
    },

    {
        id: "garden-veggie-pizza",
        name: "Garden Veggie Pizza",
        cookingTime: "30 minutes",
        category: "Main Course",
        cuisine: "Italian",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Garden%20pizza.jpg",
        ingredients: [
            "Pizza base",
            "Tomato sauce",
            "Mozzarella cheese",
            "Capsicum",
            "Onion",
            "Tomato",
            "Corn",
            "Olives",
            "Oregano"
        ],
        instructions: [
            "Preheat the oven to about 220°C.",
            "Spread tomato sauce over the pizza base.",
            "Add mozzarella cheese evenly over the sauce.",
            "Arrange capsicum, onion, tomato, corn and olives on top.",
            "Sprinkle oregano and chilli flakes according to taste.",
            "Bake for about 15 minutes until the cheese melts and the vegetables become slightly soft.",
            "Slice and serve the vegetable pizza hot."
        ]
    },

    {
        id: "paneer-tikka-pizza",
        name: "Paneer Tikka Pizza",
        cookingTime: "30 minutes",
        category: "Main Course",
        cuisine: "Indian Fusion",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Paneer%20Tikka%20Pizza.jpg",
        ingredients: [
            "Pizza base",
            "Pizza sauce",
            "Paneer cubes",
            "Capsicum",
            "Onion",
            "Mozzarella cheese",
            "Tandoori masala",
            "Oregano"
        ],
        instructions: [
            "Cut paneer into small cubes and coat it with tandoori masala and a little curd.",
            "Allow the paneer to rest for about 10 minutes so that it absorbs the spices.",
            "Spread pizza sauce over the pizza base.",
            "Add mozzarella cheese followed by the marinated paneer, onion and capsicum.",
            "Sprinkle oregano and chilli flakes over the toppings.",
            "Bake at about 220°C for 12–15 minutes until the cheese melts and the paneer is lightly roasted.",
            "Slice and serve the paneer tikka pizza hot."
        ]
    },

    {
        id: "cheesy-corn-pizza",
        name: "Cheesy Corn Pizza",
        cookingTime: "25 minutes",
        category: "Main Course",
        cuisine: "Italian Fusion",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Corn%20Pizza.jpg",
        ingredients: [
            "Pizza base",
            "Pizza sauce",
            "Sweet corn",
            "Mozzarella cheese",
            "Capsicum",
            "Oregano",
            "Chilli flakes"
        ],
        instructions: [
            "Preheat the oven to about 220°C.",
            "Place the pizza base on a baking tray and spread pizza sauce evenly.",
            "Add a generous amount of mozzarella cheese.",
            "Spread sweet corn and chopped capsicum over the cheese.",
            "Sprinkle oregano and chilli flakes for flavour.",
            "Bake for about 10–15 minutes until the cheese melts completely.",
            "Remove from the oven, cut into slices and serve hot."
        ]
    },

    {
        id: "mushroom-pizza",
        name: "Mushroom Pizza",
        cookingTime: "25 minutes",
        category: "Main Course",
        cuisine: "Italian",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mushroom%20Pizza%20of%20Esino%20Lario.jpg",
        ingredients: [
            "Pizza base",
            "Pizza sauce",
            "Mushrooms",
            "Mozzarella cheese",
            "Onion",
            "Garlic",
            "Oregano"
        ],
        instructions: [
            "Clean the mushrooms and slice them into thin pieces.",
            "Heat a pan with a little oil and lightly sauté the mushrooms with garlic.",
            "Spread pizza sauce over the pizza base.",
            "Add mozzarella cheese and arrange the sautéed mushrooms and onion on top.",
            "Sprinkle oregano and chilli flakes according to taste.",
            "Bake at about 220°C for 10–15 minutes until the cheese melts and the crust becomes crisp.",
            "Slice and serve the mushroom pizza hot."
        ]
    },


    // =========================
    // INDIAN RECIPES
    // =========================

    {
        id: "butter-chicken",
        name: "Butter Chicken",
        cookingTime: "45 minutes",
        category: "Main Course",
        cuisine: "Indian",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Butter_Chicken.jpg",
        ingredients: [
            "Chicken",
            "Butter",
            "Tomato puree",
            "Cream",
            "Garam masala",
            "Ginger garlic paste",
            "Red chilli powder",
            "Kasuri methi"
        ],
        instructions: [
            "Marinate the chicken with ginger-garlic paste, chilli powder, garam masala and a little curd.",
            "Allow the chicken to rest for about 20 minutes.",
            "Heat butter in a pan and cook the marinated chicken until it is lightly browned and cooked.",
            "In another pan, heat butter and add tomato puree with the required spices.",
            "Cook the gravy until it becomes thick and the butter starts separating from the tomato mixture.",
            "Add cream and kasuri methi and mix well.",
            "Add the cooked chicken and simmer for 8–10 minutes so that it absorbs the gravy.",
            "Garnish with cream or coriander and serve hot with naan, roti or rice."
        ]
    },

    {
        id: "paneer-butter-masala",
        name: "Paneer Butter Masala",
        cookingTime: "35 minutes",
        category: "Main Course",
        cuisine: "Indian",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Paneer%20butter%20masala.jpg",
        ingredients: [
            "Paneer cubes",
            "Butter",
            "Tomato puree",
            "Cream",
            "Onion",
            "Ginger garlic paste",
            "Garam masala",
            "Kasuri methi"
        ],
        instructions: [
            "Cut paneer into medium-sized cubes and keep them aside.",
            "Heat butter in a pan and lightly sauté the paneer until it turns golden. Remove and keep aside.",
            "In the same pan, cook chopped onion with ginger-garlic paste until soft.",
            "Add tomato puree, garam masala and other spices and cook until the mixture becomes thick.",
            "Add a little water and simmer the gravy for a few minutes.",
            "Add cream and kasuri methi and mix well.",
            "Add the cooked paneer cubes and simmer for 5–7 minutes.",
            "Garnish with coriander or cream and serve hot with naan, roti or rice."
        ]
    },

    {
        id: "chole",
        name: "Chole",
        cookingTime: "40 minutes",
        category: "Main Course",
        cuisine: "Indian",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chole%20Kulcha%20Meal%20-%20Order%20Food%20Online%20in%20Mumbai%20%2831013272937%29.jpg",
        ingredients: [
            "Chickpeas",
            "Onion",
            "Tomato",
            "Ginger garlic paste",
            "Chole masala",
            "Cumin seeds",
            "Red chilli powder",
            "Coriander"
        ],
        instructions: [
            "Soak chickpeas in water for several hours or overnight.",
            "Pressure cook the soaked chickpeas until they become soft.",
            "Heat oil in a pan and add cumin seeds.",
            "Add chopped onion and ginger-garlic paste and cook until the onion becomes golden.",
            "Add chopped tomatoes, chole masala, chilli powder and other spices.",
            "Cook the masala until the tomatoes become soft and the oil starts separating.",
            "Add the cooked chickpeas and some of their cooking water.",
            "Simmer for 10–15 minutes so the chickpeas absorb the spices.",
            "Garnish with coriander and serve hot with bhatura, puri, roti or rice."
        ]
    },

    {
        id: "dal-tadka",
        name: "Dal Tadka",
        cookingTime: "30 minutes",
        category: "Main Course",
        cuisine: "Indian",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Dal%20Tadka.jpg",
        ingredients: [
            "Toor dal",
            "Water",
            "Turmeric",
            "Onion",
            "Tomato",
            "Garlic",
            "Cumin seeds",
            "Red chilli",
            "Ghee"
        ],
        instructions: [
            "Wash the dal thoroughly and place it in a pressure cooker with water and turmeric.",
            "Cook the dal until it becomes soft and easy to mash.",
            "Mash the cooked dal and add salt according to taste.",
            "Heat ghee in a small pan and add cumin seeds.",
            "Add chopped garlic, onion and dry red chilli and sauté until lightly golden.",
            "Add chopped tomato and cook until soft.",
            "Pour the prepared tadka over the cooked dal and mix gently.",
            "Simmer for a few minutes and garnish with coriander.",
            "Serve hot with rice, roti or naan."
        ]
    },

    {
        id: "masala-dosa",
        name: "Masala Dosa",
        cookingTime: "30 minutes",
        category: "Breakfast",
        cuisine: "South Indian",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/A%20plate%20of%20South%20Indian%20Masala%20Dosa.jpg",
        ingredients: [
            "Dosa batter",
            "Potatoes",
            "Onion",
            "Green chilli",
            "Mustard seeds",
            "Curry leaves",
            "Turmeric",
            "Oil"
        ],
        instructions: [
            "Boil the potatoes until they become soft and peel them.",
            "Heat oil in a pan and add mustard seeds and curry leaves.",
            "Add chopped onion and green chilli and sauté until the onion becomes soft.",
            "Add turmeric and mashed potatoes and mix the filling well.",
            "Heat a dosa tawa and spread a thin layer of dosa batter in a circular shape.",
            "Drizzle a little oil around the dosa and cook until the edges become crisp.",
            "Place the potato filling in the centre and fold the dosa.",
            "Serve hot with coconut chutney and sambar."
        ]
    },

    {
        id: "pav-bhaji",
        name: "Pav Bhaji",
        cookingTime: "40 minutes",
        category: "Street Food",
        cuisine: "Indian",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Pavbhaji.jpg",
        ingredients: [
            "Potatoes",
            "Cauliflower",
            "Peas",
            "Capsicum",
            "Tomatoes",
            "Onion",
            "Pav bhaji masala",
            "Butter",
            "Pav"
        ],
        instructions: [
            "Boil potatoes, cauliflower and peas until they become soft.",
            "Mash the cooked vegetables and keep them aside.",
            "Heat butter in a pan and sauté chopped onion until soft.",
            "Add chopped capsicum and cook for a few minutes.",
            "Add tomatoes, pav bhaji masala and chilli powder and cook until the tomatoes become soft.",
            "Add the mashed vegetables and mix everything well.",
            "Add a little water and cook the bhaji for 10–15 minutes while mashing it occasionally.",
            "Toast the pav with butter on a hot tawa.",
            "Serve the hot bhaji with buttered pav, chopped onion and lemon."
        ]
    },

    {
        id: "samosa",
        name: "Samosa",
        cookingTime: "45 minutes",
        category: "Snack",
        cuisine: "Indian",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Indian%20samosa.jpg",
        ingredients: [
            "All-purpose flour",
            "Potatoes",
            "Green peas",
            "Green chilli",
            "Cumin seeds",
            "Garam masala",
            "Coriander",
            "Oil",
            "Salt"
        ],
        instructions: [
            "Prepare a firm dough using flour, salt, oil and water. Keep it covered for about 15 minutes.",
            "Boil the potatoes, peel them and cut or mash them into small pieces.",
            "Heat oil in a pan and add cumin seeds, green chilli and peas.",
            "Add potatoes, garam masala and coriander and mix the filling well.",
            "Divide the dough into small portions and roll each portion into a thin oval shape.",
            "Cut the rolled dough into two halves and form each half into a cone.",
            "Fill the cone with the prepared potato mixture and seal the edges using water.",
            "Deep fry the samosas on medium heat until they become golden and crisp.",
            "Serve hot with green chutney or sweet tamarind chutney."
        ]
    },

    {
        id: "vegetable-biryani",
        name: "Vegetable Biryani",
        cookingTime: "50 minutes",
        category: "Main Course",
        cuisine: "Indian",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Vegetable-biryani.jpg",
        ingredients: [
            "Basmati rice",
            "Carrot",
            "Beans",
            "Peas",
            "Potatoes",
            "Onion",
            "Tomato",
            "Biryani masala",
            "Curd",
            "Mint leaves"
        ],
        instructions: [
            "Wash the basmati rice and soak it in water for about 20 minutes.",
            "Cook the rice with water and a little salt until it is almost done. Drain and keep aside.",
            "Heat oil or ghee in a heavy pan and fry sliced onions until golden.",
            "Add chopped vegetables and cook them with ginger-garlic paste and biryani masala.",
            "Add tomato and curd and cook until the vegetables become slightly tender.",
            "Spread a layer of cooked rice over the vegetable mixture.",
            "Add mint leaves and some fried onions between the layers.",
            "Cover the pan tightly and cook on low heat for 10–15 minutes.",
            "Gently mix the layers and serve hot with raita."
        ]
    },

    {
        id: "aloo-paratha",
        name: "Aloo Paratha",
        cookingTime: "30 minutes",
        category: "Breakfast",
        cuisine: "Indian",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/ALOO%20PARATHA.jpg",
        ingredients: [
            "Wheat flour",
            "Potatoes",
            "Onion",
            "Green chilli",
            "Coriander",
            "Garam masala",
            "Cumin powder",
            "Ghee or oil",
            "Salt"
        ],
        instructions: [
            "Prepare a soft dough using wheat flour, water and a little salt.",
            "Boil the potatoes, peel them and mash them properly.",
            "Add onion, green chilli, coriander, cumin powder and garam masala to the mashed potatoes.",
            "Mix the filling well and divide it into small portions.",
            "Take a portion of dough, roll it slightly and place the potato filling in the centre.",
            "Seal the edges and roll the stuffed dough gently into a round paratha.",
            "Heat a tawa and cook the paratha on both sides using ghee or oil.",
            "Cook until golden brown spots appear on both sides.",
            "Serve hot with curd, pickle or butter."
        ]
    },

    {
        id: "palak-paneer",
        name: "Palak Paneer",
        cookingTime: "35 minutes",
        category: "Main Course",
        cuisine: "Indian",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Palak%20Paneer.JPG",
        ingredients: [
            "Spinach",
            "Paneer cubes",
            "Onion",
            "Tomato",
            "Ginger garlic paste",
            "Green chilli",
            "Garam masala",
            "Cream",
            "Oil"
        ],
        instructions: [
            "Wash the spinach leaves thoroughly and blanch them in hot water for a few minutes.",
            "Transfer the spinach to cold water and then blend it into a smooth puree.",
            "Lightly fry the paneer cubes in a pan until they become golden and keep them aside.",
            "Heat oil in the same pan and sauté onion, ginger-garlic paste and green chilli.",
            "Add chopped tomato and cook until it becomes soft.",
            "Add the spinach puree, salt and garam masala and cook on medium heat.",
            "Add the fried paneer cubes and simmer for 5–7 minutes.",
            "Add a small amount of cream if desired and mix gently.",
            "Serve hot with roti, naan or rice."
        ]
    },
        {
        id: "maharashtrian-poha",
        name: "Kande Poha",
        cookingTime: "20 min",
        category: "Breakfast",
        cuisine: "Maharashtrian",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Poha%20in%20Maharashtra.JPG",
        ingredients: [
            "2 cups poha",
            "1 onion, chopped",
            "2 green chillies",
            "2 tablespoons peanuts",
            "1 teaspoon mustard seeds",
            "1/2 teaspoon turmeric",
            "Curry leaves",
            "2 tablespoons oil",
            "Salt to taste",
            "Fresh coriander",
            "Lemon juice"
        ],
        instructions: [
            "Wash the poha gently and drain the water.",
            "Heat oil in a pan and add mustard seeds.",
            "Add peanuts, curry leaves and green chillies.",
            "Add chopped onion and cook until soft.",
            "Add turmeric and salt.",
            "Add the soaked poha and mix gently.",
            "Cover and cook for 3 to 4 minutes.",
            "Garnish with coriander and lemon juice.",
            "Serve hot."
        ]
    },

    {
        id: "maharashtrian-misal-pav",
        name: "Misal Pav",
        cookingTime: "40 min",
        category: "Street Food",
        cuisine: "Maharashtrian",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/MISAL%20PAV.JPG",
        ingredients: [
            "2 cups sprouted matki",
            "1 onion, chopped",
            "2 tomatoes, chopped",
            "2 tablespoons misal masala",
            "1 teaspoon red chilli powder",
            "1/2 teaspoon turmeric",
            "2 tablespoons oil",
            "Salt to taste",
            "Farsan",
            "Chopped onion",
            "Fresh coriander",
            "Lemon",
            "Pav"
        ],
        instructions: [
            "Wash the sprouted matki.",
            "Heat oil in a pan and add chopped onion.",
            "Cook until the onion becomes soft.",
            "Add tomatoes and cook until soft.",
            "Add turmeric, chilli powder and misal masala.",
            "Add the sprouted matki and mix well.",
            "Add water and salt.",
            "Cover and cook until the sprouts become soft.",
            "Transfer the misal into a serving bowl.",
            "Top with farsan, onion and coriander.",
            "Serve hot with pav and lemon."
        ]
    },

    {
        id: "sabudana-khichdi",
        name: "Sabudana Khichdi",
        cookingTime: "25 min",
        category: "Breakfast",
        cuisine: "Maharashtrian",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Sabudana%20Khichdi-Jogeshwari%2CMumbai-Maharashtra-001.jpg",
        ingredients: [
            "2 cups sabudana",
            "1/2 cup roasted peanuts",
            "1 potato, boiled",
            "2 green chillies",
            "1 teaspoon cumin seeds",
            "2 tablespoons ghee",
            "Salt to taste",
            "1 teaspoon sugar",
            "Fresh coriander",
            "Lemon juice"
        ],
        instructions: [
            "Wash the sabudana and soak it for several hours.",
            "Drain the excess water completely.",
            "Crush the roasted peanuts into a coarse powder.",
            "Heat ghee in a pan and add cumin seeds.",
            "Add green chillies and chopped potato.",
            "Add sabudana, peanut powder, salt and sugar.",
            "Mix gently.",
            "Cover and cook until the sabudana becomes transparent.",
            "Add lemon juice and coriander.",
            "Serve hot."
        ]
    },

    {
        id: "puran-poli",
        name: "Puran Poli",
        cookingTime: "60 min",
        category: "Dessert",
        cuisine: "Maharashtrian",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Puran%20Poli%20with%20Ghee%20%2C%20Maharashtra.jpg",
        ingredients: [
            "1 cup chana dal",
            "1 cup jaggery",
            "2 cups wheat flour",
            "1/2 teaspoon cardamom powder",
            "1/4 teaspoon nutmeg powder",
            "2 tablespoons oil",
            "Water as required",
            "Ghee for cooking"
        ],
        instructions: [
            "Wash and cook the chana dal until soft.",
            "Drain the excess water.",
            "Cook the dal with jaggery until the mixture becomes thick.",
            "Add cardamom and nutmeg powder.",
            "Allow the filling to cool and mash it smoothly.",
            "Prepare a soft dough using wheat flour, oil and water.",
            "Divide the dough and filling into equal portions.",
            "Stuff the filling inside the dough and seal it.",
            "Roll gently into a round flatbread.",
            "Cook on a hot tawa using ghee on both sides.",
            "Serve hot."
        ]
    },

    {
        id: "thalipeeth",
        name: "Thalipeeth",
        cookingTime: "30 min",
        category: "Breakfast",
        cuisine: "Maharashtrian",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Thalipeeth%20-%20Maharashtra.jpg",
        ingredients: [
            "1/2 cup jowar flour",
            "1/2 cup bajra flour",
            "1/2 cup rice flour",
            "1/2 cup wheat flour",
            "1 onion, finely chopped",
            "2 green chillies",
            "Fresh coriander",
            "1 teaspoon cumin powder",
            "1/2 teaspoon turmeric",
            "Salt to taste",
            "Water as required",
            "Oil"
        ],
        instructions: [
            "Mix all the flours in a bowl.",
            "Add onion, green chillies and coriander.",
            "Add turmeric, cumin powder and salt.",
            "Add water gradually and prepare a soft dough.",
            "Take a portion of dough and flatten it.",
            "Make a small hole in the centre.",
            "Place it on a hot tawa.",
            "Cook both sides using a little oil.",
            "Cook until golden and crisp.",
            "Serve hot with curd or chutney."
        ]
    },

    {
        id: "vada-pav",
        name: "Vada Pav",
        cookingTime: "35 min",
        category: "Street Food",
        cuisine: "Maharashtrian",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/VaDa%20PaV.jpg",
        ingredients: [
            "4 potatoes, boiled",
            "1 cup gram flour",
            "2 green chillies",
            "4 garlic cloves",
            "1 teaspoon mustard seeds",
            "Curry leaves",
            "1/2 teaspoon turmeric",
            "Salt to taste",
            "Oil for frying",
            "Pav",
            "Dry garlic chutney"
        ],
        instructions: [
            "Mash the boiled potatoes.",
            "Heat oil and add mustard seeds and curry leaves.",
            "Add garlic and green chillies.",
            "Add turmeric and mashed potatoes.",
            "Add salt and mix well.",
            "Make small potato balls.",
            "Prepare a thick gram flour batter.",
            "Dip each potato ball into the batter.",
            "Deep fry until golden brown.",
            "Cut the pav and apply garlic chutney.",
            "Place the vada inside the pav.",
            "Serve hot."
        ]
    },

    {
        id: "batata-bhaji",
        name: "Batata Bhaji",
        cookingTime: "25 min",
        category: "Main Course",
        cuisine: "Maharashtrian",
        image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Batatebhaji.jpg",
        ingredients: [
            "4 potatoes, boiled",
            "1 onion, chopped",
            "1 teaspoon mustard seeds",
            "1 teaspoon cumin seeds",
            "2 green chillies",
            "Curry leaves",
            "1/2 teaspoon turmeric",
            "2 tablespoons oil",
            "Salt to taste",
            "Fresh coriander"
        ],
        instructions: [
            "Peel and chop the boiled potatoes.",
            "Heat oil in a pan.",
            "Add mustard seeds and cumin seeds.",
            "Add curry leaves and green chillies.",
            "Add chopped onion and cook until soft.",
            "Add turmeric and salt.",
            "Add chopped potatoes and mix gently.",
            "Cook for 5 to 7 minutes.",
            "Garnish with coriander.",
            "Serve hot."
        ]
    },

    {
        id: "bharli-vangi",
        name: "Bharli Vangi",
        cookingTime: "40 min",
        category: "Main Course",
        cuisine: "Maharashtrian",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Bharali%20Vangi%20%28Stuffed%20Brinjal%20Curry%29.jpg",
        ingredients: [
            "8 small brinjals",
            "1/2 cup roasted peanuts",
            "2 tablespoons grated coconut",
            "1 tablespoon goda masala",
            "1 teaspoon red chilli powder",
            "1/2 teaspoon turmeric",
            "1 tablespoon jaggery",
            "1 tablespoon tamarind pulp",
            "2 tablespoons oil",
            "Salt to taste",
            "Fresh coriander"
        ],
        instructions: [
            "Wash the brinjals and make a cross-shaped cut.",
            "Grind peanuts and coconut into a coarse powder.",
            "Add goda masala, chilli powder, turmeric, jaggery and salt.",
            "Add tamarind pulp and mix the stuffing.",
            "Stuff each brinjal with the prepared mixture.",
            "Heat oil in a pan and add the stuffed brinjals.",
            "Add a little water and cover the pan.",
            "Cook on low heat until the brinjals become soft.",
            "Gently turn the brinjals while cooking.",
            "Garnish with coriander and serve hot."
        ]
    },

    {
        id: "kothimbir-vadi",
        name: "Kothimbir Vadi",
        cookingTime: "35 min",
        category: "Snack",
        cuisine: "Maharashtrian",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Kothimbir%20Wadi%201.jpg",
        ingredients: [
            "1 cup gram flour",
            "1 cup chopped coriander",
            "1 green chilli",
            "1 teaspoon sesame seeds",
            "1 teaspoon ginger paste",
            "1/2 teaspoon turmeric",
            "1 teaspoon red chilli powder",
            "Salt to taste",
            "Water as required",
            "Oil for frying"
        ],
        instructions: [
            "Mix gram flour and chopped coriander in a bowl.",
            "Add ginger, green chilli, turmeric and chilli powder.",
            "Add sesame seeds and salt.",
            "Add water and prepare a thick batter.",
            "Steam the batter until it becomes firm.",
            "Allow it to cool completely.",
            "Cut the steamed mixture into small squares.",
            "Heat oil in a pan.",
            "Shallow fry the vadi pieces until golden.",
            "Serve hot with chutney."
        ]
    },

    {
        id: "zunka-bhakri",
        name: "Zunka Bhakri",
        cookingTime: "30 min",
        category: "Main Course",
        cuisine: "Maharashtrian",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Zunka%20Bhakar.jpg",
        ingredients: [
            "1 cup gram flour",
            "1 onion, chopped",
            "2 green chillies",
            "4 garlic cloves",
            "1 teaspoon mustard seeds",
            "1 teaspoon cumin seeds",
            "Curry leaves",
            "1/2 teaspoon turmeric",
            "2 tablespoons oil",
            "Salt to taste",
            "Fresh coriander",
            "Jowar bhakri"
        ],
        instructions: [
            "Mix gram flour with water to make a thin mixture.",
            "Heat oil in a pan.",
            "Add mustard seeds and cumin seeds.",
            "Add curry leaves, garlic and green chillies.",
            "Add chopped onion and cook until soft.",
            "Add turmeric and salt.",
            "Pour the gram flour mixture into the pan.",
            "Stir continuously until it becomes thick.",
            "Cook until the zunka becomes slightly dry.",
            "Garnish with coriander.",
            "Serve hot with jowar bhakri."
        ]
    },

    {
        id: "usal-pav",
        name: "Usal Pav",
        cookingTime: "40 min",
        category: "Street Food",
        cuisine: "Maharashtrian",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Moong%20usal%20misal%20pav.jpg",
        ingredients: [
            "2 cups mixed sprouts",
            "1 onion, chopped",
            "2 tomatoes, chopped",
            "1 teaspoon ginger-garlic paste",
            "1 tablespoon goda masala",
            "1 teaspoon red chilli powder",
            "1/2 teaspoon turmeric",
            "2 tablespoons oil",
            "Salt to taste",
            "Fresh coriander",
            "Pav"
        ],
        instructions: [
            "Wash the sprouts thoroughly.",
            "Heat oil in a pan.",
            "Add chopped onion and cook until soft.",
            "Add ginger-garlic paste.",
            "Add tomatoes and cook until soft.",
            "Add turmeric, chilli powder and goda masala.",
            "Add the sprouts and mix well.",
            "Add water and salt.",
            "Cover and cook until the sprouts are tender.",
            "Garnish with coriander.",
            "Serve hot with pav."
        ]
    },

    {
        id: "matki-usal",
        name: "Matki Usal",
        cookingTime: "35 min",
        category: "Main Course",
        cuisine: "Maharashtrian",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Matki%20sprout%20usal%20chapati%20ambehalad%20pickel%20taak%20salad.jpg",
        ingredients: [
            "2 cups sprouted matki",
            "1 onion, chopped",
            "1 tomato, chopped",
            "1 teaspoon ginger-garlic paste",
            "1 teaspoon goda masala",
            "1/2 teaspoon turmeric",
            "1 teaspoon red chilli powder",
            "2 tablespoons oil",
            "Salt to taste",
            "Fresh coriander"
        ],
        instructions: [
            "Wash the sprouted matki.",
            "Heat oil in a pan.",
            "Add onion and cook until soft.",
            "Add ginger-garlic paste.",
            "Add chopped tomato and cook well.",
            "Add turmeric, chilli powder and goda masala.",
            "Add sprouted matki and mix.",
            "Add water and salt.",
            "Cover and cook until the matki becomes soft.",
            "Garnish with coriander.",
            "Serve with chapati or bhakri."
        ]
    },

    {
        id: "amti-dal",
        name: "Maharashtrian Amti Dal",
        cookingTime: "30 min",
        category: "Main Course",
        cuisine: "Maharashtrian",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Amti%20Bhakari.jpg",
        ingredients: [
            "1 cup toor dal",
            "1 tomato, chopped",
            "1 teaspoon goda masala",
            "1/2 teaspoon turmeric",
            "1 teaspoon jaggery",
            "1 tablespoon tamarind pulp",
            "1 teaspoon mustard seeds",
            "1 teaspoon cumin seeds",
            "Curry leaves",
            "2 tablespoons oil",
            "Salt to taste",
            "Fresh coriander"
        ],
        instructions: [
            "Wash and pressure cook the toor dal until soft.",
            "Mash the cooked dal smoothly.",
            "Heat oil in a pan.",
            "Add mustard seeds and cumin seeds.",
            "Add curry leaves and chopped tomato.",
            "Add turmeric and goda masala.",
            "Add the cooked dal.",
            "Add jaggery, tamarind pulp and salt.",
            "Add water to adjust the consistency.",
            "Boil the dal for a few minutes.",
            "Garnish with coriander.",
            "Serve with rice."
        ]
    },

    {
        id: "masale-bhaat",
        name: "Masale Bhaat",
        cookingTime: "40 min",
        category: "Rice",
        cuisine: "Maharashtrian",
        image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Masale%20Bhat%20-Homemade%20-%20Maharashtra.jpg",
        ingredients: [
            "2 cups rice",
            "1 cup mixed vegetables",
            "1 onion, chopped",
            "2 tablespoons goda masala",
            "1 teaspoon red chilli powder",
            "1/2 teaspoon turmeric",
            "1 teaspoon mustard seeds",
            "1 teaspoon cumin seeds",
            "2 tablespoons oil",
            "Salt to taste",
            "Fresh coriander",
            "Grated coconut"
        ],
        instructions: [
            "Wash and soak the rice for 15 minutes.",
            "Heat oil in a pan.",
            "Add mustard seeds and cumin seeds.",
            "Add chopped onion and cook until soft.",
            "Add the vegetables and cook for a few minutes.",
            "Add turmeric, chilli powder and goda masala.",
            "Add the soaked rice and mix gently.",
            "Add water and salt.",
            "Cover and cook until the rice is completely cooked.",
            "Garnish with coriander and grated coconut.",
            "Serve hot."
        ]
    },

    {
        id: "kanda-bhaji",
        name: "Kanda Bhaji",
        cookingTime: "25 min",
        category: "Snack",
        cuisine: "Maharashtrian",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Kanda%20Bhaji.JPG",
        ingredients: [
            "3 onions, thinly sliced",
            "1 cup gram flour",
            "2 green chillies",
            "1/2 teaspoon turmeric",
            "1 teaspoon red chilli powder",
            "1/2 teaspoon cumin seeds",
            "Fresh coriander",
            "Salt to taste",
            "Water as required",
            "Oil for frying"
        ],
        instructions: [
            "Slice the onions thinly.",
            "Add salt to the onions and mix well.",
            "Add green chillies and coriander.",
            "Add gram flour, turmeric, chilli powder and cumin.",
            "Mix everything well.",
            "Add a little water only if required.",
            "Heat oil in a deep pan.",
            "Drop small portions of the mixture into hot oil.",
            "Fry until golden and crispy.",
            "Drain excess oil.",
            "Serve hot."
        ]
    },

    {
        id: "alu-vadi",
        name: "Alu Vadi",
        cookingTime: "45 min",
        category: "Snack",
        cuisine: "Maharashtrian",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Crispy%20Alu%20Vadi%20from%20my%20Kitchen%2C%20Pune%2C%20Maharashtra.jpg",
        ingredients: [
            "8 colocasia leaves",
            "1 cup gram flour",
            "2 tablespoons tamarind pulp",
            "2 tablespoons jaggery",
            "1 teaspoon red chilli powder",
            "1/2 teaspoon turmeric",
            "1 teaspoon cumin powder",
            "Salt to taste",
            "Water as required",
            "Oil for frying",
            "Sesame seeds"
        ],
        instructions: [
            "Wash the colocasia leaves carefully.",
            "Remove the thick veins from the leaves.",
            "Mix gram flour with tamarind, jaggery, chilli powder and spices.",
            "Add water and prepare a thick paste.",
            "Spread the paste evenly over one leaf.",
            "Place another leaf over it and spread the paste again.",
            "Repeat with the remaining leaves.",
            "Roll the leaves tightly.",
            "Steam the roll until completely cooked.",
            "Allow it to cool and cut into round pieces.",
            "Shallow fry the pieces with sesame seeds.",
            "Serve hot."
        ]
    },

    {
        id: "sol-kadhi",
        name: "Sol Kadhi",
        cookingTime: "15 min",
        category: "Drink",
        cuisine: "Maharashtrian",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Solkadhi.jpg",
        ingredients: [
            "1 cup coconut milk",
            "5 kokum pieces",
            "2 green chillies",
            "2 garlic cloves",
            "Fresh coriander",
            "Salt to taste",
            "1/2 teaspoon cumin powder",
            "Water as required"
        ],
        instructions: [
            "Soak the kokum in warm water.",
            "Extract the kokum juice.",
            "Add coconut milk to a bowl.",
            "Mix the kokum juice with the coconut milk.",
            "Crush garlic and green chillies.",
            "Add them to the mixture.",
            "Add cumin powder and salt.",
            "Add water according to the required consistency.",
            "Mix well.",
            "Garnish with coriander.",
            "Serve chilled or at room temperature."
        ]
    },

    {
        id: "shrikhand",
        name: "Shrikhand",
        cookingTime: "20 min",
        category: "Dessert",
        cuisine: "Maharashtrian",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Shrikhand.JPG",
        ingredients: [
            "2 cups thick curd",
            "1/2 cup powdered sugar",
            "1/2 teaspoon cardamom powder",
            "A few saffron strands",
            "2 tablespoons warm milk",
            "Chopped pistachios",
            "Chopped almonds"
        ],
        instructions: [
            "Place the curd in a clean muslin cloth.",
            "Hang it for several hours to remove excess water.",
            "Transfer the thick curd into a bowl.",
            "Add powdered sugar and mix well.",
            "Soak saffron in warm milk.",
            "Add the saffron milk to the curd.",
            "Add cardamom powder.",
            "Whisk until the mixture becomes smooth.",
            "Garnish with almonds and pistachios.",
            "Chill before serving."
        ]
    },

    {
        id: "ukadiche-modak",
        name: "Ukadiche Modak",
        cookingTime: "50 min",
        category: "Dessert",
        cuisine: "Maharashtrian",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Ukadiche%20Modak%20(Rice).jpg",
        ingredients: [
            "1 cup rice flour",
            "1 cup grated coconut",
            "3/4 cup jaggery",
            "1 teaspoon cardamom powder",
            "1 teaspoon ghee",
            "1 cup water",
            "A pinch of salt"
        ],
        instructions: [
            "Heat water with a pinch of salt and ghee.",
            "Add rice flour and mix quickly.",
            "Cover and cook the mixture for a few minutes.",
            "Allow the dough to cool slightly.",
            "Prepare the filling by cooking coconut and jaggery together.",
            "Add cardamom powder and mix well.",
            "Knead the rice dough until smooth.",
            "Take a small portion and flatten it into a thin circle.",
            "Place the coconut-jaggery filling in the centre.",
            "Fold the edges upward and shape it into a modak.",
            "Steam the modaks until cooked.",
            "Serve warm with ghee."
        ]
    },

    {
        id: "basundi",
        name: "Basundi",
        cookingTime: "45 min",
        category: "Dessert",
        cuisine: "Maharashtrian",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Basundi%20in%20Maharashtrian%20style.jpg",
        ingredients: [
            "1 litre full-fat milk",
            "1/2 cup sugar",
            "1/2 teaspoon cardamom powder",
            "A few saffron strands",
            "Chopped almonds",
            "Chopped pistachios"
        ],
        instructions: [
            "Pour the milk into a heavy-bottomed pan.",
            "Bring the milk to a boil.",
            "Reduce the heat and continue cooking.",
            "Stir regularly so that the milk does not stick.",
            "Cook until the milk becomes thick.",
            "Add sugar and mix well.",
            "Add saffron and cardamom powder.",
            "Cook for another few minutes.",
            "Add chopped almonds and pistachios.",
            "Allow the basundi to cool.",
            "Serve chilled or warm."
        ]
    },
    {
    id: "south-masala-dosa",
    name: "Masala Dosa",
    cookingTime: "35 min",
    category: "Breakfast",
    cuisine: "South Indian",
    image: "https://i.cdn.newsbytesapp.com/hn/images/l81220260416114308.jpeg",

    ingredients: [
        "2 cups dosa batter",
        "3 potatoes, boiled",
        "1 onion, chopped",
        "1/2 teaspoon mustard seeds",
        "1/2 teaspoon turmeric",
        "Curry leaves",
        "2 tablespoons oil",
        "Salt to taste"
    ],

    instructions: [
        "Heat oil and add mustard seeds and curry leaves.",
        "Add chopped onion and cook until soft.",
        "Add turmeric, salt and mashed potatoes.",
        "Mix well to prepare the potato masala.",
        "Spread dosa batter thinly on a hot pan.",
        "Cook until crisp and golden.",
        "Place potato masala in the centre.",
        "Fold the dosa and serve with sambar and coconut chutney."
    ]
},

{
    id: "south-plain-dosa",
    name: "Plain Dosa",
    cookingTime: "20 min",
    category: "Breakfast",
    cuisine: "South Indian",
    image: "https://andhrabhavan.ie/wp-content/uploads/2023/07/dosa.jpg",

    ingredients: [
        "2 cups dosa batter",
        "Water as needed",
        "Oil or ghee",
        "Salt to taste"
    ],

    instructions: [
        "Stir the dosa batter well.",
        "Add a little water if required.",
        "Heat a flat pan.",
        "Pour a ladle of batter in the centre.",
        "Spread it into a thin circle.",
        "Drizzle oil around the edges.",
        "Cook until crisp and golden.",
        "Serve hot with sambar and chutney."
    ]
},

{
    id: "south-idli",
    name: "Idli",
    cookingTime: "25 min",
    category: "Breakfast",
    cuisine: "South Indian",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto/FOOD_CATALOG/IMAGES/CMS/2026/1/22/67f26a8e-7164-4295-b648-ad8034ceecd7_4c301e3b-d72f-4701-a53f-563d9b941451.jpg",

    ingredients: [
        "2 cups idli batter",
        "Oil for greasing",
        "Water for steaming"
    ],

    instructions: [
        "Stir the fermented idli batter gently.",
        "Grease the idli moulds with oil.",
        "Pour batter into the moulds.",
        "Heat water in a steamer.",
        "Place the mould inside the steamer.",
        "Steam for 10 to 15 minutes.",
        "Allow the idlis to cool slightly.",
        "Remove carefully and serve with sambar and chutney."
    ]
},

{
    id: "south-medu-vada",
    name: "Medu Vada",
    cookingTime: "35 min",
    category: "Snack",
    cuisine: "South Indian",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_300%2Ch_300%2Ce_grayscale%2Cc_fit/FOOD_CATALOG/IMAGES/CMS/2025/10/15/a4c0cf7a-8d7d-4458-83ca-f28a8f9540ea_cc89404b-6426-4417-a656-dfff65972381.jpg",

    ingredients: [
        "1 cup urad dal",
        "1 green chilli, chopped",
        "1 teaspoon grated ginger",
        "Curry leaves",
        "1/2 teaspoon cumin seeds",
        "Salt to taste",
        "Oil for frying"
    ],

    instructions: [
        "Soak urad dal for about 4 hours.",
        "Drain the water completely.",
        "Grind the dal into a thick smooth batter.",
        "Add chilli, ginger, cumin, curry leaves and salt.",
        "Wet your hands and shape the batter into rings.",
        "Heat oil in a deep pan.",
        "Fry the vadas until golden and crisp.",
        "Drain excess oil and serve with sambar and chutney."
    ]
},

{
    id: "south-uttapam",
    name: "Uttapam",
    cookingTime: "25 min",
    category: "Breakfast",
    cuisine: "South Indian",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto/eb911cab843818c6e02042cc0bbdaaea",

    ingredients: [
        "2 cups dosa batter",
        "1 onion, finely chopped",
        "1 tomato, chopped",
        "1 green chilli",
        "Fresh coriander",
        "Oil",
        "Salt to taste"
    ],

    instructions: [
        "Mix chopped onion, tomato, chilli and coriander.",
        "Heat and lightly grease a flat pan.",
        "Pour a ladle of dosa batter.",
        "Do not spread it too thin.",
        "Sprinkle the vegetable mixture over the batter.",
        "Drizzle a little oil around the edges.",
        "Cook until the bottom becomes golden.",
        "Flip and cook the other side.",
        "Serve hot with coconut chutney and sambar."
    ]
},

{
    id: "south-rava-dosa",
    name: "Rava Dosa",
    cookingTime: "25 min",
    category: "Breakfast",
    cuisine: "South Indian",
    image: "https://shrisangeethasrestaurant.com/cdn/shop/files/Ravadosa.webp?v=1743704639",

    ingredients: [
        "1 cup semolina",
        "1/2 cup rice flour",
        "1/4 cup all-purpose flour",
        "1 onion, finely chopped",
        "1 green chilli",
        "Cumin seeds",
        "Black pepper",
        "Water",
        "Salt",
        "Oil"
    ],

    instructions: [
        "Mix semolina, rice flour and all-purpose flour.",
        "Add chopped onion, chilli, cumin and pepper.",
        "Add water to make a thin batter.",
        "Rest the batter for 15 minutes.",
        "Heat a dosa pan.",
        "Pour the thin batter from a height.",
        "Drizzle oil and cook until crisp.",
        "Serve hot with chutney and sambar."
    ]
},

{
    id: "south-set-dosa",
    name: "Set Dosa",
    cookingTime: "30 min",
    category: "Breakfast",
    cuisine: "South Indian",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto/FOOD_CATALOG/IMAGES/CMS/2025/1/19/7b2c24a2-bca9-487d-926e-1c82b6284be8_9c7a8c84-55df-4edc-a3b1-9e6efc132297.JPG",

    ingredients: [
        "2 cups dosa batter",
        "1/2 teaspoon sugar",
        "Salt to taste",
        "Oil or ghee"
    ],

    instructions: [
        "Add sugar and salt to the dosa batter.",
        "Mix gently.",
        "Heat a flat pan.",
        "Pour a thick round dosa.",
        "Do not spread it very thin.",
        "Cook on medium heat until golden.",
        "Flip and cook the other side.",
        "Prepare 2 to 3 dosas per serving.",
        "Serve with chutney and vegetable kurma."
    ]
},

{
    id: "south-mysore-masala-dosa",
    name: "Mysore Masala Dosa",
    cookingTime: "40 min",
    category: "Breakfast",
    cuisine: "South Indian",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_300%2Ch_300%2Cc_fit/FOOD_CATALOG/IMAGES/CMS/2025/7/21/28e60076-f386-49c7-8762-57b18a2fc591_706a2dbe-05d9-487c-b39b-9f944d7640f2.jpg",

    ingredients: [
        "2 cups dosa batter",
        "3 boiled potatoes",
        "2 tablespoons red chutney",
        "1 onion",
        "Mustard seeds",
        "Curry leaves",
        "Turmeric",
        "Oil",
        "Salt"
    ],

    instructions: [
        "Prepare potato masala with onion, mustard seeds and curry leaves.",
        "Heat a dosa pan.",
        "Spread dosa batter into a thin circle.",
        "Spread red chutney over the dosa.",
        "Place potato masala in the centre.",
        "Drizzle oil around the dosa.",
        "Cook until crisp.",
        "Fold and serve with sambar and coconut chutney."
    ]
},

{
    id: "south-pongal",
    name: "Ven Pongal",
    cookingTime: "30 min",
    category: "Breakfast",
    cuisine: "South Indian",
    image: "https://www.gettyimages.com/detail/photo/ven-pongal-with-sambar-royalty-free-image",

    ingredients: [
        "1 cup rice",
        "1/2 cup moong dal",
        "1 teaspoon cumin seeds",
        "1 teaspoon black pepper",
        "1 inch ginger",
        "Curry leaves",
        "2 tablespoons ghee",
        "Salt",
        "Water"
    ],

    instructions: [
        "Wash rice and moong dal together.",
        "Cook them with water until soft.",
        "Heat ghee in a pan.",
        "Add cumin, pepper, ginger and curry leaves.",
        "Add this tempering to the cooked rice and dal.",
        "Add salt and mix well.",
        "Cook for a few more minutes.",
        "Serve hot with sambar and coconut chutney."
    ]
},

{
    id: "south-upma",
    name: "South Indian Upma",
    cookingTime: "20 min",
    category: "Breakfast",
    cuisine: "South Indian",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_300%2Ch_300%2Ce_grayscale%2Cc_fit/FOOD_CATALOG/IMAGES/CMS/2024/5/29/7fb68230-d6f0-4ed5-aa18-0391135e2d05_69950985-98ab-4ef2-bae0-0a24d31c584b.jpg",

    ingredients: [
        "1 cup semolina",
        "1 onion",
        "1 green chilli",
        "1 teaspoon mustard seeds",
        "1 teaspoon urad dal",
        "Curry leaves",
        "2 cups water",
        "2 tablespoons oil",
        "Salt"
    ],

    instructions: [
        "Dry roast the semolina until lightly golden.",
        "Heat oil and add mustard seeds.",
        "Add urad dal and curry leaves.",
        "Add chopped onion and chilli.",
        "Cook until the onion becomes soft.",
        "Add water and salt.",
        "Slowly add roasted semolina while stirring.",
        "Cook until the water is absorbed.",
        "Serve hot with chutney."
    ]
},

{
    id: "south-lemon-rice",
    name: "Lemon Rice",
    cookingTime: "20 min",
    category: "Rice",
    cuisine: "South Indian",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto/FOOD_CATALOG/IMAGES/CMS/2025/11/12/a340555c-ff22-4611-8390-8ced988ad074_fc7d0258-8002-4003-a2de-3071f975abb8.jpg",

    ingredients: [
        "2 cups cooked rice",
        "2 tablespoons lemon juice",
        "1 teaspoon mustard seeds",
        "1 teaspoon urad dal",
        "1 green chilli",
        "Curry leaves",
        "1/2 teaspoon turmeric",
        "2 tablespoons peanuts",
        "Oil",
        "Salt"
    ],

    instructions: [
        "Heat oil in a pan.",
        "Add mustard seeds and let them crackle.",
        "Add urad dal, peanuts, chilli and curry leaves.",
        "Add turmeric and mix well.",
        "Add cooked rice and salt.",
        "Mix gently.",
        "Turn off the heat.",
        "Add lemon juice and mix.",
        "Serve warm."
    ]
},

{
    id: "south-tamarind-rice",
    name: "Tamarind Rice",
    cookingTime: "30 min",
    category: "Rice",
    cuisine: "South Indian",
    image: "https://theroyaludupi.com.au/uploads/images/1783047646427-5fb27f0de383-puliogare.jpg",

    ingredients: [
        "2 cups cooked rice",
        "2 tablespoons tamarind pulp",
        "2 tablespoons peanuts",
        "1 teaspoon mustard seeds",
        "Curry leaves",
        "1/2 teaspoon turmeric",
        "Red chilli",
        "2 tablespoons sesame oil",
        "Salt"
    ],

    instructions: [
        "Heat sesame oil in a pan.",
        "Add mustard seeds and allow them to crackle.",
        "Add peanuts, chilli and curry leaves.",
        "Add turmeric and tamarind pulp.",
        "Cook the mixture for a few minutes.",
        "Add salt.",
        "Add cooked rice.",
        "Mix gently until the rice is coated.",
        "Serve after allowing the flavours to develop."
    ]
},

{
    id: "south-curd-rice",
    name: "Curd Rice",
    cookingTime: "15 min",
    category: "Rice",
    cuisine: "South Indian",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_300%2Ch_300%2Ce_grayscale%2Cc_fit/wm91tp15tfr48yetskhe",

    ingredients: [
        "2 cups cooked rice",
        "1 cup curd",
        "1/2 cup milk",
        "1 teaspoon mustard seeds",
        "1 green chilli",
        "Curry leaves",
        "Fresh coriander",
        "Oil",
        "Salt"
    ],

    instructions: [
        "Mash the cooked rice gently.",
        "Add curd and milk.",
        "Mix until smooth.",
        "Heat oil in a pan.",
        "Add mustard seeds, chilli and curry leaves.",
        "Pour the tempering over the rice.",
        "Add salt and coriander.",
        "Mix well and serve."
    ]
},

{
    id: "south-sambar-rice",
    name: "Sambar Rice",
    cookingTime: "40 min",
    category: "Rice",
    cuisine: "South Indian",
    image: "https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/food_pics_v2/medium/rice_and_sambar.jpg",

    ingredients: [
        "1 cup rice",
        "1/2 cup toor dal",
        "1 cup mixed vegetables",
        "2 tablespoons sambar powder",
        "1 onion",
        "1 tomato",
        "Tamarind pulp",
        "Mustard seeds",
        "Curry leaves",
        "Salt",
        "Oil"
    ],

    instructions: [
        "Wash rice and dal.",
        "Cook rice and dal until soft.",
        "Cook the vegetables separately.",
        "Prepare tempering with oil, mustard seeds and curry leaves.",
        "Add onion and tomato.",
        "Add sambar powder and tamarind pulp.",
        "Add cooked vegetables.",
        "Add cooked rice and dal.",
        "Mix well and simmer.",
        "Serve hot."
    ]
},

{
    id: "south-coconut-rice",
    name: "Coconut Rice",
    cookingTime: "20 min",
    category: "Rice",
    cuisine: "South Indian",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_300%2Ch_300%2Ce_grayscale%2Cc_fit/FOOD_CATALOG/IMAGES/CMS/2025/12/9/3bb2196d-b642-4fc4-942f-dbe67e3baa0a_b49e6fd3-8acd-47c2-a2f2-55ab4abd1245.jpg",

    ingredients: [
        "2 cups cooked rice",
        "1 cup grated coconut",
        "1 teaspoon mustard seeds",
        "1 teaspoon urad dal",
        "2 green chillies",
        "Curry leaves",
        "2 tablespoons peanuts",
        "2 tablespoons oil",
        "Salt"
    ],

    instructions: [
        "Heat oil in a pan.",
        "Add mustard seeds and let them crackle.",
        "Add urad dal, peanuts and curry leaves.",
        "Add green chillies.",
        "Add grated coconut and cook briefly.",
        "Add cooked rice and salt.",
        "Mix gently.",
        "Cook for two more minutes.",
        "Serve warm."
    ]
},

{
    id: "south-appam",
    name: "Appam",
    cookingTime: "35 min",
    category: "Breakfast",
    cuisine: "South Indian",
    image: "https://images.slurrp.com/prod/recipe_images/transcribe/main%20course/Appam-with-Ishtu.webp",

    ingredients: [
        "2 cups raw rice",
        "1/2 cup cooked rice",
        "1/2 cup coconut milk",
        "1 teaspoon sugar",
        "1/2 teaspoon yeast",
        "Salt",
        "Water"
    ],

    instructions: [
        "Soak raw rice for several hours.",
        "Grind rice with cooked rice and coconut milk.",
        "Add yeast, sugar and salt.",
        "Allow the batter to ferment.",
        "Heat an appam pan.",
        "Pour batter into the centre.",
        "Rotate the pan to spread the batter.",
        "Cover and cook until the edges become crisp.",
        "Serve with vegetable stew."
    ]
},

{
    id: "south-puttu",
    name: "Puttu",
    cookingTime: "30 min",
    category: "Breakfast",
    cuisine: "South Indian",
    image: "https://www.trawellino.com/media/images/blog_images/1749107258_NJCYSs0J.jpg",

    ingredients: [
        "2 cups rice flour",
        "1 cup grated coconut",
        "Water as needed",
        "Salt",
        "Sugar optional"
    ],

    instructions: [
        "Mix rice flour with salt.",
        "Sprinkle water gradually and mix until moist.",
        "Do not make a smooth dough.",
        "Place grated coconut in the puttu mould.",
        "Add a layer of rice flour.",
        "Repeat the layers.",
        "Steam until completely cooked.",
        "Remove carefully from the mould.",
        "Serve with kadala curry or banana."
    ]
},

{
    id: "south-vegetable-kurma",
    name: "Vegetable Kurma",
    cookingTime: "40 min",
    category: "Main Course",
    cuisine: "South Indian",
    image: "https://i0.wp.com/cookingfromheart.com/wp-content/uploads/2020/07/Vegetable-Kurma-5.jpg?resize=683%2C1024&ssl=1",

    ingredients: [
        "2 cups mixed vegetables",
        "1 onion",
        "1 tomato",
        "1/2 cup coconut",
        "1 teaspoon ginger-garlic paste",
        "1/2 teaspoon turmeric",
        "1 teaspoon garam masala",
        "Oil",
        "Salt"
    ],

    instructions: [
        "Heat oil in a pan.",
        "Add chopped onion and cook until soft.",
        "Add ginger-garlic paste.",
        "Add chopped tomato and cook until soft.",
        "Add turmeric and garam masala.",
        "Add mixed vegetables.",
        "Add water and salt.",
        "Cover and cook until vegetables are tender.",
        "Add coconut paste and simmer.",
        "Serve hot with dosa, appam or paratha."
    ]
},

{
    id: "south-rasam",
    name: "Rasam",
    cookingTime: "25 min",
    category: "Soup",
    cuisine: "South Indian",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_300%2Ch_300%2Cc_fit/FOOD_CATALOG/IMAGES/CMS/2025/1/29/a624495f-4468-40f5-8308-3676f005b822_50466f76-3896-4bad-9015-435a0a1a74aa.jpg",

    ingredients: [
        "1 tomato",
        "1/2 cup cooked toor dal",
        "1 tablespoon tamarind pulp",
        "1 teaspoon rasam powder",
        "1/2 teaspoon turmeric",
        "Mustard seeds",
        "Cumin seeds",
        "Curry leaves",
        "Coriander",
        "Salt"
    ],

    instructions: [
        "Mash the cooked dal.",
        "Cook chopped tomato with water.",
        "Add tamarind pulp, turmeric and rasam powder.",
        "Add mashed dal.",
        "Add salt and bring to a gentle boil.",
        "Heat oil separately.",
        "Add mustard seeds, cumin and curry leaves.",
        "Pour the tempering into the rasam.",
        "Garnish with coriander.",
        "Serve hot with rice."
    ]
},

{
    id: "south-tomato-rice",
    name: "Tomato Rice",
    cookingTime: "25 min",
    category: "Rice",
    cuisine: "South Indian",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/f_auto%2Cq_auto%2Cfl_lossy/RX_THUMBNAIL/IMAGES/VENDOR/2026/1/17/2de66442-a9b0-4a7f-8aae-a51680343edb_1190989.jpg",

    ingredients: [
        "2 cups cooked rice",
        "3 tomatoes, chopped",
        "1 onion",
        "2 green chillies",
        "1 teaspoon mustard seeds",
        "Curry leaves",
        "1/2 teaspoon turmeric",
        "1 teaspoon chilli powder",
        "2 tablespoons oil",
        "Salt"
    ],

    instructions: [
        "Heat oil in a pan.",
        "Add mustard seeds and curry leaves.",
        "Add chopped onion and green chilli.",
        "Cook until the onion becomes soft.",
        "Add chopped tomatoes.",
        "Add turmeric, chilli powder and salt.",
        "Cook until the tomatoes become soft and the mixture thickens.",
        "Add cooked rice.",
        "Mix gently until evenly coated.",
        "Cook for a few minutes and serve hot."
    ]
},
{
    id: "dessert01",
    name: "Gulab Jamun",
    cookingTime: "30 mins",
    category: "Desserts",
    cuisine: "Indian",
    image: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_600%2Ch_468/v1669927227/e5804a230a58159204a3def3b46050c9.jpg",
    ingredients: [
        "1 cup milk powder",
        "2 tbsp all-purpose flour",
        "2 tbsp milk",
        "1 tbsp ghee",
        "1 cup sugar",
        "1 cup water",
        "2 cardamom pods",
        "Oil or ghee for frying"
    ],
    instructions: [
        "Mix milk powder, flour and ghee.",
        "Add milk little by little and make a soft dough.",
        "Make small smooth balls from the dough.",
        "Heat oil or ghee and fry the balls until golden brown.",
        "Prepare sugar syrup with sugar, water and cardamom.",
        "Soak the fried gulab jamuns in warm syrup for 15 to 20 minutes.",
        "Serve warm."
    ]
},

{
    id: "dessert02",
    name: "Rasmalai",
    cookingTime: "45 mins",
    category: "Desserts",
    cuisine: "Indian",
    image: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_600%2Ch_468/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2026/3/21/1f3fa657-74fe-4d66-978a-68fb394dcbd4_BUN00639ec8b79b7d73c4ea79a5ee8c6c54a821e.JPG",
    ingredients: [
        "1 litre full-fat milk",
        "2 tbsp lemon juice",
        "1 cup sugar",
        "4 cups water",
        "4 cardamom pods",
        "2 tbsp chopped pistachios",
        "A few saffron strands"
    ],
    instructions: [
        "Boil the milk and add lemon juice to curdle it.",
        "Strain the chenna and wash it with water.",
        "Knead the chenna until smooth.",
        "Make small flat balls.",
        "Cook them in boiling sugar syrup until they become soft.",
        "Boil another batch of milk until slightly thick.",
        "Add sugar, cardamom and saffron.",
        "Add the cooked chenna pieces to the thickened milk.",
        "Garnish with pistachios and serve chilled."
    ]
},

{
    id: "dessert03",
    name: "Jalebi",
    cookingTime: "35 mins",
    category: "Desserts",
    cuisine: "Indian",
    image: "https://lscdn.azureedge.net/biz-live/img/11789592-11789592-8f3ceab2.jpeg",
    ingredients: [
        "1 cup all-purpose flour",
        "2 tbsp corn flour",
        "1/2 cup curd",
        "1 cup sugar",
        "1/2 cup water",
        "A pinch of saffron",
        "Oil or ghee for frying"
    ],
    instructions: [
        "Mix flour, corn flour and curd to make a smooth batter.",
        "Rest the batter for a few hours.",
        "Prepare sugar syrup with sugar, water and saffron.",
        "Heat oil or ghee in a pan.",
        "Pour the batter into a piping bag.",
        "Make spiral shapes directly into the hot oil.",
        "Fry until crisp and golden.",
        "Dip the jalebi in warm sugar syrup.",
        "Serve hot."
    ]
},

{
    id: "dessert04",
    name: "Gajar Halwa",
    cookingTime: "50 mins",
    category: "Desserts",
    cuisine: "Indian",
    image: "https://cdn.prod.website-files.com/655daef7b0404cc1bd31bd76/656f714a3358fccee83cd834_gajar-halwa.jpg",
    ingredients: [
        "500 g carrots",
        "500 ml full-fat milk",
        "1/2 cup sugar",
        "2 tbsp ghee",
        "1/4 tsp cardamom powder",
        "2 tbsp chopped cashews",
        "2 tbsp raisins"
    ],
    instructions: [
        "Wash, peel and grate the carrots.",
        "Cook the grated carrots with milk in a heavy pan.",
        "Cook until the milk is mostly absorbed.",
        "Add sugar and continue cooking.",
        "Add ghee and cardamom powder.",
        "Cook until the halwa becomes thick and glossy.",
        "Add cashews and raisins.",
        "Serve warm."
    ]
},

{
    id: "dessert05",
    name: "Kheer",
    cookingTime: "40 mins",
    category: "Desserts",
    cuisine: "Indian",
    image: "https://patelsfood.nl/objects/menu-items/00d6f94f-be2b-46f0-b5be-8792dafc950e",
    ingredients: [
        "1/4 cup basmati rice",
        "1 litre full-fat milk",
        "1/3 cup sugar",
        "4 cardamom pods",
        "2 tbsp chopped almonds",
        "2 tbsp chopped pistachios",
        "A few saffron strands"
    ],
    instructions: [
        "Wash and soak the rice for 15 minutes.",
        "Boil the milk in a heavy pan.",
        "Add the soaked rice.",
        "Cook on low heat until the rice becomes soft.",
        "Add sugar and cardamom.",
        "Cook until the kheer becomes creamy.",
        "Add saffron and chopped nuts.",
        "Serve warm or chilled."
    ]
},

{
    id: "dessert06",
    name: "Falooda",
    cookingTime: "25 mins",
    category: "Desserts",
    cuisine: "Indian",
    image: "https://clykwuzajtwvwuavmtzs.supabase.co/storage/v1/object/public/menu-images/smoothies/falooda_bombay_1774787609691.png",
    ingredients: [
        "2 tbsp falooda sev",
        "1 tbsp basil seeds",
        "2 cups chilled milk",
        "2 tbsp rose syrup",
        "2 scoops vanilla or kulfi ice cream",
        "1 tbsp chopped nuts",
        "1 tbsp sugar"
    ],
    instructions: [
        "Soak basil seeds in water for 10 minutes.",
        "Boil the falooda sev and drain it.",
        "Mix chilled milk with sugar and rose syrup.",
        "Add soaked basil seeds and falooda sev.",
        "Pour the mixture into a tall glass.",
        "Top with ice cream or kulfi.",
        "Garnish with chopped nuts.",
        "Serve chilled."
    ]
},

{
    id: "dessert07",
    name: "Kulfi",
    cookingTime: "35 mins",
    category: "Desserts",
    cuisine: "Indian",
    image: "https://www.veeraswamy.com/media/ue3byo1f/veeraswamy_best-mothers-day-fine-dining-restaurant-london_indian-cuisine.jpg",
    ingredients: [
        "1 litre full-fat milk",
        "1/3 cup sugar",
        "1/4 cup milk powder",
        "1/2 tsp cardamom powder",
        "2 tbsp chopped pistachios",
        "A few saffron strands"
    ],
    instructions: [
        "Boil the milk in a heavy pan.",
        "Cook on low heat until it reduces.",
        "Add milk powder and sugar.",
        "Stir continuously until the mixture thickens.",
        "Add cardamom, saffron and pistachios.",
        "Allow the mixture to cool.",
        "Pour into kulfi moulds.",
        "Freeze until completely set.",
        "Serve chilled."
    ]
},

{
    id: "dessert08",
    name: "Rasgulla",
    cookingTime: "40 mins",
    category: "Desserts",
    cuisine: "Indian",
    image: "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/inline-images/Tandoori%20Rasgulla%203.jpg",
    ingredients: [
        "1 litre full-fat milk",
        "2 tbsp lemon juice",
        "1 cup sugar",
        "4 cups water",
        "2 cardamom pods"
    ],
    instructions: [
        "Boil the milk and add lemon juice.",
        "Strain the curdled milk to make chenna.",
        "Wash and drain the chenna.",
        "Knead until smooth.",
        "Make small smooth balls.",
        "Boil sugar and water to prepare syrup.",
        "Add the chenna balls to the boiling syrup.",
        "Cover and cook until they become soft and spongy.",
        "Cool and serve."
    ]
},

{
    id: "dessert09",
    name: "Kaju Katli",
    cookingTime: "30 mins",
    category: "Desserts",
    cuisine: "Indian",
    image: "https://estaasweets.com/cdn/shop/files/Kajukatli-EstaaSweets-Bangalore.webp?v=1753894347",
    ingredients: [
        "1 cup cashew nuts",
        "1/2 cup sugar",
        "1/4 cup water",
        "1/2 tsp cardamom powder",
        "1 tsp ghee",
        "Silver leaf for decoration"
    ],
    instructions: [
        "Grind the cashews into a fine powder.",
        "Heat sugar and water to make a syrup.",
        "Add the cashew powder to the syrup.",
        "Cook on low heat while stirring continuously.",
        "Add ghee and cardamom powder.",
        "Cook until the mixture forms a soft dough.",
        "Roll the dough between sheets of butter paper.",
        "Cut into diamond shapes.",
        "Decorate with silver leaf and serve."
    ]
},

{
    id: "dessert10",
    name: "Shahi Tukda",
    cookingTime: "35 mins",
    category: "Desserts",
    cuisine: "Indian",
    image: "https://img-cdn.publive.online/fit-in/1200x675/sanjeev-kapoor/media/post_banners/a29a474064974577d8ab445cb857846db2d032decf2199bce9c147856b5a57d8.jpg",
    ingredients: [
        "4 bread slices",
        "500 ml full-fat milk",
        "1/3 cup sugar",
        "2 tbsp ghee",
        "2 tbsp chopped almonds",
        "2 tbsp chopped pistachios",
        "1/2 tsp cardamom powder",
        "A few saffron strands"
    ],
    instructions: [
        "Cut the bread slices into triangles.",
        "Toast or fry the bread in ghee until golden.",
        "Boil the milk until it becomes slightly thick.",
        "Add sugar, saffron and cardamom.",
        "Place the fried bread pieces on a serving plate.",
        "Pour the thickened milk over the bread.",
        "Garnish with almonds and pistachios.",
        "Serve warm or chilled."
    ]
},
];

