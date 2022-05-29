function verificarIdade() {

    var nome = document.querySelector('input[name=nome]')
    var idade = document.querySelector('input[name=idade')
    var cidade = document.querySelector('input[name=cidade')

    if (idade.value.length == 0) {
        alert('Por favor, preencha o campo idade e tente novamente')
        return
    }

    var idadeNum = parseInt(idade.value)
    var minhaCidade = (cidade.value)

    if (idadeNum >= 18) {
        alert('Ok, você pode tirar a sua CNH')
    }
    else if (idadeNum >= 5 && idadeNum < 18) {
        alert('Você ainda não completou 18 anos, portanto não pode tirar sua CNH no momento, ande de bike')
    }
    else {
        alert('Ande de velotrol')
    }

    console.log(minhaCidade)


}
