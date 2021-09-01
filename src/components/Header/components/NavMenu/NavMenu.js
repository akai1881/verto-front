import React from "react";
import { Link } from "react-router-dom";
import Flex from "./../../../UI/Flex";
import styles from "./_nav.module.scss";

const mock = [
  {
    id: 1,
    text: "О сайте",
    path: "/about-us",
  },
  {
    id: 2,
    text: "Связаться",
    path: "/contact-us",
  },
  {
    id: 3,
    text: "Помощь",
    path: "/help",
  },
  {
    id: 4,
    text: "Условия работы",
    path: "/conditions",
  },
  {
    id: 5,
    text: "Сертификаты",
    path: "/certifications",
  },
];

const Nav = () => {
  return (
    <div className={styles.wrapper}>
      <Flex>
        {mock.map(({ id, text, path }) => (
          <Link key={id} className={styles.link} to={path}>
            {text}
          </Link>
        ))}
      </Flex>
    </div>
  );
};

export default Nav;
