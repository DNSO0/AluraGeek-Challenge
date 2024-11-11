// listarProductos.js
export function renderProducts(products) {
    const productsContainer = document.getElementById("products-container");
    productsContainer.innerHTML = ""; // Limpiar el contenedor antes de renderizar

    if (!Array.isArray(products) || products.length === 0) {
        productsContainer.innerHTML = "<p>No hay productos disponibles.</p>"; // Mensaje si no hay productos
        return;
    }

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="${product.imagen}" alt="${product.Nombre}" />
            <h3 class="product-name">${product.Nombre}</h3>
            <p class="product-price">$${product.Precio}</p>
        `;

        productsContainer.appendChild(productCard);
    });
}