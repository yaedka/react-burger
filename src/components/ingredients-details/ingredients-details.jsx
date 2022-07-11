import React from "react";

import PropTypes from "prop-types";
import { ArrayPropTypes } from "../../utils/const";

import styles from "./ingredients-details.module.css";

function IngredientsDetails({ item }) {
  return (
    <>
      <img className={styles.image} src={item.image_large} />
      <h3 className={styles.name}>{item.name}</h3>
      <ul className={styles.values}>
        <li className={styles.value}>
          <p className={styles.nutrient}>Калории,ккал</p>
          <p className={styles.number}>{item.calories}</p>
        </li>
        <li className={styles.value}>
          <p className={styles.nutrient}>Белки, г</p>
          <p className={styles.number}>{item.proteins}</p>
        </li>
        <li className={styles.value}>
          <p className={styles.nutrient}>Жиры, г</p>
          <p className={styles.number}>{item.fat}</p>
        </li>
        <li className={styles.value}>
          <p className={styles.nutrient}>Углеводы, г</p>
          <p className={styles.number}>{item.carbohydrates}</p>
        </li>
      </ul>
    </>
  );
}

export default IngredientsDetails;

IngredientsDetails.propTypes = {
  item: PropTypes.object.isRequired,
};
