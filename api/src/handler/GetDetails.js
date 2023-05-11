
const Details = require('../controllers/Details');
const Detaildb = require('../controllers/DetailsDb');

const getDetails = async (req, res) => {
    const {idVideogame} = req.params 
  try {
    let detApi;
    if(!idVideogame.includes("-")){
      const url =`https://api.rawg.io/api/games/${idVideogame}?key=baa03f69686f4e2ba568be7123c28b39`;
       detApi = await Details(url)
    }else{
      detApi = await Detaildb(idVideogame)
    }
   
    res.status(200).json(detApi);
  } catch (error) {
    res.status(404).send("No pudimos traer los detalles");
  }
};

module.exports = getDetails;
