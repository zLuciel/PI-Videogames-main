const { Genres } = require("../db");
const axios = require('axios');

const CreateGender = async (req, res) => {
  try {
    const genresdb = await Genres.findAll({
      attributes: ['name'] // solo obtener el nombre de los géneros
    });

    res.status(200).json(genresdb);
  } catch (error) {
    res.status(404).send("Los generos no fueron traidos");
  }
};

module.exports = CreateGender;
