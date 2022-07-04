import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

import styles from "./app.module.css";

function App() {
  return (
      <div className={styles.page}>
        <AppHeader />
        <main className={styles.content}>
          <BurgerIngredients />
          <BurgerConstructor />
        </main>
      </div>
  );
}

export default App;
