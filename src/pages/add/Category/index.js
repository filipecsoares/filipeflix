import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Template from '../../../components/Template';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import Loading from '../../../assets/img/Loading.gif';
import useForm from '../../../hooks/useForm';
import URL_BACKEND from '../../../config/index';

function AddCategory() {
  const [categories, setCategories] = useState([]);
  const initialFormFields = {
    title: '',
    description: '',
    color: '#000',
  };

  const { values, handleChange, clearForm } = useForm(initialFormFields);

  const URL = `${URL_BACKEND}/categories`;

  async function saveCategory() {
    try {
      const res = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      return res.json();
    } catch (error) {
      throw new Error(error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await saveCategory();
    setCategories([...categories, values]);
    clearForm(initialFormFields);
  }

  useEffect(() => {
    fetch(URL).then(async (res) => {
      const data = await res.json();
      setCategories([...data]);
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
        <Button>Cadastrar</Button>
      </form>
      {categories.length === 0 && (
      <div>
        <img alt="loading" src={Loading} />
      </div>
      )}
      <ul>
        {categories.map((category) => <li key={category.id}>{category.title}</li>)}
      </ul>
      <Link to="/">Ir para Home</Link>
    </Template>
  );
}

export default AddCategory;
