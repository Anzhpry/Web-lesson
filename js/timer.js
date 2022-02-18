let timerInput = document.getElementById("time");
let buttonRun = document.getElementById("start")
let timerShow = document.getElementById("timer");
let stopClick = document.getElementById("stop");

buttonRun.addEventListener('click', function () {
    timeMinut = parseInt(timerInput.value) * 60
})

timer = setInterval(function () {
    seconds = timeMinut % 60
    minutes = timeMinut / 60 % 60
    hour = timeMinut / 60 / 60 % 60
    if (timeMinut <= 0) {
        clearInterval(timer);
        alert("Время закончилось");
    } else {
        let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
        timerShow.innerHTML = strTimer;
    }
    --timeMinut;
}, 1000)

stopClick.addEventListener('click', function () {
    clearInterval(timer);
})
