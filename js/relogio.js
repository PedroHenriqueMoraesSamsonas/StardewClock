const hoursHand = document.querySelector(".hand.hours");
const minutesHand = document.querySelector(".hand.minutes");
const secondsHand = document.querySelector(".hand.seconds");

const setRotation = (element, rotationPercentage) => {
    element.style.setProperty("--rotation", rotationPercentage * 360);
};

const setClock = () => {
    const horario = new Date();

    const hoursPercentage = horario.getHours() / 12;
    const minutesPercentage = horario.getMinutes() / 60;
    const secondsPercentage = horario.getSeconds() / 60;

    setRotation(secondsHand, secondsPercentage);
    setRotation(minutesHand, minutesPercentage);
    setRotation(hoursHand, hoursPercentage);
};

setClock();

setInterval(setClock, 1000);
