// =================================================================
//                      GLOBAL DATA & VARIABLES
// =================================================================
const products = [
    { 
        id: 1, 
        name: "Huawei HG8010H EPON ONU", 
        price: 850, 
        originalPrice: 1000, 
        category: "Networking", 
        images: [
            "https://i.ibb.co/JJXCYq4/Huawei-2.png",
            "https://i.ibb.co/ynK10NRb/616043c722190e0b30ee29f051eddd4c.png",
            "https://i.ibb.co/21nhXWYC/xpon-onu-huawei-1-pcs-1-port-2024-01-30-05-20-17-65b832b165c36.jpg"
        ], 
        stock: 5,
        brand: "HUAWEI",
        productModel: "HG8010H",
        warranty: "1 Year",
        features: ["Energy-efficient with only 2.5W.","Portable at 500g.","AC 110-240V compatibility.","Reliable, fast internet."],
        specification: {"General": { "Power": "2.5W", "Weight": "500g" },"Switch": { "Power Input": "AC 110-240V" }},
        description: "The Huawei HG8010H EPON ONU is an excellent choice for deploying high-speed fiber-optic networks."
    },
    { 
        id: 2, 
        name: "10000mAh DIY Power Bank Kit", 
        price: 760, 
        originalPrice: 990, 
        category: "battery", 
        images: ["https://via.placeholder.com/500x500.png?text=Powerbank+1","https://via.placeholder.com/500x500.png?text=Powerbank+2"], 
        stock: 15,
        brand: "DIY Kits",
        productModel: "PB-10K",
        warranty: "No Warranty",
        features: ["Dual USB Output", "LED Indicator", "Compact Design"],
        specification: {"Capacity": { "Battery": "10000mAh", "Type": "Lithium Polymer" },"Ports": { "Input": "Micro USB", "Output": "2 x USB-A" }},
        description: "A complete DIY kit to build your own 10000mAh power bank. Easy to assemble and great for learning.",

        
    },
    { id: 3, name: "Tenda F3 N300 Router", price: 1200, originalPrice: 1400, category: "networking", images: ["https://via.placeholder.com/500x500.png?text=Tenda+Router"], stock: 30, brand: "Tenda", productModel: "F3 N300", warranty: "1 Year", features: ["300Mbps wireless speed", "Three 5dBi external antennas", "Easy setup"], specification: { "Wireless": { "Speed": "300Mbps", "Antennas": "3" } }, description: "The Tenda F3 is a stable and reliable N300 router, perfect for small to medium-sized homes." },
    { id: 4, name: "TWS M10 Bluetooth Earbuds", price: 850, originalPrice: 1200, category: "tws", images: ["https://via.placeholder.com/500x500.png?text=TWS+M10+1","https://via.placeholder.com/500x500.png?text=TWS+M10+2"], stock: 0, brand: "Generic", productModel: "M10", warranty: "7 Days Replacement", features: ["Bluetooth 5.1", "IPX7 Waterproof", "2000mAh Charging Case"], specification: { "Audio": { "Bluetooth": "5.1", "Playtime": "4-5 Hours" } }, description: "High-fidelity TWS earbuds with a large capacity charging case that also functions as an emergency power bank." },
    { id: 5, name: "12V 2A Power Adapter", price: 280, originalPrice: 350, category: "adapter", images: ["https://via.placeholder.com/500x500.png?text=Adapter+12V"], stock: 40, brand: "OEM", productModel: "12V2A", warranty: "No Warranty", features: ["Stable 12V Output", "Overload Protection"], specification: { "Output": { "Voltage": "12V DC", "Current": "2A" } }, description: "A reliable power adapter for CCTV, LED strips, and other 12V devices." },
    { id: 6, name: "775 DC Motor High Speed", price: 650, originalPrice: 800, category: "motor", images: ["https://via.placeholder.com/500x500.png?text=775+Motor"], stock: 12, brand: "Generic", productModel: "775", warranty: "No Warranty", features: ["High Torque", "Ball Bearing", "12000 RPM @ 12V"], specification: { "Performance": { "Voltage": "12V-24V", "Speed": "12000 RPM" } }, description: "A powerful 775 DC motor for DIY drills, table saws, and robotics." },
    { id: 7, name: "60W Adjustable Soldering Iron Kit", price: 950, originalPrice: 1100, category: "soldering", images: ["https://via.placeholder.com/500x500.png?text=Soldering+Kit"], stock: 8, brand: "Pro'sKit", productModel: "SK-60W", warranty: "No Warranty", features: ["Adjustable Temperature (200-450°C)", "Includes 5 tips"], specification: { "Power": { "Rating": "60W", "Voltage": "220V" } }, description: "A complete soldering kit for electronics repair and DIY projects." },
    { id: 8, name: "18650 Li-Ion Battery 2200mAh", price: 220, originalPrice: 280, category: "battery", images: ["https://via.placeholder.com/500x500.png?text=18650+Battery"], stock: 50, brand: "Samsung", productModel: "ICR18650-22F", warranty: "No Warranty", features: ["Rechargeable", "High Capacity"], specification: { "Capacity": { "mAh": "2200", "Voltage": "3.7V" } }, description: "A standard 18650 rechargeable battery for flashlights and power banks." },
    { id: 9, name: "80mm DC Cooling Fan", price: 180, originalPrice: 220, category: "fan", images: ["https://via.placeholder.com/500x500.png?text=80mm+Fan"], stock: 30, brand: "CoolerMaster", productModel: "CM-8025", warranty: "6 Months", features: ["Low Noise", "Sleeve Bearing"], specification: { "Specs": { "Size": "80mm", "Voltage": "12V DC" } }, description: "An 80mm brushless DC fan for cooling computer cases and electronics." },
    { id: 10, name: "Bluetooth 5.0 Audio Receiver Module", price: 350, category: "tws", images: ["https://via.placeholder.com/500x500.png?text=BT+Module"], stock: 22, brand: "Generic", productModel: "XY-WRBT", warranty: "7 Days Replacement", features: ["Stereo Output", "Supports WAV/APE/FLAC/MP3"], specification: { "Audio": { "Bluetooth": "5.0", "Power": "3.7V-5V" } }, description: "Easily add Bluetooth audio to your old speakers or car stereo." },
    { id: 11, name: "SG90 Micro Servo Motor", price: 150, originalPrice: 200, category: "motor", images: ["https://via.placeholder.com/500x500.png?text=SG90+Servo"], stock: 60, brand: "Tower Pro", productModel: "SG90", warranty: "No Warranty", features: ["Lightweight (9g)", "180 Degree Rotation"], specification: { "Performance": { "Torque": "1.8 kg/cm", "Voltage": "4.8V" } }, description: "A popular micro servo motor for robotics and RC projects." },
    { id: 12, name: "Solder Lead (60/40) 50g", price: 120, category: "soldering", images: ["https://via.placeholder.com/500x500.png?text=Solder+Wire"], stock: 100, brand: "Mechanic", productModel: "60/40-50g", warranty: "No Warranty", features: ["Rosin Core", "0.8mm Diameter"], specification: { "Composition": { "Tin": "60%", "Lead": "40%" } }, description: "High-quality 60/40 rosin core solder wire for general purpose electronics." },
    { id: 13, name: "JST-XH 2-Pin Connector Set", price: 15, category: "connector", images: ["https://via.placeholder.com/500x500.png?text=JST+Connector"], stock: 200, brand: "Generic", productModel: "JST-XH-2P", warranty: "No Warranty", features: ["2.54mm Pitch", "Male & Female Pair"], specification: { "Details": { "Pins": "2", "Type": "JST-XH" } }, description: "A set of JST-XH 2-pin connectors for batteries and components." },
    { id: 14, name: "18650 2-Cell Battery Holder", price: 40, category: "battery", images: ["https://via.placeholder.com/500x500.png?text=Battery+Holder"], stock: 80, brand: "Generic", productModel: "BH-18650-2S", warranty: "No Warranty", features: ["Series Connection (7.4V)", "With Wire Leads"], specification: { "Capacity": { "Cells": "2 x 18650", "Output": "7.4V" } }, description: "A durable holder for two 18650 batteries, wired in series." },
    { id: 15, name: "DC-DC Buck Converter LM2596", price: 90, originalPrice: 120, category: "adapter", images: ["https://via.placeholder.com/500x500.png?text=Buck+Converter"], stock: 45, brand: "Generic", productModel: "LM2596", warranty: "7 Days Replacement", features: ["Adjustable Output", "High Efficiency"], specification: { "Power": { "Input": "4V-35V", "Output": "1.23V-30V" } }, description: "An adjustable step-down (buck) converter module for various projects." },
    { id: 16, name: "10-inch Drone Propeller (Pair)", price: 160, category: "motor", images: ["https://via.placeholder.com/500x500.png?text=Propeller"], stock: 90, brand: "Generic", productModel: "1045", warranty: "No Warranty", features: ["Durable Nylon Fiber", "Includes CW & CCW"], specification: { "Size": { "Length": "10 inch", "Pitch": "4.5 inch" } }, description: "A pair of 10-inch propellers for quadcopters and drones." },
    { id: 17, name: "Soldering Flux Paste (10g)", price: 50, category: "soldering", images: ["https://via.placeholder.com/500x500.png?text=Flux+Paste"], stock: 120, brand: "Kingbo", productModel: "RMA-218", warranty: "No Warranty", features: ["Improves Solder Flow", "Prevents Bridges"], specification: { "Details": { "Weight": "10g", "Type": "Paste" } }, description: "High-quality soldering flux paste for clean, professional solder joints." },
    { id: 18, name: "Dupont Jumper Wire Set (40 pcs)", price: 150, category: "connector", images: ["https://via.placeholder.com/500x500.png?text=Jumper+Wires"], stock: 35, brand: "Generic", productModel: "M-F-20cm", warranty: "No Warranty", features: ["Male-to-Female", "20cm Length", "Multicolor"], specification: { "Quantity": { "Pieces": "40", "Type": "M-F" } }, description: "A set of 40 male-to-female jumper wires for breadboarding." },
    { id: 19, name: "TP4056 Li-Ion Charger Module", price: 45, originalPrice: 60, category: "battery", images: ["https://via.placeholder.com/500x500.png?text=TP4056+Module"], stock: 70, brand: "Generic", productModel: "TP4056", warranty: "7 Days Replacement", features: ["Micro USB Input", "Built-in Protection"], specification: { "Charging": { "Current": "1A", "Input": "5V" } }, description: "A compact and efficient single-cell lithium battery charger module." },
    { id: 20, name: "Wireless Neckband Earphones", price: 650, originalPrice: 900, category: "tws", images: ["https://via.placeholder.com/500x500.png?text=Neckband"], stock: 18, brand: "UiiSii", productModel: "BN29", warranty: "3 Months", features: ["Magnetic Earbuds", "10-Hour Playtime", "Sweatproof"], specification: { "Audio": { "Bluetooth": "5.0", "Playtime": "8-10 Hours" } }, description: "Comfortable wireless neckband earphones for daily use and sports." }
];

