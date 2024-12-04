// script.js

function mostrarTexto(elemento) {
  // Obtiene el texto oculto dentro del elemento y lo muestra/oculta
  const texto = elemento.querySelector('.texto-oculto');
  if (texto.style.display === 'block') {
    texto.style.display = 'none';
  } else {
    texto.style.display = 'block';
  }
}
