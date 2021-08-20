import React, { useEffect, useState } from 'react';
import Flex from 'components/UI/Flex';
import { Select } from 'antd';

import { ReactComponent as ArrowDown } from './../../../static/icons/arrow-down.svg';
import { ReactComponent as SortIconDefault } from './../../../static/icons/sortOptions.svg';
import { ReactComponent as SortIconActive } from './../../../static/icons/sort-active.svg';
import { ReactComponent as FilterIconActive } from './../../../static/icons/FilterOptions.svg';
import { ReactComponent as FilterIconDefault } from './../../../static/icons/filter-default.svg';

import styles from './_product_toolbar.module.scss';
import { useMediaQuery } from 'react-responsive';
import { deviceSize } from 'utils/consts';
import { useDispatch } from 'react-redux';
import { setOpenOptionDialog } from 'store/slices/modalSlice';
import { useParams } from 'react-router-dom';
const { Option } = Select;

const mock = [
  {
    id: 1,
    title: 'Цена (низкая < высокая)',
    sort: 'desc',
  },
  {
    id: 2,
    title: 'Цена (высокая < низкая)',
    sort: 'asc',
  },
  {
    id: 3,
    title: 'Популярное',
    sort: 'popular',
  },
  {
    id: 4,
    title: 'Новинки',
    sort: 'new',
  },
];

const ProductToolbarHeader = ({ results }) => {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const [rotate, setRotate] = useState({ first: false, second: false });
  const [filterActive, setFitlerActive] = useState(false);
  const params = useParams();

  const handleOpenSortMenu = () => {
    dispatch(setOpenOptionDialog({ open: true, content: 'sort' }));
  };

  useEffect(() => {
    checkFilter();
  }, [params]);

  const handleOpenFilterMenu = () => {
    dispatch(setOpenOptionDialog({ open: true, content: 'filter' }));
  };

  const checkFilter = () => {
    const pattern = /feature=|&price_to=|&price_from=/gi;

    if (pattern.test(window.location.search)) {
      setFitlerActive(true);
    } else {
      setFitlerActive(false);
    }
  };

  return (
    <div className={styles.toolbar}>
      <Flex justify="space-between" align="center">
        <div className={styles.toolbar_results}>Результатов {results}</div>

        {!isMobile ? ( // TODO MAKE THIS AS A COMPONENT
          <div className={styles.toolbar_sort_wrapper}>
            <Flex align="center">
              <div className="selector">
                // TODO MAKE THIS AS A INDIVIDUAL COMPONENT
                <Select
                  defaultValue="Сортировать"
                  bordered={false}
                  dropdownClassName="selector"
                  maxTagTextLengt={40}
                  onSelect={() => setRotate((prev) => ({ ...prev, first: !prev.first }))}
                  className={styles.toolbar_select}
                  suffixIcon={
                    <ArrowDown
                      style={{
                        transform: rotate.second ? 'rotate(90deg)' : 'rotate(0deg)',
                      }}
                    />
                  }
                >
                  {mock.map(({ sort, id, title }) => (
                    <Option key={id} value={sort}>
                      {title}
                    </Option>
                  ))}
                </Select>
              </div>
            </Flex>

            <Flex align="center">
              <div className="selector">
                <Select
                  defaultValue="Сортировать"
                  bordered={false}
                  dropdownClassName="selector"
                  maxTagTextLengt={40}
                  className={styles.toolbar_select}
                  onSelect={() => setRotate((prev) => ({ ...prev, second: !prev.second }))}
                  suffixIcon={
                    <ArrowDown
                      style={{
                        transform: rotate.second ? 'rotate(90deg)' : 'rotate(0deg)',
                      }}
                    />
                  }
                >
                  {mock.map(({ sort, id, title }) => (
                    <Option key={id} value={sort}>
                      {title}
                    </Option>
                  ))}
                </Select>
              </div>
            </Flex>
          </div>
        ) : (
          <Flex>
            <div className={styles.toolbar_options} onClick={handleOpenSortMenu}>
              <SortIconDefault />
            </div>
            <div className={styles.toolbar_options} onClick={handleOpenFilterMenu}>
              {filterActive ? <FilterIconActive /> : <FilterIconDefault />}
            </div>
          </Flex>
        )}
      </Flex>
    </div>
  );
};

export default ProductToolbarHeader;
