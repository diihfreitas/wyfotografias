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
        currentIndex = totalImages - 1;
    }
    container.style.transform = `translateX(-${currentIndex * 500}px)`;
});