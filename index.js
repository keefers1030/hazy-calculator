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


//function 1
    //loop through array
    //remove empty inputs
    //removes/ignores non numeric numbers


    //change string numbers to integers
    //change null to 0


//function 2
//Make calculations



const filterString = (arr) => {
    const inputs = ['+', '-', '*', '/', 'null', '1', '2', '3', '4', '5', '6', '7', '8', '9']

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i]

        {
            let validInputs = arr.filter(invalid => {
                !inputs.includes(invalid)
            })

            return validInputs
        }
    }
}



console.log(filterString([8, 9, 0, '9', '8', null]))


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

}
    



