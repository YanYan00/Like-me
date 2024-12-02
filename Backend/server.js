const {agregarPost,obtenerPost} = require('./operaciones');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.listen(3000, console.log('Servidor prendido en el puerto 3000'));

app.get("/posts", async (req,res)=>{
    const posts = await obtenerPost();
    res.json(posts);
})
app.post("/posts", async (req,res) => {
    try {
        const {titulo, img, descripcion, likes} = req.body;
        await agregarPost(titulo, img, descripcion, likes);
        res.send("Post agregado con exito");
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send(error.message);
    }
});