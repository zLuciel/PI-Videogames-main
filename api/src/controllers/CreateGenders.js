const { Genres } = require("../db");
const axios = require('axios');
const url ="https://api.rawg.io/api/genres?key=baa03f69686f4e2ba568be7123c28b39";
const createGenres = async () => {
  try {
    const response = await axios.get(url);
    let objGender = response.data.results.map((el) => ({ name: el.name }));

    const newGenres = await Genres.bulkCreate(objGender);
    console.log('Géneros creados exitosamente');
  } catch (error) {
    console.error('Error al crear los géneros:', error);
  }
};

module.exports = createGenres;