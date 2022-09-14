/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let baseNumber = []
const btnConvert = document.getElementById("btn-convert")
const inputNumber = document.getElementById("ipt-number")
const lenghtConvert = document.getElementById("lenght")
const volumeConvert = document.getElementById("volume")
const massConvert = document.getElementById("mass")


btnConvert.addEventListener("click", function() {
    baseNumber = []
    render()
    
})

function render() {
    baseNumber.push(inputNumber.value)
    lenghtConvert.innerHTML = `${baseNumber} meters = ${(baseNumber * 3.281).toFixed(3)} feet | ${baseNumber} feet = ${(baseNumber / 3.281).toFixed(3)} meters`
    volumeConvert.innerHTML = `${baseNumber} liters = ${(baseNumber * 0.264).toFixed(3)} gallons | ${baseNumber} gallons = ${(baseNumber / 0.264).toFixed(3)} liters`
    massConvert.innerHTML = `${baseNumber} kilograms = ${(baseNumber * 2.204).toFixed(3)} pounds | ${baseNumber} pounds = ${(baseNumber / 2.204).toFixed(3)} kilograms`
}