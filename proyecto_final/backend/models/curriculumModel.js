var pool = require('../config/db');

async function getCurriculum() {
    try {
        var query = "SELECT * FROM curriculum";
        var rows =  await pool.query(query);
        return rows[0];
    } catch(error) {
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

module.exports = { getCurriculum, modifyCurriculum }