let cart = JSON.parse(localStorage.getItem('treveloCart')) || [];
let currentProducts = [...products];
let currentFilter = 'all';

// =================================================================
//                      PAGE INITIALIZATION LOGIC
// =================================================================
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();

    // Page-specific initializations
    if (document.getElementById('productGrid')) {
        initHomePage();
    }
    
    if (document.getElementById('productDetail')) {
        initProductDetailPage();
    }

    if (document.getElementById('checkoutCartItems')) {
        initCheckoutPage();
    }
});

// =================================================================
//                      PAGE-SPECIFIC FUNCTIONS
// =================================================================

// -------------------- HOME PAGE (index.html) --------------------
function initHomePage() {
    const urlParams = new URLSearchParams(window.location.search);
    const search = urlParams.get('search');
    if (search) {
        document.getElementById('searchInput').value = search;
    }
    filterProducts('all');
    document.getElementById('priceRange').addEventListener('input', applyFilters);
}

function displayProducts(productsToShow) {
    const productGrid = document.getElementById('productGrid');
    if (!productGrid) return;
    productGrid.innerHTML = '';

    if (productsToShow.length === 0) {
        productGrid.innerHTML = '<p>No products found matching your criteria.</p>';
        return;
    }

    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        const isOutOfStock = product.stock === 0;

        productCard.innerHTML = `
            ${product.originalPrice ? `<div class="save-badge">Save ৳${product.originalPrice - product.price}</div>` : ''}
            <div class="product-image-container">
                <a href="product.html?id=${product.id}">
                    <img src="${product.images[0]}" alt="${product.name}" onerror="this.parentElement.innerHTML = '<div style=\\'display:flex;align-items:center;justify-content:center;height:100%;\\'><i class=\\'fas fa-image fa-3x\\'></i></div>'; this.remove();">
                </a>
            </div>
            <div class="product-info">
                <h3><a href="product.html?id=${product.id}">${product.name}</a></h3>
                <div class="product-price">
                    <span class="current-price">৳${product.price}</span>
                    ${product.originalPrice ? `<span class="original-price"><s>৳${product.originalPrice}</s></span>` : ''}
                </div>
                <div class="product-stock ${isOutOfStock ? 'stock-out' : 'stock-in'}">
                    ${isOutOfStock ? 'Out of Stock' : `In Stock: ${product.stock}`}
                </div>
                <div class="product-actions">
                    <div class="quantity-control">
                        <button onclick="updateQuantity(this, -1)" ${isOutOfStock ? 'disabled' : ''}>-</button>
                        <input type="number" value="1" min="1" readonly>
                        <button onclick="updateQuantity(this, 1)" ${isOutOfStock ? 'disabled' : ''}>+</button>
                    </div>
                    <div class="action-buttons">
                         <button class="add-to-cart" onclick="addToCart(${product.id}, this)" ${isOutOfStock ? 'disabled' : ''}>Add to Cart</button>
                         <button class="buy-now-btn" onclick="buyNow(${product.id}, this)" ${isOutOfStock ? 'disabled' : ''}>Buy Now</button>
                    </div>
                </div>
            </div>`;
        productGrid.appendChild(productCard);
    });
}

