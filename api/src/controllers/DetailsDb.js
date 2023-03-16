const {Videogame,Genres} = require("../db")

const Detaildb = async (id)=>{
     const registro = await Videogame.findByPk(id, {
        include: {
          model: Genres,
          attributes: ["name"],
          through: { attributes: [] },
        },
      });
    
      const genres = registro.Genres.map((genre) => genre.name);
  
      return {...registro.toJSON(), genres};
}

module.exports = Detaildb