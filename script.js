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
        document.querySelectorAll(".screen").forEach(screen => screen.style.display = "none");
        document.getElementById(`screen-${id}`).style.display = "block";
    }

    window.goToScreen = function (id) {
        currentScreen = id;
        showScreen(id);
    };

    // Обработка ответов
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

    // Перезапуск игры
    window.restart = function () {
        correctAnswers = 0;
        goToScreen(1);
    };

    // Создание частиц
  function createParticles() {
    let container = document.getElementById("particles");
    if (!container) {
        console.error("Элемент #particles не найден!");
        return;
    }
    for (let i = 0; i < 50; i++) {
        let particle = document.createElement("div");
        particle.classList.add("particle");
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.animationDuration = `${2 + Math.random() * 3}s`;
        container.appendChild(particle);
    }
}

// Создаем частицы при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {
    createParticles();
});
