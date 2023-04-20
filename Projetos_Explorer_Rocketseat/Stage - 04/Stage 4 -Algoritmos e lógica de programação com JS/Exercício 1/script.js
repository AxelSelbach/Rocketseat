alert("Vamos fazer contas!")

let numberOne = prompt("Digite o primeiro número:")
let numberTwo = prompt("Digite o segundo número:")
numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

// soma
let sum = numberOne + numberTwo
alert(`O resultado da soma é: ${sum}`)

//subtração
let sub = numberOne - numberTwo
alert(`O resultado da subtração é: ${sub}`)

//multiplicação
let mult = numberOne * numberTwo
alert(`O resultado da multiplicação é: ${mult}`)

//divisão
let div = (numberOne / numberTwo).toFixed(2)
alert(`O resultado da divisão é: ${div}`)

//resto da divisão
let restDiv = numberOne % numberTwo
alert(`O resto da divisão é: ${restDiv}`)

//verificar se o número é par ou ímpar
if (sum / 2 === 0){
  alert(`A soma dos dois número resulta em ${sum}, um número ímpar!`)
} else {
  alert(`A soma dos dois número resulta em ${sum}, um número par!`)
}

//informar que os números inseridos são iguais
if (numberOne === numberTwo){
  alert("Os números inseridos são iguais!")
}