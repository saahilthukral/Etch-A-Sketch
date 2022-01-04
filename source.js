const container = document.querySelector('#container');
const container2 = document.querySelector('#container2');
let height, width;

//This is the function to generate a random colour value.
function randomColour(colourCode){
    return Math.floor(Math.random()* colourCode);
}

function dynamicEtchASketch(height, width){
    container.style.gridTemplateColumns = `repeat(${height}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${width}, 1fr)`;    
    for(let i = 0; i < height*width ; i++){
        const div = document.createElement('div');
        div.classList.add("div");
        div.style.backgroundColor = "#ffffff";
        div.style.border = "solid 1px";
        div.style.padding = "20%";

        div.addEventListener("mouseover", function colourChange(){    
            const randomColours =  "rgb(" + randomColour(255) + "," + randomColour(255) + "," + randomColour(255) + ")";
            div.style.backgroundColor = randomColours;
        });
        container.appendChild(div);
    // }
    }
}
dynamicEtchASketch(16,16);

const button = document.createElement("button");
button.textContent = "Reset Etch-A-Sketch";
button.addEventListener("click", () =>{
    height = prompt("Enter the height of the grid ");
    width = prompt("Enter the width of the grid ");
    container.innerHTML = ""
    if((height > 0 && height <= 100) && (width > 0 && width <=100)){
        dynamicEtchASketch(height, width);
    }
    else{
        dynamicEtchASketch(16, 16);
    }

    
});

container2.appendChild(button);


//Legacy code
//Grid creater
// function defaultEtchSetup(){
//     container.style.gridTemplateColumns = 'repeat(16, 1fr)';
//     container.style.gridTemplateRows = 'repeat(16, 1fr)';
//     for(let i = 0; i < 256; i++){
//         // for(let j = 0; j < 2; j++){
//         const div = document.createElement('div');
//         div.classList.add("div");
//         div.textContent = "eh ";
//         // div.style.width = "120%";
//         // div.style.height = "120%";
//         div.style.padding = "2%";
//         div.style.border = "solid 1px";
//         div.style.padding = "10%";
//         // div.style.margin = "%";
//         div.addEventListener("mouseover", () =>{
//             div.style.backgroundColor = "black";
//         })
//         // div.addEventListener("mouseleave", () => {
//         //     div.style.backgroundColor = "white";
//         // })
//         container.appendChild(div);
//     // }
//     }
//     // contain
    
// }



// window.onload = () => {
//     height = prompt("Enter the height of the grid ");
// width = prompt("Enter the width of the grid ");
// dynamicEtchASketch(height, width);
// }