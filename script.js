const mainContainer = document.getElementById("main-container");
const rows = 16;
const columns = 16;

const makeGrid = function() {
    for (let i = 0; i < columns; i++) {
        const boxColumn = document.createElement("div");
        boxColumn.classList.add("column");
        mainContainer.appendChild(boxColumn);
        for (let j = 0; j < rows; j++) {
            const boxDiv = document.createElement("div");
            boxColumn.appendChild(boxDiv);
            boxDiv.classList.add("box");
        }
    }
}

makeGrid()

const boxes = document.querySelectorAll(".box");

boxes.forEach((div) => {
    div.addEventListener("mouseover", () => {
        div.style.borderColor = "red";
    })
})