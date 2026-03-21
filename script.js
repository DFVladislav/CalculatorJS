let firstNum = document.getElementById("firstNumber")
let secondNum = document.getElementById("secondNumber")
let resultAll = document.getElementById("resultAll")
let later = document.getElementById("later")




function getNumber() {
    return {
        a: parseFloat(firstNum.value),
        b: parseFloat(secondNum.value),  
    }
}


function plus() {       /
    let nums = getNumber()
    let result = nums.a + nums.b
    resultAll.innerText = `Ваш результат: ${result}`
    console.log(result)
}

function minus() {                      
    let nums = getNumber()
    let result = nums.a - nums.b

    resultAll.innerText = `Ваш результат: ${result}`
    console.log(result)
}

function multiplication() {
    let nums = getNumber()
    let result = nums.a * nums.b

    resultAll.innerText = `Ваш результат: ${result}`
    console.log(result)
}

function divisity() {
    let nums = getNumber()
    let result = nums.a / nums.b
    if (nums.b === 0 || nums.a === 0) {
        resultAll.innerText = "0 нельзя"
    }
    else {
        resultAll.innerText = `Ваш результат: ${result}`
    }
    console.log(result)
}
function procent() {
    let nums = getNumber()
    let result = nums.a % nums.b
    if (nums.b === 0 || nums.a === 0) {
        resultAll.innerText = "0 нельзя"
    }
    else {
        resultAll.innerText = `Ваш результат: ${result}`
    }
    console.log(result)
}

function stepen() {
    let nums = getNumber()
    let result = nums.a ** nums.b

    resultAll.innerText = `Ваш результат: ${result}`
    console.log(result)
}


