const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");
const color=document.getElementsByClassName("color-button");
const mode=document.getElementById("mode-change");
const range=document.getElementById("range__bar");


let painting=false;
let filling=false;

canvas.width=700;
canvas.height=500;

ctx.lineWidth=2.5;
ctx.strokeStyle="#2c2c2c";

function stopPainting(event){
    painting=false;
}

function startPainting(event){
    painting=true;
}

function handleMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    }
    else{
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

function handleChangeColor(event){
    const color= event.target.style.backgroundColor;
    ctx.strokeStyle=color;
}

function handleModeClick(event){
    if(filling==false){
        mode.innerText="Paint";
        filling=true;
    }
    else{
        mode.innerText="Fill"
        filling=false;
    }
}

function handleBrushSize(event){
    const size=event.target.value;
    ctx.lineWidth=size;
}

if (canvas){
    canvas.addEventListener("mouseleave",stopPainting);
    canvas.addEventListener("mousemove",handleMouseMove);
    canvas.addEventListener("mousedown",startPainting);
    canvas.addEventListener("mouseup",stopPainting);
}

Array.from(color).forEach(color=>color.addEventListener("click",handleChangeColor));

if (mode) {
    mode.addEventListener("click", handleModeClick);
  }

  if (range){
      range.addEventListener("input",handleBrushSize);
  }