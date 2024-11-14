// requisiciones.js

// Método para realizar una requisición GET
export async function fetchProducts() {
    try {
        const response = await fetch('http://localhost:3000/productos');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        return data; // retorna directamente el array
    } catch (error) {
        console.error('Hubo un problema con la requisición Fetch:', error);
        return []; // Retorna un array vacío en caso de error
    }
}

// Método para crear un nuevo producto (POST)
export async function createProduct(product) { // También exporta esta función
    try {
        const response = await fetch('http://localhost:3000/productos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const createdProduct = await response.json();
        return createdProduct; // Retorna el producto creado
    } catch (error) {
        console.error('Hubo un problema con la creación del producto:', error);
    }
}