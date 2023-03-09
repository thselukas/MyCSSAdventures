let menu = document.querySelector(".menu");

let menuSections = [...document.querySelectorAll(".menu-section")];

let menuWrapper = document.querySelector(".inner-menu-wrapper");

console.log(menuSections)

const ANIMATION_DURATION = 150;

let activeIndex = 0;

let fade_in = [
    {opacity: "0"},
    {opacity: "1"}
];

let fade_out = [
    {opacity: "1"},
    {opacity: "0"}
]

function clickLeft() {
    if(activeIndex == 0) return;

    menuSections[activeIndex].animate(fade_out, {
        duration: ANIMATION_DURATION,
        fill: "forwards"
    });

    setTimeout(() => {
        menuSections[activeIndex].dataset.active = "false";
        menuSections[--activeIndex].dataset.active = "true";
        menuSections[activeIndex].animate(fade_in, {
            delay: 0,
            duration: ANIMATION_DURATION,
            fill: "forwards"
        });
    }, ANIMATION_DURATION + 100);
    menu.dataset.activeIndex = activeIndex;

}

function clickRight() {
    if(activeIndex == 4) return;

    menuSections[activeIndex].animate(fade_out, {
        duration: ANIMATION_DURATION,
        fill: "forwards"
    });

    setTimeout(() => {
        menuSections[activeIndex].dataset.active = "false";
        menuSections[++activeIndex].dataset.active = "true";
        menuSections[activeIndex].animate(fade_in, {
            delay: 0,
            duration: ANIMATION_DURATION,
            fill: "forwards"
        });
    }, ANIMATION_DURATION + 100);
    menu.dataset.activeIndex = activeIndex;
}