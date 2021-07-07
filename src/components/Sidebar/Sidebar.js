import Title from 'antd/lib/typography/Title';
import FilterBox from 'components/FilterBox/FilterBox';
import React from 'react';
import { useSelector } from 'react-redux';
import PriceFilter from 'components/PriceFilter/PriceFilter';
import styles from './_sidebar.module.scss';
import clsx from 'clsx';

const mockData = [
  {
    id: 1,
    title: 'Смартфоны',
  },
  {
    id: 2,
    title: 'Смарт-часы',
  },
  {
    id: 3,
    title: 'Аксессуары для смарт-часов',
  },
  {
    id: 4,
    title: 'Аксессуары для сотовых телефонов',
  },
  {
    id: 5,
    title: 'Экраны для сотовых телефонов',
  },
  {
    id: 6,
    title: 'КПК',
  },
];

const brands = [
  {
    id: 1,
    title: 'Samsung',
    count: 10000,
  },
  {
    id: 2,
    title: 'Apple',
    count: 25000,
  },
  {
    id: 1123,
    title: 'Samsung',
    count: 10000,
  },
  {
    id: 1232,
    title: 'Apple',
    count: 25000,
  },
  {
    id: 1231,
    title: 'Samsung',
    count: 10000,
  },
  {
    id: 2124,
    title: 'Apple',
    count: 25000,
  },
  {
    id: 12351,
    title: 'Samsung',
    count: 10000,
  },
  {
    id: 521352,
    title: 'Apple',
    count: 25000,
  },
  {
    id: 112341,
    title: 'Samsung',
    count: 10000,
  },
  {
    id: 13412,
    title: 'Apple',
    count: 25000,
  },
];

const Sidebar = ({ params }) => {
  const categories = useSelector(({ products }) => products.categories.data);

  const { categoryIndex, subCategoryIndex, categoryName } = params;

  const findSubCategoryTitle = () => {
    return categories[categoryIndex]?.children[subCategoryIndex]?.title;
  };

  const isActiveCategory = (title) => {
    return title === categoryName;
  };

  return (
    <>
      {categories.length > 0 && (
        <div className={styles.sidebar}>
          <Title level={5} className={styles.sidebar_title}>
            Категория
          </Title>
          <div className={styles.sidebar_text}>Все</div>
          <div className={styles.sidebar_text}>
            {findSubCategoryTitle() ?? 'Нет названия категории'}
          </div>
          <ul className={styles.sidebar_list}>
            {mockData.map((item) => (
              <li
                key={item.id}
                className={clsx({
                  [styles.sidebar_text]: true,
                  [styles.sidebar_list_item]: true,
                  [styles.active]: isActiveCategory(item.title),
                })}
              >
                {item.title}
              </li>
            ))}
          </ul>
          <FilterBox title="Бренды" data={brands} />
          <FilterBox title="Модели" data={brands} />
          <FilterBox title="Объем памяти" data={brands} />
          <FilterBox title="Размер экрана" data={brands} />
          <PriceFilter />
        </div>
      )}
    </>
  );
};

export default Sidebar;
