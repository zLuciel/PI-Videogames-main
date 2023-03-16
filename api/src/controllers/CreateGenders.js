const { Genres } = require("../db");
const axios = require('axios');
const url ="https://api.rawg.io/api/genres?key=380851f095cd486fa474d885f1f65ee1";
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