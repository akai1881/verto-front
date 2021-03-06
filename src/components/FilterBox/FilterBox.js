import Title from 'antd/lib/typography/Title';
import Checkbox from 'components/UI/Checkbox';
import Flex from 'components/UI/Flex';
import React from 'react';
import styles from './_filter_box.module.scss';
import { ReactComponent as ArrowActive } from './../../static/icons/16_arrow_active.svg';
import { ReactComponent as ArrowDisactive } from './../../static/icons/16_arrow_diactive.svg';
import { useState } from 'react';
import { Collapse } from 'antd';
import CustomScrollbar from 'components/CustomScrollbar/CustomScrollbar';
import { isCheckedFilter } from 'utils/helpers';

const { Panel } = Collapse;

const FilterBox = ({ data, title, handleCheck, params }) => {
  return (
    <div className={styles.filter}>
      <div className={styles.filter_divider} />
      <div className="collapser">
        <Collapse
          defaultActiveKey={['1']}
          ghost
          expandIconPosition="right"
          expandIcon={({ isActive }) => {
            return (
              <ArrowActive
                className={styles.arrow}
                style={{
                  transform: isActive ? 'translateY(-50%) rotate(180deg)' : 'translateY(-50%) rotate(0deg)',
                }}
              />
            );
          }}
        >
          <Panel
            header={
              <Title level={4} className={`${styles.filter_title}`}>
                {title}:
              </Title>
            }
            key="1"
          >
            <CustomScrollbar style={{ width: 500, height: 300 }}>
              {data.map((item) => (
                <Checkbox
                  key={item.id}
                  title={item.value}
                  count={item.feature}
                  checked={isCheckedFilter(item.value, params)}
                  onChange={handleCheck}
                />
              ))}
            </CustomScrollbar>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default FilterBox;
