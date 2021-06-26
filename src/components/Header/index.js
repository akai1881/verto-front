import React from 'react';
import styles from './_header.module.scss';
import TopBar from './components/TopBar/TopBar';
import ToolBar from './components/ToolBar/ToolBar';
import MenuBar from './components/MenuBar/MenuBar';

export default function Header() {
  return (
    <div className={styles.header}>
      <TopBar />
      <ToolBar />
      <MenuBar />
    </div>
  );
}
