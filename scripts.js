const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    inputNumber(event.target.value)
    updateScreen(currentNumber)
  })
})

const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen = (number) => {
  calculatorScreen.value = number
}

//variabel untuk kalkulasi
let prevNumber = ''
let calculationOperator = ''
let currentNumber = ''

//number yang diklik --> variabel currentNumber
const inputNumber = (number) => {
  if (currentNumber === '0') {
    currentNumber = number
  } else {
    currentNumber += number
  }
}

//event operator click
const operators = document.querySelectorAll(".operator")
operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value)
  })
})

//mendefinisikan fungsi operator
const inputOperator = (operator) => {
  if(calculationOperator === '') {
    prevNumber = currentNumber
  }
  calculationOperator = operator
  currentNumber = '0'
}

//menambahkan click event ke button =
const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click', () => {
  calculate()
  updateScreen(currentNumber)
})

//calculation
const calculate = () => {
  let result = ''
  switch (calculationOperator) {
    case '+':
      result = parseFloat(prevNumber) + parseFloat(currentNumber)
      break
    case '-':
      result = parseFloat(prevNumber) - parseFloat(currentNumber)
      break
    case '*':
      result = parseFloat(prevNumber) * parseFloat(currentNumber)
      break
    case '/':
      result = parseFloat(prevNumber) / parseFloat(currentNumber)
      break
    default:
      return
  }
  currentNumber = result
  calculationOperator = ''
}

//button AC
const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener('click', () => {
  clearAll()
  updateScreen(currentNumber)
})

const clearAll = () => {
  prevNumber = ''
  calculationOperator = ''
  currentNumber = '0'
}

//untuk angka decimal
const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (event) => {
  inputDecimal(event.target.value)
  updateScreen(currentNumber)
})

inputDecimal = (dot) => {
  if(currentNumber.includes('.')) {
    return
  }
  currentNumber += dot
}

//persen
const percentage = document.querySelector('.percentage');
percentage.addEventListener('click', (event) => {
  inputPercentage(event.target.value);
  updateScreen(currentNumber);
})

const inputPercentage = () => {
  currentNumber /= 100;
}
