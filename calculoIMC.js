const nome = 'Arthur'
const peso = 100
const altura = 1.83

const imc = peso / (altura ^ 1)

if (imc >= 30) {
    console.log(`${nome}, você está acima do peso.`)
} else {
    console.log(`${nome}, você não está acima do peso`)
}
