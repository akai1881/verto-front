import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchOpen } from 'store/slices/productsSlice';
import { Link } from 'react-router-dom';

import useClickOutside from 'hooks/useClickOutside';

import styles from './_autocomplete.module.scss';

const AutoCompleteSearch = () => {
  const { open, data } = useSelector(({ products }) => products.search);
  const dispatch = useDispatch();
  const clickRef = useRef();
  useClickOutside(clickRef, handleClose);

  function handleClose() {
    dispatch(setSearchOpen(false));
  }

  return (
    <div ref={clickRef} className={`${styles.wrapper} ${open ? styles.active : ''}`}>
      {data.length > 0 &&
        data.map((item) => (
          <Link key={item.id} to={`/product/${item.slug}`}>
            <div className={styles.searchItem}>{item.title}</div>
          </Link>
        ))}
    </div>
  );
};

export default AutoCompleteSearch;
