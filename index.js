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
* Non-numeric values (eg. `'foo'`) should be ignored*/

const calculate = (arr) => {

    //check if input is number or operand
    const operand = [`+`, `-`, `*`, `/`]

    //if operand, use it to do an action against the numbers
    //if no operand, returns NaN

    //check if null is included in values
    //if null, treat it as 0

    //ignore undefined and empty string values and continues operation
    //ignores non-numeric values  and continues operation

    //multiplies two numbers when one is stringified'
}