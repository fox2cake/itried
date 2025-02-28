document.addEventListener("DOMContentLoaded", function () {
    let music = document.getElementById("background-music");
    let currentScreen = 1;
    let correctAnswers = 0;

    // Воспроизведение музыки при первом клике
    function playMusic() {
        music.play().catch(error => console.log("Музыка не смогла запуститься:", error));
        document.removeEventListener("click", playMusic);
    }

    document.addEventListener("click", playMusic);

    // Переключение экранов
    function showScreen(id) {
        document.querySelectorAll(".screen").forEach(screen => {
            screen.style.display = "none";
        });
        document.getElementById(`screen-${id}`).style.display = "block";
    }

    // Глобальные функции
    window.goToScreen = function (id) {
        currentScreen = id;
        showScreen(id);
    };

    window.answer = function (selected, screen) {
        let correct = { 3: 2, 4: 3, 5: 2 }; // Правильные ответы
        
        if (selected === correct[screen]) {
            correctAnswers++;
        }
        
        if (screen === 5) {
            if (correctAnswers === 3) {
                showScreen("win");
            } else {
                showScreen("loose");
            }
            correctAnswers = 0;
        } else {
            goToScreen(screen + 1);
        }
    };

    window.restart = function () {
        correctAnswers = 0;
        goToScreen(1);
    };

    showScreen(1); // Показываем первый экран

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
});
