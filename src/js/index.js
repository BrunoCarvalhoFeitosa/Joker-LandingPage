//Function to open trailer
const joker_openTrailer = () => {
    document.querySelector(".b-container__banner-content a").addEventListener("click", () => {
        const trailer = document.querySelector(".b-container__trailer");
        trailer.classList.toggle("trailer--active");
    });
}

//Function to close trailer
const joker_closeTrailer = () => {
    document.querySelector(".b-container__trailer span").addEventListener("click", () => {
        const trailer = document.querySelector(".b-container__trailer");
        trailer.classList.toggle("trailer--active");
    });
}

document.addEventListener("DOMContentLoaded", () => {
    joker_openTrailer();
    joker_closeTrailer();
});