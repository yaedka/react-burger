import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients.module.css";

import IngredientsCategory from "../ingredients-category/ingredients-category";

import { data } from "../../utils/data";

function BurgerIngredients() {
  const bunsArr = data.filter((el) => el.type === "bun");
  const mainArr = data.filter((el) => el.type === "main");
  const sauceArr = data.filter((el) => el.type === "sauce");

  return (
    <>
      <section className="burgerIngredients">
        <p className="text text_type_main-large">Соберите бургер</p>
        <div className={styles.optionselection}>
          <Tab>Булки</Tab>
          <Tab>Соусы</Tab>
          <Tab>Начинки</Tab>
        </div>
        <section className={styles.options}>
          <IngredientsCategory id="bun" title="Булки" ingredients={bunsArr} />

          <IngredientsCategory
            id="sauce"
            title="Соусы"
            ingredients={sauceArr}
          />

          <IngredientsCategory
            id="main"
            title="Начинки"
            ingredients={mainArr}
          />
        </section>
      </section>
    </>
  );
}

export default BurgerIngredients;
