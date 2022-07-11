import React from "react";
import { useState } from "react";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients.module.css";

import IngredientsCategory from "../ingredients-category/ingredients-category";

//import { data } from "../../utils/data";
import { ArrayPropTypes } from "../../utils/const";

function BurgerIngredients({ data }) {
  const bunsArr = data.filter((el) => el.type === "bun");
  const mainArr = data.filter((el) => el.type === "main");
  const sauceArr = data.filter((el) => el.type === "sauce");

  return (
    <section className="burgerIngredients">
      <p className="text text_type_main-large">Соберите бургер</p>
      <div className={styles.optionselection}>
        <Tab active>Булки</Tab>
        <Tab>Соусы</Tab>
        <Tab>Начинки</Tab>
      </div>
      <section className={styles.options}>
        <h2 id={data._id} className="text text_type_main-medium m-10">
          Булки
        </h2>
        <div className={styles.cardsblock}>
          {bunsArr.map((ingredient) => (
            <IngredientsCategory
              id="bun"
              item={ingredient}
              key={ingredient._id}
            />
          ))}
        </div>

        <h2 id={data._id} className="text text_type_main-medium m-10">
          Соусы
        </h2>
        <div className={styles.cardsblock}>
          {sauceArr.map((ingredient) => (
            <IngredientsCategory
              id="sauce"
              item={ingredient}
              key={ingredient._id}
            />
          ))}
        </div>
        <h2 id={data._id} className="text text_type_main-medium m-10">
          Начинки
        </h2>
        <div className={styles.cardsblock}>
          {mainArr.map((ingredient) => (
            <IngredientsCategory
              id="main"
              item={ingredient}
              key={ingredient._id}
            />
          ))}
        </div>
      </section>
    </section>
  );
}

export default BurgerIngredients;

BurgerIngredients.propTypes = {
  data: ArrayPropTypes,
};
