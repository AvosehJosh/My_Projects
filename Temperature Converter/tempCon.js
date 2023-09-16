let celciusInput = document.querySelector('#celcius > input')
let kelvinInput = document.querySelector('#kelvin > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input')

let btn = document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100
}

celciusInput.addEventListener('input', function() {
    let cTemp = parseFloat(celciusInput.value)
    let ftemp = (cTemp*(9/5)) + 32
    let ktemp = cTemp + 273.15

    fahrenheitInput.value = roundNumber(ftemp)
    kelvinInput.value = roundNumber(ktemp)
})

kelvinInput.addEventListener('input', function() {
    let kTemp = parseFloat(kelvinInput.value)
    let ctemp = kTemp - 273.15
    let ftemp = (kTemp - 273.15) * (9/5) + 32

    celciusInput.value = roundNumber(ctemp)
    fahrenheitInput.value = roundNumber(ftemp)
})


fahrenheitInput.addEventListener('input', function() {
    let fTemp = parseFloat(fahrenheitInput.value)
    let ctemp = (fTemp - 32) * (5/9)
    let ktemp = (fTemp - 32) * (5/9) + 273.15

    celciusInput.value = roundNumber(ctemp)
    kelvinInput.value = roundNumber(ktemp)
})

btn.addEventListener('click', ()=>{
    celciusInput.value = ""
    kelvinInput.value = ""
    fahrenheitInput.value = ""
})