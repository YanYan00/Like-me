const pool = require("../bd/conexion.js");

const consultarDB = async (id) => {
    const consulta = "SELECT * FROM posts WHERE id=$1";
    const {rows,rowCount} = await pool.query(consulta,[id]);
    if (rows.length === 0) return false;
    return rows[0]
}

const agregarPostDB = async ({titulo,img,descripcion,likes=0}) =>{
    const consulta = "INSERT INTO posts (titulo,img,descripcion,likes) VALUES($1,$2,$3,$4)";
    const values = [titulo,img,descripcion,likes];
    const {rows} = await pool.query(consulta,values);
    console.log('registrado');
    return rows[0];
}
const obtenerPostDB = async () => {
    const { rows } = await pool.query('SELECT * FROM posts')
    return rows;
}

const modificarPostDB = async (id, titulo,img,descripcion,likes) => {
    const consulta = "UPDATE posts SET titulo = $1, img = $2, descripcion = $3, likes = $4 WHERE id = $5";
    const values = [id,titulo,img,descripcion,likes];
    const result = await pool.query(consulta, values);
}
const modificarLikeDB = async(id)=>{
    const consulta = "UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *";
    const { rows } = await pool.query(consulta, [id]);
    return rows[0];
}
const eliminarPostDB = async(id) =>{
    const consulta = "DELETE FROM posts WHERE id=$1";
    const values = [id]
    const result = await pool.query(consulta, values);
}
module.exports = {
    agregarPostDB,
    obtenerPostDB,
    modificarPostDB,
    modificarLikeDB,
    eliminarPostDB
};
