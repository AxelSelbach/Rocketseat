const students = [
  {
    name: "Jose",
    firstNote: 8,
    secondNote: 6,
  },

  {
    name: "Ana",
    firstNote: 9.9,
    secondNote: 7,
  },
  
  {
    name: "Pedro",
    firstNote: 7.2,
    secondNote: 5,
  },

  {
    name: "Joao",
    firstNote: 8,
    secondNote: 6.5,
  },

  {
    name: "Juliana",
    firstNote: 7,
    secondNote: 5.9,
  },

  {
    name: "Juliano",
    firstNote: 6,
    secondNote: 3,
  },

  {
    name: "Bruna",
    firstNote: 2,
    secondNote: 1,
  }
]

function ApprovedOrNot (student) {
  const noteSum = student.firstNote + student.secondNote;
  const average = (noteSum / 2).toFixed(2);
  const averageMessage = `A média do(a) ${student.name} foi de: ${average}`

  if (average >= 7) {
    alert(`${averageMessage} \n Parabéns ${student.name}, você foi aprovado(a) no concurso!`)
  } else {
    alert(`${averageMessage}\n Que pena ${student.name}, você infelizmente não passou no concurso!`)
  }
}

for (const student of students) {
  ApprovedOrNot(student)
}