const operands = ['+', '-', '*', '/']
const invalids = ['', undefined, '', 'foo', 'bar']

const filterArr = (arr) => {
    const validInputs = []
    const invalids = ['', undefined, '', , 'foo', 'bar']

    // loop through array
    // removes/ignores non numeric numbers
    for (let i = 0; i < arr.length; i++) {
        if ((typeof arr[i] === 'number' || typeof arr[i] === 'string' || operands.includes(arr[i])) && arr[i] !== 'invalids' && arr[i] !== '') {

            validInputs.push(arr[i])
        }
    }

    return validInputs

}

console.log(filterArr([, , '', 23, '-', , 12]))



/* const inputs = ['', undefined, '', 'foo', 'bar']

const validInputs = arr.filter(invalid => {
  return (!inputs.includes(invalid))
})

return validInputs
}*/

// make calculations
const calculate = (validInputs) => {
    let validInput2 = validInputs

    if (validInputs2[0] === null) {
        validInputs2[0] = 0
    }
    else if (validInputs[2] === null) {
        validInputs[2] = 0
    }

    let operand = validInputs2[1]

    // change string numbers to integers
    let num1 = (validInputs2[0])
    let num2 = (validInputs2[2])

    console.log(num1, num2)

    switch (operand) {
        case '+':
            return (num1 + num2)

        case '-':
            return (num1 - num2)

        case '*':
            return (num1 * num2)

        case '/':
            return (num1 / num2)
        // if no operand, returns NaN
        default:
            return (NaN)
    }
}

console.log(calculate([, , '', 23, '-', , 12]))

module.exports = calculate
