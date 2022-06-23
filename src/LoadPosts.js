//Сначала решил чтение постов вынести в отдельный модуль, чтобы не дублировать код
//но эта функция возвращала пустой массив

function loadPosts(value) {
    let res = [];
  const loadJson = async () => {

    try {
      const response = await fetch(process.env.REACT_APP_POSTS_URL);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      data.map(el => res.push(el));
      
    } catch (e) {
      console.error(e);
    }
  }
  loadJson();
  return res;
}

export default loadPosts;