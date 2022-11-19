import { useState, useEffect } from 'react';
import styles from './Card.module.css';

const Card = ({
  area,
  price,
  image,
  description,
  btnClickHandler,
  id,
  btnText,
}) => {
  const [disabled, setDisabled] = useState(false);
  const [buttonText, setButtonText] = useState('Add to Favorite');

  const disableHandeler = (id) => {
    const storageData = JSON.parse(sessionStorage.getItem('favorite'));
    const checkData = storageData.filter((el) => {
      return el.id === id;
    });
    if (checkData) {
      setDisabled(true);
    }
    setButtonText('Added');
  };

  useEffect(() => {
    const storageData = JSON.parse(sessionStorage.getItem('favorite'));
    if (storageData) {
      const checkData = storageData.filter((el) => {
        return el.id === id;
      });
      if (checkData.length > 0) {
        setDisabled(true);
        setButtonText('Added');
      }
    }
  }, [id]);

  return (
    <>
      {id && (
        <div className={styles.grid}>
          <article>
            <img
              style={{ height: '200px', width: '350px' }}
              src={image}
              alt='Sample'
            ></img>
            <div className={styles.text}>
              <h3>{area}</h3>
              <p>{price}/Month</p>
              <p>{description}</p>
              <button
                disabled={disabled}
                onClick={() => {
                  disableHandeler(id);
                  btnClickHandler();
                }}
              >
                {buttonText}
              </button>
            </div>
          </article>
        </div>
      )}

      {!id && (
        <div className={styles.grid}>
          <article>
            <img
              style={{ height: '200px', width: '350px' }}
              src={image}
              alt='Sample'
            ></img>
            <div className={styles.text}>
              <h3>{area}</h3>
              <p>{price}/Month</p>
              <p>{description}</p>
              <button disabled={disabled} onClick={btnClickHandler}>
                {btnText}
              </button>
            </div>
          </article>
        </div>
      )}
    </>
  );
};

export default Card;
