import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;
function create(values) {
  return fetch(`${URL_VIDEOS}/?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  }).then(async (res) => {
    if (res.ok) {
      const data = await res.json();
      return data;
    }
    throw new Error('Erro ao conectar com o servidor.');
  });
}
export default {
  create,
};
