const apiUrl = "https://norma.nomoreparties.space/api/ingredients";

export const fetchData = async () => {
  const res = await fetch(apiUrl);
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};
