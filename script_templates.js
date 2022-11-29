/***    Templates for Patatoferando ***/

function templateFoodCategory(i, j) {
    return `
    <div class="productBox">
        <div>
            <h2>${foodCategory[i][j]['name']}</h2>
            <p>${foodCategory[i][j]['description']}
        </div>
        <div class="productBox_right">
            <div>
                <p>${foodCategory[i][j]['price']} €</p>
            </div>    
            <div>
                <button onclick="callMinimize(); showShoppingCart(); addToCartFood(${[i]},${[j]}); renderShoppingCart()">+</button>
            </div>    
        </div>
    </div>`
}


function templateShoppingCart(amount, item, price, i, fixedPrice) {
    return `
    <div class="shoppingCartBox">
        <div class="shoppingCartInfo">
        <h3>${amount} x ${item}</h3><p>(${price}€)
        </div>
        <div class="increaseOrDecrease">
            <button onclick="addAmount(${i})">+</button><button onclick="removeAmount(${i})">-</button>
            <p>${fixedPrice} € </p>
        </div>
    </div>`;
}


function templateFinalSum(totalSumProductsOnly, lieferkosten, fixedNumber) {
    return `
    <div class="shoppingCartFinalPrice">
        <div id="Costs" class="">
            <p> Zwischensumme <b>${totalSumProductsOnly} €</b></p>
            <p> Lieferkosten <b>${lieferkosten} €</b></p>
        </div>
        <div id="payNow">
            <h3>Gesamt: ${fixedNumber} €</h3>
            <button title="Display Only">Jetzt Bezahlen</button>
        </div>
    </div>`;
}


function templateResumeFinalSum(fixedNumber) {
    return `
    <div class="shoppingCartFinalPrice">
        <div id="payNow">
            <h3>Gesamt: ${fixedNumber} €</h3>
            <button title="Display Only">Jetzt Bezahlen</button>
        </div>
    </div>`;
}