function applyFilters() {
    let filtered = [...products];
    if (currentFilter !== 'all') {
        filtered = filtered.filter(p => p.category === currentFilter);
    }
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    if (searchTerm) {
        filtered = filtered.filter(p => p.name.toLowerCase().includes(searchTerm));
    }
    const maxPrice = parseInt(document.getElementById('priceRange').value);
    document.getElementById('currentPrice').textContent = `৳${maxPrice}`;
    filtered = filtered.filter(p => p.price <= maxPrice);
    currentProducts = filtered;
    sortProducts();
}

function filterProducts(category) {
    document.getElementById('sortOptions').value = 'default';
    currentFilter = category;
    document.querySelectorAll('.category-list a').forEach(a => a.classList.remove('active'));
    document.querySelector(`.category-list a[onclick*="'${category}'"]`).classList.add('active');
    let categoryProducts = category === 'all' ? products : products.filter(p => p.category === category);
    updatePriceSlider(categoryProducts);
    applyFilters();
}

function updatePriceSlider(productsForSlider) {
    const priceRange = document.getElementById('priceRange');
    if (!priceRange) return;
    if (productsForSlider.length > 0) {
        const prices = productsForSlider.map(p => p.price);
        const minPrice = Math.min(...prices);
        const maxPrice = Math.max(...prices);
        priceRange.min = minPrice;
        priceRange.max = maxPrice;
        priceRange.value = maxPrice;
        document.getElementById('minPriceLabel').textContent = `৳${minPrice}`;
        document.getElementById('maxPriceLabel').textContent = `৳${maxPrice}`;
        document.getElementById('currentPrice').textContent = `৳${maxPrice}`;
    } else {
        priceRange.min = 0; priceRange.max = 2000; priceRange.value = 2000;
        document.getElementById('minPriceLabel').textContent = '৳0';
        document.getElementById('maxPriceLabel').textContent = '৳2000+';
        document.getElementById('currentPrice').textContent = `৳2000`;
    }
}

