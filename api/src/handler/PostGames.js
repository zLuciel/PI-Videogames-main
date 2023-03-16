const dbGames = require("../controllers/DbGames")
const PostGames = async(req,res)=>{
 try {
    await dbGames(req.body)
    res.status(200).json({msg:"Se agrego correctamente"})
 } catch (error) {
    res.status(404).json({error:"No se pudo agregar"})
 }
}
module.exports = PostGames