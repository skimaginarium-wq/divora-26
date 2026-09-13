/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

    setTimeout(() => {
        document.getElementById("loader")
            .classList.add("hide");
    }, 700);

});


/* =========================
   MOBILE MENU
========================= */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

});


document.querySelectorAll(".mobile-links a, .menu-cta")
.forEach(link => {

    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });

});


/* =========================
   LIVE COUNTDOWN
========================= */

const eventDate = new Date("2026-10-25T09:00:00+05:30").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const difference = eventDate - now;

    if (difference <= 0) {

        document.getElementById("days").textContent = "000";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    document.getElementById("days").textContent =
        String(days).padStart(3, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);


/* =========================
   TOP BUTTON
========================= */

const topButton = document.getElementById("topButton");

topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================
   REGISTER BUTTON
========================= */

document.getElementById("registerButton")
.addEventListener("click", () => {

    alert(
        "DIVORA ’26 Registration System\n\n" +
        "Registration will connect to the secure system in the next phase."
    );

});