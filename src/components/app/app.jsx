import React from "react";

import { useEffect, useState } from "react";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

import styles from "./app.module.css";

import { fetchData } from "../../utils/api";

function App() {
  const [state, setFetchDataState] = useState({
    data: [],
    hasError: false,
    isLoading: true,
  });

  useEffect(() => {
    getIngredients();
  }, []);

  function getIngredients() {
    setFetchDataState({ ...state, isLoading: true, hasError: false });
    fetchData()
      .then((obj) =>
        setFetchDataState({ ...state, data: obj.data, isLoading: false })
      )
      .catch((e) => {
        setFetchDataState({ ...state, isLoading: false, hasError: false });
      });
  }

  return (
    <div className={styles.page}>
      <AppHeader />
      <main className={styles.content}>
        {state.isLoading && "Приложение загружается ..."}
        {state.hasError && "Произошла ошибка. Попробуйте позже ..."}
        {!state.isLoading && !state.hasError && (
          <>
            <BurgerIngredients data={state.data} />
            <BurgerConstructor data={state.data} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
