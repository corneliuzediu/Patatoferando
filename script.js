//Variable.
let imgSelector = ['../img/appetizer.jpg', '../img/main_dish.jpg', '../img/sweets.jpg', '../img/drinks.jpg']
let shoppingCartProductName = [];
let shoppingCartProductPrice = [];
let shoppingCartProductAmount = [];
let counter = [];

let initialCounter = 1;
let finalSumHolder = 0;
let j = 0;
let minSum = 0;
let arrowCounter;


//Json Array - Appetizers
let appetizers = [
    {
        "name": "Gefüllte Champignons",
        "description": "Low carb, glutenfrei, laktosefrei und vegetarisch möglich.",
        "price": "6.99",
    },
    {
        "name": "Frischkäse - Paprika - Schiffchen im Speckmantel",
        "description": "Schnelle und leckere Beilage oder Fingerfood.",
        "price": "4.99",
    },
    {
        "name": "Bacon-Tomaten",
        "description": "Leckeres Fingerfood mit getrockneten Tomaten.",
        "price": "5.99",
    },
    {
        "name": "Mini Party Quiches",
        "description": "Muffinsförme mit Bacon und Käse.",
        "price": "5.99"
    },
    {
        "name": "Blätterteig Lachs",
        "description": "Kleine Lachshäppchen mit Käse.",
        "price": "7.99"
    },
    {
        "name": "BBQ Garnelen",
        "description": "Garnelen im Honig und BBQ Sauce.",
        "price": "6.99"
    },
    {
        "name": "Rucolasalat mit Mozzarella und Parmesan",
        "description": "Frish, vegetarisch und lecker.",
        "price": "6.99"
    },
    {
        "name": "Bruschette & Mozzarela",
        "description": "Frisch, veganisch und lecker.",
        "price": "4.99"
    }
];


//Json Array - Main Dish
let dishes = [
    {
        "name": "Pasta Carbonara",
        "description": "Italienische Fusili mit Pancetta und Ei.",
        "price": "12.99",
    },
    {
        "name": "Lasagne al forno",
        "description": "Gebackte Lasagne mit Tomatensoße, Mindfliesh und Mozzarela.",
        "price": "15.99",
    },
    {
        "name": "Klassisches Kartoffelgratin",
        "description": "Gebackte Kartoffel in Sahne und Käse.",
        "price": "11.99",
    },
    {
        "name": "Gulash mit Paprika",
        "description": "Saftige hungarishe Gulash mit Paprika.",
        "price": "13.99",
    },
    {
        "name": "Rinderrouladen",
        "description": "Rind mit einer Füllung aus Mühren, Pastinaken und Zwiebeln.",
        "price": "15.99",
    },
    {
        "name": "Tortellini alla panna",
        "description": "Schinken-Sahnesauce wie beim Italiener.",
        "price": "12.99",
    },
    {
        "name": "Pizza quattro formaggi",
        "description": "Pizza mit Gorgonzola, Mozzarela, Gouda und Emmentaler.",
        "price": "13.99",
    },
    {
        "name": "Pizza Schinken & Champignons",
        "description": "Pizza mit Schinken, Champignons, Mozzarela und Tomatensoße.",
        "price": "13.99",
    }
];


//Json Array - Sweets
let sweets = [
    {
        "name": "Tiramisu",
        "description": "100g",
        "price": "3.99",
    },
    {
        "name": "Käsekuchen",
        "description": "100g",
        "price": "3.99",
    },
    {
        "name": "Schokokuchen",
        "description": "100g",
        "price": "3.99",
    },
    {
        "name": "Magnum Almond Eis",
        "description": "80g",
        "price": "2.99",
    },
    {
        "name": "Magnum Cherry & Schoko Eis",
        "description": "80g",
        "price": "2.99",
    },
    {
        "name": "Magnum Double Caramel Eis",
        "description": "80g",
        "price": "2.99",
    },
    {
        "name": "Schoko-Lava",
        "description": "150g",
        "price": "5.99",
    },
    {
        "name": "Schoko-Apfel",
        "description": "100g",
        "price": "2.99",
    }
];


//Json Array - Drinks
let drinks = [
    {
        "name": "Coca-Cola ",
        "description": "330ml",
        "price": "2.99",
    },
    {
        "name": "Fanta",
        "description": "330ml",
        "price": "2.99",
    },
    {
        "name": "Schweppes",
        "description": "330ml",
        "price": "2.99",
    },
    {
        "name": "Pepsi",
        "description": "330ml",
        "price": "2.99"
    },
    {
        "name": "Mountain Dew",
        "description": "500ml",
        "price": "3.99"
    },
    {
        "name": "Sprite",
        "description": "500ml",
        "price": "3.99"
    },
    {
        "name": "Carlsberg",
        "description": "500ml",
        "price": "4.99"
    },
    {
        "name": "Beck's",
        "description": "500ml",
        "price": "4.99"
    }
];


let foodCategoryButton = ['category-1', 'category-2', 'category-3', 'category-4'];
let foodCategoryID = ['selectorAppetizer', 'selectorMainDish', 'selectorSweets', 'selectorDrinks'];
let foodCategory = [appetizers, dishes, sweets, drinks];


/* Functions.
 The functions changes the Initial Main Body with the Order-Section Body.*/
