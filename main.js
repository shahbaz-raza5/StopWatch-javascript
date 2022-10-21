let hours = 00;
let minutes = 00;
let seconds = 00;
let milisecs = 00;
let hr;
let min;
let s;
let ms;
let btnName;

let splittime = document.getElementById('split-time');
let output = document.getElementById('output');
let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');
let milisec = document.getElementById('milisec');
let startBtn = document.getElementById('startBtn');
let splitBtn = document.getElementById('splitBtn');
let resetBtn = document.getElementById('resetBtn');
let interval;
var i = false;
resetBtn.disabled = true;
splitBtn.disabled = true;

//START--BUTTON//
startBtn.addEventListener('click', function () {
    if (!i) {
        startBtn.innerText = "Pause";
        startBtn.style.backgroundColor = "rgb(231, 9, 150)";
        resetBtn.style.backgroundColor = "";
        splitBtn.style.backgroundColor = "orangered";
        splitBtn.style.color = "white";
        startBtn.style.color = "white";
        resetBtn.style.color = "rgb(168, 167, 167)";
        btnName = this.innerText;
        interval = setInterval(StopWatch, 10);
        console.log(interval);
        i = true;
        resetBtn.disabled = true;
        splitBtn.disabled = false;

    }
    else {
        console.log(this.innerText);
        clearInterval(interval);
        i = false;
        btnName = this.innerText;
        startBtn.innerText = "Start";
        startBtn.style.backgroundColor = "rgb(12, 164, 71)";
        splitBtn.style.backgroundColor = '';
        resetBtn.style.backgroundColor = 'rgb(46, 132, 245)';
        resetBtn.style.color = "white";
        splitBtn.style.color = "rgb(168, 167, 167)";
        resetBtn.disabled = false;
        splitBtn.disabled = true;
        showtime();

    }

})

//SPLIT--BUTTON//
splitBtn.addEventListener('click', function () {
    console.log(this.innerText);
    btnName = this.innerText;
    i = true;
    resetBtn.disabled = false;
    showtime();
    console.log(times);
    splittime.innerText = times.time1;

});

//RESET--BUTTON//
resetBtn.addEventListener('click', () => {
    window.localStorage.clear();
    clearInterval(interval);
    hours = '00'
    minutes = '00';
    seconds = '00';
    milisecs = '00';
    location.reload();
    

});

//SET AND GET DATA FROM LOCALSTORAGE//
let timeObj=[]
let times;
function showtime() {
    times = { time1: `${hr}:${min}:${s}:${ms}`, btnName: `${btnName}` }
    let output = document.getElementById('output');
    let time = localStorage.getItem('time');
    if (time == null) {
        timeObj = [];
    }
    else {
        timeObj = JSON.parse(time);
    }

    timeObj.push(times);
    localStorage.setItem('time', JSON.stringify(timeObj));
    
    let html = "";
    timeObj.forEach((element, index) => {
        html += `<div class="output">
            <div class="index">${index}</div>
            <div class="event">${element.time1}</div>
            <div id='event-name' class="event-name">${element.btnName}</div>      
        </div>`
    });


    if (timeObj.length != 0) {
        output.innerHTML = html;
    }
    else {
        output.innerHTML = `<h1>Nothing to Show, Please Click on Start  to Show</h1>`;
    }
}

//MAIN--LOGIC//
function StopWatch() {
    milisecs++;
    if (milisecs <= 9) {
        milisec.innerHTML = '0' + milisecs;
        ms = milisec.innerHTML;
    }
    if (milisecs > 9) {
        milisec.innerHTML = milisecs;
        ms = milisec.innerHTML;
    }
    if (milisecs > 99) {
        seconds++
        second.innerHTML = '0' + seconds;
        s = second.innerHTML;
        milisecs = 0;
        milisec.innerHTML = '0' + 0;
        minute.innerHTML = '0' + minutes;
        min = minute.innerHTML;
        hour.innerHTML = '0' + hours;
        hr = hour.innerHTML;
    }
    if (seconds <= 9) {
        second.innerHTML = '0' + seconds;
        s = second.innerHTML;
        minute.innerHTML = '0' + minutes;
        min = minute.innerHTML;
        hour.innerHTML = '0' + hours;
        hr = hour.innerHTML;
    }
    if (seconds > 9) {
        second.innerHTML = seconds;
        s = second.innerHTML;
        minute.innerHTML = '0' + minutes;
        min = minute.innerHTML;
        hour.innerHTML = '0' + hours;
        hr = hour.innerHTML;
    }
    if (seconds > 59) {
        minutes++
        minute.innerHTML = '0' + minutes;
        seconds = 0;
        second.innerHTML = '0' + 0;
        min = minute.innerHTML;
        hour.innerHTML = '0' + hours;
        hr = hour.innerHTML;

    }
    if (minutes > 59) {
        hours++
        minutes = 0;
        minute.innerHTML = '0' + 0;
        hour.innerHTML = '0' + hours;
        hr = hour.innerHTML;

    }
}