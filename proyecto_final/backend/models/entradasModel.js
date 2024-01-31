var pool = require('../config/db');

async function getEntradas() {
    try {
        var query = "select *  from entradas";
        var rows =  await pool.query(query);
        return rows;
    } catch(error) {
        throw error;
    }
}

async function deleteEntradas(id) {
    try {
        var query = "DELETE FROM entradas WHERE entradas.id = ?;"
        var row =  await pool.query(query, [id]);
        return row;
    } catch (error) {
        throw error;
    }
}


module.exports = { getEntradas, deleteEntradas }