
/**
 * Reloj web que cambia de fondo y posición del sol y la luna según la hora del día.
 * Además tiene un contador para informar de cuándo será el próximo cambio de los elementos mencionados.
 */

window.addEventListener('load', () => {
    workingClock();
    setInterval(workingClock, 60);
    backgroundChange();
    countdown();
    setInterval(countdown, 60);
    rotation();
});

// Global variables
const clockHours = document.querySelector('.working_clock .hours');
const clockMins = document.querySelector('.working_clock .minutes');



/**
 * WORKING CLOCK
 */
let workingClock = () => {
    let date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();

    hours = checkTime(hours);
    mins = checkTime(mins);

    let currentHour = `${hours}`;
    let currentMin = `${mins}`;

    clockHours.innerHTML = currentHour;
    clockMins.innerHTML = currentMin;

}

let checkTime = (time) => {
    if (time < 10) {
        time = "0" + time;
    }
    return time;
}


/**
 * BACKGROUND CHANGES
 */
let backgroundChange = () => {
    const skyColor = document.querySelector('.sky');
    const groundColor = document.querySelector('.ground');
    let givenTime = clockHours.innerHTML;

    if (givenTime >= "08" && givenTime < "12") {
        skyColor.classList.remove('night');
        groundColor.classList.remove('night');

        skyColor.classList.add('sunrise');
        groundColor.classList.add('sunrise');

    } else if (givenTime >= "12" && givenTime < "19") {
        skyColor.classList.remove('sunrise');
        groundColor.classList.remove('sunrise');

        skyColor.classList.add('noon');
        groundColor.classList.add('noon');

    } else if (givenTime >= "19" && givenTime < "21") {
        skyColor.classList.remove('noon');
        groundColor.classList.remove('noon');

        skyColor.classList.add('sunset');
        groundColor.classList.add('sunset');

    } else if ("21" <= givenTime <= "23" && "00" <= givenTime < "08") {
        skyColor.classList.remove('sunset');
        groundColor.classList.remove('sunset');

        skyColor.classList.add('night');
        groundColor.classList.add('night');

    }
}



/**
 * COUNTDOWN
 */
let countdown = () => {
    const showMessage = document.querySelector('.countdown_widget .message');

    let currentDate = new Date();
    let countdownDate = new Date();
    let nowTime = clockHours.innerHTML;
    let timeOfDay = "";

    let currentHour = currentDate.getTime();
    let countdownHour = countdownDate.setHours(0, 0, 0, 0);

    if (nowTime >= "08" && nowTime < "12") {
        countdownHour = countdownDate.setHours(12, 0, 0, 0);
        timeOfDay = "noon";

    } else if (nowTime >= "12" && nowTime < "19") {
        countdownHour = countdownDate.setHours(19, 0, 0, 0);
        timeOfDay = "sunset";

    } else if ("19" <= nowTime < "21") {
        countdownHour = countdownDate.setHours(21, 0, 0, 0);
        timeOfDay = "night";

    } else if ("21" <= nowTime <= "23" && "00" <= nowTime < "08") {
        countdownHour = countdownDate.setHours(08, 0, 0, 0);
        timeOfDay = "sunrise";
    }

    let operation = countdownHour - currentHour;

    let cdHours = Math.abs(Math.floor(operation / (1000 * 60 * 60)));
    let cdMins = Math.abs(Math.floor((operation / (1000 * 60) + 1)));

    let message = `Time till ${timeOfDay} mode =  ${cdHours}h : ${cdMins}'`;
    showMessage.innerHTML = message;
}

/**
 * SUN - MOON ROTATION
 */

let rotation = () => {
    const pathObject = document.querySelector('.path');
    let pathDegrees = 0;

    switch (clockHours.innerHTML) {
        case "08":
            pathDegrees = 360;
            break;
        case "09":
            pathDegrees = 15;
            break;
        case "10":
            pathDegrees = 30;
            break;
        case "11":
            pathDegrees = 45;
            break;
        case "12":
            pathDegrees = 60;
            break;
        case "13":
            pathDegrees = 75;
            break;
        case "14":
            pathDegrees = 90;
            break;
        case "15":
            pathDegrees = 105;
            break;
        case "16":
            pathDegrees = 120;
            break;
        case "17":
            pathDegrees = 135;
            break;
        case "18":
            pathDegrees = 150;
            break;
        case "19":
            pathDegrees = 165;
            break;
        case "20":
            pathDegrees = 180;
            break;
        case "21":
            pathDegrees = 195;
            break;
        case "22":
            pathDegrees = 210;
            break;
        case "23":
            pathDegrees = 225;
            break;
        case "00":
            pathDegrees = 240;
            break;
        case "01":
            pathDegrees = 255;
            break;
        case "02":
            pathDegrees = 270;
            break;
        case "03":
            pathDegrees = 285;
            break;
        case "04":
            pathDegrees = 300;
            break;
        case "05":
            pathDegrees = 315;
            break;
        case "06":
            pathDegrees = 330;
            break;
        case "07":
            pathDegrees = 345;
            break;

    }

    pathObject.style.transform = `rotate(${pathDegrees}deg)`;

}