// Efeito de digitação no título principal
const phrases = [
  "Elle Stratégie: Marketing Digital & Design que Convertem",
  "Elle Stratégie: Resultados Reais para Negócios Reais",
  "Elle Stratégie: Sua Marca com Mais Presença e Estratégia",
];

let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop() {
  const heading = document.querySelector(".typing-effect");
  isEnd = false;
  heading.innerHTML = currentPhrase.join("") + "|";

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop();
      j--;
    }

    if (j === phrases[i].length) {
      isEnd = true;
      isDeleting = true;
      setTimeout(loop, 1200);
      return;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) i = 0;
    }
  }

  const speedUp = Math.random() * (80 - 50) + 50;
  const normalSpeed = Math.random() * (200 - 150) + 150;
  const time = isEnd ? 2000 : isDeleting ? speedUp : normalSpeed;
  setTimeout(loop, time);
}

document.addEventListener("DOMContentLoaded", loop);
