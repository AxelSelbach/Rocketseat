/*
Solicitar o nome do aluno e as 3 notas do bimestre calcular a média daquele aluno.

A média positiva deverá ser maior que 6

Se o aluno passou no bimestre, dar os parabéns.

Se o aluno não passou no bimestre, motivar o aluno a dar
seu melhor na prova de recuperação

Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

let student = prompt("Qual o seu nome, aluno(a)?")
let noteOne = prompt("Qual sua nota da primeira prova?")
let noteTwo = prompt("Qual sua nota da segunda prova?")
let noteThree = prompt("Qual sua nota da terceira prova?")

let average = (Number(noteOne) + Number(noteTwo) + Number(noteThree)) /3

let result = average > 6
average = average.toFixed(2)

if (result) {
  alert(`Parabéns ${student}! Sua média foi de: ${average}`)
} else {
  alert(`${student} estude para sua prova de recuperação! Sua média foi de: ${average}`)
}