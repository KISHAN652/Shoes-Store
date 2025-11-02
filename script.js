// Demo products data
let products = [
    {
        id: 1,
        name: "Nike Air Max",
        price: 129.99,
        category: "running",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Comfortable running shoes with air cushioning for maximum impact absorption during your runs."
    },
    {
        id: 2,
        name: "Adidas Ultraboost",
        price: 179.99,
        category: "running",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/06494894-7c72-45ff-99d4-cbbae8e53cf6.png",
        description: "Premium running shoes with responsive cushioning and energy return for a smooth ride."
    },
    {
        id: 3,
        name: "Puma RS-X",
        price: 110.00,
        category: "casual",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9990dc00-8bf9-4ac5-87ef-7175b2af3eeb.png",
        description: "Stylish casual sneakers with a chunky design and comfortable fit for everyday wear."
    },
    {
        id: 4,
        name: "Converse Chuck Taylor",
        price: 65.00,
        category: "casual",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7757e318-d32d-461e-97f0-cd33fafb2a58.png",
        description: "Classic canvas sneakers that never go out of style, perfect for casual outfits."
    },
    {
        id: 5,
        name: "Jordan Retro",
        price: 190.00,
        category: "basketball",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6da9a376-ef07-4e5d-aab4-6a9de6a42c66.png",
        description: "Iconic basketball shoes with superior ankle support and cushioning for the court."
    },
    {
        id: 6,
        name: "Under Armour Curry",
        price: 140.00,
        category: "basketball",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b1e9bd6f-539e-4a59-9bac-b98e075c3aec.png",
        description: "Performance basketball shoes designed with Stephen Curry for quick moves and stability."
    },
    {
        id: 7,
        name: "Cole Haan Oxford",
        price: 198.00,
        category: "formal",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d1419621-2c46-42d1-83b3-2db59f4f1797.png",
        description: "Elegant oxford shoes crafted from premium leather for formal occasions and business wear."
    },
    {
        id: 8,
        name: "Clarks Desert Boot",
        price: 130.00,
        category: "casual",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2bb327e6-35c1-445c-9256-ea84a34d44d0.png",
        description: "Timeless desert boots with crepe soles and suede leather for a smart casual look."
    },
    {
        id: 9,
        name: "New Balance 990",
        price: 175.00,
        category: "running",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8cb5c365-5be8-4d4b-8937-f45bef6d6236.png",
        description: "Premium running shoes made in USA with exceptional comfort and durability."
    },
    {
        id: 10,
        name: "Vans Old Skool",
        price: 60.00,
        category: "casual",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/269db8d1-f104-49d3-8c95-ae80be630a2a.png",
        description: "Classic skate shoes with the iconic side stripe, perfect for casual street style."
    },
    {
        id: 11,
        name: "Reebok Classic",
        price: 85.00,
        category: "casual",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3c837f92-73f3-4e3b-a2d4-de47412972bd.png",
        description: "Vintage-style sneakers with a comfortable cushioning and timeless design."
    },
    {
        id: 12,
        name: "Asics Gel-Kayano",
        price: 160.00,
        category: "running",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7f50f6c5-3ba5-48d9-99bf-fda29a1b8b96.png",
        description: "Stability running shoes with gel cushioning for long-distance comfort and support."
    },
    {
        id: 13,
        name: "Saucony Triumph",
        price: 150.00,
        category: "running",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0964123b-74ba-4d3b-a5c9-bfe8e9fb646b.png",
        description: "Neutral running shoes with plush cushioning for a luxurious running experience."
    },
    {
        id: 14,
        name: "Hoka One One",
        price: 145.00,
        category: "running",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c6bba8e9-1e68-4917-8b5d-a71f3cb2677d.png",
        description: "Maximalist running shoes with exceptional cushioning and a rocker design."
    },
    {
        id: 15,
        name: "Nike Lebron",
        price: 200.00,
        category: "basketball",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a0fe0f7b-a8dc-451b-b6fa-9a0dcab279a4.png",
        description: "Signature basketball shoes designed with Lebron James for power and agility on the court."
    },
    {
        id: 16,
        name: "Adidas Stan Smith",
        price: 85.00,
        category: "casual",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/98937cb6-6fc0-462e-9ffb-d42c866e733e.png",
        description: "Iconic minimalist sneakers with genuine leather and timeless design."
    },
    {
        id: 17,
        name: "Brooks Ghost",
        price: 130.00,
        category: "running",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5ed2cfbc-7dcc-4307-83eb-03e0d6cae983.png",
        description: "Versatile running shoes with balanced cushioning for a smooth ride."
    },
    {
        id: 18,
        name: "Skechers Go Walk",
        price: 75.00,
        category: "casual",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a45bcfb5-9a5a-4793-8c9a-7f896c03cd01.png",
        description: "Comfortable walking shoes with lightweight design and memory foam insoles."
    },
    {
        id: 19,
        name: "Allen Edmonds Park Ave",
        price: 395.00,
        category: "formal",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/78dfebe3-92d2-463d-99c3-22393a982b52.png",
        description: "Premium cap-toe oxford shoes handmade in USA from fine leather."
    },
    {
        id: 20,
        name: "Nike Pegasus",
        price: 120.00,
        category: "running",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/07619ab5-96ad-40a8-a7a0-88b768d5d02a.png",
        description: "Versatile running shoes with responsive cushioning for daily training."
    },
    {
        id: 21,
        name: "Adidas NMD",
        price: 130.00,
        category: "casual",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/963c97c8-afb4-44d3-974e-26fa428df09f.png",
        description: "Modern sneakers with Boost cushioning and a contemporary streetwear style."
    },
    {
        id: 22,
        name: "Timberland Boot",
        price: 190.00,
        category: "casual",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/610d7f6d-a2a0-4636-aac0-0c41122aa823.png",
        description: "Classic waterproof boots with premium leather and durable construction."
    },
    {
        id: 23,
        name: "Nike Kyrie",
        price: 120.00,
        category: "basketball",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/865f26aa-514f-4d14-a77b-08869808ade7.png",
        description: "Signature basketball shoes designed with Kyrie Irving for quick cuts and control."
    },
    {
        id: 24,
        name: "ECCO Soft",
        price: 150.00,
        category: "casual",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cdd86971-686c-4a53-820e-a67a3bb71787.png",
        description: "Comfortable casual shoes with innovative technology and premium materials."
    },
    {
        id: 25,
        name: "Salomon Speedcross",
        price: 130.00,
        category: "running",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/39f826d0-3050-423e-ba9c-4e4a4ec704ff.png",
        description: "Trail running shoes with aggressive grip for challenging terrain."
    },
    {
        id: 26,
        name: "Johnston & Murphy",
        price: 225.00,
        category: "formal",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f176bbdc-3cc1-4104-93e4-16fea510027c.png",
        description: "Elegant dress shoes crafted from fine leather with comfortable cushioning."
    },
    {
        id: 27,
        name: "On Cloud",
        price: 140.00,
        category: "running",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a005458e-979b-4d49-9f46-7003515c415a.png",
        description: "Lightweight running shoes with unique cloud technology for a soft landing."
    },
    {
        id: 28,
        name: "Puma Cali",
        price: 100.00,
        category: "casual",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9af2c23e-71f6-4250-8bd3-c4b1d98eabb9.png",
        description: "Women's fashion sneakers with a retro California vibe and comfortable fit."
    },
    {
        id: 29,
        name: "Adidas Superstar",
        price: 100.00,
        category: "casual",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/28fac156-bfc2-48c8-b8cd-aabaff139789.png",
        description: "Iconic shell-toe sneakers that have been a streetwear staple for decades."
    },
    {
        id: 30,
        name: "Nike Air Force 1",
        price: 100.00,
        category: "casual",
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3184ee3d-3b9b-4146-8a40-8f16ba18f1b6.png",
        description: "Classic basketball-inspired sneakers that have become a cultural icon."
    }
];

// Cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM Elements
const storeView = document.getElementById('store-view');
const adminView = document.getElementById('admin-view');
const menProductsContainer = document.getElementById('men-products-container');
const adminProductsContainer = document.getElementById('admin-products-container');
const addProductForm = document.getElementById('add-product-form');
const adminToggle = document.querySelector('.admin-toggle');
const viewStoreBtn = document.querySelector('.view-store');
const viewAdminBtn = document.querySelector('.view-admin');
const cartNotification = document.getElementById('cart-notification');
const cartModal = document.getElementById('cart-modal');

// Update cart count
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

// Render cart items
function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItemsContainer.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
            <p>${item.name} - $${item.price.toFixed(2)} x ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}</p>
            <button class="remove-item" data-id="${item.id}">Remove</button>
        `;
        cartItemsContainer.appendChild(itemDiv);
        total += item.price * item.quantity;
    });
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;

    // Add remove event listeners
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            cart = cart.filter(item => item.id !== id);
            saveCart();
            updateCartCount();
            renderCart();
        });
    });
}

// Initialize the app
function init() {
    renderMenProducts();
    renderAdminProducts();
    updateCartCount();
    setupEventListeners();
}

// Helper function to create product card HTML element
function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-price">$${product.price.toFixed(2)}</p>
            <p class="product-category">${product.category}</p>
            <p class="product-description">${product.description}</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        </div>
    `;
    return productCard;
}

