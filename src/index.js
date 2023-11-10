require('dotenv').config()

const express = require('express');
const app = express();
app.use(express.json());

app.get('/', async (req,res) => {
    return res.json('api estar ok!');
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Servidor de pé na porta ${port}`)
});