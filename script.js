import { fetchProducts, createProduct } from './js/requisiciones.js';
import { renderProducts } from './js/listarProductos.js'; // Asegúrate de que la ruta sea correcta

// Seleccionamos los elementos
const form = document.getElementById("create-product-form");

let products = [];

// Función para cargar productos desde el servidor
async function loadProducts() {
    products = await fetchProducts(); // Llama a la función fetchProducts para obtener los productos
    console.log(products);
    renderProducts(products); // Renderiza los productos obtenidos
}

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
        renderProducts(products); // Renderiza la lista actualizada
    }

    form.reset(); // Limpiamos el formulario
});

// Cargar productos al iniciar la página
loadProducts();