import React from 'react';
import Flex from 'components/UI/Flex';
import styles from './_tool.module.scss';

import { ReactComponent as ProfileIcon } from './../../../../static/icons/profile.svg';
import { ReactComponent as HeartIcon } from './../../../../static/icons/heart.svg';
import { ReactComponent as EyeIcon } from './../../../../static/icons/eye.svg';
import { ReactComponent as BagIcon } from './../../../../static/icons/bag.svg';
import { Tooltip } from 'antd';

const mock = [
  {
    id: 1,
    Icon: ProfileIcon,
    title: 'Профиль',
  },
  {
    id: 2,
    Icon: EyeIcon,
    title: 'Просмотренные',
  },
  {
    id: 3,
    Icon: HeartIcon,
    title: 'Избранное',
  },
  {
    id: 4,
    Icon: BagIcon,
    title: 'Корзина',
  },
];

const Tools = () => {
  return (
    <Flex align="center">
      {mock.map(({ id, Icon, title }) => (
        <Tooltip key={id} placement="top" title={title}>
          <div key={id} className={styles.tool}>
            <Icon />
          </div>
        </Tooltip>
      ))}
    </Flex>
  );
};

export default Tools;
