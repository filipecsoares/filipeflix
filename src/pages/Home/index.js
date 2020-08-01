import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriesRepository from '../../repositories/categories';
import Template from '../../components/Template';

function Home() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    categoriesRepository.getAllWithVideos()
      .then((categoriesWithVideos) => {
        setCategories(categoriesWithVideos);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  }, []);

  return (
    <Template paddingAll={0}>
      {categories.length === 0 && (<div>Loading...</div>)}

      {categories.map((category, index) => {
        if (index === 0) {
          return (
            <div key={category.id}>
              <BannerMain
                videoTitle={category.videos[0].title}
                url={category.videos[0].url}
                videoDescription={category.videos[0].description}
              />
              <Carousel ignoreFirstVideo category={category} />
            </div>
          );
        }
        return (
          <Carousel key={category.id} category={category} />
        );
      })}
    </Template>
  );
}

export default Home;
