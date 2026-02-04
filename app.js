
const recipes = [
    { name: "Pasta", difficulty: "Easy", time: 20 },
    { name: "Burger", difficulty: "Medium", time: 35 },
    { name: "Biryani", difficulty: "Hard", time: 60 },
    { name: "Salad", difficulty: "Easy", time: 10 },
    { name: "Pizza", difficulty: "Medium", time: 30 }
];

let currentFilter = 'ALL';
let currentSort = null;

// Pure filter function
const filterRecipes = (recipes, filter) => {
    if (filter === 'ALL') return recipes;
    if (filter === 'Quick') return recipes.filter(r => r.time < 30);
    return recipes.filter(r => r.difficulty === filter);
};

// Pure sort function
const sortRecipes = (recipes, sortType) => {
    if (sortType === 'NAME') {
        return [...recipes].sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sortType === 'TIME') {
        return [...recipes].sort((a, b) => a.time - b.time);
    }
    return recipes;
};

// Central update function
const updateDisplay = () => {
    const filtered = filterRecipes(recipes, currentFilter);
    const sorted = sortRecipes(filtered, currentSort);
    renderRecipes(sorted);
};

const renderRecipes = (list) => {
    const container = document.getElementById("recipeList");
    container.innerHTML = "";
    list.forEach(recipe => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
            <h3>${recipe.name}</h3>
            <p>Difficulty: ${recipe.difficulty}</p>
            <p>Time: ${recipe.time} mins</p>
        `;
        container.appendChild(div);
    });
};

// State setters
const setFilter = (filter) => {
    currentFilter = filter;
    updateDisplay();
};

const setSort = (sort) => {
    currentSort = sort;
    updateDisplay();
};

// Initial load
updateDisplay();