// -------------------- PRODUCT DETAIL PAGE (product.html) --------------------
let currentImageIndex = 0;
let productImages = [];

function initProductDetailPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);
    const detailContainer = document.getElementById('productDetail');

    if (product && detailContainer) {
        productImages = product.images;
        renderProductDetails(product);
        renderRelatedProducts(product);
        setupLightbox();
    } else if (detailContainer) {
        detailContainer.innerHTML = '<p>Product not found. Please <a href="index.html">return to the home page</a>.</p>';
    }
}

function renderProductDetails(product) {
    document.title = `${product.name} - Trevelo`;
    const breadcrumbEl = document.getElementById('breadcrumb');
    if (breadcrumbEl) {
        breadcrumbEl.innerHTML = `<a href="index.html">Home</a> > <a href="index.html?category=${product.category}">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</a> > ${product.name}`;
    }
    
    const isOutOfStock = product.stock === 0;
    const productDetailHtml = `
        <div class="product-gallery">
            <div class="main-image-container">
                <img src="${product.images[0]}" id="mainProductImage" alt="${product.name}" onclick="openLightbox(0)">
            </div>
            <div class="thumbnail-gallery">
                ${product.images.map((img, index) => `<img src="${img}" class="thumbnail-img ${index === 0 ? 'active' : ''}" onclick="changeMainImage('${img}', this, ${index})">`).join('')}
            </div>
        </div>
        <div class="product-summary">
            <h1>${product.name}</h1>
            <table class="summary-table">
                <tbody>
                    ${product.originalPrice ? `<tr><td>Product Price</td><td><s>৳${product.originalPrice}</s></td></tr>` : ''}
                    <tr><td>Special Price</td><td><strong>৳${product.price}</strong></td></tr>
                    <tr><td>Stock Status</td><td>${isOutOfStock ? '<span style="color:red;">Out of Stock</span>' : '<span style="color:green;">In Stock</span>'}</td></tr>
                    ${product.brand ? `<tr><td>Brand</td><td>${product.brand}</td></tr>` : ''}
                    ${product.productModel ? `<tr><td>Product model</td><td>${product.productModel}</td></tr>` : ''}
                    ${product.warranty ? `<tr><td>Warranty</td><td>${product.warranty}</td></tr>` : ''}
                </tbody>
            </table>
            ${product.features ? `<h3>Key Features</h3><ul class="features-list">${product.features.map(f => `<li>${f}</li>`).join('')}</ul>` : ''}
            <div class="actions-section">
                <div class="price-section">
                    ৳${product.price}
                    ${product.originalPrice ? `<span class="original-price-detail"><s>৳${product.originalPrice}</s></span>` : ''}
                </div>
                <div class="quantity-control">
                    <button onclick="updateQuantity(this, -1)" ${isOutOfStock ? 'disabled' : ''}>-</button>
                    <input type="number" value="1" min="1" readonly>
                    <button onclick="updateQuantity(this, 1)" ${isOutOfStock ? 'disabled' : ''}>+</button>
                </div>
                <button class="add-to-cart-detail" onclick="addToCart(${product.id}, this)" ${isOutOfStock ? 'disabled' : ''}>Add to Cart</button>
            </div>
        </div>
        <div class="product-tabs">
            <div class="tab-buttons">
                <button class="tab-btn active" onclick="openTab(event, 'Specification')">Specification</button>
                <button class="tab-btn" onclick="openTab(event, 'Description')">Description</button>
            </div>
            <div id="Specification" class="tab-content active">${renderSpecification(product.specification)}</div>
            <div id="Description" class="tab-content"><p>${product.description || 'No description available.'}</p></div>
        </div>`;
    document.getElementById('productDetail').innerHTML = productDetailHtml;
}

