const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Games = require("./Games")
const Genres = require("./Genres")
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/videogames",Games)
router.use("/genres", Genres)

module.exports = router;
