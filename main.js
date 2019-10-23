var redSlider = document.getElementById('redAdjust')
var redOutput = document.getElementById('redResult')
let totalResult = document.getElementById('totalResult')

var greenSlider = document.getElementById('greenAdjust')
var greenOutput = document.getElementById('greenResult')

var blueSlider = document.getElementById('blueAdjust')
var blueOutput = document.getElementById('blueResult')

function display(){
    let redDigit = Number(redOutput.innerText) 
    let greenDigit = Number(greenOutput.innerText)
    let blueDigit = Number(blueOutput.innerText)  
    //console.log(Number(redDigit))
    if(redDigit < 16) {
        redDigit = "0" + redDigit.toString(16)
        //console.log(redDigit)
    }
    else{redDigit = redDigit.toString(16)}

    if(greenDigit < 16){
        greenDigit = "0" + greenDigit.toString(16)
    }
    else{greenDigit = greenDigit.toString(16)}

    if(blueDigit < 16){
        blueDigit = "0" + blueDigit.toString(16)
    }
    else{blueDigit = blueDigit.toString(16)}

    totalResult.innerText = redDigit + greenDigit + blueDigit
} 


redOutput.innerText = redSlider.value
redSlider.oninput = function(){
    redOutput.innerText = this.value
    display()
    document.body.style.backgroundColor = `#${totalResult.innerText}`
}



greenOutput.innerText = greenSlider.value
greenSlider.oninput = function(){
    greenOutput.innerText = this.value
    display()
    document.body.style.backgroundColor = `#${totalResult.innerText}`
}



blueOutput.innerText = blueSlider.value
blueSlider.oninput = function(){
    blueOutput.innerText = this.value
    display()
    document.body.style.backgroundColor = `#${totalResult.innerText}`
}


//let totalResult = document.getElementById('totalResult')
totalResult.innerText = "0" + redOutput.innerText + "0" + greenOutput.innerText + "0" + blueOutput.innerText