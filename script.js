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
});
