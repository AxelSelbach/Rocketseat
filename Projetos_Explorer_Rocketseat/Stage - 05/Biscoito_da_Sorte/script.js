// variáveis
const phrases = [
  'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
  'Não compense na ira o que lhe falta na razão',
  'São os nossos amigos que nos ensinam as mais valiosas lições.',
  'A adversidade é um espleho que reflete o verdadeiro eu.',
  'Sem o fogo do entusiasmo, não há o calor da vitória.',
  'Os defeitos são mais fortes quando o amor é fraco.',
  'O conhecimento é a única virtude e a ignorância é o único vício.',
  'A maior barreira para o sucesso é o medo do fracasso.',
  'O pessimista vê a dificuldade em cada oportunidade; O otimista vê a oportunidade em cada dificuldade.',
  'Realize o óbvio, pense no improvável e conquiste o impossível.',
  'A adversidade desperta em nós capacidades que, em circunstâncias favoráveis, teriam ficado adormecidas.',
  'Quem quer colher rosas tem de estar preparado para suportar os espinhos.',
  'Uma bela flor é incompleta sem as suas folhas.',
  'Não há que ser forte. Há que ser flexível.',
  'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
  'A maior barreira para o sucesso é o medo do fracasso.',
  'Motivação não é sinónimo de transformação, mas um passo em sua direção.'
]
const totalPhrases = phrases.length
let screenMessage = document.querySelector('#screenMessage')
const fortuneCookie = document.querySelector('.fortuneCookie')
const Message = document.querySelector('.Message')
const luckyClick = document.querySelector('#luckyClick')
const btnReset = document.querySelector('#btnReset')

//eventos
luckyClick.addEventListener('click', luckyMessageClick)
btnReset.addEventListener('click', anotherLuckyMessage)

//funções
function luckyMessageClick(event) {
  event.preventDefault()
  toggleScreen()
  randomPhrase()
}

function anotherLuckyMessage() {
  toggleScreen()
}

function toggleScreen() {
  fortuneCookie.classList.toggle('screenSwitch')
  Message.classList.toggle('screenSwitch')
}

function randomPhrase() {
  screenMessage.innerHTML = phrases[Math.floor(Math.random()* phrases.length)]
}
