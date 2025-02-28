// Создание частиц
function createParticles() {
    let container = document.getElementById("particles");
    if (!container) {
        console.error("Элемент #particles не найден!");
        return;
    }

    // Количество частиц
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        let particle = document.createElement("div");
        particle.classList.add("particle");

        // Случайная позиция по горизонтали
        particle.style.left = `${Math.random() * 100}vw`;

        // Случайная скорость анимации (медленная)
        particle.style.animationDuration = `${10 + Math.random() * 20}s`;

        // Случайный размер частицы (от 3px до 7px)
        const size = 3 + Math.random() * 4;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        container.appendChild(particle);
    }
}

// Создаем частицы при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {
    createParticles();
});
