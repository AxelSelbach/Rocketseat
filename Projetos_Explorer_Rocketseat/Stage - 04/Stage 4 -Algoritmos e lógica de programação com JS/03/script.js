/*
  Capturar 2 números
  e fazer as operações matemáticas de soma, subtração, multiplicação, 
  divisão e resto da divisão

  E para cada operação mostrar um alerta com o resultado

*/


let firstNum = prompt("Digite o primeiro número")
let secondNum = prompt("Digite o segundo número")

firstNum = Number(firstNum)
secondNum = Number(secondNum)

const sum = firstNum + secondNum
const sub = firstNum - secondNum
const mult = firstNum * secondNum
const div = firstNum / secondNum
const restDiv = firstNum % secondNum

alert("Soma: " + sum)
alert("Subtração: " + sub)
alert("Multiplicação: " + mult)
alert("Divisão: " + div)
alert("Resto da divisão: " + restDiv)
