const axios = require('axios');

const Details = async (url)=>{
    const response = await axios.get(url);
    const data = response.data
    const detail = {
        id: data.id,
        name: data.name,
        description: data.description,
        released: data.released,
        image: data.background_image,
        website: data.website,
        rating: data.rating,
        platform: data.platforms.map((platform) => platform.platform.name),
        genres: data.genres.map((genre) => genre.name),
    };
    return detail
}
module.exports = Details