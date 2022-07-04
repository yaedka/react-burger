import styles from "./ingredients-category.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import { dataTypes } from "../../utils/const";

export default function IngredientsCategory({ title, ingredients, id }) {
  return (
    <>
      <h2 id={id} className="text text_type_main-medium m-10">
        {title}
      </h2>
      <div className={styles.cardsblock}>
        {ingredients.map((item, index) => (
          <ul className={styles.item} key={item._id}>
            <li>
              <img src={item.image} alt={item.name} />
            </li>
            <li
              className={
                styles.currencyIcon + " " + "text text_type_digits-default"
              }
            >
              <span>
                <CurrencyIcon type="primary" />
              </span>
              {item.price}
            </li>
            <li className="text text_type_main-default">{item.name}</li>
          </ul>
        ))}
      </div>
    </>
  );
}


IngredientsCategory.propTypes = {
  data: dataTypes,
};

