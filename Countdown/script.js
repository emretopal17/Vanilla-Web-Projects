const newYears = "1 January 2022";

const daysEl = document.querySelector('#days');
const hoursEl = document.querySelector('#hours');
const minsEl = document.querySelector('#mins');
const secondsEl = document.querySelector('#seconds');

function countDown() {
    const newYearDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const seconds = Math.floor(totalSeconds) % 60;
 
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML =formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);

}

function formatTime(time){
    return time<10 ? (`0${time}`) : time;
}

//initial call
countDown();
setInterval(countDown, 1000);

