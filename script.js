const allNumbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const deleteButton = document.querySelector('.c')
const deleteAll = document.querySelector('.ce')
const equalButton = document.querySelector('.equal')

const displayOne = document.querySelector('.display-1')
const displayTwo = document.querySelector('.display-2')
const displayThree = document.querySelector('.display-3')

let sign = ''
let result = null
let outputOne = ''
let outputTwo = ''
let dot = false

allNumbers.forEach(Number=>{
    Number.addEventListener('click', showNumber)
})

operators.forEach(operator=>{
    operator.addEventListener('click', showResult)
})

//event lesteners
equalButton.addEventListener('click', calculate)
deleteButton.addEventListener('click', deleteLastInput)
deleteAll.addEventListener('click', deleteAllButton)

function showNumber(e){
   if(e.target.innerText === '.' && !dot){
        dot = true
   }else if(e.target.innerText === '.' && dot){
    return
   }
    outputTwo = outputTwo + e.target.innerText
    displayTwo.innerText = outputTwo
}

//show result on the screen

function showResult(e){
    if(!outputTwo) result
    dot = false
    const signName = e.target.innerText
    if(outputTwo && outputOne && signName){
        checkCalculation()
    }
    else{
        result = parseFloat(outputTwo)
    }
    clearMainDisplay(signName)
    sign = signName
}

//check the type of the calculation
function checkCalculation(){
  if(sign === '+'){
    result = parseFloat(result) + parseFloat(outputTwo)
  }
  else if(sign === '/'){
    result = parseFloat(result) / parseFloat(outputTwo)
  }
  else if(sign === '-'){
    result = parseFloat(result) - parseFloat(outputTwo)
  }
  else if(sign === '%'){
    result = parseFloat(result) % parseFloat(outputTwo)
  }
}

//clear the display
function clearMainDisplay(name = ''){
    outputOne += outputTwo + ' ' + name + ' ';
    displayOne.innerText = outputOne;
    displayTwo.innerText = '';
    displayThree.innerText = result
    outputTwo = ''
}


//calculate 
function calculate(){
    if(!outputTwo || !outputOne){
        return
    }
    else{
        checkCalculation()
        clearMainDisplay()
        displayTwo.innerText = result;
        outputTwo = result
        displayThree.innerText = ''
        outputOne = ''
    }
}

//Delleting 

function deleteAllButton(){
    displayOne.innerText = '0'
    displayTwo.innerText = '0'
    displayThree.innerText = '0'

    outputOne = ''
    outputTwo = ''
    result = ''
}

function deleteLastInput(){
    displayTwo.innerText = ''
    outputTwo = ''
}