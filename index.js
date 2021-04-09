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

console.log(filterString(['2', '*', 4]))



//function 2
//Make calculations
const calculationSteps = (validInputs) => {
    const operand = ['+', '-', '*', '/']

    switch (operand) {
        case '+':
            return (parseInt(i[0]) + parseInt(i[2]));

        case '-':
            return (i[0] - i[2]);

        case '*':
            return (i[0] * i[2]);

        case '/':
            return (i[0] / i[2]);
        //if no operand, returns NaN
        default: NaN
            break;
    }

}

module.exports = calculationSteps


