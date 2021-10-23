//for updating cost of product depending on number of rolls selected
function calculateCost() {
    var quantity = document.getElementById("quantity-select");
    console.log(quantity);
    var selectedValue = quantity.options[quantity.selectedIndex].value;
    var cost = selectedValue * 3.5;
    var productCost = document.getElementsByClassName("product-cost");
    console.log(productCost[0]);
    productCost[0].innerHTML = "$" + cost.toFixed(2);
}


//visual indication of number of items in cart 
var count = 0;

function submitCount() {
    count = count + 1;
    var cartNum= document.getElementsByClassName("cart-num");
    cartNum[0].innerHTML = count;
}