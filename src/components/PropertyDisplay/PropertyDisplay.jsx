import { useState, useEffect } from 'react';
import Card from '../Card/Card';
import styles from './PropertyDisplay.module.css';

const PropertyDisplay = ({ propData }) => {
  const [favorite, setFavorite] = useState(
    JSON.parse(sessionStorage.getItem('favorite')) || []
  );

  const btnClickHandler = (index, propData) => {
    const favArr = [...favorite];
    favArr.push(propData[index]);
    setFavorite(favArr);
  };

  useEffect(() => {
    sessionStorage.setItem('favorite', JSON.stringify(favorite));
  }, [favorite]);

  const property = propData.map((el, index) => {
    return (
      <div key={index}>
        <Card
          area={el.address[0].toUpperCase() + el.address.slice(1)}
          price={el.price}
          image={el.image}
          id={el.id}
          description={el.description}
          index={index}
          propData={propData}
          btnText='Add to Favorite'
          btnClickHandler={() => btnClickHandler(index, propData)}
        />
      </div>
    );
  });

  return (
    <>
      <div
        // style={{ margin: '40px 0px 0px 55px' }}
        className={styles.property_display}
      >
        {property}
      </div>
    </>
  );
};
export default PropertyDisplay;
