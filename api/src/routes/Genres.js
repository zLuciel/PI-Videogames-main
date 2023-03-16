const express = require("express");
const router = express.Router();
const CreateGender = require("../handler/getGenero");

router.get("/", CreateGender);
module.exports = router;