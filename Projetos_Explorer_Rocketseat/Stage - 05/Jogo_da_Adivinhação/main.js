//variáveis
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
const inputNumber = document.querySelector('#inputNumber')
let randomNum = Math.round(Math.random() * 10);
let xAttempts = 1;

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keyup', function(event) {
  if (event.key == 13) {
    // A tecla Enter foi pressionada
    console.log('Enter pressionado!');
    // Chame aqui a função que deseja executar quando a tecla Enter for pressionada
  }
});

//funções
function handleTryClick(event) {
  event.preventDefault() // nao faça o padrao

  if (Number(inputNumber.value) == randomNum) {
    toggleScreen()
    screen2.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas!`
  }

  inputNumber.value = ""
  xAttempts++
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1;
  randomNum = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}