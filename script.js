const surpriseBtn =
    document.getElementById("surpriseBtn");

const surpriseBox =
    document.getElementById("surpriseBox");

const floating =
    document.getElementById("floating-elements");


/* Surprise Button */

surpriseBtn.addEventListener("click", function () {

    surpriseBox.classList.remove("hidden");

    surpriseBtn.innerHTML =
        "💖 Surprise Unlocked!";

    createBurst();

});


/* Create Floating Hearts */

function createHeart() {

    const heart =
        document.createElement("div");

    heart.classList.add("floating");

    const emojis = [
        "❤️",
        "💖",
        "💕",
        "💗",
        "💓",
        "✨",
        "🌸",
        "🦋"
    ];

    heart.innerHTML =
        emojis[
            Math.floor(
                Math.random() * emojis.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 18 + 14 + "px";

    heart.style.animationDuration =
        Math.random() * 4 + 5 + "s";

    floating.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 9000);

}


/* Continuous Hearts */

setInterval(createHeart, 700);


/* Heart Burst */

function createBurst() {

    for (let i = 0; i < 30; i++) {

        setTimeout(() => {

            createHeart();

        }, i * 80);

    }

}