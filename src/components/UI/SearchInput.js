import React, { useState } from 'react';
import styles from './_search-input.module.scss';
import { ReactComponent as SearchIcon } from './../../static/icons/search.svg';
import { useSelector } from 'react-redux';

const SearchInput = ({ radius }) => {
  const open = useSelector(({ modal }) => modal.open);
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.search_box} ${open ? styles.active : ''}`}
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
