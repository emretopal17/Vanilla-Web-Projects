const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const colorBtn = document.getElementById('color');
const sizeEl = document.getElementById('size');
const ctx = canvas.getContext("2d");
const clearBtn = document.getElementById('clear');

let size = 30;
let isPressed = false;
let color = "black";
let x=0;
let y=0;


canvas.addEventListener("mousedown",(e) => {
    isPressed = true;
    x = e.offsetX
    y = e.offsetY
   
})

canvas.addEventListener("mouseup",() => {
    isPressed = false;
    x=0;
    y=0;
})

canvas.addEventListener("mousemove",(e)=>{
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawcircle(x,y);
        drawLine(x,y,x2,y2);
        x = x2;
        y = y2;
    }
})

function drawcircle(x,y){
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = color;
    ctx.lineWidth=size
    ctx.stroke();
}

increaseBtn.addEventListener("click",()=>{
    size+=5;
    if (size > 50) {
        size = 50;
    }
    updateSizeOnScreen();

});

decreaseBtn.addEventListener("click",() => {
    size-=5;
    if (size<5) {
        size=5;
    }
    updateSizeOnScreen();
});

function updateSizeOnScreen() {
    sizeEl.innerHTML=size;
} 


colorBtn.addEventListener("change",(e) => {
    color = e.target.value;
})

clearBtn.addEventListener("click",() => {
    ctx.clearRect(0,0,canvas.width,canvas.height);
})