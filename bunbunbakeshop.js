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

function submitCount() {
    var order = {product:"", quantity:0, glaze:"No glaze", cost:0};
    order.product = document.getElementsByClassName("product-title")[0].innerHTML;
    var quantity = document.getElementById("quantity-select");
    order.quantity = quantity.options[quantity.selectedIndex].value;
    var glaze = document.getElementById("glaze-select");
    order.glaze = glaze.options[glaze.selectedIndex].value;
    order.cost = order.quantity * 3.5;

    var ordersInCart = JSON.parse(localStorage.getItem("orders"));
    if (ordersInCart == null)
        ordersInCart = [];
    ordersInCart.push(order);
    console.log(ordersInCart);
    localStorage.setItem("orders", JSON.stringify(ordersInCart));
    var cartNum = document.getElementsByClassName("cart-num");
    cartNum[0].innerHTML = ordersInCart.length; 
}

function  updateCart() {
    var ordersInCart = JSON.parse(localStorage.getItem("orders"));
    if (ordersInCart) {
        var cartNum = document.getElementsByClassName("cart-num");
        cartNum[0].innerHTML = ordersInCart.length
    }
}

function getFromLocalStorage() {
    var ordersInCart = JSON.parse(localStorage.getItem('orders'));
    var divString = "";
    var total = 0;
    if (ordersInCart) {
        for (let i=0; i < ordersInCart.length; i++) {
            divString += '<img src="menu-item.png" alt="original cinnamon roll">';
            divString += '<span class= "cart-product">' + ordersInCart[i].product + '</span>';
            divString += '<span class= "cart-cost">$ ' + ordersInCart[i].cost + '</span>';
            divString += '<p class="cart-glaze"> w/' + ordersInCart[i].glaze + '</p>';
            divString += '<i onclick="removeFromCart(' + i + ');" class="far fa-trash-alt"></i>';
            divString += '<p class="cart-quantity">Quantity: ' + ordersInCart[i].quantity + ' rolls</p>';
            divString += '<hr>';
            total += ordersInCart[i].cost;
        }
        var cartSummary = document.getElementsByClassName("cart-summary");
        cartSummary[0].innerHTML = divString;
        var cartTotal = document.getElementById("cart-total");
        cartTotal.innerHTML = '$ ' + total; 
    }
}

//removing items from cart 
function removeFromCart(i) {
    console.log("call removeFromCart() i=" + i);
    var ordersInCart = JSON.parse(localStorage.getItem("orders"));
    ordersInCart.splice(i, 1);
    localStorage.setItem('orders', JSON.stringify(ordersInCart));
    location.reload();
}


