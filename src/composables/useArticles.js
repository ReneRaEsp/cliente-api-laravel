import { ref } from "vue";
import axios from "axios";

const useArticles = () => {
  const articles = ref([]);
  const articleFounded = ref({});
  const edit = ref(false);

  const listArticles = () => {
    axios
      .get("http://127.0.0.1:8000/api/articulos")
      .then((res) => {
        articles.value = res.data;
      })
      .catch(console.log);
  };

  const addArticle = (article) => {
    axios
      .post("http://127.0.0.1:8000/api/articulos", article)
      .then((res) => {
        console.log(res.data);
      })
      .catch(console.log);
  };

  const findArticleById = (id) => {
    axios
      .get(`http://127.0.0.1:8000/api/articulos/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch(console.log);
  };

  const isEdit = () => {
    edit.value = true;
  };

  const isAdd = () => {
    edit.value = false;
  };

  return {
    edit,
    articleFounded,
    articles,
    listArticles,
    addArticle,
    findArticleById,
    isAdd,
    isEdit,
  };
};

export default useArticles;
