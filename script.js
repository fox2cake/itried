document.addEventListener('DOMContentLoaded', () => {
    // Запускаем частицы и музыку только после полной загрузки
    createParticles();
    playMusic();
});

// Функция создания частиц
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    
    // Проверяем, существует ли контейнер
    if (!particlesContainer) {
        console.error("Ошибка: контейнер для частиц (#particles) не найден!");
        return;
    }

    for (let i = 0; i < 50; i++) {
        let particle = document.createElement('div');
        particle.className = 'particle';
        
        // Случайные позиции
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';

        particlesContainer.appendChild(particle);
    }
}

// Функция для запуска музыки
function playMusic() {
    const audio = document.getElementById('background-music');

    if (!audio) {
        console.error("Ошибка: музыкальный элемент (#background-music) не найден!");
        return;
    }

    audio.play().catch(error => {
        console.warn("Музыка не смогла автоматически запуститься:", error);
    });
}

// Функция смены фона (если нужно)
function changeBackground(image) {
    if (image) {
        document.body.style.backgroundImage = `url(${image})`;
    } else {
        console.warn("Фон не был изменен, изображение не передано.");
    }
}
