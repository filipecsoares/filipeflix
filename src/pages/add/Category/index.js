import React from 'react';
import Template from '../../../components/Template';
import { Link } from 'react-router-dom';

function AddCategory() {
  return (
    <Template>
      <h1>Cadastro de Categoria</h1>
      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </Template>
  );
}

export default AddCategory;
