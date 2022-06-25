import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./burger-constructor.module.css";

import { data } from "../../utils/data";

const mainArrItems = data.filter((item) => item.type == "main");
const ingredients = Array.from(mainArrItems);
const bunName = Array.from(data.filter((el) => el.type === "bun"))[0];

function BurgerConstructor() {
  return (
    <>
      <section className="burgerConstructor mt-25">
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={bunName.name + " (верх)"}
            price={bunName.price}
            thumbnail={bunName.image}
          />

          <ul className={styles.componentlist}>
            {ingredients.map((item, index) => (
              <li key={index}>
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
            <Button type="primary" size="medium">
              Оформить заказ
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default BurgerConstructor;
