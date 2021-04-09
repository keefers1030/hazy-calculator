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



//filter through array and filter out non numbers and non-operators
const filterString = (arr) => {
    const inputs = ['+', '-', '*', '/', 'null', '1', '2', '3', '4', '5', '6', '7', '8', '9']

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i]; {
            let validInputs = arr.filter(invalid => {
                inputs.includes(invalid)
                return validInputs
            })
        }
    }

    const checkString = (arr) => {

        //loop through array
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i]; {

                const operand = [`+`, `-`, `*`, `/`]
                //if operand, go to calculate
                if (arr[i] === operand) {
                    calculate(num1, num2)
                }
                else if (arr[i] === '')
        }
        }

        const calculate = (arr) => {
            switch (operand) {
                case '+':
                    return (num1 + num2);

                case '-':
                    return (num1 - num2);

                case '*':
                    return (num1 * num2);

                case '/':
                    return (num1 / num2);
                //if no operand, returns NaN
                default: NaN
                    break;
            }


            //check if input is number or operand

            //if operand, use it to do an action against the numbers


            //check if null is included in values
            //if null, treat it as 0

            //ignore undefined and empty string values and continues operation
            //ignores non-numeric values  and continues operation






            //multiplies two numbers when one is stringified
        }