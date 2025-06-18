// Main JavaScript logic for the Cookie Bite App

const message = document.getElementById('message');
const cookieImage = document.querySelector('.cookie-image');
const ingredientImage = document.querySelector('.ingredient-image');
const biteButton = document.getElementById('bite-button');
const cookieImages = [
    'assets/cookie_full.png',
    'assets/cookie_bite2.png',
    'assets/cookie_bite3.png',
    'assets/cookie_bite4.png',
    'assets/cookie_bite5.png',
    'assets/cookie_bite6.png'
];
const ingredientImages = [
    'assets/flour.png',
    'assets/milk.png',
    'assets/sugar.png',
    'assets/choc_chips.png',
    'assets/butter.png'
];
let bites = 0;

// Ingredients UI
const ingredients = ['Flour', 'Milk', 'Sugar', 'Chocolate Chips', 'Butter'];
let selectedIngredients = [];

message.textContent = "Enjoy Your Cookie KiKi <3";


biteButton.addEventListener('click', () => {
    if (bites < 5) {
        bites++;
        cookieImage.src = cookieImages[bites];
        playBiteSound();
        if (bites === 5) {
            message.textContent = "Cookie finished! Time to bake a new one!";
            setTimeout(() => {
                cookieImage.style.display = 'none';
                biteButton.style.display = 'none';
                showIngredients();
            }, 800);
        } else {
            message.textContent = `You took a bite! ${5 - bites} bites left`;
        }
    }
});


function playBiteSound() {
    const audio = new Audio('assets/bite.mp3');
    audio.play();
}

function showIngredients() {
    const container = document.createElement('div');
    container.id = 'ingredients-container';
    ingredients.forEach(ingredient => {
        const btn = document.createElement('button');
        btn.innerHTML = `<img src="${ingredientImages[ingredients.indexOf(ingredient)]}" alt="${ingredient}">`;
        btn.className = 'ingredient-btn';
        btn.onclick = () => {
            if (!selectedIngredients.includes(ingredient)) {
                selectedIngredients.push(ingredient);
                btn.disabled = true;
            }
            if (selectedIngredients.length === ingredients.length) {
                message.textContent = "You mixed the ingredients! Here's a new cookie!";
                setTimeout(resetCookie, 1500);
            }
        };
        container.appendChild(btn);
    });
    document.querySelector('.cookie-container').appendChild(container);
    message.textContent = "Mix the ingredients to bake a new cookie!";
}

function resetCookie() {
    bites = 0;
    cookieImage.src = cookieImages[0];
    cookieImage.style.display = '';
    biteButton.style.display = '';
    message.textContent = 'Enjoy Your New Cookie KiKi <3';
    selectedIngredients = [];
    const ingr = document.getElementById('ingredients-container');
    if (ingr) ingr.remove();
}
