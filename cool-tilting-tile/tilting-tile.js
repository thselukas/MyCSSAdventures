const MAX_TILT_X = 50; 
const MAX_TILT_Y = 50;

document.onmousemove = e => {
    if(!e.target.classList.contains("tile1") && !e.target.classList.contains("title-content")) {
        document.querySelector("tile1").animate({
            transform: "rotateX(0deg) rotateY(0deg)"
        }, {
            delay: 0,
            duration: 0.5,
            fill: "forwards"
        })
        return;
    }
    
    var rect = e.target.getBoundingClientRect();

    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;

    var boundx = rect.right - rect.left;
    var boundy = rect.bottom - rect.top;

    var tilt_x = MAX_TILT_X * ((x/boundx) - 0.5) * -1;
    var tilt_y = MAX_TILT_Y * ((y/boundy) - 0.5) * -1;

    var card = document.querySelector(".tile1");
    
    card.animate({
        transform: `rotateX(${tilt_y}deg) rotateY(${tilt_x}deg)`
    }, {
        delay: 0,
        duration: 1,
        fill: "forwards"
    })

    console.log("ANGLE: X: " + (360 + tilt_y))
}

document.getElementsByClassName("tile1")[0].addEventListener("mouseleave", e => {
    document.querySelector("tile1").animate({
        transform: "rotateX(0deg) rotateY(0deg)"
    }, {
        delay: 0,
        duration: 0.5,
        fill: "forwards"
    })
})

