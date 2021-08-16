import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleSearch, setSearchOpen, setSearchValue } from 'store/slices/productsSlice';
import useDebounce from 'hooks/useDebounce';
import clsx from 'clsx';

import { ReactComponent as SearchIcon } from './../../static/icons/search.svg';

import styles from './_search-input.module.scss';

const SearchInput = ({ radius }) => {
  const open = useSelector(({ modal }) => modal.open);
  const openSearch = useSelector(({ products }) => products.search.open);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const value = useDebounce(search, 350);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (search) {
      dispatch(handleSearch(value));
      dispatch(setSearchOpen(true));
    }
  }, [value]);

  const handleInput = (e) => {
    const value = e.target.value;

    setSearch(value);
    dispatch(setSearchValue(value));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={clsx({
        [styles.search]: true,
        [styles.active]: open,
        [styles.activeSearch]: openSearch,
      })}
      style={{
        borderTopLeftRadius: radius[0],
        borderTopRightRadius: radius[1],
        borderBottomRightRadius: radius[2],
        borderBottomLeftRadius: radius[3],
      }}
    >
      <input
        type="text"
        value={search}
        onChange={handleInput}
        className={styles.search_input}
        placeholder="Что вы хотите найти..."
      />
      <button className={styles.search_btn}>
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchInput;
