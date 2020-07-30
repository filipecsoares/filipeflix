import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Template from '../../../components/Template';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';

const Form = styled.form``;

function AddCategory() {
  const [categories, setCategories] = useState([]);
  const initialFormFields = {
    name: '',
    description: '',
    color: '#000',
  };
  const [values, setValues] = useState(initialFormFields);

  function setValue(field, value) {
    setValues({
      ...values,
      [field]: value,
    });
  }
  function handleChange({ target }) {
    setValue(target.getAttribute('name'), target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCategories([...categories, values]);
    setValues(initialFormFields);
  }

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:3333/categories'
      : 'https://filipeflix.herokuapp.com/categories';
    fetch(URL).then(async (res) => {
      const data = await res.json();
      setCategories([...data]);
    });
  }, []);

  return (
    <Template>
      <h1>Cadastro de Categoria</h1>
      <Form onSubmit={handleSubmit}>
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
      </Form>
      {categories.length === 0 && (
      <div>
        Loading...
      </div>
      )}
      <ul>
        {categories.map((category) => <li key={category.name}>{category.name}</li>)}
      </ul>
      <Link to="/">Ir para Home</Link>
    </Template>
  );
}

export default AddCategory;
