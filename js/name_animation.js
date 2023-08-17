const letters = document.querySelectorAll(".div-paragraph--down span");

letters.forEach((letter) => {
    let letterPrev = letter.previousElementSibling;
    let letterNext = letter.nextElementSibling;
    if (letterPrev == null) {
        letter.addEventListener("mouseover", (e) => {
            cleanAnimation();
            letter.classList.add("letter-animation-big");
            letterNext.classList.add("letter-animation-medium");
        });
    }else if (letterNext == null) {
        letter.addEventListener("mouseover", (e) => {
            cleanAnimation();
            letter.classList.add("letter-animation-big");
            letterPrev.classList.add("letter-animation-medium");
        });
    } else {
        letter.addEventListener("mouseover", (e) => {
            cleanAnimation();
            letterPrev.classList.add("letter-animation-medium");
            letter.classList.add("letter-animation-big");
            letterNext.classList.add("letter-animation-medium");
        });
    }
    letter.addEventListener("mouseout", (e) => {
        cleanAnimation();
    })
});

function cleanAnimation() {
    let letterBig = document.querySelector(".letter-animation-big");
    let letterMedium = document.querySelectorAll(".letter-animation-medium");
    if (letterBig != null) {
        letterBig.classList.remove("letter-animation-big");
        letterMedium.forEach((letter) => {
            letter.classList.remove("letter-animation-medium");
        });
    }
}