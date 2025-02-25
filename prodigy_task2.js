let minutes = 0, seconds = 0, milliseconds = 0;
let timer;
let running = false;

const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');

startStopButton.addEventListener('click', () => {
    if (!running) {
        startStopButton.innerText = 'Stop';
        startStopButton.classList.add('running');
        timer = setInterval(updateTime, 10);
    } else {
        startStopButton.innerText = 'Start';
        startStopButton.classList.remove('running');
        clearInterval(timer);
    }
    running = !running;
});

resetButton.addEventListener('click', () => {
    clearInterval(timer);
    running = false;
    startStopButton.innerText = 'Start';
    startStopButton.classList.remove('running');
    minutes = 0; seconds = 0; milliseconds = 0;
    updateDisplay();
});

function updateTime() {
    milliseconds += 10;
    if (milliseconds >= 1000) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('minutes').innerText = formatTime(minutes);
    document.getElementById('seconds').innerText = formatTime(seconds);
    document.getElementById('milliseconds').innerText = formatTime(milliseconds / 10);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
