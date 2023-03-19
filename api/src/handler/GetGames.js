const ApiGames = require("../controllers/ApiGames");
const Search = require("../controllers/Search");
const url ="https://api.rawg.io/api/games?key=380851f095cd486fa474d885f1f65ee1";
const { Videogame, Genres } = require("../db");

const getDbGames = async () => {
  const videojuegosConGenero = await Videogame.findAll({
    include: {
      model: Genres,
      attributes: ["name"],
      through: { attributes: [] },
    },
  });
  
   const videojuegosConGeneroYGeneros = videojuegosConGenero.map((videojuego) => {
    const genres = videojuego.Genres.map((genero) => genero.name);
    return { ...videojuego.toJSON(), genres };
  });

  return videojuegosConGeneroYGeneros;
};

const getAll = async () => {
  const api = await ApiGames(url);
  const db = await getDbGames();
  const [dbData, apiData] = await Promise.all([api, db]);

  return [...dbData, ...apiData];
};

const getGames = async (req, res) => {
  const { name } = req.query;
  try {
    /**esto fue un const */
    const games = await getAll();
    if(name){
      let gamess = await Search(games,name,url)
      if(!gamess.length) gamess = "NO"
      console.log(gamess);
      res.status(200).json({type:15,games:gamess});
    }else{
    res.status(200).json({type:20,games});
    }
   
  } catch (error) {
    res.status(404).send("Algo salio mal en la Api");
  }
};

module.exports = getGames;
