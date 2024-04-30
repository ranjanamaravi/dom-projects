const startStopbtn = document.querySelector('.start-stop-btn');
const resetbtn = document.querySelector('.reset-btn');
const timer = document.querySelector('.timer');

/* variables for timer values*/
let seconds = 0;
let minutes = 0;
let hours = 0;

/* variables for leading 0 values*/
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

let timerInterval = 0;
let timerStatus = 'stopped';

/*function for stopWatch */

function stopWatch() {
    seconds++;

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes ++ ;
        if (minutes / 60 === 1) {
            minutes = 0;
            hours ++ ;
        }
    }

    
    if (seconds < 10) {
        leadingSeconds = '0' + seconds;
    }else {
        leadingSeconds = seconds;
    }
    if (minutes < 10) {
        leadingMinutes = '0' + minutes;
    }else {
        leadingMinutes = minutes;
    }
    if (hours < 10) {
        leadingHours = '0' + hours;
    }else {
        leadingHours = hours;
    }
    timer.innerHTML = leadingHours + ':' + leadingMinutes + ':' + leadingSeconds;  
}

startStopbtn.addEventListener('click', ()=> {
    if (timerStatus === 'stopped') {
        timerInterval = setInterval(stopWatch, 1000);
        startStopbtn.innerHTML = '<i class="fa-solid fa-pause" id= "pause"></i>';
        timerStatus = 'started';
    }
    else {
        clearInterval(timerInterval);
        startStopbtn.innerHTML = '<i class="fa-solid fa-play" id= "play"></i>';
        timerStatus = 'stopped';


    }
});

resetbtn.addEventListener('click', ()=> {
    seconds = 0;
    minutes = 0;
    hours = 0;
    timer.innerHTML = '00:00:00';
})