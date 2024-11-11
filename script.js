// script.js

// Seleccionamos los elementos
const form = document.getElementById("create-product-form");
const productsContainer = document.getElementById("products-container");

let products = [];

// Agregar producto
form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("product-name").value;
    const price = document.getElementById("product-price").value;
    const imageUrl = document.getElementById("product-image").value;

    const newProduct = { Nombre: name, Precio: price, imagen: imageUrl };
    
    // Crear el producto en el servidor
    const createdProduct = await createProduct(newProduct);
    
    // Si se creó con éxito, añadirlo a la lista local y renderizar
    if (createdProduct) {
        products.push(createdProduct);
        renderProducts();
    }

    form.reset(); // Limpiamos el formulario
});

// Mostrar productos
function renderProducts() {
    productsContainer.innerHTML = ""; // Limpiar el contenedor
    products.forEach((product, index) => {
        const productCard = document.createElement("div");
        productCard.classList.add("card");

        productCard.innerHTML = `
            <img src="${product.imagen}" alt="${product.Nombre}" class="product-image">
            <div class="card-container--info">
                <p class="product-name">${product.Nombre}</p>
                <div class="card-container--value">
                    <p class="product-price">$ ${product.Precio}</p>
                    <button class="delete-button" onclick="deleteProduct(${index})" aria-label="Eliminar producto">
                        <img src="./assets/trashIcon.png" alt="Eliminar producto" />
                    </button>
                </div>
            </div>
        `;
        productsContainer.appendChild(productCard);
    });
}

// Eliminar producto
function deleteProduct(index) {
    products.splice(index, 1);
    renderProducts();
}

// Renderizamos inicialmente
renderProducts();