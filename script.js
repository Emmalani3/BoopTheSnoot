// Initial image name (without extension or _boop)
let imageName = "blond";
let isBooped = false;

const mainImage = document.getElementById("mainImage");
const boopButton = document.getElementById("boopButton");

function positionButton() {
    const x = mainImage.dataset.x;
    const y = mainImage.dataset.y;

    boopButton.style.left = `${x}px`;
    boopButton.style.top = `${y}px`;
}

// Initial positioning
positionButton();

boopButton.addEventListener("click", () => {
    if (!isBooped) {
        mainImage.src = `animals/${imageName}_boop.png`;
        isBooped = true;
        boopButton.textContent = "Reset";
    } else {
        mainImage.src = `animals/${imageName}.png`;
        isBooped = false;
        boopButton.textContent = "o";
    }
});
