let field = document.querySelector(".cont")
for(let i = 0; i <= 900; i += 1){
    let elm = document.createElement("div")
    elm.classList.add("cell")
    elm.style.backgroundColor = "grey"
    field.appendChild(elm)
}
let CURRENT_COLOR = 'black'
let COLORS = [
    'white',
    'red',
    'black',
    'yellow',
    'blue'
]
let clrs = document.querySelectorAll('.color-cell')
for(let i = 0; i < clrs.length; i += 1){
    clrs[i].addEventListener('click', function(){
    CURRENT_COLOR = COLORS[i]
    }
    )
}

let clck = false
document.addEventListener('mousedown', function(){
    clck = true
})
document.addEventListener('mouseup', function(){
    clck = false
})
let allcells = document.querySelectorAll('.cell')
for(let i = 0; i < allcells.length; i += 1){
    allcells[i].addEventListener('mouseover', function(){
        if (clck) {
            allcells[i].style.backgroundColor = CURRENT_COLOR;
        }
    })
    allcells[i].addEventListener('mousedown', function(){
        allcells[i].style.backgroundColor = CURRENT_COLOR;
    })
}

document.querySelector("#save-tool").addEventListener('click', function(){
    console.log("работает")
    domtoimage.toJpeg(field , { quality: 0.95 })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'picture.jpeg';
        link.href = dataUrl;
        link.click();
    });
})
