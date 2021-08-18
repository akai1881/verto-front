import React, { useEffect, useState } from 'react';

import { ReactComponent as StockIcon } from './../../../static/icons/16_appruved ligh.svg';
import { ReactComponent as BuyIcon } from './../../../static/icons/16_buyed ligh.svg';
import { ReactComponent as QuestionIcon } from './../../../static/icons/24_question light.svg';
import { ReactComponent as CardIcon } from './../../../static/icons/24_bag white.svg';
import Flex from 'components/UI/Flex';
import clsx from 'clsx';
import * as yup from 'yup';
import { truncateString } from 'utils/helpers';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'components/UI/Button';
import productsSlice from 'store/slices/productsSlice';

import styles from './_products_option.module.scss';
import { useMediaQuery } from 'react-responsive';
import { deviceSize } from 'utils/consts';

const memory = {
  title: 'memory',
  results: [
    {
      name: '64 гб',
      value: 64,
      id: 1,
    },
    {
      name: '128 гб',
      value: 128,
      id: 2,
    },
    {
      name: '256 гб',
      value: 256,
      id: 3,
    },
  ],
};

const color = {
  title: 'color',
  results: [
    {
      color: '#BFC5D5',
      id: 453,
    },
    {
      color: '#DCDA90',
      id: 132123,
    },
    {
      color: '#F4422C',
      id: 3123243521,
    },
    {
      color: '#FFFFFF',
      id: 1321234213,
    },
    {
      color: '#000000',
      id: 343521,
    },
  ],
};

const ProductOptions = ({ product }) => {
  const [colorChoose, setColorChoose] = useState(null);
  const [chooseOption, setChooseOption] = useState(null);
  const [productCount, setProducCount] = useState(1);

  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  const handleColorChoose = (id) => {
    setColorChoose(id);
  };

  const handleChooseOption = (id) => {
    setChooseOption(id);
  };

  const handleChangeCount = (e) => {
    let value = e.target.value;

    if (value === '') {
      value = '';
      setProducCount('');
      return;
    } else if (value == 0) {
      value = 1;
    }

    if (isNaN(+value)) {
      return;
    }

    setProducCount(+value);
  };

  const handleBlur = (e) => {
    if (e.target.value === '') {
      setProducCount(1);
    }
  };

  const handleKeyPress = (e) => {
    let count = productCount;
    if (e.key === 'ArrowUp') {
      if (count === '') {
        count = 1;
        setProducCount(count);
        return;
      }
      count += 1;
      setProducCount(count);
    } else if (e.key === 'ArrowDown') {
      if (count === 1 || count === '') {
        count = 1;
        setProducCount(count);
        return;
      }

      count -= 1;
      setProducCount(count);
    }
  };

  return (
    <div className={styles.product}>
      <h1 className={styles.product__title}>{product.title}</h1>
      {isMobile && <div className={styles.mobile_price}>{product.price} ₸</div>}
      <Flex justify="space-between" align="stretch">
        <div className={styles.mobile_col}>
          {/* {isMobile && ( */}
          <div className={styles.product__article}>
            Минимальное кол-во для покупки {product.min_purchase} {product.unity}.
          </div>
          {/* )} */}
          <Flex align="center">
            <span class={styles.product__icon}>
              <StockIcon />
            </span>
            <span className={styles.product__stock}>
              В наличии {product.quantity} {product.unity}.
            </span>
          </Flex>
        </div>

        <div className={styles.mobile_col}>
          <Flex align="center">
            <span class={styles.product__icon}>
              <BuyIcon />
            </span>
            <span className={styles.product__sold}>Продано 101</span>
          </Flex>
          <div className={styles.product__article}>Артикул: 025 ASE</div>
        </div>
      </Flex>
      <div className={styles.product__mainInfo}>
        <div className={styles.product__infoCard}>
          <h3 className={styles.product__infoTitle}>Объем памяти</h3>
          <div className={styles.product__options}>
            {memory.results.map((item) => (
              <div
                className={clsx({
                  [styles.product__optionChoose]: true,
                  [styles.active]: item.id === chooseOption,
                })}
                data-value={item.value}
                data-name={memory.title}
                onClick={() => handleChooseOption(item.id)}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.product__infoCard}>
          <h3 className={styles.product__infoTitle}>Цвет</h3>
          <div className={styles.product__options}>
            {color.results.map((item) => (
              <div
                className={clsx({
                  [styles.product__color]: color.title,
                  [styles.active]: item.id === colorChoose,
                })}
                style={{ background: `${item.color}` }}
                data-value={item.name}
                data-name={color.title}
                onClick={() => handleColorChoose(item.id)}
              />
            ))}
          </div>
        </div>
        <div className={styles.product__infoCard}>
          <h3 className={styles.product__infoTitle}>Краткое описание</h3>
          <div className={styles.product__shortInfo}>
            {truncateString(
              "Экран 4,7'/ Матрица PS / Память 5,7 ГБ / Рас-ширение 1780х3500 / 2 SIM-карты / Камера 5 Mpx / RAM 1 GB ",
              110
            )}
          </div>
        </div>
        <div className={styles.product__infoCard}>
          <h3 className={styles.product__infoTitle}>Колличество</h3>
          <div className={styles.product__count}>
            <input
              type="text"
              className={styles.product__countInp}
              value={productCount}
              onBlur={handleBlur}
              onKeyDown={handleKeyPress}
              onChange={handleChangeCount}
            />
          </div>
        </div>
        <div className={styles.product__infoCard}>
          <h3 className={styles.product__infoTitle}>Доставка</h3>
          <div className={styles.product__shipping}>
            <span>
              <QuestionIcon />
            </span>
          </div>
        </div>
        <div className={styles.product__infoCard}>
          <h3 className={styles.product__infoTitle}>{isMobile ? 'Общая стоимость' : 'Цена'}</h3>
          <div className={styles.product__price}>
            <span>{product.price} ₸</span>
          </div>
        </div>
        <Button className={styles.product__addToCardBtn}>
          <CardIcon />
          <span>Добавить в корзину</span>
        </Button>
      </div>
    </div>
  );
};

export default ProductOptions;
