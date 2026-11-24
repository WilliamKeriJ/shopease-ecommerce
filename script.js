const products = [
    { name: "Headphones", price: 999, image: "🎧" },
    { name: "Smart Watch", price: 1499, image: "⌚" },
    { name: "Shoes", price: 1999, image: "👟" },
    { name: "Backpack", price: 799, image: "🎒" },
    { name: "Camera", price: 2999, image: "📷" },
    { name: "Sunglasses", price: 499, image: "🕶️" }
];

let cart = 0;

const productContainer = document.getElementById("products");

products.forEach(product => {
    productContainer.innerHTML += `
        <div class="card">
            <h1>${product.image}</h1>
            <h3>${product.name}</h3>
            <p>Price: ₹${product.price}</p>
            <button onclick="addToCart()">Add to Cart</button>
        </div>
    `;
});

function addToCart() {
    cart++;
    document.getElementById("cart").innerText = cart;
}