const animals = [
    { animal: "blond", x: 50, y: 45 },
    { animal: "bunny", x: 53, y: 50 },
    { animal: "calico", x: 49, y: 40 },
    { animal: "chihuahua", x: 52, y: 61 },
    { animal: "collie", x: 51, y: 52 },
    { animal: "corgi", x: 49, y: 38 },
    { animal: "golden", x: 49, y: 48 },
    { animal: "greyCat", x: 48, y: 38 },
    { animal: "hound", x: 48, y: 42 },
    { animal: "husky", x: 50, y: 51 },
    { animal: "orange", x: 52, y: 33 },
    { animal: "pitty", x: 50, y: 55 },
    { animal: "poodle", x: 49, y: 33 },
    { animal: "ragdoll", x: 47.5, y: 47 },
    { animal: "rottie", x: 51, y: 41 },
    { animal: "saimese", x: 50, y: 42 },
    { animal: "sphynx", x: 50.5, y: 51 },
    { animal: "tabby", x: 53, y: 38 },
    { animal: "weiner", x: 47, y: 37 },
    { animal: "wild", x: 51.5, y: 43 },

]
//select random image
function randomNum(arr) {
    if (arr.length === 0) {
        return "null";
    }
    const num = Math.floor(Math.random() * arr.length);
    return arr[num];
}

const mainImage = document.getElementById("mainImage");
const boopButton = document.getElementById("boopButton");

// Initial image name (without extension or _boop)
let imageName = "";
let isBooped = false;

function loadRandomAnimal() {
    const animalObj = randomNum(animals);
    if (!animalObj) return;

    imageName = animalObj.animal;
    isBooped = false;

    mainImage.src = `animals/${imageName}.png`;

    boopButton.style.left = `${animalObj.x}%`;
    boopButton.style.top = `${animalObj.y}%`;
    boopButton.textContent = "  ";
}


// Initial positioning
loadRandomAnimal();

boopButton.addEventListener("click", () => {
    if (!isBooped) {
        // Show the boop image
        mainImage.src = `animals/${imageName}_boop.png`;
        isBooped = true;
        boopButton.textContent = "  ";

        // After 1 second, load a new random animal
        setTimeout(() => {
            loadRandomAnimal();
        }, 1000);
    }
});

