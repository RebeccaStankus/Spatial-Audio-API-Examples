
let peers = [];

let dotsCanvas = document.getElementById("dotsCanvas");
let ctx = dotsCanvas.getContext('2d');
let dotsCanvasContainerDimension;
function resizeCanvas() {
    let dotsCanvasContainer = document.getElementById("dotsCanvasContainer");
    const MIN_CANVAS_CONTAINER_WIDTH = 250;
    const MAX_CANVAS_CONTAINER_WIDTH = 800;
    dotsCanvasContainerDimension = Math.min(Math.max(dotsCanvasContainer.clientWidth, MIN_CANVAS_CONTAINER_WIDTH), MAX_CANVAS_CONTAINER_WIDTH);
    dotsCanvas.style.width = dotsCanvasContainerDimension + "px";
    dotsCanvas.style.height = dotsCanvasContainerDimension + "px";
    dotsCanvasContainer.style.height = dotsCanvasContainerDimension + "px";
}
resizeCanvas();

function draw() {
    ctx.fillStyle = "#0F0F0F";
    ctx.fillRect(0, 0, dotsCanvasContainerDimension, dotsCanvasContainerDimension);
  
    for (let i = 0; i < peers.length; i++) {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      ctx.fill();
    }
}

window.onresize = resizeCanvas;
requestAnimationFrame(draw);
