// Seleccionamos los elementos
const form = document.getElementById("create-product-form");
const productsContainer = document.getElementById("products-container");

let products = [];

// Agregar producto
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("product-name").value;
  const price = document.getElementById("product-price").value;
  const imageUrl = document.getElementById("product-image").value;

  const newProduct = { name, price, imageUrl };
  products.push(newProduct);
  renderProducts();

  form.reset(); // Limpiamos el formulario
});

// Mostrar productos
function renderProducts() {
  productsContainer.innerHTML = ""; // Limpiar el contenedor
  products.forEach((product, index) => {
    const productCard = document.createElement("div");
    productCard.classList.add("card"); // Asegúrate de que la clase sea "card"

    productCard.innerHTML = `
      <img src="${product.imageUrl}" alt="${product.name}" class="product-image">
      <div class="card-container--info">
        <p class="product-name">${product.name}</p>
        <div class="card-container--value">
          <p class="product-price">$ ${product.price}</p>
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