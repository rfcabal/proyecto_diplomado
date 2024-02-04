var pool = require('../config/db');

async function getEntradas() {
    try {
        var query = "select * from entradas";
        var rows =  await pool.query(query);
        return rows;
    } catch(error) {
        throw error;
    }
}

async function getEntradasByTipo(tipo) {
    try {
        var query = "select * from entradas where tipo = ?";
        var rows =  await pool.query(query, [tipo]);
        return rows;
    } catch(error) {
        throw error;
    }
}

async function getEntradasById(tipo) {
    try {
        var query = "select * from entradas where id = ?";
        var row =  await pool.query(query, [tipo]);
        return row[0];
    } catch(error) {
        throw error;
    }
}

async function addEntrada(titulo, tiempo, texto, media, tipo) {
    try {
        var query = "INSERT INTO entradas(id_usuario, titulo, tiempo, texto, media, tipo) VALUES (1,?,?,?,?,?);"
        var row =  await pool.query(query, [titulo, tiempo, texto, media, tipo]);
        return row;
    } catch (error) {
        throw error;
    }
}

async function modifyEntrada(id, entrada) {
    try {
        var query = "UPDATE entradas SET ? where id = ?"
        var row =  await pool.query(query, [entrada, id]);
        return row;
    } catch (error) {
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


module.exports = { getEntradas, deleteEntradas, getEntradasByTipo, getEntradasById, modifyEntrada, addEntrada }