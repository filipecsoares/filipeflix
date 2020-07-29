import React, { useState } from 'react';
import Template from '../../../components/Template';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

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
  function handleChange(e) {
    const { getAttribute, value } = e.target;
    setValue(getAttribute('name'), value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCategories([...categories, values]);
    setValues(initialFormFields);
  }

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
        {/* <div>
          <label>
            Descrição:
            <textarea
              name="description"
              value={values.description}
              onChange={handleChange}
            />
          </label>
        </div> */}
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
        <button>Cadastrar</button>
      </form>
      <ul>
        {categories.map((category, index) => {
          return <li key={index}>{category.name}</li>;
        })}
      </ul>
      <Link to="/">Ir para Home</Link>
    </Template>
  );
}

export default AddCategory;
