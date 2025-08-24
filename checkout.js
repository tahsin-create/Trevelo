let checkoutCart = [];
const shippingCharge = 150;
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xzzgyzno'; // Replace with your Formspree ID

document.addEventListener('DOMContentLoaded', function() {
    loadCheckoutData();
    displayCheckoutCart();
    setupForm();
});

function loadCheckoutData() {
    // We named the cart 'treveloCart' in script.js, let's use the same key.
    const cartData = localStorage.getItem('treveloCart');
    if (cartData) {
        checkoutCart = JSON.parse(cartData);
    }
    if (checkoutCart.length === 0) {
        // Only redirect if we are on the checkout page.
        if (window.location.pathname.includes('checkout.html')) {
            alert('Your cart is empty. Redirecting to home page.');
            window.location.href = 'index.html';
        }
    }
}

// Main function to display and update the interactive cart
function displayCheckoutCart() {
    const cartItemsContainer = document.getElementById('checkoutCartItems');
    if (!cartItemsContainer) return;

    const subtotalElement = document.getElementById('subtotal');
    const finalTotalElement = document.getElementById('finalTotal');
    
    cartItemsContainer.innerHTML = '';
    let subtotal = 0;

    if (checkoutCart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        setTimeout(() => {
            if (window.location.pathname.includes('checkout.html')) {
                alert('Your cart is now empty. Redirecting to home page.');
                window.location.href = 'index.html';
            }
        }, 1000);
        return; // Stop execution if cart is empty
    }

    checkoutCart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'checkout-cart-item';
        cartItemElement.innerHTML = `
            <div class="checkout-item-image">
                <img src="${item.images[0]}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/60'">
            </div>
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
                <div class="item-price" style="min-width: 60px; text-align: right;">৳${itemTotal.toFixed(2)}</div>
                <button class="checkout-item-remove-btn" onclick="removeCheckoutItem(${item.id})">×</button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItemElement);
    });

    const finalTotal = subtotal + shippingCharge;
    
    subtotalElement.textContent = subtotal.toFixed(2);
    finalTotalElement.textContent = finalTotal.toFixed(2);
    document.getElementById('paidAmount').value = finalTotal.toFixed(2);

    // Save updated cart to localStorage
    localStorage.setItem('treveloCart', JSON.stringify(checkoutCart));
}

// Function to update quantity from +/- buttons
function updateCheckoutQuantity(productId, change) {
    const item = checkoutCart.find(i => i.id === productId);
    if (item) {
        // Prevent quantity from exceeding stock if stock info is available
        const newQuantity = item.quantity + change;
        if (item.stock && newQuantity > item.stock) {
            alert(`Sorry, only ${item.stock} items are in stock.`);
            return;
        }
        item.quantity = newQuantity;
        if (item.quantity < 1) {
            item.quantity = 1;
        }
    }
    displayCheckoutCart(); // Refresh the entire cart display
}

// Function to remove an item from the cart
function removeCheckoutItem(productId) {
    checkoutCart = checkoutCart.filter(i => i.id !== productId);
    displayCheckoutCart(); // Refresh the entire cart display
}

function setupForm() {
    const form = document.getElementById('paymentForm');
    if(form) {
       form.addEventListener('submit', handleFormSubmit);
    }
}

// The rest of the JS remains the same as before
function handleFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const subtotal = checkoutCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal + shippingCharge;
    const orderId = 'TRV' + Date.now().toString().slice(-8);

    const orderData = {
        orderId: orderId,
        customerName: formData.get('customerName'),
        customerPhone: formData.get('customerPhone'),
        customerAddress: formData.get('customerAddress'),
        paymentMethod: formData.get('paymentMethod'),
        transactionId: formData.get('transactionId'),
        senderNumber: formData.get('senderNumber'),
        paidAmount: formData.get('paidAmount'),
        notes: formData.get('orderNotes'),
        orderDate: new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' }),
        // For easy viewing in email
        items_summary: checkoutCart.map(item => `${item.name} (৳${item.price} x ${item.quantity}) = ৳${(item.price * item.quantity).toFixed(2)}`).join('\n'),
        subtotal: `৳${subtotal.toFixed(2)}`,
        shipping: `৳${shippingCharge.toFixed(2)}`,
        total: `৳${total.toFixed(2)}`,
        // For structured data
        _subject: `New Order from Trevelo: ${orderId}`,
    };
    
    submitOrder(orderData);
}

async function submitOrder(orderData) {
    if (FORMSPREE_ENDPOINT === 'https://formspree.io/f/YOUR_UNIQUE_FORM_ID') {
        alert('Please configure the Formspree endpoint in checkout.js');
        return;
    }

    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> প্রক্রিয়াকরণ...';
    submitBtn.disabled = true;
    
    try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
            method: 'POST',
            body: JSON.stringify(orderData),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            localStorage.setItem('lastOrder', JSON.stringify(orderData));
            // Clear the main cart
            localStorage.removeItem('treveloCart'); 
            showSuccessModal(orderData.orderId);
        } else {
            throw new Error('Form submission failed.');
        }
    } catch (error) {
        console.error(error);
        alert('There was an error submitting your order. Please try again or contact us via WhatsApp.');
    } finally {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
}

function showSuccessModal(orderId) {
    const modal = document.getElementById('successModal');
    const orderIdElement = document.getElementById('generatedOrderId');
    orderIdElement.textContent = orderId;
    modal.style.display = 'block';
}

function goToHome() {
    window.location.href = 'index.html';
}

function openWhatsApp() {
    const phoneNumber = '8801234567890';
    const message = 'আমার অর্ডার সম্পর্কে জানতে চাই।';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

window.onclick = function(event) {
    const modal = document.getElementById('successModal');
    if (event.target === modal) {
        goToHome();
    }
}

// Form validation
if(document.getElementById('customerPhone')){
    document.getElementById('customerPhone').addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 11) value = value.slice(0, 11);
        e.target.value = value;
    });
}
if(document.getElementById('senderNumber')){
    document.getElementById('senderNumber').addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 11) value = value.slice(0, 11);
        e.target.value = value;
    });
}
if(document.getElementById('transactionId')){
    document.getElementById('transactionId').addEventListener('input', function(e) {
        e.target.value = e.target.value.toUpperCase();
    });
}