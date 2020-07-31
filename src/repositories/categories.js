import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categories`;
function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}/?_embed=videos`).then(async (res) => {
    if (res.ok) {
      const data = await res.json();
      return data;
    }
    throw new Error('Erro ao conectar com o servidor.');
  });
}
export default {
  getAllWithVideos,
};
