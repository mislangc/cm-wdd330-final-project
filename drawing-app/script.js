const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const brushSize = document.getElementById("brush-size");
const brushColor = document.getElementById("color");
const clearButton = document.getElementById("clear-canvas");
const saveButton = document.getElementById("save-drawing");
const drawings = document.getElementById("recent-drawings");

let size = 30;
let isPressed = false;
let color = "black";

canvas.addEventListener("mousedown", () => {
    isPressed = true;
})
canvas.addEventListener("mouseup", () => {
    isPressed = false;
})

canvas.addEventListener("mousemove", (position) => {
    if (isPressed) {
        let x = position.offsetX;
        let y = position.offsetY;
        drawSquare(x, y);
     };
});

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawSquare(x, y) {
    ctx.fillRect(x, y, size, size);
    ctx.fillRect(x, y, -size, size);
    ctx.fillRect(x, y, size, -size);
    ctx.fillRect(x, y, -size, -size);
    ctx.fillStyle = color;
}

increaseButton.addEventListener("click", () => {
    size += 5;
    if (size > 50) {
        size = 50;
    }
    updateBrushSize();
});
decreaseButton.addEventListener("click", () => {
    size -= 5;
    if (size 
        < 5) {
        size = 5;
    }
    updateBrushSize();
});

function updateBrushSize() {
    brushSize.innerText = size;
}

brushColor.addEventListener("change", (currentColor) => {
    color = currentColor.target.value;
}) 

clearButton.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})

saveButton.addEventListener("click", () => {
    const img  = canvas.toDataURL('image/png');

    let saveImageContainer = document.createElement("img");
    saveImageContainer.src = img;
    saveImageContainer.alt = "user-drawing";
    saveImageContainer.setAttribute ("class","mini-drawings");
    saveImageContainer.style.backgroundColor = "white";

    drawings.appendChild(saveImageContainer);

    let drawingList = document.getElementsByTagName("img");
    if (drawingList.length > 4) {
        drawingList[0].remove();
    }
})
