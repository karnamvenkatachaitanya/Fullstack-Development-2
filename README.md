<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>SmartShopper</title>
<style>
    body {
        margin: 0; font-family: Arial, sans-serif; background: #f5f5f5;
    }
    header {
        background-color: #232f3e;
        color: white;
        display: flex;
        align-items: center;
        padding: 10px 20px;
        position: sticky;
        top: 0;
        z-index: 100;
    }
    header h1 {
        margin: 0;
        cursor: pointer;
    }
    #searchBar {
        flex-grow: 1;
        margin-left: 20px;
        padding: 8px 12px;
        border-radius: 4px;
        border: none;
        font-size: 1em;
    }
    nav {
        margin-left: 20px;
        display: flex;
        gap: 20px;
    }
    nav button {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        font-weight: bold;
        font-size: 1em;
    }
    nav button:hover {
        text-decoration: underline;
    }
    #authContainer {
        max-width: 450px;
        margin: 50px auto;
        background: #fff;
        padding: 30px;
        border-radius: 8px;
        box-shadow: 0 0 12px rgba(0,0,0,0.1);
    }
    form {
        display: flex;
        flex-direction: column;
    }
    label {
        margin-top: 15px;
        font-weight: 600;
    }
    input, select, button {
        padding: 8px 10px;
        margin-top: 6px;
        font-size: 1em;
        border-radius: 5px;
        border: 1px solid #ccc;
    }
    button {
        background-color: #232f3e;
        color: white;
        border: none;
        margin-top: 25px;
        cursor: pointer;
    }
    button:hover {
        background-color: #3a4856;
    }
    #toggleToLogin, #toggleToRegister {
        color: #232f3e;
        margin-top: 12px;
        cursor: pointer;
        text-align: center;
        text-decoration: underline;
    }
    #errorMsg {
        color: red;
        margin-top: 15px;
        text-align: center;
    }

    /* Main SmartShopper layout */
    #smartShopperPage {
        max-width: 1200px;
        margin: 30px auto;
        display: none;
    }
    #productsGridControls {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20px 0;
    }
    #categories {
        display: flex;
        gap: 15px;
        overflow-x: auto;
        padding-bottom: 8px;
    }
    #categories button {
        background: #e7e7e7;
        border: none;
        padding: 10px 18px;
        border-radius: 20px;
        cursor: pointer;
        font-weight: bold;
        white-space: nowrap;
    }
    #categories button.active {
        background: #232f3e;
        color: white;
    }
    #sortDropdown {
        padding: 8px 12px;
        border-radius: 4px;
        border: 1px solid #ccc;
        font-size: 1em;
    }
    #productsGrid {
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
        gap: 20px;
    }
    .productCard {
        border: 1px solid #ddd;
        border-radius: 10px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        background: white;
        transition: box-shadow 0.3s ease;
        cursor: pointer;
    }
    .productCard:hover {
        box-shadow: 0 2px 10px rgba(0,0,0,0.15);
    }
    .productImage {
        width: 100%;
        height: 140px;
        object-fit: contain;
        border-radius: 6px;
    }
    .productName {
        font-weight: 700;
        margin: 12px 0 6px 0;
        flex-grow: 1;
    }
    .productPrice {
        color: #0a7d01;
        font-weight: bold;
        font-size: 1.1em;
    }
    .addToCartBtn {
        margin-top: 10px;
        background: #f0c14b;
        border: 1px solid #a88734;
        border-radius: 4px;
        cursor: pointer;
        padding: 6px;
        font-weight: 600;
    }
    .addToCartBtn:hover {
        background: #ddb347;
    }
    
    /* Orders, Cart, and Product Detail Sections */
    #ordersSection, #cartPage, #productDetailPage {
        max-width: 1200px;
        margin: 40px auto;
    }
    #ordersSection h3, #cartPage h2, #productDetailPage h2 {
        margin-bottom: 10px;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        font-size: 0.9em;
    }
    th, td {
        border: 1px solid #ccc;
        padding: 8px;
        text-align: center;
    }
    th {
        background-color: #232f3e;
        color: white;
    }
    
    #cartItems {
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-bottom: 20px;
    }
    #cartItems > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
        background: #f9f9f9;
    }
    #checkoutBtn, #backToHomeBtn, #addToCartDetailBtn {
        width: 100%;
        padding: 12px;
        font-size: 1.1em;
    }
    #productDetailContent {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        margin-top: 20px;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 10px;
        background: #f9f9f9;
    }
    #detailImage {
        max-width: 300px;
        max-height: 300px;
        object-fit: contain;
    }

    /* Profile page */
    #profilePage {
        max-width: 450px;
        margin: 40px auto;
        background: #f9f9f9;
        padding: 25px;
        border-radius: 8px;
        box-shadow: 0 0 8px rgba(0,0,0,0.1);
        display: none;
    }
    #profilePage h2 {
        margin-bottom: 15px;
        text-align: center;
    }
    #profilePage p {
        margin: 10px 0;
        font-weight: 600;
    }
    #logoutBtn, #logoutBtnProfile {
        background-color: #d9534f;
        color: white;
        border: none;
        padding: 10px;
        width: 100%;
        border-radius: 6px;
        cursor: pointer;
        margin-top: 25px;
        font-weight: bold;
    }
    #logoutBtn:hover, #logoutBtnProfile:hover {
        background-color: #c9302c;
    }
    /* Notification Message Box */
    #notificationBox {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #232f3e;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        z-index: 1000;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.5s ease, visibility 0.5s ease;
    }
    #notificationBox.show {
        opacity: 1;
        visibility: visible;
    }
