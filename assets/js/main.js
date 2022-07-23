let countDown = new Date("Nov 01, 2022 00:00:00").getTime();

let x = setInterval(() => {
    let now = new Date().getTime();
    let distance = countDown - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;

    function makeTimeDisplaysOnOneOrTwoDigits(value) {
        if (value < 10) {
            value = "0" + value;
            return value
        }

        return value
    }

    document.getElementById("hours").innerHTML = makeTimeDisplaysOnOneOrTwoDigits(hours);

    document.getElementById("minutes").innerHTML = makeTimeDisplaysOnOneOrTwoDigits(minutes);

    document.getElementById("seconds").innerHTML = makeTimeDisplaysOnOneOrTwoDigits(seconds);

    if (distance < 0) {
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }

}, 1000)