import React from 'react';
import Template from '../../../components/Template';
import { Link } from 'react-router-dom';

function AddVideo() {
  return (
    <Template>
      <h1>Cadastro de Vídeo</h1>
      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </Template>
  );
}

export default AddVideo;
