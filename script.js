
const paragraphEl = document.querySelectorAll("article p");


// this section will display ellipsis if the app descriptions are too long
// and have overflowed the card space
const setupCardEllipsis = (e) => {
    paragraphEl.forEach(el => {
        const spanEl = el.nextElementSibling.firstElementChild;

        if (el.scrollHeight > el.clientHeight) {
            spanEl.style.opacity = "1";
        } else {
            spanEl.style.opacity = "0";
        }
    });
}
setupCardEllipsis();

window.addEventListener("resize", setupCardEllipsis)


//TODO figure out why scrollHeight is bigger than clientHeight even if there is no overflow?
//TODO make the ellipsis actually do something interesting if clicked on like ?? (show the rest of the text in a tooltip?)