let currentIndex = 0;
const images = document.querySelectorAll('.image-container img');
const totalImages = images.length;
const container = document.querySelector('.image-container');

document.querySelector('.next').addEventListener('click', () => {
    if (currentIndex < totalImages - 2) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    container.style.transform = `translateX(-${currentIndex * 500}px)`;
});

document.querySelector('.prev').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalImages - 2;
    }
    container.style.transform = `translateX(-${currentIndex * 500}px)`;
});

// Seleciona o elemento do link
const link = document.querySelector('.instagram a');

// Duplicando o conteúdo para criar o efeito de rolagem contínua
link.innerHTML += link.innerHTML;

// Define o movimento contínuo do texto
let position = 0; // Posição inicial
const speed = 1; // Velocidade do movimento (ajuste conforme necessário)

// Função para animar o texto
function scrollText() {
    position -= speed; // Move o texto para a esquerda
    link.style.transform = `translateX(${position}px)`; // Aplica a transformação

    // Reinicia o texto quando metade do conteúdo sair da tela
    if (Math.abs(position) >= link.scrollWidth / 2) {
        position = 0; // Reinicia a posição
    }

    requestAnimationFrame(scrollText); // Continua a animação
}

// Inicializa a animação
scrollText();
