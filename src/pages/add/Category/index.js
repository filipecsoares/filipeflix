import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Template from '../../../components/Template';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import Loading from '../../../assets/img/Loading.gif';
import useForm from '../../../hooks/useForm';
import categoriesRepository from '../../../repositories/categories';
import config from '../../../config';

function AddCategory() {
  const [categories, setCategories] = useState([]);
  const initialFormFields = {
    title: '',
    description: '',
    color: '#000',
  };

  const { values, handleChange, clearForm } = useForm(initialFormFields);

  function handleSubmit(event) {
    event.preventDefault();
    if (values.password !== config.PASSWORD) {
      // eslint-disable-next-line no-alert
      alert('Senha inválida!');
      return;
    }
    delete values.password;
    categoriesRepository.create(values);
    setCategories([...categories, values]);
    clearForm(initialFormFields);
  }

  useEffect(() => {
    categoriesRepository.getAll()
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <Template>
      <h1>Cadastro de Categoria</h1>
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
          type="textarea"
          value={values.description}
          onChange={handleChange}
        />
        <FormField
          label="Cor"
          name="color"
          type="color"
          value={values.color}
          onChange={handleChange}
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
      {categories.length === 0 && (
      <div>
        <img alt="loading" src={Loading} />
      </div>
      )}
      <ul>
        {categories.map((category) => <li key={`category_${category.id}`}>{category.title}</li>)}
      </ul>
      <Link to="/">Ir para Home</Link>
    </Template>
  );
}

export default AddCategory;
