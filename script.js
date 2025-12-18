const container = document.querySelector(".star-background");
const numStars = 100;

for (let i = 0; i < numStars; i++) {
    let star = document.createElement("img");
    star.style.position = "absolute";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.width = `${Math.random() * 20 + 20}px`;
    container.appendChild(star);
    setTimeout(function() {
        if (i < 10) {
        star.src = "miniStar2.gif";
        } else if (i < 55) {
        star.src = "miniStar1.gif";
        } else {
        star.src = "miniStar3.gif";
        }
    }, Math.floor(Math.random() * 300));
}