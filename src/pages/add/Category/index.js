import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Template from '../../../components/Template';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';

function AddCategory() {
  const [categories, setCategories] = useState([]);
  const initialFormFields = {
    name: '',
    description: '',
    color: '#000',
  };
  const [values, setValues] = useState(initialFormFields);

  const URL = window.location.hostname.includes('localhost')
    ? 'http://localhost:3333/categories'
    : 'https://filipeflix.herokuapp.com/categories';

  function setValue(field, value) {
    setValues({
      ...values,
      [field]: value,
    });
  }
  function handleChange({ target }) {
    setValue(target.getAttribute('name'), target.value);
  }

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
    setValues(initialFormFields);
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
          label="Nome"
          name="name"
          type="text"
          value={values.name}
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
        Loading...
      </div>
      )}
      <ul>
        {categories.map((category) => <li key={category.id}>{category.name}</li>)}
      </ul>
      <Link to="/">Ir para Home</Link>
    </Template>
  );
}

export default AddCategory;