function renderSpecification(spec) {
    if (!spec) return '<p>No specification available.</p>';
    let html = '<table class="spec-table">';
    for (const category in spec) {
        html += `<tbody><tr><td colspan="2" class="spec-category-title"><h4>${category}</h4></td></tr>`;
        for (const key in spec[category]) {
            html += `<tr><td>${key}</td><td>${spec[category][key]}</td></tr>`;
        }
        html += `</tbody>`;
    }
    return html;
}

function renderRelatedProducts(currentProduct) {
    const relatedGrid = document.getElementById('relatedProductsGrid');
    if (!relatedGrid) return;

    const related = products.filter(p => p.category === currentProduct.category && p.id !== currentProduct.id).slice(0, 4);
    const relatedSection = document.querySelector('.related-products-section');

    if(related.length === 0 && relatedSection) {
        relatedSection.style.display = 'none';
        return;
    }
    relatedGrid.innerHTML = related.map(p => `
        <div class="product-card">
            <a href="product.html?id=${p.id}">
                <div class="product-image-container"><img src="${p.images[0]}" alt="${p.name}"></div>
                <div class="product-info">
                    <h3>${p.name}</h3>
                    <div class="product-price"><span class="current-price">৳${p.price}</span></div>
                </div>
            </a>
        </div>`).join('');
}

