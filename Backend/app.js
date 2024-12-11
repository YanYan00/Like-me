const {modificarPost,obtenerPost,agregarPost,modificarLike,eliminarPost} = require('./controllers/cancionesController.js');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.listen(3000, console.log('Servidor prendido en el puerto 3000'));

app.get("/posts", async (req,res)=>{
    await obtenerPost(req,res);
})
app.post("/posts", async (req,res) => {
    await agregarPost(req,res);
});
app.put("/posts/:id", async(req,res)=>{
    await modificarPost(req,res);
});
app.put("/posts/like/:id", async(req,res)=>{
    await modificarLike(req,res);
});
app.delete("/posts/:id", async(req,res)=>{
    await eliminarPost(req,res);
})