let firstNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert('Soma: ' + sum)
alert('Subtração: ' + sub)
alert('Multiplicação: ' + multi)
alert('Divisão: ' + div)
alert('Resto da divisão: ' + restDiv)

var total = sum
if (sum & 1) {
  alert('A soma dos dois números é Impar: ' + total)
} else {
  alert('A soma dos dois números é Par: ' + total)
}

if (firstNumber == secondNumber) {
  alert('Os números inseridos são iguais')
} else {
  alert('Os número inseridos são diferentes')
}
