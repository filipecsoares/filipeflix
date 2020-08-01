import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Template from '../../../components/Template';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';
import config from '../../../config';

function AddVideo() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map(({ title }) => title);
  const initialFormFields = {
    title: '',
    url: '',
    description: '',
    categoryId: null,
    password: '',
  };
  const { values, handleChange, clearForm } = useForm(initialFormFields);

  useEffect(() => {
    categoriesRepository.getAll()
      .then((data) => {
        setCategories(data);
      });
  }, []);
  async function handleSubmit(event) {
    event.preventDefault();
    if (values.password !== config.PASSWORD) {
      // eslint-disable-next-line no-alert
      alert('Senha inválida!');
      return;
    }
    const chosenCategory = categories.find((category) => category.title === values.category);

    videosRepository.create({
      title: values.title,
      url: values.url,
      description: values.description,
      categoryId: chosenCategory.id,
    })
      .then(() => {
        clearForm(initialFormFields);
        history.push('/');
      });
  }

  return (
    <Template>
      <h1>Cadastro de Vídeo</h1>
      <form onSubmit={handleSubmit}>
        <FormField
          label="Título"
          name="title"
          type="text"
          value={values.title}
          onChange={handleChange}
        />
        <FormField
          label="Descrição"
          name="description"
          type="text"
          value={values.description}
          onChange={handleChange}
        />
        <FormField
          label="URL"
          name="url"
          type="url"
          value={values.url}
          onChange={handleChange}
        />
        <FormField
          label="Categoria"
          name="category"
          type="text"
          value={values.category}
          onChange={handleChange}
          suggestions={categoryTitles}
        />
        <FormField
          label="Senha"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
        />
        <Button>Cadastrar</Button>
      </form>
      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </Template>
  );
}

export default AddVideo;
