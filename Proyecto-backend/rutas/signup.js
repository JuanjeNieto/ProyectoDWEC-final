const { jsonResponse } = require("../lib/jsonResponse");

const router = require("express").Router();

router.post('/', (req, res) =>{
    const {name, username, password} = req.body;
// validacion
    if (!!!name || !!!username || !!!password) {
        return res.status(400).json(jsonResponse(400, {
            error: "Los campos son requeridos",
        }))
    }
//creacion de usuario
    res.status(200).json(jsonResponse(200, {
        message: "Usuario creado correctamente"
    }))


    res.send('signup');
})

module.exports = router;