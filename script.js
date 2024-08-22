const imagen = document.getElementById('imagen');

//Evento para cambiar la imagen al pasar el mouse por encima
imagen.addEventListener('mouseover', function() {
    imagen.src = 'warzone3.webp';
});

//Evento para volver a la imagen original al quitar el mouse
imagen.addEventListener('mouseout', function() {
    imagen.src = 'valverde.jpg';
});
