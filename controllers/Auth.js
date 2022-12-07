

const getAuth = (req, res) => {
    res.json({
        ok: true,
        msg: "hola"
    });
}

module.exports = {
    getAuth
};