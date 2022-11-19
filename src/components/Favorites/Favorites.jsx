import { useState, useEffect } from 'react';
import Card from '../Card/Card';
import EmptyCart from '../EmptyCart/EmptyCart';
import styles from './/Favorite.module.css';

const Favorites = () => {
  const [favorite, setFavorite] = useState(
    JSON.parse(sessionStorage.getItem('favorite')) || []
  );

  const btnClickHandler = (index) => {
    const favArr = [...favorite];
    const removeProp = favArr.filter((el) => {
      return el.id !== favArr[index].id;
    });
    setFavorite(removeProp);
  };

  useEffect(() => {
    sessionStorage.setItem('favorite', JSON.stringify(favorite));
  }, [favorite]);

  useEffect(() => {
    const favoriteLocalStorage = sessionStorage.getItem('favorite');
    if (favoriteLocalStorage) {
      setFavorite(JSON.parse(favoriteLocalStorage));
    }
  }, []);

  const favoriteProperty = favorite.map((el, index) => {
    return (
      <div key={index}>
        <Card
          area={el.address[0].toUpperCase() + el.address.slice(1)}
          price={el.price}
          image={el.image}
          description={el.description}
          index={index}
          btnText='Remove from Favorite'
          btnClickHandler={() => btnClickHandler(index)}
        />
      </div>
    );
  });

  return (
    <>
      {favorite.length > 0 && (
        <div>
          <h1 style={{ marginRight: '1300px' }}>Favorite list</h1>
        </div>
      )}

      {favorite.length > 0 && (
        <div style={{ margin: '50px px 0px 40px' }} className={styles.favorite}>
          {favoriteProperty}
        </div>
      )}

      {favorite.length === 0 && (
        <div style={{ margin: '200px 0px 0px 40px', color: '#55565A' }}>
          <EmptyCart />
        </div>
      )}
    </>
  );
};

export default Favorites;
