// Simular redirección a un formulario al hacer clic en los botones de modelo
//document.querySelectorAll('.model-btn').forEach(button => {
//  button.addEventListener('click', () => {
    // Puedes reemplazar esta URL cuando tengas tu formulario real
//    window.location.href = 'formulario.html';
//  });
//});

// Botón flotante de WhatsApp
document.querySelector('.whatsapp-float').addEventListener('click', () => {
  const phone = '5599999999999'; // <--- Coloca aquí el número real con DDI y DDD
  const message = 'Olá! Quero fazer um pedido personalizado.';
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
});

// Íconos de redes sociales
document.querySelectorAll('.social-icon').forEach(icon => {
  icon.addEventListener('click', () => {
    const network = icon.getAttribute('data-network');

    if (network === 'instagram') {
      window.open('https://instagram.com/quedoparasempre', '_blank');
    } else if (network === 'facebook') {
      window.open('https://facebook.com/quedoparasempre', '_blank');
    } else if (network === 'x') {
      window.open('https://x.com/quedoparasempre', '_blank');
    }
  });
});

//function selectModel(imagePath) {
//  localStorage.setItem('selectedModelImage', imagePath);
//  window.location.href = 'formulario.html'; // asegúrate de que es el nombre correcto del formulario
//
  function selectModel(imagePath) {
    console.log('Guardando en localStorage:', imagePath); // <-- para ver que entra
    localStorage.setItem('selectedModelImage', imagePath);
    window.location.href = 'formulario.html';
  }

