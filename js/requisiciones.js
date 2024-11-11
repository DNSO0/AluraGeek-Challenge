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

// Método para crear un nuevo producto (POST)
async function createProduct(product) {
    try {
        const response = await fetch('http://localhost:3000/productos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product), // Convertimos el objeto producto a JSON
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const newProduct = await response.json(); // Obtener el producto creado
        return newProduct; // Retorna el nuevo producto
    } catch (error) {
        console.error('Hubo un problema con la requisición POST:', error);
    }
}