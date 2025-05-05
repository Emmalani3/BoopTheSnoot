const animals = [
    { animal: "blond", x: "155", y: "280" },
    { animal: "bunny", x: "170", y: "300" },
    { animal: "calico", x: "155", y: "250" },
    { animal: "chihuahua", x: "160", y: "360" },
    { animal: "collie", x: "160", y: "360" },
    { animal: "corgi", x: "160", y: "360" },
    { animal: "golden", x: "160", y: "360" },
    { animal: "greyCat", x: "160", y: "360" },
    { animal: "hound", x: "160", y: "360" },
    { animal: "husky", x: "160", y: "360" },
    { animal: "orange", x: "160", y: "360" },
    { animal: "pitty", x: "160", y: "360" },
    { animal: "poodle", x: "160", y: "360" },
    { animal: "ragdoll", x: "160", y: "360" },
    { animal: "rottie", x: "160", y: "360" },
    { animal: "saimese", x: "160", y: "360" },
    { animal: "sphynx", x: "160", y: "360" },
    { animal: "tabby", x: "160", y: "360" },
    { animal: "weiner", x: "160", y: "360" },
    { animal: "wild", x: "160", y: "360" },

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

    boopButton.style.left = `${animalObj.x}px`;
    boopButton.style.top = `${animalObj.y}px`;
    boopButton.textContent = "o";
}


// Initial positioning
loadRandomAnimal();

boopButton.addEventListener("click", () => {
    if (!isBooped) {
        // Show the boop image
        mainImage.src = `animals/${imageName}_boop.png`;
        isBooped = true;
        boopButton.textContent = "x";

        // After 1 second, load a new random animal
        setTimeout(() => {
            loadRandomAnimal();
        }, 1000);
    }
});

