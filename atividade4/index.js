const express = require('express');
const app = express();
const port = 3000;

let estoque = [];

app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
  const { id, nome, qtd } = req.params;

  const existente = estoque.find(p => p.id === id);
  if (existente) {
    return res.send(`Produto com ID ${id} já existe.`);
  }

  estoque.push({ id, nome, qtd: parseInt(qtd) });
  res.send(`Produto ${nome} adicionado com sucesso!`);
});

app.get('/listar', (req, res) => {
  if (estoque.length === 0) {
    return res.send('Estoque vazio.');
  }

  let lista = estoque.map(p => `ID: ${p.id}, Nome: ${p.nome}, Quantidade: ${p.qtd}`).join('<br>');
  res.send(lista);
});

app.get('/remover/:id', (req, res) => {
  const { id } = req.params;
  const index = estoque.findIndex(p => p.id === id);

  if (index === -1) {
    return res.send(`Produto com ID ${id} não encontrado.`);
  }

  estoque.splice(index, 1);
  res.send(`Produto com ID ${id} removido com sucesso.`);
});

app.get('/editar/:id/:qtd', (req, res) => {
  const { id, qtd } = req.params;
  const produto = estoque.find(p => p.id === id);

  if (!produto) {
    return res.send(`Produto com ID ${id} não encontrado.`);
  }

  produto.qtd = parseInt(qtd);
  res.send(`Quantidade do produto ${produto.nome} atualizada para ${produto.qtd}.`);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
