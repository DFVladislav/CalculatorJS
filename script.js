let firstNum = document.getElementById("firstNumber")
let secondNum = document.getElementById("secondNumber")
let resultAll = document.getElementById("resultAll")


function getNumber() {
    return {
        a: Number(firstNum.value),
        b: Number(secondNum.value)
    }
}

function plus() {
    let nums = getNumber()
    let result = nums.a + nums.b

    resultAll.innerText = result
}

function minus() {
    let nums = getNumber()
    let result = nums.a - nums.b

    resultAll.innerText = result
}

function multiplication() {
    let nums = getNumber()
    let result = nums.a * nums.b

    resultAll.innerText = result
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
}
