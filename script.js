import { fetchProducts, createProduct } from './js/requisiciones.js';
import { renderProducts } from './js/listarProductos.js';

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

    // Calcular un nuevo ID basado en los productos existentes
    const newId = products.length > 0 ? (Math.max(...products.map(p => Number(p.id))) + 1).toString() : "1";

    const newProduct = { id: newId, Nombre: name, Precio: price, imagen: imageUrl };
    
    // Crear el producto en el servidor
    const createdProduct = await createProduct(newProduct);
    
    // Si se creó con éxito, añadirlo a la lista local y renderizar
    if (createdProduct) {
        products.push(createdProduct);
        renderProducts(products); // Renderiza la lista actualizada
    }

    form.reset(); // Limpiamos el formulario
});

// Agregar evento para eliminar productos
document.getElementById("products-container").addEventListener("click", async (event) => {
    if (event.target.classList.contains("delete-button")) {
        const productId = event.target.getAttribute("data-id");

        // Lógica para eliminar el producto del servidor
        await deleteProduct(productId); 

        
     // Filtrar los productos eliminados
products = products.filter(product => product.id !== productId);
    }
});

// Función para eliminar el producto del servidor
async function deleteProduct(id) {
    try {
        const response = await fetch(`http://localhost:3000/productos/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
    } catch (error) {
        console.error('Hubo un problema con la eliminación del producto:', error);
    }
}

// Cargar productos al iniciar la página
loadProducts();