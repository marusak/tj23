function clock() {
    const setTime = function(d, h, m, s) {
        document.getElementById("days").innerHTML = d;
        document.getElementById("hours").innerHTML = h;
        document.getElementById("minutes").innerHTML = m;
        document.getElementById("seconds").innerHTML = s;
    }

    const countDownDate = new Date("July 15, 2023 14:00:00").getTime();

    const timer = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(timer);
            document.getElementById("days-label").innerHTML = "HA";
            document.getElementById("hours-label").innerHTML = "PP";
            document.getElementById("minutes-label").innerHTML = "IL";
            document.getElementById("seconds-label").innerHTML = "Y";
            setTime("MA", "RR", "IE", "D!");
            return;
        }

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTime(days, hours, minutes, seconds);
    }, 1000);
}

function main() {
    clock()
}

document.addEventListener("DOMContentLoaded", main);
