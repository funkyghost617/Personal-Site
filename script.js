const container = document.querySelector(".star-background");
const numStars = 80;

for (let i = 0; i < numStars; i++) {
    let star = document.createElement("img");
    star.style.position = "absolute";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.width = `${Math.random() * 20 + 20}px`;
    star.style.opacity = `${Math.random() * 0.6 + 0.2}`;
    if (i < 8) {
        star.src = "./media/miniStar2.gif";
    } else if (i < 45) {
        star.src = "./media/miniStar1.gif";
    } else {
        star.src = "./media/miniStar3.gif";
    }
    container.appendChild(star);
}