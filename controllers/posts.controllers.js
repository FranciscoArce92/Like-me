const pool = require('../utils/db');

const getAllPosts = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM posts");
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('[getAllPosts] problemas con la petición:', error.message);
        res.status(500).json({
            error: 'Error al obtener los posts'
        });
    }
}

const createPost = async (req, res) => {
    const { titulo, img, descripcion } = req.body;

    try {
        const sql = 'INSERT INTO posts (titulo, img, descripcion) VALUES ($1, $2, $3) RETURNING *';
        const result = await pool.query(sql, [titulo, img, descripcion]);

        res.status(200).json({
            mensaje: 'Post creado correctamente',
            post: result.rows[0]
        });
    } catch (error) {
        console.error('[createPost] Error:', error.message);
        res.status(500).json({
            error: 'Error al crear el post'
        });
    }
}

module.exports = {
    getAllPosts,
    createPost
}