function orderPageOpener() {
    document.getElementById('mainBodyPageOpener').classList.add('d-none');
    document.getElementById('mainBodyOrder').classList.remove('d-none');
}


function showShoppingCart() {
    document.getElementById('mainBodyShoppingCart').classList.remove('d-none')
}


function removeShoopingCart() {
    if (shoppingCartProductName.length < 1) {
        document.getElementById('mainBodyShoppingCart').classList.add('d-none');
    }
}


//The function minimizes the Shopping Cart on mobile device.
function callMinimize() {
    if (window.innerWidth < 769) {
        minimizeShoppingCart();
    }
}


function minimizeShoppingCart() {
    document.getElementById('mainBodyShoppingCartResume').classList.add('d-none');
    document.getElementById('resumeCosts').classList.remove('d-none')
}


function maximizeShoppingCart() {
    document.getElementById('mainBodyShoppingCartResume').classList.remove('d-none');
    document.getElementById('resumeCosts').classList.add('d-none')
    showExtra();
}


function showExtra() {
    document.getElementById('titleAndContent').classList.remove('d-none');
    document.getElementById('Costs').classList.remove('d-none');
}


function hideExtra() {
    document.getElementById('titleAndContent').classList.add('d-none');
    document.getElementById('Costs').classList.add('d-none');
}


//The functions are showing the list of products from the selectet caregory.
function selectFood(i) {
    let x = foodCategoryID[i];
    let y = imgSelector[i];
    document.getElementById(x).classList.remove('d-none');
    document.getElementById('imageSelector').src = y;
    renderFoodCategory(i, j);
}


//The functions are rendering the selectet category.
function renderFoodCategory(i, j) {
    cleanRenderFoodCategory();
    let x = foodCategoryID[i];
    let content = document.getElementById(x);
    for (let m = 0; m < foodCategory[i].length; m++) {
        j = m;
        content.innerHTML += templateFoodCategory(i, j)
    }
}


// The function clears the render function.
function cleanRenderFoodCategory() {
    for (let i = 0; i < foodCategoryID.length; i++) {
        let x = foodCategoryID[i];
        let content = document.getElementById(x);
        content.innerHTML = '';
    }
}


// Operational function for the shopping cart.
function renderShoppingCart() {
    let contentShoppingCart = document.getElementById('shoppingCartContent');
    contentShoppingCart.innerHTML = '';

    for (let i = 0; i < shoppingCartProductName.length; i++) {
        const item = shoppingCartProductName[i];
        const price = shoppingCartProductPrice[i];
        const amount = shoppingCartProductAmount[i];
        const finalPriceArticle = price * amount;
        const fixedPrice = finalPriceArticle.toFixed(2);

        contentShoppingCart.innerHTML += templateShoppingCart(amount, item, price, i, fixedPrice);
    }
    removeShoopingCart();
    showFinalSum();
}


function finalSum() {
    let x = document.getElementById('finalSum');
    let y = document.getElementById('finalSumResume')

    for (let i = 0; i < shoppingCartProductAmount.length && i < shoppingCartProductPrice.length; i++) {
        x.innerHTML = '';
        y.innerHTML = '';
        const price = shoppingCartProductPrice[i];
        const amount = shoppingCartProductAmount[i];
        const finalPriceArticle = price * amount;
        finalSumHolder += finalPriceArticle;
        let totalSumProductsOnly = finalSumHolder.toFixed(2);
        let lieferkosten = 0;
        if (totalSumProductsOnly < 25) {
            lieferkosten = 4.99;
        }
        let fixedNumberAndDelivery = finalSumHolder + lieferkosten;
        let fixedNumber = fixedNumberAndDelivery.toFixed(2);
        minSum = fixedNumber;
        x.innerHTML += templateFinalSum(totalSumProductsOnly, lieferkosten, fixedNumber);
        y.innerHTML += templateResumeFinalSum(fixedNumber);

    }
    finalSumHolder = 0;
}


function showFinalSum() {
    if (shoppingCartProductName.length == 0) {
        document.getElementById('finalSum').classList.add('d-none');
    } else {
        document.getElementById('finalSum').classList.remove('d-none');
        finalSum();
    }
}


function addToCartFood(i, j) {
    let holder = foodCategory[i];
    let validator = shoppingCartProductName.indexOf(holder[j]['name']);
    if (validator == -1) {
        shoppingCartProductName.push(holder[j]['name']);
        shoppingCartProductPrice.push(holder[j]['price']);
        counter.push(initialCounter);
        shoppingCartProductAmount.push(initialCounter);
    } else {
        addAmount(validator);
    }
}


function addAmount(i) {
    let x = counter[i];
    x++;
    counter[i] = x;
    shoppingCartProductAmount[i] = x;
    renderShoppingCart();
}


function removeAmount(i) {
    let x = counter[i];
    x--;
    counter[i] = x;
    shoppingCartProductAmount[i] = x;
    if (x < 1) {
        removeItemShoppingCart(i);
    }
    renderShoppingCart();
}


function removeItemShoppingCart(i) {
    shoppingCartProductName.splice(i, 1);
    shoppingCartProductPrice.splice(i, 1);
    shoppingCartProductAmount.splice(i, 1);
    counter.splice(i, 1);
}


// The functions slides the Food Categorys.
function previousCategory() {

}


function nextCategory() {
}