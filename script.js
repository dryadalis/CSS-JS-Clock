
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

let setDate = (e) => {
    const now = new Date(); // grab the date

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90; // turn seconds into degrees
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`; // rotate second hand depending on secondsDegrees

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds/60)*6) + 90
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + ((minutes/60)*30) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000) // Run setDate every second

setDate();