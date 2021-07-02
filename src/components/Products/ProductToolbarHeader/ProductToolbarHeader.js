import Flex from 'components/UI/Flex';
import React from 'react';
import { useState } from 'react';
import { ReactComponent as ArrowDown } from './../../../static/icons/arrow-down.svg';
import styles from './_product_toolbar.module.scss';

import { Select } from 'antd';

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
  const [rotate, setRotate] = useState({ first: false, second: false });

  return (
    <div className={styles.toolbar}>
      <Flex justify="space-between" align="center">
        <div className={styles.toolbar_results}>Результатов {results}</div>

        <div className={styles.toolbar_sort_wrapper}>
          <Flex align="center">
            <div className="selector">
              <Select
                defaultValue="Сортировать"
                bordered={false}
                dropdownClassName="selector"
                maxTagTextLengt={40}
                onSelect={() =>
                  setRotate((prev) => ({ ...prev, first: !prev.first }))
                }
                className={styles.toolbar_select}
                suffixIcon={
                  <ArrowDown
                    style={{
                      transform: rotate.second
                        ? 'rotate(90deg)'
                        : 'rotate(0deg)',
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
                onSelect={() =>
                  setRotate((prev) => ({ ...prev, second: !prev.second }))
                }
                suffixIcon={
                  <ArrowDown
                    style={{
                      transform: rotate.second
                        ? 'rotate(90deg)'
                        : 'rotate(0deg)',
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
      </Flex>
    </div>
  );
};

export default ProductToolbarHeader;
