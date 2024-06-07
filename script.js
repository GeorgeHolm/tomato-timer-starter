let timer;
let mins = 25;
let secs = 0;

let breaks = 0;
let studies = 0;

let isRunning = false;

const studyBtn = document.getElementById('study-btn');

const timeLeft = document.getElementById('time-left');


const studyCount = document.getElementById('study-count');
const breakCount = document.getElementById('break-count');





function updateTimerDisplay() {
    if(secs == 0) {


        if(mins == 0) {
            return;
        }
        mins = mins - 1;
        secs = 59;


    }
    else {
        secs = secs - 1;
    }

    mins = String(mins).padStart(2, "0");
    secs = String(secs).padStart(2, "0");

    // seconds.toString();
    // seconds = seconds.padStart(2, '0');

    timeLeft.textContent = mins + ":" + secs;

    console.log(secs);

    // mins = parseInt(mins);
    secs = parseInt(secs);



}

function startTimer() {
    if(!isRunning) {
        isRunning = true;
        //updateTimerDisplay.bind(mins, secs);
        timer = setInterval(updateTimerDisplay, 1000);
    
    }
}



document.getElementById('study-btn').addEventListener('click', () => {
    studies++;
    mins = 25;
    secs = 0;
    studyCount.textContent = studies;

    startTimer();
  });


document.getElementById('break-btn').addEventListener('click', () => {
    breaks++;
    mins = 5;
    secs = 0;
    breakCount.textContent = breaks;

    startTimer();
  });
