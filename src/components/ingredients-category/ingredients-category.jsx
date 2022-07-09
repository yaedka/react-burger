import React from "react";

import styles from "./ingredients-category.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import PropTypes from "prop-types";

import Modal from "../modal/modal";
import IngredientsDetails from "../ingredients-details/ingredients-details";

function IngredientsCategory({ item }) {
  const [isIngredientsDetailsOpened, setIsIngredientsDetailsOpened] =
    React.useState(false);
  return (
    <>
      <ul
        className={styles.item}
        key={item._id}
        onClick={() => setIsIngredientsDetailsOpened(true)}
      >
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
      {isIngredientsDetailsOpened && (
        <Modal
          title="Детали ингридиента"
          onClose={() => setIsIngredientsDetailsOpened(false)}
        >
          <IngredientsDetails item={item} />
        </Modal>
      )}
    </>
  );
}

export default IngredientsCategory;

IngredientsCategory.propTypes = {
  item: PropTypes.object.isRequired,
};
