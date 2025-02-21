// Toggle menu di Mobile
document.getElementById("menu-btn").addEventListener("click", function () {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
});
document.addEventListener("DOMContentLoaded", function () {
    new Typed("#typing-text", {
        strings: ["Web Developer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1500,
        startDelay: 500,
        loop: true
    });
});