let firstNum = document.getElementById("firstNumber")
let secondNum = document.getElementById("secondNumber")
let resultAll = document.getElementById("resultAll")


function getNumber() {
    return {
        a: parseFloat(firstNum.value),
        b: parseFloat(secondNum.value)
    }
}

function plus() {
    let nums = getNumber()
    let result = nums.a + nums.b

    resultAll.innerText = result
    console.log(result)
}

function minus() {
    let nums = getNumber()
    let result = nums.a - nums.b

    resultAll.innerText = result
    console.log(result)
}

function multiplication() {
    let nums = getNumber()
    let result = nums.a * nums.b

    resultAll.innerText = result
    console.log(result)
}

function divisity() {
    let nums = getNumber()
    let result = nums.a / nums.b
    if (nums.b === 0) {
        resultAll.innerText = "0 нельзя"
    }
    else {
        resultAll.innerText = result
    }
    console.log(result)
}
function procent() {

    let nums = getNumber()
    let result = nums.a % nums.b

    resultAll.innerText = result
    console.log(result)
}

function stepen() {
    let nums = getNumber()
    let result  = nums.a ** nums.b

    resultAll.innerText =  result
    console.log(result)
}

