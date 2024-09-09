/* document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('product-list');
    const totalValue = document.getElementById('total-value');
    const placeOrderButton = document.getElementById('place-order');
    const locationBtn = document.getElementById('location-btn');
    const locationDisplay = document.getElementById('location-display');

    // Product data extracted from Excel
    const products = [
        { "SKU ID": "PA Signature B2G1", "price": 366.07 },
        { "SKU ID": "PA Discover B1G1", "price": 223.21 },
        { "SKU ID": "PA Neo B1G1", "price": 223.21 },
        { "SKU ID": "PA Voyage 150ml", "price": 133.93 },
        { "SKU ID": "PA Neo 150ml", "price": 133.93 },
        { "SKU ID": "PA Alter Ego 150ml", "price": 133.93 },
        { "SKU ID": "KS Spark Deo Shot 45ml", "price": 46.43 },
        { "SKU ID": "KS Spark 150ml", "price": 108.84 },
        { "SKU ID": "KS Urge 150ml", "price": 108.84 },
        { "SKU ID": "KS Rush 150ml", "price": 108.84 },
        { "SKU ID": "KS Blaze 150ml", "price": 108.84 },
        { "SKU ID": "KS Thrill 150ml", "price": 108.84 },
        { "SKU ID": "KS Dare 150ml", "price": 108.84 },
        { "SKU ID": "PA Deo-Clssic CoolBlu 220ml", "price": 180.00 },
        { "SKU ID": "PA Deo-Clssic GoodMor 220ml", "price": 180.00 },
        { "SKU ID": "PA Deo-Clssic Storm 220ml", "price": 180.00 },
        { "SKU ID": "PA Deo-Sign Voyage 220ml", "price": 195.00 },
        { "SKU ID": "PA Deo-Sign Neo 220ml", "price": 195.00 },
        { "SKU ID": "KS Spark 220ml", "price": 142.05 },
        { "SKU ID": "KS Urge Single 220 ml", "price": 165.18 },
        { "SKU ID": "KS Deo-Base Rush 220ml", "price": 165.18 },
        { "SKU ID": "PA GM Deo Shot 40ml - 12", "price": 540.00 },
        { "SKU ID": "KS Aerosol B2G1", "price": 308.44 },
        { "SKU ID": "PA Classic B2G1", "price": 329.46 },
        { "SKU ID": "PA Classic PA B2G1", "price": 329.46 },
        { "SKU ID": "PA GM 150ml", "price": 120.54 },
        { "SKU ID": "PA CB 150ml", "price": 120.54 },
        { "SKU ID": "PA Storm 150ml", "price": 120.54 },
        { "SKU ID": "PA Elevate 116ml", "price": 157.37 }
        // Add more products here if needed
    ];

    // Dynamically load products into the app
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.setAttribute('data-product', product["SKU ID"]);
        productItem.setAttribute('data-price', product.price);

        productItem.innerHTML = `
            <span class="product-name">${product["SKU ID"]}</span>
            <span class="product-price">₹${product.price.toFixed(2)}</span>
            <div class="quantity">
                <button class="decrease">-</button>
                <span class="quantity-value">0</span>
                <button class="increase">+</button>
            </div>
        `;
        productList.appendChild(productItem);
    });

    attachEventListeners();

    function attachEventListeners() {
        const products = document.querySelectorAll('.product-item');

        products.forEach(product => {
            const increaseButton = product.querySelector('.increase');
            const decreaseButton = product.querySelector('.decrease');
            const quantityValue = product.querySelector('.quantity-value');
            const price = parseFloat(product.dataset.price);

            increaseButton.addEventListener('click', function() {
                let quantity = parseInt(quantityValue.textContent);
                quantity++;
                quantityValue.textContent = quantity;
                updateTotal();
            });

            decreaseButton.addEventListener('click', function() {
                let quantity = parseInt(quantityValue.textContent);
                if (quantity > 0) {
                    quantity--;
                    quantityValue.textContent = quantity;
                    updateTotal();
                }
            });
        });
    }

    function updateTotal() {
        let total = 0;
        const products = document.querySelectorAll('.product-item');
        products.forEach(product => {
            const quantity = parseInt(product.querySelector('.quantity-value').textContent);
            const price = parseFloat(product.dataset.price);
            total += quantity * price;
        });
        totalValue.textContent = total.toFixed(2);
    }
}); */

