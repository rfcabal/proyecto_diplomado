var pool = require('../config/db');

async function getCategorias() {
    try {
        var query = "select *  from categoria";
        var rows =  await pool.query(query);
        return rows;
    } catch(error) {
        throw error;
    }
}

async function deleteCategoria(id) {
    try {
        var query = "DELETE FROM categoria WHERE categoria.id = ?;"
        var row =  await pool.query(query, [id]);
        return row;
    } catch (error) {
        throw error;
    }
}

module.exports = { getCategorias, deleteCategoria }