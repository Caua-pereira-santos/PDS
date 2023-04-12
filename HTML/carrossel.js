const carrossel = document.querySelector(".carrossel"),
firstImg = carrossel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14

arrowIcons.forEach(icon => {
    icon.addEventListener("click", ()=> {
        carrossel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    })
});

const dragStart = (e) => {
    let isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carrossel.scrollLeft
}

const dragging = (e) => {
    if(isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pagex - prevPageX
    console.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
}

carrossel.addEventListener("mousedown", dragging);
carrossel.addEventListener("mousemove", dragging);
carrossel.addEventListener("mouseup", dragStop);