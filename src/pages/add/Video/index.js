import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Template from '../../../components/Template';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';

function AddVideo() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const initialFormFields = {
    title: '',
    url: '',
    categoryId: null,
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
    const chosenCategory = categories.find((category) => category.title === values.category);

    videosRepository.create({
      title: values.title,
      url: values.url,
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
          label="URL"
          name="url"
          type="text"
          value={values.url}
          onChange={handleChange}
        />
        <FormField
          label="Categoria"
          name="category"
          type="text"
          value={values.category}
          onChange={handleChange}
          suggestions={['Front End', 'Back End']}
        />
        <Button>Cadastrar</Button>
      </form>
      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </Template>
  );
}

export default AddVideo;
