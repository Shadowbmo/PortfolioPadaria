const hamburguer = document.getElementById('Burguer');
const navMenu = document.querySelector('.navbar-menu');

// Escutando ações de click
hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.navbar-link').forEach((n) =>
  n.addEventListener('click', () => {
    hamburguer.classList.remove('active');
    navMenu.classList.remove('active');
  })
);

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  let currentIndex = 0;

  function showSlide(index) {
    const baseTransform = -index * 20; // Valor base do transform (20% por slide)
    slider.style.transform = `translateX(${baseTransform}%)`;
  }

  function updateMaxIndex() {
    const tamanhoVisivel = window.innerWidth;
    console.log("olhaa" + tamanhoVisivel)

    const tamanhoCard = slider.querySelector(".card").offsetWidth;

    if (tamanhoVisivel < 1050) {
      maxIndex = Math.floor(tamanhoVisivel / tamanhoCard) + 2;
    } else if(tamanhoVisivel < 1290){
      maxIndex = Math.floor(tamanhoVisivel / tamanhoCard) + 1;
    } else{
      maxIndex = Math.floor(tamanhoVisivel / tamanhoCard);
    }

    return maxIndex;
  }

  function proximoSlide() {
    const maxIndex = updateMaxIndex();

    if (currentIndex < maxIndex) {
      currentIndex++;
      showSlide(currentIndex);
    } else {
      console.log("acabou");
    }
  }

  function anteriorSlide() {
    if (currentIndex > 0) {
      currentIndex--;
      showSlide(currentIndex);
    }
  }

  // Adicione event listeners para os botões de próximo e anterior
  document.querySelector("#botaoProximo").addEventListener("click", proximoSlide);
  document.querySelector("#botaoAnterior").addEventListener("click", anteriorSlide);

  // Atualiza o maxIndex quando a janela for redimensionada
  window.addEventListener("resize", function () {
    currentIndex = 0;
    showSlide(currentIndex);
  });

  // Exibe o primeiro slide inicialmente
  showSlide(0);
});
