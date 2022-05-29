const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.json({ message: 'Hello Cypress Discoveryyyy' })
})

app.get('/avengers', function (req, res) {
    var avengers = ['Íncrivel Hulk', 'Keno', 'Nacho Fernandes', 'Guilherme Aranhas', 'Allan', 'Alonso']
    return res.json({ data: avengers })
})

app.get('/cnh', function (req, res) {
    const idade = req.query.idade

    if (!idade) {
       return res.json({message:'Por favor, preencha o campo idade e tente novamente'})
    }

    var idadeNum = parseInt(idade)

    if (idadeNum >= 18) {
        return res.json({message: 'Ok, você pode tirar a sua CNH'})
    }
    else if (idadeNum >= 5 && idadeNum < 18) {
       return res.json({message:'Você ainda não completou 18 anos, portanto não pode tirar sua CNH no momento, ande de bike'})
    }
    else {
        return res.json({message: 'Ande de velotrol'})
    }


})


app.listen(3000)