// listarProductos.js

// Seleccionamos el contenedor donde se mostrarán los productos
const productsContainer = document.getElementById("products-container");

// Método para realizar una requisición GET
async function fetchProducts() {
    try {
        const response = await fetch('http://localhost:3000/productos');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        return data.productos; // Retorna la lista de productos
    } catch (error) {
        console.error('Hubo un problema con la requisición Fetch:', error);
    }
}

// Mostrar productos
function renderProducts(products) {
    productsContainer.innerHTML = ""; // Limpiar el contenedor
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("card");

        productCard.innerHTML = `
            <img src="${product.imagen}" alt="${product.Nombre}" class="product-image">
            <div class="card-container--info">
                <p class="product-name">${product.Nombre}</p>
                <div class="card-container--value">
                    <p class="product-price">$ ${product.Precio}</p>
                    <button class="delete-button" aria-label="Eliminar producto">
                        <img src="./assets/trashIcon.png" alt="Eliminar producto" />
                    </button>
                </div>
            </div>
        `;
        productsContainer.appendChild(productCard);
    });
}

// Inicializar la carga de productos
async function init() {
    const products = await fetchProducts();
    if (products) {
        renderProducts(products);
    }
}

// Llamar a la función de inicialización
init();