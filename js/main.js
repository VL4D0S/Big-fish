document.addEventListener("DOMContentLoaded", () => {
    const soundLink = document.querySelector("#sound-link");
          headerButton = document.querySelector(".header__button");

    headerButton.addEventListener("click", function() {
        soundLink.play();
    });
});