function openTab(evt, tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = "none");
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    const tabElement = document.getElementById(tabName);
    if(tabElement) tabElement.style.display = "block";
    evt.currentTarget.classList.add('active');
}

function changeMainImage(src, thumbElement, index) {
    const mainImage = document.getElementById('mainProductImage');
    if(mainImage) mainImage.src = src;
    currentImageIndex = index;
    document.querySelectorAll('.thumbnail-img').forEach(img => img.classList.remove('active'));
    thumbElement.classList.add('active');
}

function setupLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        const closeBtn = lightbox.querySelector('.lightbox-close');
        const prevBtn = lightbox.querySelector('.lightbox-prev');
        const nextBtn = lightbox.querySelector('.lightbox-next');

        if(closeBtn) closeBtn.onclick = () => lightbox.style.display = "none";
        if(prevBtn) prevBtn.onclick = () => changeLightboxImage(-1);
        if(nextBtn) nextBtn.onclick = () => changeLightboxImage(1);
    }
}
function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    if (lightbox && lightboxImg && productImages.length > 0) {
        lightbox.style.display = "block";
        lightboxImg.src = productImages[currentImageIndex];
    }
}
function changeLightboxImage(step) {
    currentImageIndex += step;
    if (currentImageIndex >= productImages.length) currentImageIndex = 0;
    if (currentImageIndex < 0) currentImageIndex = productImages.length - 1;
    const lightboxImg = document.getElementById('lightboxImg');
    if (lightboxImg) lightboxImg.src = productImages[currentImageIndex];
}

// -------------------- CHECKOUT PAGE (checkout.html) --------------------
const shippingCharge = 60;
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xzzgyzno';

function initCheckoutPage() {
    if (cart.length === 0) {
        alert('Your cart is empty. Redirecting to home page.');
        window.location.href = 'index.html';
        return;
    }
    displayCheckoutCart();
    const form = document.getElementById('paymentForm');
    if(form) form.addEventListener('submit', handleFormSubmit);
}

