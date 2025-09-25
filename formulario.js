document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.frame-carousel');
  const options = document.querySelectorAll('.frame-option');
  const hiddenInput = document.getElementById('selected-frame');

  // Centrado condicional si hay pocos modelos
  if (options.length <= 5) {
    carousel.style.justifyContent = 'center';
  } else {
    carousel.style.justifyContent = 'flex-start';
  }

  // Selección de modelo
  options.forEach(option => {
    option.addEventListener('click', () => {
      options.forEach(opt => opt.classList.remove('selected'));
      option.classList.add('selected');
      const frameId = option.dataset.frame;
      hiddenInput.value = frameId;

      // Llevar al centro
      const containerRect = carousel.getBoundingClientRect();
      const optionRect = option.getBoundingClientRect();
      const scrollLeft = carousel.scrollLeft;
      const offset = optionRect.left - containerRect.left;
      const center = containerRect.width / 2 - optionRect.width / 2;
      carousel.scrollTo({
        left: scrollLeft + offset - center,
        behavior: 'smooth'
      });
    });
  });

  // Botones de flechas
  document.querySelector('.left-arrow').addEventListener('click', () => {
    carousel.scrollBy({ left: -200, behavior: 'smooth' });
  });

  document.querySelector('.right-arrow').addEventListener('click', () => {
    carousel.scrollBy({ left: 200, behavior: 'smooth' });
  });
});


  window.onload = function () {
    const imagePath = localStorage.getItem('selectedModelImage');
    console.log('Cargando imagen:', imagePath);
    if (imagePath) {
      const img = document.getElementById('selectedModelPreview');
      img.src = imagePath;
    } else {
      console.warn('No hay imagen en localStorage');
    }
  };

  document.getElementById("btnVoltar").addEventListener("click", function () {
    window.location.href = "index.html";
  });

