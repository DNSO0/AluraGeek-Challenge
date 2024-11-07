// Seleccionamos los elementos
const form = document.getElementById("create-product-form");
const productsContainer = document.getElementById("products-container");

let products = [];

// Agregar producto
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("product-name").value;
  const description = document.getElementById("product-description").value;
  const price = document.getElementById("product-price").value;
  const imageUrl = document.getElementById("product-image").value;

  const newProduct = { name, description, price, imageUrl };
  products.push(newProduct);
  renderProducts();

  form.reset(); // Limpiamos el formulario
});

// Mostrar productos
function renderProducts() {
  productsContainer.innerHTML = "";
  products.forEach((product, index) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
      <img src="${product.imageUrl}" alt="${product.name}" width="100%">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>Precio: ${product.price}</p>
      <button onclick="deleteProduct(${index})">Eliminar</button>
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