</style>
</head>
<body>

<div id="authContainer">
    <form id="registerForm">
        <h2>Register</h2>
        <label for="fullName">Full Name</label>
        <input type="text" id="fullName" required />
        <label for="studentId">Student ID</label>
        <input type="text" id="studentId" required />
        <label for="dob">Date of Birth</label>
        <input type="date" id="dob" required />
        <label for="nationality">Nationality</label>
        <input type="text" id="nationality" required />
        <label for="branch">Branch</label>
        <input type="text" id="branch" required />
        <label for="year">Year</label>
        <select id="year" required>
            <option value="">Select Year</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
            <option value="4th Year">4th Year</option>
        </select>
        <button type="submit">Continue to Login</button>
        <div id="errorMsg"></div>
        <div id="toggleToLogin" style="display:none;">Go to Login</div>
    </form>

    <form id="loginForm" style="display:none;">
        <h2>Login</h2>
        <label for="loginUsername">Username</label>
        <input type="text" id="loginUsername" required />
        <label for="loginPassword">Password</label>
        <input type="password" id="loginPassword" required />
        <button type="submit">Login</button>
        <div id="errorMsgLogin"></div>
        <div id="toggleToRegister" style="margin-top:10px; cursor:pointer; color:#232f3e; text-decoration:underline;">Back to Register</div>
    </form>
</div>

<div id="smartShopperPage" style="display:none;">
    <header>
        <h1 id="homeBtn">SmartShopper</h1>
        <input type="search" id="searchBar" placeholder="Search products, categories, brands..." />
        <nav>
            <button id="profileBtn">Profile</button>
            <button id="cartBtn">Cart</button>
            <button id="logoutBtnMain">Logout</button>
        </nav>
    </header>

    <section id="productsGridControls">
        <section id="categories"></section>
        <select id="sortDropdown">
            <option value="default">Sort By</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
        </select>
    </section>

    <section id="productsGrid"></section>
</div>

<div id="productDetailPage" style="display:none;">
    <button id="backToProductsBtn">Back to Products</button>
    <div id="productDetailContent">
        <img id="detailImage" src="" alt="" />
        <h2 id="detailName"></h2>
        <p id="detailPrice"></p>
        <p id="detailDescription"></p>
        <button id="addToCartDetailBtn">Add to Cart</button>
    </div>
</div>

