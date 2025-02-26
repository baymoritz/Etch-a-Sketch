
const container = document.querySelector(".square-container");

const btn = document.querySelector("button");

function createGrid(size) {
    clearGrid();
    for (let x = 0; x <= size; x++) {
        const gridElement = document.createElement("div");
        gridElement.classList.add("square");
        container.appendChild(gridElement);
    }
    attachHoverEffect();
}

btn.addEventListener("click", () => {

    userInput = getUserInput();
    creaateGrid(userInput)
}
)

function getUserInput() {
    let userInput = prompt("how many grids?")
    return userInput * userInput
}

function attachHoverEffect() {
    const squares = document.querySelectorAll(".square");

    squares.forEach(square => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        });
    });
}

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}