function displayCheckoutCart() {
    const cartItemsContainer = document.getElementById('checkoutCartItems');
    if (!cartItemsContainer) return;
    
    let subtotal = 0;
    cartItemsContainer.innerHTML = '';
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        cartItemsContainer.innerHTML += `
            <div class="checkout-cart-item">
                <div class="checkout-item-image"><img src="${item.images[0]}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/60'"></div>
                <div class="checkout-item-details">
                    <h4>${item.name}</h4>
                    <p>৳${item.price.toFixed(2)}</p>
                </div>
                <div class="checkout-item-controls">
                    <div class="checkout-quantity-control">
                        <button onclick="updateCheckoutQuantity(${item.id}, -1)">-</button>
                        <input type="text" value="${item.quantity}" readonly>
                        <button onclick="updateCheckoutQuantity(${item.id}, 1)">+</button>
                    </div>
                    <div class="item-price">৳${itemTotal.toFixed(2)}</div>
                    <button class="checkout-item-remove-btn" onclick="removeCheckoutItem(${item.id})">×</button>
                </div>
            </div>`;
    });

    const finalTotal = subtotal + shippingCharge;
    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('finalTotal').textContent = finalTotal.toFixed(2);
    document.getElementById('paidAmount').value = finalTotal.toFixed(2);
}

function updateCheckoutQuantity(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        const newQuantity = item.quantity + change;
        if (item.stock && newQuantity > item.stock) {
            showNotification(`Sorry, only ${item.stock} items are in stock.`, 'error');
            return;
        }
        item.quantity = newQuantity < 1 ? 1 : newQuantity;
        saveCart();
        displayCheckoutCart();
    }
}

function removeCheckoutItem(productId) {
    cart = cart.filter(i => i.id !== productId);
    saveCart();
    if (cart.length === 0) {
        alert('Your cart is now empty. Redirecting to home page.');
        window.location.href = 'index.html';
    } else {
        displayCheckoutCart();
    }
}

async function handleFormSubmit(e) {
    e.preventDefault();
    const submitBtn = e.target.querySelector('button[type="submit"]');
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> প্রক্রিয়াকরণ...';
    submitBtn.disabled = true;

    const formData = new FormData(e.target);
    const orderId = 'TRV' + Date.now().toString().slice(-8);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal + shippingCharge;
    
    const orderData = {
        orderId: orderId,
        customerName: formData.get('customerName'),
        customerPhone: formData.get('customerPhone'),
        customerAddress: formData.get('customerAddress'),
        paymentMethod: formData.get('paymentMethod'),
        transactionId: formData.get('transactionId'),
        senderNumber: formData.get('senderNumber'),
        paidAmount: `৳${total.toFixed(2)}`,
        notes: formData.get('orderNotes'),
        orderDate: new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' }),
        items_summary: cart.map(item => `${item.name} (৳${item.price} x ${item.quantity}) = ৳${(item.price * item.quantity).toFixed(2)}`).join('\n'),
        subtotal: `৳${subtotal.toFixed(2)}`,
        shipping: `৳${shippingCharge.toFixed(2)}`,
        total: `৳${total.toFixed(2)}`,
        _subject: `New Order from Trevelo: ${orderId}`,
    };

    try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
            method: 'POST',
            body: JSON.stringify(orderData),
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
        });
        if (response.ok) {
            localStorage.removeItem('treveloCart');
            document.getElementById('generatedOrderId').textContent = orderId;
            document.getElementById('successModal').style.display = 'block';
        } else {
            throw new Error('Form submission failed.');
        }
    } catch (error) {
        alert('There was an error submitting your order. Please try again or contact us via WhatsApp.');
    } finally {
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> অর্ডার সাবমিট করুন';
        submitBtn.disabled = false;
    }
}


// =================================================================
//                      GLOBAL HELPER FUNCTIONS
// =================================================================

function sortProducts() {
    const sortBy = document.getElementById('sortOptions').value;
    let sortedProducts = [...currentProducts];
    switch (sortBy) {
        case 'price-low-high': sortedProducts.sort((a, b) => a.price - b.price); break;
        case 'price-high-low': sortedProducts.sort((a, b) => b.price - a.price); break;
        case 'name-a-z': sortedProducts.sort((a, b) => a.name.localeCompare(b.name)); break;
        case 'name-z-a': sortedProducts.sort((a, b) => b.name.localeCompare(a.name)); break;
        default: sortedProducts.sort((a, b) => a.id - b.id); break;
    }
    displayProducts(sortedProducts);
}

