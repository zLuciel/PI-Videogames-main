const express = require("express");
// controles
const getGames = require("../handler/GetGames.js");
const PostGames = require("../handler/PostGames");
const getDetails = require("../handler/GetDetails.js");
const router = express.Router();

//handler

router.get("/", getGames);            
router.get("/:idVideogame", getDetails);              
router.post("/", PostGames);       

module.exports = router;
