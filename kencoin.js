let cart = [];
let total = 0;

function invest(machine, price) {
    cart.push({ machine, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.machine}: $${item.price}`;
        cartItems.appendChild(li);
    });
    document.getElementById('cart-total').textContent = total;
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty.');
        return;
    }
    
    alert('Investment successful! You will receive 3% revenue of the total cost as your return.');
    
    // Clear cart and reset total
    cart = [];
    total = 0;
    updateCart();
}
