import React from "react";

import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./app-header.module.css";

function AppHeader() {
  return (
    <header className={styles.header}>
      <ul className={styles.navigation}>
        <li className={styles.navitem}>
          <BurgerIcon type="secondary" />
          <p className="p-2">Конструктор</p>
        </li>
        <li className={styles.navitem}>
          <ListIcon type="secondary" />
          <p className="p-2">Лента заказов</p>
        </li>
        <li className={styles.navitem + " " + styles.logo}>
          <Logo />
        </li>
        <li className={styles.navitem}>
          <ProfileIcon type="secondary" />
          <p className="p-2">Личный кабинет</p>
        </li>
      </ul>
    </header>
  );
}

export default AppHeader;
