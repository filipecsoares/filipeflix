import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categories`;
function create(values) {
  fetch(URL_CATEGORIES, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  }).then((res) => res.json()).catch((err) => {
    throw new Error(err);
  });
}

function remove(id) {
  fetch(`${URL_CATEGORIES}/${id}`, {
    method: 'DELETE',
  }).then((res) => res.json()).catch((err) => {
    throw new Error(err);
  });
}

function getAll() {
  return fetch(URL_CATEGORIES).then(async (res) => {
    if (res.ok) {
      const data = await res.json();
      return data;
    }
    throw new Error('Erro ao conectar com o servidor.');
  });
}

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
  create,
  remove,
  getAll,
  getAllWithVideos,
};
