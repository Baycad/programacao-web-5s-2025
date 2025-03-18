const express = require('express');
const calculadora = require('./util/calculadora');

const app = express();
const port = 3000;

app.get('/somar/:a/:b', (req, res) => {
    const { a, b } = req.params;
    res.json({ resultado: calculadora.somar(Number(a), Number(b)) });
});

app.get('/subtrair/:a/:b', (req, res) => {
    const { a, b } = req.params;
    res.json({ resultado: calculadora.subtrair(Number(a), Number(b)) });
});

app.get('/multiplicar/:a/:b', (req, res) => {
    const { a, b } = req.params;
    res.json({ resultado: calculadora.multiplicar(Number(a), Number(b)) });
});

app.get('/dividir/:a/:b', (req, res) => {
    const { a, b } = req.params;
    if (Number(b) === 0) {
        return res.status(400).json({ erro: 'Divisão por zero não é permitida' });
    }
    res.json({ resultado: calculadora.dividir(Number(a), Number(b)) });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