<div id="cartPage" style="display:none;">
    <h2>Your Cart</h2>
    <div id="cartItems"></div>
    <p><strong>Total:</strong> ₹<span id="cartTotal">0.00</span></p>
    <button id="checkoutBtn">Checkout</button>
    <button id="backToProductsBtnFromCart">Back to Products</button>
</div>

<div id="profilePage">
    <h2>Your Profile</h2>
    <p><strong>Full Name:</strong> <span id="profileName"></span></p>
    <p><strong>Student ID:</strong> <span id="profileStudentId"></span></p>
    <p><strong>Date of Birth:</strong> <span id="profileDob"></span></p>
    <p><strong>Nationality:</strong> <span id="profileNationality"></span></p>
    <p><strong>Branch:</strong> <span id="profileBranch"></span></p>
    <p><strong>Year:</strong> <span id="profileYear"></span></p>
    <button id="logoutBtnProfile">Logout</button>
</div>

<div id="ordersSection" style="display:none;">
    <h3>Your Orders</h3>
    <table>
        <thead>
            <tr><th>Order ID</th><th>Product</th><th>Category</th><th>Price</th><th>Date</th></tr>
        </thead>
        <tbody id="ordersTableBody"></tbody>
    </table>
</div>

<!-- Notification Box -->
<div id="notificationBox"></div>

