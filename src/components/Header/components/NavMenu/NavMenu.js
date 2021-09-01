import React from 'react';
import Flex from './../../../UI/Flex';
import styles from './_nav.module.scss';

const mock = [
  {
    id: 1,
    text: 'О сайте',
  },
  {
    id: 2,
    text: 'Связаться',
  },
  {
    id: 3,
    text: 'Помощь',
  },
  {
    id: 4,
    text: 'Условия работы',
  },
  {
    id: 5,
    text: 'Сертификаты',
  },
];

const Nav = () => {
  return (
    <div className={styles.wrapper}>
      <Flex>
        {mock.map(({id, text}) => (
          <a href="#" className={styles.link} key={id}>
            {text}
          </a>
        ))}
      </Flex>
    </div>
  );
};

export default Nav;
