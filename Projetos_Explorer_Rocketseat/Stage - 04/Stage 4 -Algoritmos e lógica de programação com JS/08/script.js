/*
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá contar
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

const patients = [
  {
    name:"Pedro",
    age: 20,
    weight: 100,
    height:190,
  },
  {
    name:"Carlito",
    age: 26,
    weight: 80,
    height:170,
  },
  {
    name:"Ana",
    age: 30,
    weight: 72,
    height:172,
  },
]

let patientsName = []

for(let patient of patients) {
  patientsName.push(patient.name)
}

alert(patientsName)