const calculate = (arr) => {

  const inputs = ['', undefined, '', 'foo', 'bar']

  let validInputs = arr.filter(invalid => {
    return !inputs.includes(invalid)
  })
  
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

console.log(calculate(['13', 'foo', '*', 'bar', 2]))

module.exports = calculate
