const carrossel = document.querySelector(".carrossel"),
firstImg = carrossel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, prevPageX, prevScrollLeft;




const showHideIcons = () => {
    arrowIcons[0].style.display = carrossel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carrossel.scrollLeft == scrollwidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", ()=> {
        let firstImgWidth = firstImg.clientWidth + 14
        carrossel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(),60);
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
    carrossel.classList.add ("dragging");
    let positionDiff = e.pagex - prevPageX
    carrossel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carrossel.classList.remove ("dragging");
}

carrossel.addEventListener("mousedown", dragging);
carrossel.addEventListener("mousemove", dragging);
carrossel.addEventListener("mouseup", dragStop);
carrossel.addEventListener("mouseleave", dragStop)