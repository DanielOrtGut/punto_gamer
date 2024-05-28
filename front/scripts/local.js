// script.js
document.addEventListener("DOMContentLoaded", function() {
    const consolas = document.querySelectorAll('.consola');
    
    consolas.forEach((consola, index) => {
        let timerInterval;
        let segundos = 0;
        let minutos = 0;
        let horas = 0;
        let isRunning = false;

        const timerDisplay = consola.querySelector('.timer');
        const startButton = consola.querySelector('.start');
        const pauseButton = consola.querySelector('.pause');
        const restartButton = consola.querySelector('.restart');

        function startTimer() {
            if (!isRunning) {
                isRunning = true;
                timerInterval = setInterval(updateTimer, 1000);
            }
        }

        function pauseTimer() {
            clearInterval(timerInterval);
            isRunning = false;
        }

        function restartTimer() {
            clearInterval(timerInterval);
            isRunning = false;
            segundos = 0;
            minutos = 0;
            horas = 0;
            updateTimer();
        }

        function updateTimer() {
            segundos++;
            if (segundos === 60) {
                segundos = 0;
                minutos++;
                if (minutos === 60) {
                    minutos = 0;
                    horas++;
                }
            }
            timerDisplay.textContent = pad(horas) + ':' + pad(minutos) + ':' + pad(segundos);
        }

        function pad(value) {
            return value < 10 ? '0' + value : value;
        }

        startButton.addEventListener('click', startTimer);
        pauseButton.addEventListener('click', pauseTimer);
        restartButton.addEventListener('click', restartTimer);
    });
});
