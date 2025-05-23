const overlay = document.getElementById("fish-overlay");

const fishSVG = `
<svg viewBox="0 0 64 32" xmlns="http://www.w3.org/2000/svg" fill="orange" stroke="black" stroke-width="1">
  <ellipse cx="32" cy="16" rx="30" ry="15" />
  <polygon points="14,16 0,2 0,30" fill="orangered" />
  <circle cx="48" cy="12" r="3" fill="black" />
</svg>
`;

function createFish(x, y, flipped) {
    const fish = document.createElement("div");
    fish.classList.add("fish");
    fish.innerHTML = fishSVG;
    fish.style.left = x + "px";
    fish.style.top = y + "px";
    fish.style.transform = flipped ? "scaleX(-1)" : "scaleX(1)";
    return fish;
}

function startTransition(targetUrl) {
    overlay.innerHTML = "";
    overlay.style.display = "block";
    overlay.style.pointerEvents = "auto";

    const fishSize = 120;
    const cols = Math.ceil(window.innerWidth / (fishSize * 0.7)) + 1;
    const rows = Math.ceil(window.innerHeight / (fishSize * 0.7)) + 1;

    const fishes = [];

    for(let r = 0; r < rows; r++) {
        for(let c = 0; c < cols; c++) {
            // Décalage aléatoire pour casser l'alignement strict (±30px)
            const offsetX = (Math.random() - 0.5) * fishSize * 0.6;
            const offsetY = (Math.random() - 0.5) * fishSize * 0.6;

            const x = c * fishSize * 0.7 + offsetX;
            const y = r * fishSize * 0.7 + offsetY;

            const flipped = Math.random() > 0.5;
            const fish = createFish(x, y, flipped);
            overlay.appendChild(fish);
            fishes.push(fish);
        }
    }

    const duration = 1500;
    let start = null;

    function animate(timestamp) {
        if(!start) start = timestamp;
        const elapsed = timestamp - start;

        const progress = Math.min(elapsed / duration, 1);
        const distance = window.innerWidth + fishSize;

        fishes.forEach((fish, i) => {
            const direction = (i % 2 === 0) ? 1 : -1;
            // On applique translateX avant le scaleX initial pour éviter override
            fish.style.transform = `translateX(${direction * progress * distance}px) ${fish.style.transform.includes("scaleX(-1)") ? "scaleX(-1)" : "scaleX(1)"}`;
        });

        if(progress < 1) {
            requestAnimationFrame(animate);
        } else {
            overlay.style.display = "none";
            overlay.innerHTML = "";
            window.location.href = targetUrl;
        }
    }

    requestAnimationFrame(animate);
}

function handleLinkClick(e) {
    const link = e.currentTarget;
    const href = link.getAttribute("href");

    if(!href || href.startsWith("#") || href.startsWith("javascript:")) return;

    e.preventDefault();
    startTransition(href);
}

window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("a[href]").forEach(link => {
        link.addEventListener("click", handleLinkClick);
    });
});
