const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

const dados = {
    nome: "Gustavo Franco",
    profissao: "Tecnologia da Informação",
    descricao: "Estudante de TI interessado em desenvolvimento web, programação e tecnologia.",
    email: "Gustavofranco715@gmail.com",
    github: "https://github.com/GustavoFrancozz"
};

app.get("/", (req, res) => {
    res.json({
        mensagem: "API do cartão de visitas funcionando!"
    });
});

app.get("/api/cartao", (req, res) => {
    res.json(dados);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});