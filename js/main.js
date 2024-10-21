
/* Cuando hago CLICK .button, .nav TOGGLE 'activo' */
const button = document.querySelector('.button')
const nav    = document.querySelector('.nav')

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
})



// estilos boton nuevo

document.querySelector(".bars__menu").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");

function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
}



/* jQuery : Enlazar jQuery*/
/* $('.button').on('click',()=>{
    $('.nav').toggleClass('activo')
}) */

// Selecciona el botón de "Productos" y el submenú
const productosBtn = document.getElementById('productos');
const submenu = document.getElementById('submenu');

// Añade el evento de clic para alternar la visibilidad del submenú
productosBtn.addEventListener('click', function(e) {
    e.preventDefault(); // Evita el comportamiento predeterminado del enlace

    // Alterna la clase 'hidden' para mostrar/ocultar el submenú
    submenu.classList.toggle('hidden');
});
document.querySelector('form').addEventListener('submit', function (e) {
    const email = document.querySelector('input[name="email"]').value;
    const nombre = document.querySelector('input[name="nombre"]').value;
    const mensaje = document.querySelector('textarea[name="mensaje"]').value;
  
    if (!email || !nombre || !mensaje) {
      e.preventDefault();
      alert("Por favor, completa todos los campos obligatorios.");
    }
  });
  