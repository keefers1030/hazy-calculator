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

    const inputs = ['', undefined, '', 'foo', 'bar']

    let validInputs = arr.filter(invalid => {
        return !inputs.includes(invalid)
    })

    return validInputs

}

let arr = ['13', 'foo', '*', null]

console.log(filterString(arr))


// make calculations
const calculate = (validInputs) => {
    if (validInputs[0] === null) {
        validInputs[0] = 0
    }
    else if (validInputs[2] === null) {
        validInputs[2] = 0
    }

    let operand = validInputs[1]

    //change string numbers to integers
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

//console.log(calculate(['13', '*', null]))

module.exports = calculate
