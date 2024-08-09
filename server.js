const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

const cepRegex = /^[0-9]{5}-?[0-9]{3}$/;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/consulta-cep/:cep', async (req, res) => {
    const cep = req.params.cep;


    if (!cepRegex.test(cep)) {
        return res.status(400).send('CEP inválido. Formato: XXXXX-XXX');
    }

    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        res.json(response.data);
    } catch (error) {
        console.error('Erro ao fazer requesição', error);
        res.status(500).send('Erro ao consultar o CEP');
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
