const images = document.querySelectorAll(".itemBox img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-img");
const modalTxt =document.querySelector(".modal-text");
const close = document.querySelector(".modal-close");

images.forEach((image) => {
    image.addEventListener("click",() => {
        modalImg.src = image.src;
        modalTxt.innerHTML = image.alt;
        modal.classList.add("appear");

        close.addEventListener("click", () => {
            modal.classList.remove("appear")
        })
    });
});