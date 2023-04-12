const scroller = document.querySelector(".container");
const content = document.querySelector(".content");
const videos = document.querySelectorAll("video");
const rotator = document.querySelector(".grid_container");

function scrollTo() {
    const { offsetHeight: length } = scroller;
    const degree = Math.floor(
        (window.scrollY / (length - window.innerHeight)) * 270
    );
    const scale =
        (window.scrollY / (length - window.innerHeight)) * (2.5 - 1) + 1;
    const vidScale =
        (window.scrollY / (length - window.innerHeight)) * (3 - 1.3) + 1.3;

    rotator.style.transform = `rotateZ(${degree}deg) scale(${scale.toFixed(
        1
    )})`;
    videos.forEach(
        (video) =>
            (video.style.transform = `rotateZ(-${degree}deg) scale(${vidScale}) `)
    );
    console.log({ scale, vidScale });
}

window.addEventListener("scroll", scrollTo);
