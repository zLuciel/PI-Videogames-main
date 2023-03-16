const axios = require("axios");

const ApiGames = async (url) => {
  let allGamesApi = [];
  let next = url;

  while (next && allGamesApi.length < 100) {
    const response = await axios.get(next);
    const games = response.data.results.map(data => ({ 
      id: data.id,
      name: data.name,
      image: data.background_image,
      released: data.released,
      rating: data.rating,
      platform: data.platforms.map(el => el.platform.name),
      genres: data.genres.map(el => el.name), 
    }));

    allGamesApi = [...allGamesApi, ...games];
    next = response.data.next;
  }
  return allGamesApi;
};

module.exports = ApiGames

