import React from 'react';
import Menu from './components/Menu';
import dataBase from './data/data-base.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ background: '#141414' }}>
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
    </div>
  );
}

export default App;
