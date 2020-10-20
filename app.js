const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");
const color=document.getElementsByClassName("color-button");
const mode=document.getElementById("mode-change");
const range=document.getElementById("range__bar");
const save=document.getElementById("mode-save");

const CANVAS_HEIGHT=500;
const CANVAS_WIDTH=700;
const DEFAULT_COLOR="#2C2C2C"

let painting=false;
let filling=false;

canvas.width=CANVAS_WIDTH;
canvas.height=CANVAS_HEIGHT;

ctx.fillStyle="white";
ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
ctx.lineWidth=2.5;
ctx.strokeStyle=DEFAULT_COLOR;
ctx.fillStyle=DEFAULT_COLOR;

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
    ctx.fillStyle=color;
}

function handleModeClick(event){
    if(!filling){
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

function fillScreen(event){
    if(filling){
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
}

function preventRightClick(event){
    event.preventDefault();
}

function saveMyImage(event){
    //toDataURL 이용해서  이미지를 URL데이터로 변환할것.
    const image=canvas.toDataURL("image/jpeg");
    const link=document.createElement('a');
    link.href=image;
    link.download="My PaintJS[🎈]"
    link.click();  
}

if (canvas){
    canvas.addEventListener("mouseleave",stopPainting);
    canvas.addEventListener("mousemove",handleMouseMove);
    canvas.addEventListener("mousedown",startPainting);
    canvas.addEventListener("mouseup",stopPainting);
    canvas.addEventListener("click",fillScreen);
    canvas.addEventListener("contextmenu", preventRightClick);
}

Array.from(color).forEach(color=>color.addEventListener("click",handleChangeColor));

if (mode) {
    mode.addEventListener("click", handleModeClick);
}

if (range){
    range.addEventListener("input",handleBrushSize);
}

if (save){
    save.addEventListener("click",saveMyImage);
}

//This is my only self recap code.
// const canvas=document.getElementById("canvas");
// const ctx = canvas.getContext('2d');
// const color=document.getElementsByClassName("color-button");
// const range=document.getElementById("range__bar");
// const mode=document.getElementById("mode-change");
// const save=document.getElementById("mode-save");

// const DEFAULT_COLOR="#2C2C2C";

// let painting=false;
// let filling=false;

// ctx.fiilStyle="white";
// ctx.fillRect(0,0,canvas.width,canvas.height);

// ctx.lineWidth=2.5;
// ctx.strokeStyle=DEFAULT_COLOR;
// ctx.fiilStyle=DEFAULT_COLOR;

// canvas.width=700;
// canvas.height=500;


// function startPainting(evnet){
//     painting=true;
// }
// function stopPainting(event){
//     painting=false;
// }
// function onMouseMove(event){
//     const x=event.offsetX;
//     const y=event.offsetY;
//     if (!painting){
//         ctx.beginPath();
//         ctx.moveTo(x,y);
//     }else{
//         ctx.lineTo(x,y);
//         ctx.stroke();
//     }
// }

// function handleChangeColor(event){
//     const color=event.target.style.backgroundColor;
//     ctx.strokeStyle=color;
//     ctx.fillStyle=color;
// }

// function handleBrushSize(event){
//     const size=event.target.value;
//     ctx.lineWidth=size;
// }

// function handleChangeMode(event){
//     if (!filling){
//         mode.innerText="Paint";
//         filling=true;
//     }else{
//         mode.innerText="Fill";
//         filling=false;
//     }
// }

// function fiilScreen(event){
//     if(filling){
//         ctx.fillRect(0,0,canvas.width,canvas.height);
//     }
// }

// function preventRightClick(event){
//     event.preventDefault();
// }

// function handleSaveBtn(event){
//     const image=canvas.toDataURL("image/png");
//     const link=document.createElement('a');
//     link.href=image;
//     link.download="MY paintJS[🎈]";
//     link.click();
// }

// if(canvas){
//     canvas.addEventListener("mouseup",stopPainting);
//     canvas.addEventListener("mousedown",startPainting);
//     canvas.addEventListener("mouseleave",stopPainting);
//     canvas.addEventListener("mousemove",onMouseMove);
//     canvas.addEventListener("click",fiilScreen);
//     canvas.addEventListener("contextmenu",preventRightClick);
// }

// if(color){  
//     Array.from(color).forEach(color=>color.addEventListener("click",handleChangeColor));
// }

// if(range__bar){
//     range.addEventListener("input",handleBrushSize);
// }

// if(mode){
//     mode.addEventListener("click",handleChangeMode);
// }

// if(save){
//     save.addEventListener("click",handleSaveBtn);
// }