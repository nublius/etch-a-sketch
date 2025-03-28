const mainContainer = document.getElementById("main-container");
let rows = 16;
let columns = 16;

// INITIALIZE grid
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

    const boxes = document.querySelectorAll(".box");

    // HOVER function
    boxes.forEach((div) => {
        div.addEventListener("mouseover", () => {
            div.style.borderColor = "red";
        })
    })
}

// CALL grid function
makeGrid()

const askUser = function() {
    let count = prompt("Enter dimensions (Maximum is 100)");
    if (count > 100) {
        alert("Error, maximum is 100");
    } else if (count < 1) {
        alert("Error, 1-100");
    } else {
        rows = parseInt(count);
        columns = parseInt(count);
        mainContainer.replaceChildren();
        makeGrid();
    }
}

const btn = document.querySelector(".btn");
btn.addEventListener("click", askUser);