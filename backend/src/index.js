const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes")
const app = express();

mongoose.connect("mongodb+srv://fabiofilho0820:0ZiwEgx2Tqo7bIjE@cluster0.jmjcvbe.mongodb.net/week10?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);


//Tipos de parâmetros:
//Query params: request.query(filtros, ordenação, paginação ...)
//Route params: request.params ( identificar um recurso na alteração ou remoção)
//Body: request.body (dados para criação ou alteração de um registro)
//MongoDB (não-relacional)
