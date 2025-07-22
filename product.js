// product.js (শুধুমাত্র প্রোডাক্ট পেজের জন্য নির্দিষ্ট কোড)

let currentImageIndex = 0;
let productImages = [];

document.addEventListener('DOMContentLoaded', () => {
    // script.js থেকে 'products' অ্যারে পাওয়া যাচ্ছে কিনা তা নিশ্চিত করুন
    if (typeof products === 'undefined') {
        console.error("Error: 'products' array not found. Make sure script.js is loaded before product.js.");
        const detailContainer = document.getElementById('productDetail');
        if (detailContainer) {
            detailContainer.innerHTML = '<p style="color: red;">Error: Product data could not be loaded.</p>';
        }
        return;
    }
    
    // script.js থেকে কার্ট লোড হয়, তাই এখানে ಮತ್ತೆ কল করার প্রয়োজন নেই

    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);

    if (product) {
        productImages = product.images;
        renderProductDetails(product);
        renderRelatedProducts(product);
        setupLightbox();
    } else {
        const detailContainer = document.getElementById('productDetail');
        if(detailContainer) {
           detailContainer.innerHTML = '<p>Product not found. Please <a href="index.html">return to the home page</a>.</p>';
        }
    }
});

function renderProductDetails(product) {
    document.title = `${product.name} - Trevelo`;
    
    const breadcrumbEl = document.getElementById('breadcrumb');
    if(breadcrumbEl) {
       breadcrumbEl.innerHTML = `<a href="index.html">Home</a> > <a href="index.html?category=${product.category}">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</a> > ${product.name}`;
    }
    
    const summaryTable = `
        <table class="summary-table">
            <tbody>
                ${product.originalPrice ? `<tr><td>Product Price</td><td><s>৳${product.originalPrice}</s></td></tr>` : ''}
                <tr><td>Special Price</td><td><strong>৳${product.price}</strong></td></tr>
                <tr><td>Stock Status</td><td>${product.stock > 0 ? `<span style="color:green;">In Stock</span>` : `<span style="color:red;">Out of Stock</span>`}</td></tr>
                ${product.brand ? `<tr><td>Brand</td><td>${product.brand}</td></tr>` : ''}
                ${product.productModel ? `<tr><td>Product model</td><td>${product.productModel}</td></tr>` : ''}
                ${product.warranty ? `<tr><td>Warranty</td><td>${product.warranty}</td></tr>` : ''}
            </tbody>
        </table>`;

    const featuresHtml = product.features ? `<ul class="features-list">${product.features.map(f => `<li>${f}</li>`).join('')}</ul>` : '';
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
            ${summaryTable}
            ${featuresHtml ? `<h3>Key Features</h3>${featuresHtml}` : ''}
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
            <div id="Specification" class="tab-content active">
                ${renderSpecification(product.specification)}
            </div>
            <div id="Description" class="tab-content">
                <p>${product.description || 'No description available.'}</p>
            </div>
        </div>
    `;
    const detailContainer = document.getElementById('productDetail');
    if (detailContainer) {
       detailContainer.innerHTML = productDetailHtml;
    }
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
    html += '</table>';
    return html;
}

function renderRelatedProducts(currentProduct) {
    const relatedGrid = document.getElementById('relatedProductsGrid');
    if(!relatedGrid) return;
    const related = products.filter(p => p.category === currentProduct.category && p.id !== currentProduct.id).slice(0, 4);
    if(related.length === 0) {
        document.querySelector('.related-products-section').style.display = 'none';
        return;
    }
    relatedGrid.innerHTML = related.map(p => `
        <div class="product-card">
            <a href="product.html?id=${p.id}">
                <div class="product-image-container">
                    <img src="${p.images[0]}" alt="${p.name}">
                </div>
                <div class="product-info">
                    <h3>${p.name}</h3>
                    <div class="product-price">
                        <span class="current-price">৳${p.price}</span>
                        ${p.originalPrice ? `<span class="original-price"><s>৳${p.originalPrice}</s></span>` : ''}
                    </div>
                </div>
            </a>
        </div>
    `).join('');
}

function openTab(evt, tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = "none");
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add('active');
}

function changeMainImage(src, thumbElement, index) {
    document.getElementById('mainProductImage').src = src;
    currentImageIndex = index;
    document.querySelectorAll('.thumbnail-img').forEach(img => img.classList.remove('active'));
    thumbElement.classList.add('active');
}

function setupLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        document.querySelector('.lightbox-close').onclick = () => lightbox.style.display = "none";
        document.querySelector('.lightbox-prev').onclick = () => changeLightboxImage(-1);
        document.querySelector('.lightbox-next').onclick = () => changeLightboxImage(1);
    }
}
function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.style.display = "block";
        document.getElementById('lightboxImg').src = productImages[currentImageIndex];
    }
}
function changeLightboxImage(step) {
    currentImageIndex += step;
    if (currentImageIndex >= productImages.length) currentImageIndex = 0;
    if (currentImageIndex < 0) currentImageIndex = productImages.length - 1;
    document.getElementById('lightboxImg').src = productImages[currentImageIndex];
}

/*
    গুরুত্বপূর্ণ নোট:
    addToCart, updateQuantity, updateCartCount এর মতো ফাংশনগুলো এখন আর এই ফাইলে নেই। 
    এগুলো script.js থেকে লোড হচ্ছে, যা এই ফাইলের আগে লোড করা হয়েছে। 
    এতেই সমস্যার সমাধান হয়ে গেছে।
*/