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
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (elment[i] === elment[i + 1]) {
            block.push(element[i])
        }

    }
    //removes/ignores non numeric numbers
    //change string numbers to integers
    //change null to 0
    {
        const inputs = ['+', '-', '*', '/', 'null', '1', '2', '3', '4', '5', '6', '7', '8', '9']

        let validInputs = arr.filter(invalid => {
            !inputs.includes(invalid)
        })

        return validInputs
    }
}



//function 2
//Make calculations
const calculationSteps = (arr) => {
    const operand = ['+', '-', '*', '/']

    switch (operand) {
        case '+':
            return (i[0] + i[2]);

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

module.exports(calculationSteps)


