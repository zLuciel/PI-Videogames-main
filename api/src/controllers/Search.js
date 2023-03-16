const axios = require("axios")
const { Sequelize } = require('sequelize');
const { Op } = Sequelize;
const { Videogame, Genres } = require("../db");
 /*games verifica este array
      verifica en el array si existe ese nombre
      trae el objeto con su id depende de ellos ejecutar
funciones ejecutadas*/
const SearchDb = async (name)=>{
    const videogames = await Videogame.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`
        }
      },
      include: {
        model: Genres,
        attributes: ['name'],
        through: { attributes: [] },
      }
    });
    const videojuegosConGeneroYGeneros = videogames.map((videojuego) => {
      const genres = videojuego.Genres.map((genero) => genero.name);
      return { ...videojuego.toJSON(), genres };
    });
  
    return videojuegosConGeneroYGeneros;
   // return videogames;
}
const SearchApi = async (url,name)=>{
  const Games = [];
  for (let i = 1; i <= 5; i++) {
    let api = await axios(`${url}&search=${name}&page=${i}`);
    api.data.results.map((game) => {
      Games.push({
        id: game.id,
        name: game.name,
        image: game.background_image,
        genres: game.genres?.map((g) => g.name),
        released: game.released,
        rating: game.rating,
        platform: game.platforms?.map((p) => p.platform.name),
      });
    });
  }
  return Games;
};


const Search = async (games,name,url)=>{
   
  const ValidateName = games.filter(game => game.name.toLowerCase().includes(name.toLowerCase()))
   // if(!ValidateName.length) throw Error("no hay coicidencia con el nombre")
     const api = ValidateName.filter((game) => typeof game.id === "number")
     const db = ValidateName.filter((game) => typeof game.id === "string")
  
     let dataApi = [];
     let dataDb = [];
   
     if (api.length) dataApi = await SearchApi(url,name)
     if (db.length) dataDb = await SearchDb(name);

     const allResults = [...dataApi, ...dataDb];
     return allResults;
}

module.exports = Search