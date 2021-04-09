/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable spaced-comment */

/*
The`calculate` function runs an arithmetic calculation
based upon an array of inputs(eg. `[2, '*', 10]`)
Each input should be either a number or an operand (`+`, `-`, `*`, `/`)

Our upstream data is inconsistent, so we _intentionally_ accept it and deal with it in the following ways:
* Stringified numbers (eg. `'2'`) should be treated as numbers
* `NULL` should be treated as zero
* `undefined` values should be ignored
* Empty string values (eg. `''`) should be ignored 
* Non-numeric values (eg. `'foo'`) should be ignored
*/


const filterString = (arr) => {
    //loop through array
    //removes/ignores non numeric numbers
    //change string numbers to integers
    //change null to 0

    const inputs = ['', undefined, '']

    let validInputs = arr.filter(invalid => {
        return !inputs.includes(invalid)
    })

    return validInputs
}

//console.log(filterString([10, '+', null]))



//function 2
//Make calculations
const calculationSteps = (validInputs) => {

    let operand = validInputs[1]

    if (validInputs[0] === null) {
        validInputs[0] = 0;
    }
    else if (validInputs[2] === null) {
        validInputs[2] = 0;
    }

    let num1 = parseInt(validInputs[0])
    let num2 = parseInt(validInputs[2])


    switch (operand) {
        case '+':
            return (num1 + num2)

        case '-':
            return (num1 - num2)

        case '*':
            return (num1 * num2)

        case '/':
            return (num1 / num2)
        //if no operand, returns NaN
        default:
            return (NaN)
    }
}

console.log(calculationSteps([10, '+', null]))


module.exports = calculationSteps


