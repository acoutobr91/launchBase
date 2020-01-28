const nome = 'Arthur'
const sexo = 'M'
const idade = 60
const contribuicao = 35
const regra = idade + contribuicao
    /*tempo de contribuição homens: 35 anos
    tempo de contribuição mulher: 30 anos
    Utilizando a regra 85-95, 
    a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos,
     enquanto a mulher precisa ter no mínimo 85 anos na soma;
     SE a pessoa estiver aposentada: Silvana, você pode se aposentar!;
    SE a pessoa NÃO estiver aposentada: Silvana, você ainda não pode se aposentar!;*/

if (sexo === 'M') {
    if (regra >= 95) {
        console.log(`${nome}, você pode se aposentar!`)
    } else {
        console.log(`${nome}, você ainda não pode se aposentar!`)
    }
} else {
    if (regra >= 85) {
        console.log(`${nome}, você pode se aposentar!`)
    } else {
        console.log(`${nome}, você ainda não pode se aposentar!`)
    }
}