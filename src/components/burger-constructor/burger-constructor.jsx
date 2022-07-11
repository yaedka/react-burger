import React from "react";

import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./burger-constructor.module.css";

//import { data } from "../../utils/data";

import { ArrayPropTypes } from "../../utils/const";

import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";

function BurgerConstructor({ data }) {
  const [isOrderDetailsOpened, setIsOrderDetailsOpened] = React.useState(false);

  const mainArrItems = data.filter(
    (item) => item.type == "main" || item.type == "sauce"
  );
  const ingredients = Array.from(mainArrItems);
  const bunName = Array.from(data.filter((el) => el.type === "bun"))[0];

  return (
    <section className="burgerConstructor mt-25">
      <div className={styles.components}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={bunName.name + " (верх)"}
          price={bunName.price}
          thumbnail={bunName.image}
        />

        <ul className={styles.componentList}>
          {ingredients.map((item) => (
            <li key={item._id} className={styles.componentItem}>
              <DragIcon type="primary" />
              <ConstructorElement
                text={item.name}
                price={item.price}
                thumbnail={item.image}
                isLocked={false}
              />
            </li>
          ))}
        </ul>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={bunName.name + " (низ)"}
          price={bunName.price}
          thumbnail={bunName.image}
        />
      </div>

      <div className={styles.totalSum + " " + "mt-10"}>
        <div className={styles.text}>
          <p className="text text_type_digits-medium">610</p>
        </div>
        <CurrencyIcon type="primary" className="mr-10" />
        <div className={styles.button}>
          <Button
            type="primary"
            size="medium"
            onClick={() => setIsOrderDetailsOpened(true)}
          >
            Оформить заказ
          </Button>
        </div>
      </div>
      {isOrderDetailsOpened && (
        <Modal onClose={() => setIsOrderDetailsOpened(false)}>
          <OrderDetails />
        </Modal>
      )}
    </section>
  );
}

export default BurgerConstructor;

BurgerConstructor.propTypes = {
  data: ArrayPropTypes,
};