<script>
    // Utils
    function getUsers() { return JSON.parse(localStorage.getItem('users') || '[]'); }
    function saveUsers(users) { localStorage.setItem('users', JSON.stringify(users)); }
    function getOrders() { return JSON.parse(localStorage.getItem('orders') || '[]'); }
    function saveOrders(orders) { localStorage.setItem('orders', JSON.stringify(orders)); }

    const authContainer = document.getElementById('authContainer');
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const errorMsg = document.getElementById('errorMsg');
    const errorMsgLogin = document.getElementById('errorMsgLogin');
    const toggleToRegister = document.getElementById('toggleToRegister');

    const smartShopperPage = document.getElementById('smartShopperPage');
    const categoriesEl = document.getElementById('categories');
    const productsGrid = document.getElementById('productsGrid');
    const searchBar = document.getElementById('searchBar');
    const sortDropdown = document.getElementById('sortDropdown');

    const profilePage = document.getElementById('profilePage');
    const profileName = document.getElementById('profileName');
    const profileStudentId = document.getElementById('profileStudentId');
    const profileDob = document.getElementById('profileDob');
    const profileNationality = document.getElementById('profileNationality');
    const profileBranch = document.getElementById('profileBranch');
    const profileYear = document.getElementById('profileYear');
    const logoutBtnProfile = document.getElementById('logoutBtnProfile');

    const profileBtn = document.getElementById('profileBtn');
    const logoutBtnMain = document.getElementById('logoutBtnMain');
    const homeBtn = document.getElementById('homeBtn');

    const productDetailPage = document.getElementById('productDetailPage');
    const backToProductsBtn = document.getElementById('backToProductsBtn');

    const cartPage = document.getElementById('cartPage');
    const cartBtn = document.getElementById('cartBtn');
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalEl = document.getElementById('cartTotal');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const backToProductsBtnFromCart = document.getElementById('backToProductsBtnFromCart');

    const ordersSection = document.getElementById('ordersSection');
    const ordersTableBody = document.getElementById('ordersTableBody');
    
    const notificationBox = document.getElementById('notificationBox');

    let currentUser = null;
    let currentCategory = 'All';
    let searchTerm = '';
    let tempStudentData = null;
    let cart = [];

    // Data
    const categories = ['All', 'Electronics', 'Fashion', 'Home & Kitchen', 'Books', 'Toys', 'Sports', 'Beauty'];
    const products = [
        // Electronics
        { id: 1, name: 'Wireless Bluetooth Headphones', category: 'Electronics', price: 59.99, image: 'https://m.media-amazon.com/images/I/71Q9d6N7xFL._AC_SL1500_.jpg', description: 'High-fidelity sound with deep bass and crystal-clear treble. Comfortable over-ear design with a long-lasting battery.' },
        { id: 2, name: 'Smartphone with 128GB Storage', category: 'Electronics', price: 399.99, image: 'https://m.media-amazon.com/images/I/71jG+e7roXL._AC_SL1500_.jpg', description: 'A powerful smartphone with a brilliant display, fast processor, and a high-resolution camera. Perfect for work and play.' },
        { id: 3, name: '4K Ultra HD Smart TV', category: 'Electronics', price: 799.99, image: 'https://m.media-amazon.com/images/I/81nG7c3npNL._AC_SL1500_.jpg', description: 'Immerse yourself in stunning 4K visuals. This smart TV comes with built-in streaming apps for endless entertainment.' },
        { id: 4, name: 'Portable External Hard Drive 2TB', category: 'Electronics', price: 74.99, image: 'https://m.media-amazon.com/images/I/61I8jT8sjDL._AC_SL1500_.jpg', description: 'Store and back up all your important files with this compact and durable external hard drive. USB 3.0 for fast data transfer.' },
        { id: 5, name: 'Wireless Mouse', category: 'Electronics', price: 19.99, image: 'https://m.media-amazon.com/images/I/61hFGEqiwhL._AC_SL1500_.jpg', description: 'Ergonomic design for comfortable use. Reliable 2.4GHz wireless connection and a long-lasting battery.' },
        // Fashion
        { id: 6, name: 'Men\'s Casual T-Shirt', category: 'Fashion', price: 15.99, image: 'https://m.media-amazon.com/images/I/81-JUmpkkLL._AC_UX679_.jpg', description: 'Made from soft, breathable cotton. A versatile and comfortable t-shirt for everyday wear.' },
        { id: 7, name: 'Women\'s Running Shoes', category: 'Fashion', price: 45.00, image: 'https://m.media-amazon.com/images/I/71eA5wMEBdL._AC_UX695_.jpg', description: 'Lightweight and supportive running shoes with a cushioned sole for maximum comfort during your workouts.' },
        { id: 8, name: 'Stylish Sunglasses', category: 'Fashion', price: 29.99, image: 'https://m.media-amazon.com/images/I/61xqN3tiwCL._AC_UL1500_.jpg', description: 'Protect your eyes with these UV-blocking sunglasses. A timeless design that complements any style.' },
        { id: 9, name: 'Leather Wallet', category: 'Fashion', price: 24.99, image: 'https://m.media-amazon.com/images/I/71V2IVFDkWL._AC_UL1500_.jpg', description: 'A classic bifold wallet made from genuine leather with multiple card slots and a clear ID window.' },
        { id: 10, name: 'Baseball Cap', category: 'Fashion', price: 12.99, image: 'https://m.media-amazon.com/images/I/71g1dDjXqkL._AC_UL1500_.jpg', description: 'A comfortable and adjustable baseball cap, perfect for a sunny day or adding a sporty touch to your outfit.' },
        // Home & Kitchen
        { id: 11, name: 'Non-stick Frying Pan', category: 'Home & Kitchen', price: 35.99, image: 'https://m.media-amazon.com/images/I/71Hk3zLtFyL._AC_SL1500_.jpg', description: 'Cook your favorite meals with ease. This durable frying pan features a non-stick surface and an ergonomic handle.' },
        { id: 12, name: 'Vacuum Cleaner', category: 'Home & Kitchen', price: 149.99, image: 'https://m.media-amazon.com/images/I/71jXWTKN+1L._AC_SL1500_.jpg', description: 'Powerful suction and lightweight design make cleaning a breeze. Ideal for all floor types.' },
        { id: 13, name: 'Ceramic Dinnerware Set', category: 'Home & Kitchen', price: 59.99, image: 'https://m.media-amazon.com/images/I/81+J8snAoIL._AC_SL1500_.jpg', description: 'A stylish 16-piece dinnerware set for four people, made from high-quality, dishwasher-safe ceramic.' },
        { id: 14, name: 'Air Purifier', category: 'Home & Kitchen', price: 129.99, image: 'https://m.media-amazon.com/images/I/71cWPTTtAQL._AC_SL1500_.jpg', description: 'Improve your indoor air quality by removing dust, pollen, and other allergens with this quiet and efficient air purifier.' },
        { id: 15, name: 'LED Desk Lamp', category: 'Home & Kitchen', price: 25.99, image: 'https://m.media-amazon.com/images/I/71USKHtpA6L._AC_SL1500_.jpg', description: 'Modern and flexible desk lamp with multiple brightness settings. Perfect for reading or working late at night.' },
        // Books
        { id: 16, name: 'The Great Gatsby - F. Scott Fitzgerald', category: 'Books', price: 9.99, image: 'https://m.media-amazon.com/images/I/81af+MCATTL.jpg', description: 'A classic novel of the Jazz Age, exploring themes of wealth, love, and the American Dream.' },
        { id: 17, name: 'To Kill a Mockingbird - Harper Lee', category: 'Books', price: 7.99, image: 'https://m.media-amazon.com/images/I/81OtwF1XxIL.jpg', description: 'A powerful and timeless story about justice, innocence, and racism in the American South.' },
        { id: 18, name: '1984 - George Orwell', category: 'Books', price: 8.99, image: 'https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg', description: 'A dystopian classic that depicts a totalitarian regime and explores themes of surveillance and government control.' },
        { id: 19, name: 'Clean Code - Robert C. Martin', category: 'Books', price: 33.99, image: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX374_BO1,204,203,200_.jpg', description: 'A must-read for any software developer. Learn how to write clean, maintainable, and professional code.' },
        { id: 20, name: 'The Pragmatic Programmer', category: 'Books', price: 27.99, image: 'https://m.media-amazon.com/images/I/51A6tDw5ZRL._SX376_BO1,204,203,200_.jpg', description: 'This book provides practical advice on how to improve your development process and become a better programmer.' },
        // Toys
        { id: 21, name: 'Building Blocks Set', category: 'Toys', price: 19.99, image: 'https://m.media-amazon.com/images/I/81Y8S4jxHbL._AC_SL1500_.jpg', description: 'A large set of colorful building blocks for hours of creative fun and imaginative play.' },
        { id: 22, name: 'Remote Control Car', category: 'Toys', price: 49.99, image: 'https://m.media-amazon.com/images/I/71fJaEYTsVL._AC_SL1500_.jpg', description: 'A high-speed remote control car with a sleek design and full-function controls. Perfect for kids and adults.' },
        { id: 23, name: 'Puzzle Game', category: 'Toys', price: 14.99, image: 'https://m.media-amazon.com/images/I/71LRHEm2HbL._AC_SL1500_.jpg', description: 'A challenging and colorful jigsaw puzzle that will keep you entertained for hours.' },
        { id: 24, name: 'Action Figure', category: 'Toys', price: 22.99, image: 'https://m.media-amazon.com/images/I/71TEwwq6eHL._AC_SL1500_.jpg', description: 'Highly detailed action figure with multiple points of articulation. A great addition to any collection.' },
        { id: 25, name: 'Stuffed Teddy Bear', category: 'Toys', price: 17.99, image: 'https://m.media-amazon.com/images/I/61eAlBt4XBL._AC_SL1500_.jpg', description: 'A soft and cuddly teddy bear, perfect for hugging and comforting.' },
        // Sports
        { id: 26, name: 'Soccer Ball', category: 'Sports', price: 24.99, image: 'https://m.media-amazon.com/images/I/81HUAYpvm0L._AC_SL1500_.jpg', description: 'A durable soccer ball with excellent grip and control. Suitable for all weather conditions.' },
        { id: 27, name: 'Yoga Mat', category: 'Sports', price: 29.99, image: 'https://m.media-amazon.com/images/I/71Wj9E7iOdL._AC_SL1500_.jpg', description: 'Non-slip and cushioned yoga mat for a comfortable and stable practice. Easy to clean and carry.' },
        { id: 28, name: 'Tennis Racket', category: 'Sports', price: 59.99, image: 'https://m.media-amazon.com/images/I/61zYsnZqLuL._AC_SL1500_.jpg', description: 'A lightweight and powerful tennis racket, designed for players of all skill levels.' },
        { id: 29, name: 'Dumbbell Set', category: 'Sports', price: 99.99, image: 'https://m.media-amazon.com/images/I/71C-B6kFpmL._AC_SL1500_.jpg', description: 'A versatile set of adjustable dumbbells for a full-body workout at home.' },
        { id: 30, name: 'Running Shorts', category: 'Sports', price: 19.99, image: 'https://m.media-amazon.com/images/I/71R4S3PRZTL._AC_UX679_.jpg', description: 'Breathable and quick-drying running shorts with a comfortable fit and a convenient pocket.' },
        // Beauty
        { id: 31, name: 'Facial Cleanser', category: 'Beauty', price: 14.99, image: 'https://m.media-amazon.com/images/I/61v+nlS6zwL._SL1500_.jpg', description: 'A gentle facial cleanser that effectively removes dirt and oil, leaving your skin feeling fresh and clean.' },
        { id: 32, name: 'Lipstick Set', category: 'Beauty', price: 24.99, image: 'https://m.media-amazon.com/images/I/71O7MTuQVmL._SL1500_.jpg', description: 'A collection of matte and glossy lipsticks in a variety of vibrant shades. Long-lasting and moisturizing.' },
        { id: 33, name: 'Moisturizer Cream', category: 'Beauty', price: 19.99, image: 'https://m.media-amazon.com/images/I/71R9z7fr3fL._SL1500_.jpg', description: 'A rich and hydrating moisturizer that nourishes and protects your skin, leaving it soft and smooth.' },
        { id: 34, name: 'Perfume Spray', category: 'Beauty', price: 39.99, image: 'https://m.media-amazon.com/images/I/71HXLj4zslL._SL1500_.jpg', description: 'A luxurious and long-lasting fragrance with a blend of floral and woody notes. Perfect for any occasion.' },
        { id: 35, name: 'Nail Polish Set', category: 'Beauty', price: 16.99, image: 'https://m.media-amazon.com/images/I/61DlWDD+a3L._SL1500_.jpg', description: 'A set of vibrant and chip-resistant nail polishes. Easy to apply and provides a professional finish.' },
    ];

    // --- Notification Function ---
    function showNotification(message) {
        notificationBox.textContent = message;
        notificationBox.classList.add('show');
        setTimeout(() => {
            notificationBox.classList.remove('show');
        }, 3000); // Hide after 3 seconds
    }

    // ------------- Registration -------------
    registerForm.addEventListener('submit', e => {
        e.preventDefault();
        errorMsg.textContent = '';

        const fullName = document.getElementById('fullName').value.trim();
        const studentId = document.getElementById('studentId').value.trim();
        const dob = document.getElementById('dob').value;
        const nationality = document.getElementById('nationality').value.trim();
        const branch = document.getElementById('branch').value.trim();
        const year = document.getElementById('year').value;

        if (!fullName || !studentId || !dob || !nationality || !branch || !year) {
            errorMsg.textContent = 'Please fill in all fields.';
            return;
        }
        tempStudentData = { fullName, studentId, dob, nationality, branch, year };
        registerForm.style.display = 'none';
        loginForm.style.display = 'flex';
        errorMsgLogin.textContent = '';
    });

    // ------------- Toggle back to register -------------
    toggleToRegister.addEventListener('click', () => {
        loginForm.style.display = 'none';
        registerForm.style.display = 'flex';
        errorMsg.textContent = '';
        errorMsgLogin.textContent = '';
    });

    // ------------- Login form -------------
    loginForm.addEventListener('submit', e => {
        e.preventDefault();
        errorMsgLogin.textContent = '';

        const username = document.getElementById('loginUsername').value.trim();
        const password = document.getElementById('loginPassword').value;

        if (!username || !password) {
            errorMsgLogin.textContent = 'Please enter username and password.';
            return;
        }

        let users = getUsers();
        let user;

        if (tempStudentData) {
            if (users.find(u => u.username === username)) {
                errorMsgLogin.textContent = 'Username already exists. Choose another.';
                return;
            }
            user = { ...tempStudentData, username, password };
            users.push(user);
            saveUsers(users);
            tempStudentData = null;
        } else {
            user = users.find(u => u.username === username && u.password === password);
            if (!user) {
                errorMsgLogin.textContent = 'Invalid username or password.';
                return;
            }
        }

        currentUser = user;
        startSmartShopper(currentUser);
    });

    // ------------- Start SmartShopper -------------
    function startSmartShopper(user) {
        authContainer.style.display = 'none';
        profilePage.style.display = 'none';
        productDetailPage.style.display = 'none';
        cartPage.style.display = 'none';
        smartShopperPage.style.display = 'block';

        currentCategory = 'All';
        searchTerm = '';
        searchBar.value = '';
        sortDropdown.value = 'default';

        renderCategories();
        renderProducts();
        renderOrders();

        sessionStorage.setItem('loggedInUser', JSON.stringify(user));
    }

    // ------------- Logout -------------
    function logout() {
        currentUser = null;
        sessionStorage.removeItem('loggedInUser');
        authContainer.style.display = 'block';
        registerForm.style.display = 'flex';
        loginForm.style.display = 'none';
        errorMsg.textContent = '';
        errorMsgLogin.textContent = '';
        smartShopperPage.style.display = 'none';
        profilePage.style.display = 'none';
        productDetailPage.style.display = 'none';
        cartPage.style.display = 'none';

        registerForm.reset();
        loginForm.reset();
        cart = []; // Clear cart on logout
    }

    // ------------- Categories -------------
    function renderCategories() {
        categoriesEl.innerHTML = '';
        categories.forEach(cat => {
            const btn = document.createElement('button');
            btn.textContent = cat;
            if (cat === currentCategory) btn.classList.add('active');
            btn.addEventListener('click', () => {
                currentCategory = cat;
                renderCategories();
                renderProducts();
            });
            categoriesEl.appendChild(btn);
        });
    }

    // ------------- Products and Sorting -------------
    function renderProducts() {
        productsGrid.innerHTML = '';

        let filtered = products.filter(p => {
            const matchesCategory = currentCategory === 'All' || p.category === currentCategory;
            const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesCategory && matchesSearch;
        });

        const sortBy = sortDropdown.value;
        if (sortBy === 'price-asc') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-desc') {
            filtered.sort((a, b) => b.price - a.price);
        }

        if (filtered.length === 0) {
            productsGrid.innerHTML = '<p>No products found.</p>';
            return;
        }

        filtered.forEach(prod => {
            const card = document.createElement('div');
            card.className = 'productCard';
            card.dataset.id = prod.id;

            card.innerHTML = `
                <img src="${prod.image}" alt="${prod.name}" class="productImage" />
                <div class="productName">${prod.name}</div>
                <div class="productPrice">₹${prod.price.toFixed(2)}</div>
                <button class="addToCartBtn">Add to Cart</button>
            `;

            card.addEventListener('click', () => renderProductDetail(prod));
            card.querySelector('.addToCartBtn').addEventListener('click', (e) => {
                e.stopPropagation();
                addToCart(prod);
            });
            productsGrid.appendChild(card);
        });
    }

    // ------------- Product Detail View -------------
    function renderProductDetail(product) {
        smartShopperPage.style.display = 'none';
        productDetailPage.style.display = 'block';

        document.getElementById('detailImage').src = product.image;
        document.getElementById('detailName').textContent = product.name;
        document.getElementById('detailPrice').textContent = `₹${product.price.toFixed(2)}`;
        document.getElementById('detailDescription').textContent = product.description;
        
        document.getElementById('addToCartDetailBtn').onclick = () => {
            addToCart(product);
        };
    }

    backToProductsBtn.addEventListener('click', () => {
        productDetailPage.style.display = 'none';
        smartShopperPage.style.display = 'block';
    });

    // ------------- Search & Sort Events -------------
    searchBar.addEventListener('input', () => {
        searchTerm = searchBar.value.trim();
        renderProducts();
    });

    sortDropdown.addEventListener('change', () => {
        renderProducts();
    });

    // ------------- Shopping Cart Logic -------------
    function addToCart(product) {
        if (!currentUser) {
            showNotification('You must be logged in to add items to the cart.');
            return;
        }
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        showNotification(`Added "${product.name}" to your cart.`);
        renderCart();
    }

    function renderCart() {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            document.getElementById('checkoutBtn').style.display = 'none';
        } else {
            document.getElementById('checkoutBtn').style.display = 'block';
            cart.forEach(item => {
                const cartItemEl = document.createElement('div');
                cartItemEl.innerHTML = `
                    <div>${item.name} (x${item.quantity})</div>
                    <div>₹${(item.price * item.quantity).toFixed(2)}</div>
                    <button onclick="removeFromCart(${item.id})">Remove</button>
                `;
                cartItemsContainer.appendChild(cartItemEl);
                total += item.price * item.quantity;
            });
        }
        cartTotalEl.textContent = total.toFixed(2);
    }

    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        renderCart();
    }

    cartBtn.addEventListener('click', () => {
        smartShopperPage.style.display = 'none';
        profilePage.style.display = 'none';
        productDetailPage.style.display = 'none';
        ordersSection.style.display = 'none';
        cartPage.style.display = 'block';
        renderCart();
    });

    backToProductsBtnFromCart.addEventListener('click', () => {
        cartPage.style.display = 'none';
        smartShopperPage.style.display = 'block';
    });

    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            showNotification('Your cart is empty.');
            return;
        }
        let orders = getOrders();
        cart.forEach(item => {
            const newOrder = {
                orderId: Date.now() + Math.floor(Math.random() * 1000),
                username: currentUser.username,
                productName: item.name,
                category: item.category,
                price: item.price,
                quantity: item.quantity,
                date: new Date().toLocaleString(),
            };
            orders.push(newOrder);
        });
        saveOrders(orders);
        cart = [];
        showNotification('Checkout successful! Your order has been placed.');
        renderOrders();
        renderCart();
        cartPage.style.display = 'none';
        smartShopperPage.style.display = 'block';
    });

    // ------------- Orders Display -------------
    function renderOrders() {
        let orders = getOrders();
        let userOrders = orders.filter(o => o.username === currentUser.username);

        if (userOrders.length === 0) {
            ordersSection.style.display = 'none';
            return;
        }

        ordersSection.style.display = 'block';
        ordersTableBody.innerHTML = '';
        userOrders.forEach(o => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${o.orderId}</td>
                <td>${o.productName} (x${o.quantity})</td>
                <td>${o.category}</td>
                <td>₹${o.price.toFixed(2)}</td>
                <td>${o.date}</td>
            `;
            ordersTableBody.appendChild(tr);
        });
    }

    // ------------- Profile Button -------------
    profileBtn.addEventListener('click', () => {
        if (!currentUser) return;
        smartShopperPage.style.display = 'none';
        productDetailPage.style.display = 'none';
        cartPage.style.display = 'none';
        profilePage.style.display = 'block';

        profileName.textContent = currentUser.fullName;
        profileStudentId.textContent = currentUser.studentId;
        profileDob.textContent = currentUser.dob;
        profileNationality.textContent = currentUser.nationality;
        profileBranch.textContent = currentUser.branch;
        profileYear.textContent = currentUser.year;
    });

    // ------------- Logout -------------
    logoutBtnMain.addEventListener('click', logout);
    logoutBtnProfile.addEventListener('click', logout);

    // ------------- Home Button -------------
    homeBtn.addEventListener('click', () => {
        profilePage.style.display = 'none';
        productDetailPage.style.display = 'none';
        cartPage.style.display = 'none';
        smartShopperPage.style.display = 'block';
        renderProducts();
    });

    // ------------- Auto-login if session exists -------------
    window.onload = () => {
        const loggedUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
        if (loggedUser) {
            currentUser = loggedUser;
            authContainer.style.display = 'none';
            startSmartShopper(currentUser);
        }
    };
</script>

</body>
</html>
