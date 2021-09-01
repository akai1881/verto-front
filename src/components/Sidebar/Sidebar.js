import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { deleteURLSearchParam } from 'utils/helpers';
import clsx from 'clsx';

import FilterBox from 'components/FilterBox/FilterBox';
import Title from 'antd/lib/typography/Title';
import PriceFilter from 'components/PriceFilter/PriceFilter';

import styles from './_sidebar.module.scss';

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
    title: 'Xiaomi',
    count: 10000,
  },
  {
    id: 1232,
    title: 'OnePlus',
    count: 25000,
  },
  {
    id: 1231,
    title: 'Sony',
    count: 10000,
  },
  {
    id: 2124,
    title: 'Nokia',
    count: 25000,
  },
  {
    id: 12351,
    title: 'Lenovo',
    count: 10000,
  },
  {
    id: 521352,
    title: 'Huawei',
    count: 25000,
  },
  {
    id: 112341,
    title: 'Oppo',
    count: 10000,
  },
  {
    id: 13412,
    title: 'Google Pixel',
    count: 25000,
  },
];

const Sidebar = ({ params }) => {
  const categories = useSelector(({ products }) => products.categories.data);
  const [search, setSearch] = useState(new URLSearchParams(window.location.search).toString());
  const [features, setFeatures] = useState([]);

  const history = useHistory();

  const { categoryIndex, subCategoryIndex, categoryName } = params;

  const findSubCategoryTitle = () => {
    return categories[categoryIndex]?.children[subCategoryIndex]?.title;
  };

  const isActiveCategory = (title) => {
    return title === categoryName;
  };

  useEffect(() => {
    setSearch(new URLSearchParams(window.location.search).toString());
  }, [params]);

  useEffect(() => {
    if (categories) {
      findCategories();
    }
  }, [categories]);
  const handlePriceFilter = () => {};

  // TODO REFACTOR THIS SHIIIIIT
  const handleCheck = (filter) => {
    const query = new URLSearchParams(window.location.search);

    let q = query.get('feature');

    if (!q) {
      q = '';
    }

    if (!filter.checked) {
      q = deleteURLSearchParam(query.toString(), filter.title);
      const last = /feature=(?!.)/gi;
      if (last.test(q)) {
        q = '';
      }
      history.push(`/goods/${categoryIndex}/${subCategoryIndex}/${categoryName}?${q}`);
      return;
    } else {
      q += '$' + filter.title;
    }

    query.set('feature', q);

    history.push(`/goods/${categoryIndex}/${subCategoryIndex}/${categoryName}?${query.toString()}`);
    // if (!filter.checked) {
    //   const newParams = deleteURLSearchParam(search, filter.title);
    //   history.push(`/goods/${categoryIndex}/${subCategoryIndex}/${categoryName}?${newParams}`);
    // } else {
    //   history.push(
    //     `/goods/${categoryIndex}/${subCategoryIndex}/${categoryName}?${search ? search + '&' : ''}feature=${
    //       filter.title
    //     }`
    //   );
    // }
  };

  const findCategories = () => {
    const first = categories?.find((item) => item.slug === categoryIndex);
    const second = first?.children?.find((item) => item.slug === subCategoryIndex);

    const final = second?.children?.find((item) => item.slug === categoryName);
    setFeatures(final?.features);
  };

  const handlePriceChange = (price) => {
    const query = new URLSearchParams(window.location.search);
    query.set('price_from', price[0]);
    query.set('price_to', price[1]);
    history.push(`/goods/${categoryIndex}/${subCategoryIndex}/${categoryName}?${query.toString()}`);
  };

  return (
    <>
      {categories.length > 0 && (
        <div className={styles.sidebar}>
          <Title level={5} className={styles.sidebar_title}>
            Категория
          </Title>
          <div className={styles.sidebar_text}>Все</div>
          <div className={styles.sidebar_text}>{findSubCategoryTitle() ?? 'Нет названия категории'}</div>
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
          <PriceFilter onChange={handlePriceChange} />
          {features?.map((item) => (
            <FilterBox params={search} title={item.feature_name} data={item.values} handleCheck={handleCheck} />
          ))}
          {/* <FilterBox
            params={search}
            title="Модели"
            data={brands}
            handleCheck={handleCheck}
          />
          <FilterBox
            params={search}
            title="Объем памяти"
            data={brands}
            handleCheck={handleCheck}
          />
          <FilterBox
            params={search}
            title="Размер экрана"
            data={brands}
            handleCheck={handleCheck}
          /> */}
        </div>
      )}
    </>
  );
};

export default Sidebar;
