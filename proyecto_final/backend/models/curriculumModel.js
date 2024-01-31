var pool = require('../config/db');

async function getCurriculum() {
    try {
        var query = "SELECT * FROM curriculum";
        var rows =  await pool.query(query);
        return rows;
    } catch(error) {
        throw error;
    }
}

async function addCurriculum(introduccion, correo, telefono) {
    try {
        var query = "INSERT INTO curriculum(id_usuario, introduccion, correo, telefono) VALUES (1,?,?,?);"
        var row =  await pool.query(query, [introduccion, correo, telefono]);
        return row;
    } catch (error) {
        throw error;
    }
}

async function modifyCurriculum(id, curriculum) {
    try {
        var query = "UPDATE curriculum SET ? where id = ?"
        var row =  await pool.query(query, [curriculum, id]);
        return row;
    } catch (error) {
        throw error;
    }
}
async function deleteCurriculum(id) {
    try {
        var query = "DELETE FROM curriculum WHERE curriculum.id = ?;"
        var row =  await pool.query(query, [id]);
        return row;
    } catch (error) {
        throw error;
    }
}

module.exports = { getCurriculum, addCurriculum, modifyCurriculum, deleteCurriculum }