const {Videogame,Genres} = require("../db")

const dbGames = async (game)=>{
 const { name, description, released, rating, platform,image, genres } = game; // el parametro recibido es req.body
 // trae solo las coicidencias 
  const generosEncontrados = await Genres.findAll({
    where: { name: genres }
  });// accion y aventura

  const newVideojuego = await Videogame.create({
    name,
    description,
    released,
    rating,
    platform,
    image
  });
  //agrega las coicidencias que econtro
  await newVideojuego.addGenres(generosEncontrados);
  // Agregar los géneros existentes al nuevo videojuego
  return newVideojuego
}
module.exports = dbGames