const container = document.querySelector(".star-background");
const numStars = 100;

for (let i = 0; i < numStars; i++) {
    let star = document.createElement("div");
    star.classList.add("star");
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.width = `${Math.random() * 3 + 1}px`;
    star.style.height = star.style.width;
    star.style.animationDuration = `${Math.random() * 3 + 1}s`;
    container.appendChild(star);
}