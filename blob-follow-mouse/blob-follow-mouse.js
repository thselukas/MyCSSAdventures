let mouse_trailer = document.querySelector(".mouse-trailer");

document.onmousemove = e => {
    var x = e.clientX;
    var y = e.clientY;

    console.log(`X: ${x} , Y: ${y}`)

    mouse_trailer.animate({
        top: `${y}px`,
        left: `${x}px`
    }, {
        duration: 500,
        delay: 0,
        fill: "forwards"
    })
};

document.querySelector("html").onmouseenter = () => {
    mouse_trailer.classList.remove("hidden");
}

document.querySelector("html").onmouseleave = () => {
    mouse_trailer.classList.add("hidden");
}