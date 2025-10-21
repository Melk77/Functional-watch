
const hourE1   = document.getElementById("hours");
const minuteE1 = document.getElementById("minutes");
const secondE1 = document.getElementById("seconds");
const ampmE1   = document.getElementById("ampm");

function updateClock() {
    const now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let ampm = "AM";

    if (h >= 12) {
        ampm = "PM";
    }
    if (h > 12) {
        h = h - 12;
    }
    h = h === 0 ? 12 : h; 
    const hh = h.toString().padStart(2, "0");
    const mm = m.toString().padStart(2, "0"); 
    const ss = s.toString().padStart(2, "0");

    hourE1.innerText = hh;
    minuteE1.innerText = mm;
    secondE1.innerText = ss;
    ampmE1.innerText = ampm;
}

updateClock();
setInterval(updateClock, 1000);
