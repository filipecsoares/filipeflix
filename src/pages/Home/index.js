import React from 'react';
import styled from 'styled-components';
import Menu from '../../components/Menu';
import dataBase from '../../data/data-base.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

const AppWrapper = styled.div`
  background: var(--grayDark);
  padding-top: 94px;

  @media (max-width: 800px) {
    padding-top: 40px;
  }
`;

function Home() {
  return (
    <AppWrapper>
      <Menu />
      <BannerMain
        videoTitle={dataBase.categorias[2].videos[0].titulo}
        url={dataBase.categorias[2].videos[0].url}
        videoDescription={'Git - Entenda o rebase interativo com Rodrigo Mango'}
      />

      <Carousel ignoreFirstVideo category={dataBase.categorias[0]} />

      <Carousel category={dataBase.categorias[1]} />
      <Carousel category={dataBase.categorias[2]} />
      <Carousel category={dataBase.categorias[3]} />
      <Carousel category={dataBase.categorias[4]} />
      <Carousel category={dataBase.categorias[5]} />

      <Footer />
    </AppWrapper>
  );
}

export default Home;
