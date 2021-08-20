import React, { useEffect } from "react";
import styles from "./_header.module.scss";
import TopBar from "./components/TopBar/TopBar";
import ToolBar from "./components/ToolBar/ToolBar";
import MenuBar from "./components/MenuBar/MenuBar";
import { useDispatch } from "react-redux";
import { fetchCategories } from "store/slices/productsSlice";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "utils/consts";

export default function Header() {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div className={styles.header}>
      {!isMobile && <TopBar />}
      <ToolBar />
      {!isMobile && <MenuBar />}
    </div>
  );
}