// Render men's products
function renderMenProducts() {
    menProductsContainer.innerHTML = '';
    const menProducts = products; // Render all products since gender is not specified
    menProducts.forEach(product => {
        const productCard = createProductCard(product);
        menProductsContainer.appendChild(productCard);
    });
}

// Render products in admin panel
function renderAdminProducts() {
    adminProductsContainer.innerHTML = '';
    
    products.forEach(product => {
        const adminProductCard = document.createElement('div');
        adminProductCard.className = 'admin-product-card';
        adminProductCard.innerHTML = `
            <h3>${product.name}</h3>
            <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
            <p><strong>Category:</strong> ${product.category}</p>
            <div class="admin-product-actions">
                <button class="admin-btn btn-primary edit-product" data-id="${product.id}">Edit</button>
                <button class="admin-btn btn-danger delete-product" data-id="${product.id}">Delete</button>
            </div>
        `;
        adminProductsContainer.appendChild(adminProductCard);
    });
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existing = cart.find(item => item.id === productId);
        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        saveCart();
        updateCartCount();
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Show cart notification
function showCartNotification() {
    cartNotification.classList.add('show');
    setTimeout(() => {
        cartNotification.classList.remove('show');
    }, 2000);
}

// Setup event listeners
function setupEventListeners() {
    // Add to cart buttons
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = parseInt(e.target.dataset.id);
            addToCart(productId);
            showCartNotification();
            renderCart();
            cartModal.style.display = 'block';
        }
    });

    // Cart button click
    const cartBtn = document.getElementById('cart-btn');
    // Removed duplicate cartModal declaration here to use global cartModal
    const checkoutModal = document.getElementById('checkout-modal');
    const cartCount = document.getElementById('cart-count');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');
    const checkoutForm = document.getElementById('checkout-form');

    cartBtn.addEventListener('click', () => {
        renderCart();
        cartModal.style.display = 'block';
    });

    // Close modals
    document.querySelectorAll('.modal .close').forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            cartModal.style.display = 'none';
            checkoutModal.style.display = 'none';
        });
    });

    // Checkout button in cart modal
    checkoutBtn.addEventListener('click', () => {
        cartModal.style.display = 'none';
        checkoutModal.style.display = 'block';
    });

    // Checkout form submit
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // For demo, just clear cart and show success
        cart = [];
        saveCart();
        updateCartCount();
        checkoutModal.style.display = 'none';
        alert('Payment successful! Thank you for your purchase.');
    });

    // Admin toggle
    adminToggle.addEventListener('click', () => {
        const isAdminVisible = adminView.style.display === 'block';
        adminView.style.display = isAdminVisible ? 'none' : 'block';
        storeView.style.display = isAdminVisible ? 'block' : 'none';
    });

    // Navigation
    viewStoreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        adminView.style.display = 'none';
        storeView.style.display = 'block';
    });

    viewAdminBtn.addEventListener('click', (e) => {
        e.preventDefault();
        adminView.style.display = 'block';
        storeView.style.display = 'none';
    });

    // Add product form
    addProductForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const newProduct = {
            id: products.length + 1,
            name: document.getElementById('product-name').value,
            price: parseFloat(document.getElementById('product-price').value),
            category: document.getElementById('product-category').value,
            gender: document.getElementById('product-gender').value,
            image: document.getElementById('product-image').value,
            description: document.getElementById('product-description').value
        };

        products.push(newProduct);
        renderMenProducts();
        renderAdminProducts();
        addProductForm.reset();
    });

    // Delete product (event delegation)
    adminProductsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-product')) {
            const productId = parseInt(e.target.dataset.id);
            products = products.filter(product => product.id !== productId);
            renderMenProducts();
            renderAdminProducts();
        }
    });
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