function performSearch() {
    const searchTerm = document.getElementById('searchInput').value;
    if (!document.getElementById('productGrid')) {
        window.location.href = `index.html?search=${encodeURIComponent(searchTerm)}`;
    } else {
        applyFilters();
    }
}

function updateQuantity(element, change) {
    const input = element.parentElement.querySelector('input');
    let currentValue = parseInt(input.value);
    currentValue += change;
    if (currentValue < 1) currentValue = 1;
    input.value = currentValue;
}

function addToCart(productId, element) {
    const product = products.find(p => p.id === productId);
    if (!product || product.stock === 0) {
        showNotification('This item is out of stock.', 'error');
        return;
    }
    const quantityControl = element.closest('.actions-section, .product-actions');
    const quantityToAdd = parseInt(quantityControl.querySelector('input').value);
    const itemInCart = cart.find(item => item.id === productId);
    const quantityAlreadyInCart = itemInCart ? itemInCart.quantity : 0;

    if ((quantityAlreadyInCart + quantityToAdd) > product.stock) {
        showNotification(`Sorry, only ${product.stock} items are in stock.`, 'error');
        return;
    }

    if (itemInCart) {
        itemInCart.quantity += quantityToAdd;
    } else {
        cart.push({ ...product, quantity: quantityToAdd });
    }
    saveCart();
    updateCartCount();
    showNotification(`${quantityToAdd} x ${product.name} added to cart!`, 'success');
}

function buyNow(productId, element) {
    addToCart(productId, element);
    if (cart.find(item => item.id === productId)) {
        goToCheckout();
    }
}

function updateCartCount() {
    const cartCountEl = document.getElementById('cartCount');
    if (cartCountEl) {
        cartCountEl.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    }
}

function saveCart() {
    localStorage.setItem('treveloCart', JSON.stringify(cart));
}

function openCart() {
    const modal = document.getElementById('cartModal');
    if (!modal) return;

    const cartItems = modal.querySelector('#cartItems');
    const cartTotalEl = modal.querySelector('#cartTotal');
    if (!cartItems || !cartTotalEl) return;
    
    cartItems.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center;">Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            cartItems.innerHTML += `
                <div class="cart-item">
                    <div>
                        <h4>${item.name}</h4>
                        <p>৳${item.price} x ${item.quantity}</p>
                    </div>
                    <div style="display: flex; align-items: center; gap: 15px;">
                        <strong>৳${itemTotal.toFixed(2)}</strong>
                        <button onclick="removeFromCart(${item.id})" style="background: #ef4444; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 18px;">×</button>
                    </div>
                </div>`;
        });
    }
    cartTotalEl.textContent = total.toFixed(2);
    modal.style.display = 'block';
}

function closeCart() {
    const modal = document.getElementById('cartModal');
    if(modal) modal.style.display = 'none';
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    openCart(); 
}

function goToCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }
    window.location.href = 'checkout.html';
}

function openWhatsApp() {
    window.open(`https://wa.me/8801234567890?text=${encodeURIComponent('Hello! I am interested in your products from Trevelo.')}`, '_blank');
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `toast-notification ${type}`;
    notification.innerHTML = `<i class="fas ${type === 'error' ? 'fa-times-circle' : 'fa-check-circle'}"></i> ${message}`;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 4000);
}

const style = document.createElement('style');
style.innerHTML = `
.toast-notification {
    position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%);
    color: white; padding: 15px 25px; border-radius: 8px; z-index: 3000; 
    box-shadow: 0 4px 8px rgba(0,0,0,0.2); font-size: 16px; 
    animation: fadeinout 4s forwards;
}
.toast-notification.success { background: #10b981; }
.toast-notification.error { background: #ef4444; }
@keyframes fadeinout {
    0% { bottom: -50px; opacity: 0; }
    15% { bottom: 20px; opacity: 1; }
    85% { bottom: 20px; opacity: 1; }
    100% { bottom: -50px; opacity: 0; }
}`;
document.head.appendChild(style);