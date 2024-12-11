const {agregarPostDB,obtenerPostDB,modificarPostDB, modificarLikeDB, eliminarPostDB} = require ("../models/cancionesModel.js");
const agregarPost = async(req,res) =>{
    try {
        const datos = req.body;
        const post = await agregarPostDB(datos);
        res.status(201).json(post);
    } catch (error) {
        res.status(500).send(error);
    }
}
const obtenerPost = async(req,res) =>{
    try{
        const posts = await obtenerPostDB();
        res.json(posts);
    }
    catch(error){
        res.status(500).send(error);
    }
}
const modificarPost = async(req,res) => {
    try {
        const { id } = req.params;
        const {titulo,img,descripcion,likes} = req.query;
        
        await modificarPostDB(id, titulo,img,descripcion,likes);
        res.send("Post modificado con éxito");
        
    } catch (error) {
        res.status(500).send("Error al modificar el post");
    }
}
const modificarLike = async(req,res) =>{
    try {
        const {id} = req.params;
        const data = await modificarLikeDB(id);
        res.json(data);
    } catch (error) {
        res.status(500).send(error);
    }
}
const eliminarPost = async(req,res) =>{
    try {
        const {id} = req.params;
        await eliminarPostDB(id);
        res.send("Post eliminado");
    } catch (error) {
        res.status(500).send(error);
    }
}
module.exports = {
    modificarPost,
    obtenerPost,
    agregarPost,
    modificarLike,
    eliminarPost
}