// Desplazamiento suave al hacer clic en los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Mostrar un mensaje al enviar el formulario de contacto
document.getElementById('contact-btn').addEventListener('click', function () {
  alert('Mensaje enviado! Nos pondremos en contacto contigo pronto.');
});

// Contador de carrito
let cartCount = 0;

document.querySelectorAll('.fa-cart-shopping').forEach(cartIcon => {
  cartIcon.addEventListener('click', function () {
      cartCount++;
      this.innerHTML = `&#7f2815; (${cartCount})`; // Cambia el ícono a uno con conteo
      alert(`Has añadido un artículo al carrito. Total de artículos: ${cartCount}`);
  });
});

// Cambiar color del botón "Learn More" al pasar el cursor
const learnMoreButton = document.getElementById('about-btn');

learnMoreButton.addEventListener('mouseenter', function () {
  this.style.backgroundColor = '#e27520'; // Cambiar a 
});

learnMoreButton.addEventListener('mouseleave', function () {
  this.style.backgroundColor = ''; // Cambiar de nuevo al original
});

// Mostrar modal al hacer clic en "Learn More"
learnMoreButton.addEventListener('click', function () {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
      <div class="modal-content">
          <span class="close-btn">&times;</span>
          <h2>Más sobre nosotros</h2>
          <p>Somos una cafetería dedicada a ofrecer la mejor experiencia de café.</p>
      </div>
  `;
  document.body.appendChild(modal);
  
  const closeModal = modal.querySelector('.close-btn');
  closeModal.addEventListener('click', function() {
      document.body.removeChild(modal);
  });
});

// Efecto de animación al pasar el ratón sobre los productos
document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
      this.style.transition = 'transform 0.2s';
  });

  card.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
  });
});

// Mostrar las tarjetas con un efecto de desvanecimiento al cargar
window.addEventListener('DOMContentLoaded', () => {
  const categories = document.querySelectorAll('.card-category');
  categories.forEach((category, index) => {
      setTimeout(() => {
          category.classList.add('show'); // Añadir clase para activar la animación
      }, index * 300); // Retrasar cada tarjeta por 300 ms
  });
});








  