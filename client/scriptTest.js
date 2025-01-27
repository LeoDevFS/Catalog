// Función para crear un nuevo producto
function createProduct(brand) {
    fetch('http://localhost:3000/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `brand=${encodeURIComponent(brand)}`
    })
    .then(response => {
        if (response.ok) {
            console.log('Producto creado exitosamente');
        } else {
            console.error('Error al crear el producto');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Ejemplo de uso

