import { barcelona, roma, paris, londres } from './ciudades.js'

// Obtener elementos del DOM
const enlaces = document.querySelectorAll('a');

// Agregar evento CLICK a los enlaces
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        // Remover el active
        enlaces.forEach(function (e) {
            e.classList.remove('active');
        });
        // Agregar active
        this.classList.add('active');
        // Traer información de objetos que correspondan
        const contenido = obtenerContenido(this.textContent)
        // Mostrar el contenido en el DOM
        document.getElementById('titulo').innerHTML = contenido.titulo;
        document.getElementById('subtitulo').innerHTML = contenido.subtitulo;
        document.getElementById('parrafo').innerHTML = contenido.parrafo;
        document.getElementById('precio').innerHTML = contenido.precio;
    })
})

//Función que va a traer la información que corresponda desde ciudades.js

function obtenerContenido(enlace) {
    const contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace];
}