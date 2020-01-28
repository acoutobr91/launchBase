const usuarios = [
    { nome: 'Carlos', tecnologias: ['HTML', 'CSS'] },
    { nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS'] },
    { nome: 'Tuane', tecnologias: ['HTML', 'Node.js'] }
]

function checaSeUsuarioUsaCSS(tech) {
    if (tech === 'CSS') {
        return true
    } else {
        return false
    }
}

for (let i = 0; i < usuarios.length; i++) {
    for (let a = 0; a < usuarios[i].tecnologias.length; a++) {
        const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i].tecnologias[a])
        if (usuarioTrabalhaComCSS == true) {
            console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
        }
    }

}