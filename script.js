let itemsPizza = [{
        "name": "Pizza Brot",
        "price": 5.50,
        "amount": 1,
        "description": "Klassisches Pizzabrot mit Oregano",
    },
    {
        "name": "Pizza Magherita",
        "price": 8.00,
        "amount": 1,
        "description": "Das Original aus Neapel",
    },
    {
        "name": "Pizza Salami",
        "price": 9.50,
        "amount": 1,
        "description": "Mit feinster Calabrese Salami",
    },
    {
        "name": "Pizza Prosciutto e funghi",
        "price": 10.00,
        "amount": 1,
        "description": "Mit Parmaschinken und Champignons",
    },
    {
        "name": "Pizza Quattro Stagioni",
        "price": 10.50,
        "amount": 1,
        "description": "Mit Salami, Parmaschinken, Käse und Champignons",
    },
    {
        "name": "Pizza Capricciosa",
        "price": 10.00,
        "amount": 1,
        "description": "Mit Parmaschinken und Artischocken",
    },
    {
        "name": "Pizza Quattro Formaggi",
        "price": 9.50,
        "amount": 1,
        "description": "Mit 4 Käsesorten",
    },
    {
        "name": "Pizza Ortolana",
        "price": 9.00,
        "amount": 1,
        "description": "Vegetarisch mit verschiedenen Gemüsesorten",
    },
];

let shoppingBasket = [];

function displayFood() {
    for (let i = 0; i < itemsPizza.length; i++) {
        let item = `<div class="item-class"><img onclick="addMealToShoppingBasket(${i});"class="add-icon"src="img/plus-green.png">
        <p class="name">${itemsPizza[i]["name"]}</p>
        <p class="description">${itemsPizza[i]["description"]}</p>
        <p class="price">${itemsPizza[i]["price"]} €</p>
         </div>`;
        document.getElementById('list').insertAdjacentHTML('beforeend', item);
    }

}

function foodOrder() {
    let shoppingBasket = `<div class="basket-class">
<p class="p-class basket"><img class="basket-img" src="img/shopping-basket.png">Warenkorb</p>
<div class="line"></div>
<div class="meals-value" id="meals-value">
<p class="p-class meals" id="meals"></p>
<p class="value" id="value"></p>
</div>
<div class="line"></div>
<div class="sum">
<p class="sum-total" id="sum"></p>
</div>
<div class="total">
<p class="p-class total-cont"></p>
<p class="sum-total" id="total"></p>
</div>
<div class="line"></div>
<p id="min-order-value"class="p-class min-order-value">
</p>
<button id="order-btn" class="order-btn">Bestellen</button>
</div>`;

    document.getElementById('shopping-basket').insertAdjacentHTML('beforeend', shoppingBasket);
}

function addMealToShoppingBasket(i) {
    let selectedMeal = itemsPizza[i];
    shoppingBasket.push(selectedMeal);
    updateShoppingBasket();
}


function updateShoppingBasket() {
    let sum = 0;
    document.getElementById('meals-value').innerHTML = "";
    for (let i = 0; i < shoppingBasket.length; i++) {
        let shoppingBasketItem = shoppingBasket[i];
        let para = `
        <div class="para" id="para">
        <img onclick="deleteItem()" class="delete-icon"src="img/minus-red.png">&nbsp;  
        <p>${shoppingBasketItem.amount} ${shoppingBasketItem.name}</p>
        &nbsp;&nbsp;&nbsp;
        <p><b>${shoppingBasketItem.price} €</b></p>
        </div>
        `;
        document.getElementById('meals-value').insertAdjacentHTML('beforeend', para);
        sum = sum + shoppingBasketItem.price;
    }

    document.getElementById('total').innerHTML = 'Gesamt:&nbsp;&nbsp;&nbsp;' + sum + ' €';
    if (sum < 10) {
        document.getElementById('min-order-value').innerHTML = "Du hast den Mindestbestellwert von 10 € (ohne Versand) leider noch nicht erreicht.";
        document.getElementById('order-btn').classList.remove('green-btn');
    }
    if (sum >= 10) {
        document.getElementById('min-order-value').innerHTML = "";
        document.getElementById('order-btn').classList.add('green-btn');

    }
}

function deleteItem(i) {
    shoppingBasket.splice(i, 1);
    updateShoppingBasket();
}