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


const link = document.querySelector('.instagram a');

link.innerHTML += link.innerHTML;

let position = 0;
const speed = 1;

function scrollText() {
    position -= speed;
    link.style.transform = `translateX(${position}px)`;

    if (Math.abs(position) >= link.scrollWidth / 2) {
        position = 0;
    }

    requestAnimationFrame(scrollText);
}

scrollText();

document.querySelector('.menu-toggle').addEventListener('click', function () {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
});