document.addEventListener('DOMContentLoaded', function() {
    const categoryList = document.getElementById('category-list');
    const totalValue = document.getElementById('total-value');
    const placeOrderButton = document.getElementById('place-order');
    const locationBtn = document.getElementById('location-btn');
    const locationDisplay = document.getElementById('location-display');

    // Example categories and products from Excel data
    const categories = {
        "PA Classic Aerosols": [
            { "SKU ID": "PA Classic B2G1", "MRP": 450, "price": 329 },
            { "SKU ID": "PA Classic PA B2G1", "MRP": 450, "price": 329 },
            { "SKU ID": "PA GM 150ml", "MRP": 225, "price": 121 },
            { "SKU ID": "PA CB 150ml", "MRP": 225, "price": 121 },
            { "SKU ID": "PA Storm 150ml", "MRP": 225, "price": 121 },
            { "SKU ID": "PA Elevate 116ml", "MRP": 235, "price": 157 },
        ],
        "PA Signature Aerosols": [
            { "SKU ID": "PA Signature B2G1", "MRP": 500, "price": 366 },
            { "SKU ID": "PA Discover B1G1", "MRP": 250, "price": 223 },
            { "SKU ID": "PA Neo B1G1", "MRP": 250, "price": 223 },
            { "SKU ID": "PA Neo 150ml", "MRP": 250, "price": 134 },
            { "SKU ID": "PA Voyage 150ml", "MRP": 250, "price": 134 },
            { "SKU ID": "PA Alter Ego 150ml", "MRP": 250, "price": 134 },
            { "SKU ID": "PA Discover 150ml", "MRP": 250, "price": 134 },
        ],
        
        "KS Aerosols": [
            { "SKU ID": "KS Spark 150ml", "MRP": 230, "price": 109 },
            { "SKU ID": "KS Urge 150ml", "MRP": 230, "price": 109 },
            { "SKU ID": "KS Rush 150ml", "MRP": 230, "price": 109 },
            { "SKU ID": "KS Blaze 150ml", "MRP": 230, "price": 109 },
            { "SKU ID": "KS Thrill 150ml", "MRP": 230, "price": 109 },
            { "SKU ID": "KS Dare 150ml", "MRP": 230, "price": 109 }
        ],

        "PA Aerosol Mega Pack": [
            { "SKU ID": "PA Deo-Clssic CB 220ml", "MRP": 360, "price": 180 },
            { "SKU ID": "PA Deo-Clssic GM 220ml", "MRP": 360, "price": 180 },
            { "SKU ID": "PA Deo-Clssic Storm 220ml", "MRP": 360, "price": 180 },
            { "SKU ID": "PA Deo-Sign Voyage 220ml", "MRP": 390, "price": 195 },
            { "SKU ID": "PA Deo-Sign Neo 220ml", "MRP": 390, "price": 195 }
        ],

        "KS Aerosol Mega Pack": [
            { "SKU ID": "KS Spark 220ml", "MRP": 370, "price": 142 },
            { "SKU ID": "KS Urge Single 220 ml", "MRP": 370, "price": 165 },
            { "SKU ID": "KS Deo-Base Rush 220ml", "MRP": 370, "price": 165 }
        ],

         "PA 4x Range": [
            { "SKU ID": "PA 4X GM Ultimate 130ml", "MRP": 299, "price": 170 },
            { "SKU ID": "PA 4X Icon 130ml", "MRP": 299, "price": 170 },
            { "SKU ID": "PA 4X Regal 130ml", "MRP": 299, "price": 170 }
        ],

        "Deo Shots": [
            { "SKU ID": "KS Spark Deo Shot 45ml", "MRP": 80, "price": 70 },
            { "SKU ID": "PA GM Deo Shot 40ml", "MRP": 60, "price": 45 }
        
        ],

        "PA EDC": [
            { "SKU ID": "PRM EDC 50ml", "MRP": 110, "price": 55 },
            { "SKU ID": "PRM EDC 100ml", "MRP": 150, "price": 75 },
            { "SKU ID": "PRM EDC 200ml", "MRP": 220, "price": 110 }
        ],
        "PA EDP": [
            { "SKU ID": "PA EDP Euphoria 50 ml", "MRP": 399, "price": 190 },
            { "SKU ID": "PA EDP Conquer 50 ml", "MRP": 399, "price": 190 },
            { "SKU ID": "PA EDP Harmony 50 ml", "MRP": 399, "price": 190 },
            { "SKU ID": "PA EDP GM 50ml", "MRP": 349, "price": 166 },
            { "SKU ID": "PA EDP Voyage 50ml", "MRP": 399, "price": 190 },
            { "SKU ID": "PA EDP Knight 100ml", "MRP": 499, "price": 250 },
            { "SKU ID": "PA EDP Samurai 100ml", "MRP": 499, "price": 250 },
            { "SKU ID": "PA EDP Euphoria 100 ml", "MRP": 749, "price": 356 },
            { "SKU ID": "PA EDP Conquer 100 ml", "MRP": 749, "price": 356 },
            { "SKU ID": "PA EDP Harmony 100 ml", "MRP": 749, "price": 356 },
            { "SKU ID": "PA EDP-Gift Kit 4X20 ml", "MRP": 649, "price": 379 }
        ],
        "PA 2x range": [
            { "SKU ID": "PA 2X B2G1", "MRP": 450, "price": 388 },
            { "SKU ID": "PA 2X GM Intense 120ml", "MRP": 225, "price": 113 },
            { "SKU ID": "PA Alexander Single 120 ml", "MRP": 225, "price": 113 },
        ],
        "PA Shampoo": [
            { "SKU ID": "PA Shampoo DF 180ml", "MRP": 170, "price": 133 },
            { "SKU ID": "PA Shampoo SB 180ml", "MRP": 170, "price": 133 },
        ],
        "PA Shaving Cream": [
            { "SKU ID": "PA Shaving Cream GM 84g", "MRP": 75, "price": 61 },
            { "SKU ID": "PA Shaving Cream Classic 84g", "MRP": 75, "price": 61 },
        ],
         "PA ASL": [
            { "SKU ID": "PA ASL CB 50ml", "MRP": 150, "price": 123 },
            { "SKU ID": "PA ASL GM 50ml", "MRP": 150, "price": 123 },
            { "SKU ID": "PA ASL GM 100ml", "MRP": 250, "price": 204 },
            { "SKU ID": "PA ASL GM 50ml Spray", "MRP": 160, "price": 131 },
            { "SKU ID": "PA ASL GM 45ml Travel Pack", "MRP": 99, "price": 81 }
        ],
        "PA Soap": [
            { "SKU ID": "PA Soap New GM 125g", "MRP": 210, "price": 144 },
            { "SKU ID": "PA Soap CB 125g", "MRP": 210, "price": 144 },
            { "SKU ID": "PA Soap Luxury 125g", "MRP": 210, "price": 144 },
            { "SKU ID": "PA Soap GM 125g", "MRP": 210, "price": 144 },
        ]
        // Continue to add more categories and products
    };

    // Dynamically load categories and products
    for (const [categoryName, products] of Object.entries(categories)) {
        const category = document.createElement('div');
        category.className = 'category';

        const categoryHeader = document.createElement('div');
        categoryHeader.className = 'category-header';
        categoryHeader.textContent = categoryName;

        const categoryContent = document.createElement('div');
        categoryContent.className = 'category-content';

        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';
            productItem.setAttribute('data-product', product["SKU ID"]);
            productItem.setAttribute('data-price', product.price);

            productItem.innerHTML = `
                <span class="product-name">${product["SKU ID"]} - MRP: ₹${product.MRP}</span>
                <span class="product-price">₹${product.price.toFixed(2)}</span>
                <div class="quantity">
                    <button class="decrease">-</button>
                    <span class="quantity-value">0</span>
                    <button class="increase">+</button>
                </div>
            `;
            categoryContent.appendChild(productItem);
        });

        categoryHeader.addEventListener('click', function() {
            if (categoryContent.style.display === 'block') {
                categoryContent.style.display = 'none';
                categoryHeader.classList.remove('active');
            } else {
                categoryContent.style.display = 'block';
                categoryHeader.classList.add('active');
            }
        });

        category.appendChild(categoryHeader);
        category.appendChild(categoryContent);
        categoryList.appendChild(category);
    }

    attachEventListeners();

    function attachEventListeners() {
        const products = document.querySelectorAll('.product-item');

        products.forEach(product => {
            const increaseButton = product.querySelector('.increase')
            const decreaseButton = product.querySelector('.decrease');
            const quantityValue = product.querySelector('.quantity-value');

            increaseButton.addEventListener('click', function() {
                let quantity = parseInt(quantityValue.textContent);
                quantity++;
                quantityValue.textContent = quantity;
                updateTotal();
            });

            decreaseButton.addEventListener('click', function() {
                let quantity = parseInt(quantityValue.textContent);
                if (quantity > 0) {
                    quantity--;
                    quantityValue.textContent = quantity;
                    updateTotal();
                }
            });
        });
    }

    function updateTotal() {
        let total = 0;
        const products = document.querySelectorAll('.product-item');
        products.forEach(product => {
            const quantity = parseInt(product.querySelector('.quantity-value').textContent);
            const price = parseFloat(product.dataset.price);
            total += quantity * price;
        });
        totalValue.textContent = total.toFixed(2);
    }

    // Handle location button click
    locationBtn.addEventListener('click', function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            locationDisplay.textContent = "Geolocation is not supported by this browser.";
        }
    });

    function showPosition(position) {
        window.latitude = position.coords.latitude;
        window.longitude = position.coords.longitude;
        locationDisplay.textContent = "Latitude: " + position.coords.latitude +
        " Longitude: " + position.coords.longitude;
    }

    function showError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                locationDisplay.textContent = "User denied the request for Geolocation.";
                break;
            case error.POSITION_UNAVAILABLE:
                locationDisplay.textContent = "Location information is unavailable.";
                break;
            case error.TIMEOUT:
                locationDisplay.textContent = "The request to get user location timed out.";
                break;
            case error.UNKNOWN_ERROR:
                locationDisplay.textContent = "An unknown error occurred.";
                break;
        }
    }

    // Placeholder for the place order button functionality
    // placeOrderButton.addEventListener('click', function() {
    //     const areaName = document.getElementById('area-name').value;
    //     const storeName = document.getElementById('store-name').value;
    //     const gstNumber = document.getElementById('gst-number').value;

    //     if (!areaName || !storeName) {
    //         alert('Please enter the area and store name.');
    //         return;
    //     }

    //     // Example alert showing the order details - replace with actual order handling logic
    //     alert(`Order placed successfully for store: ${storeName}, Area: ${areaName}, GST Number: ${gstNumber}`);

    //     // Clear fields after placing order
    //     document.getElementById('area-name').value = '';
    //     document.getElementById('store-name').value = '';
    //     document.getElementById('gst-number').value = '';
    //     document.querySelectorAll('.quantity-value').forEach(q => q.textContent = '0');
    //     updateTotal();
    // });
});

// const sample = {area: "Ambatur",
//     store_name: "XYZ",
//     store_location:"XYZ",
//     store_phno:"9962857600",
//     store_gst_image: "abc.img",
//     store_gst_text:"123",
//     items: {"PA Classic B2G1": 2, "PA Classic":3},
//     total_order_value: 500
// }
