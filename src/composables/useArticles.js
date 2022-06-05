import { ref } from "vue";
import axios from "axios";

const useArticles = () => {
  const articles = ref([]);
  const article = ref({});
  const edit = ref(false);
  const nombre = ref("");
  const descripcion = ref("");
  const precio = ref("");
  const stock = ref("");

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
        nombre.value = res.data.nombre;
        descripcion.value = res.data.descripcion;
        precio.value = res.data.precio;
        stock.value = res.data.stock;
      })
      .catch(console.log);
  };

  const updateArticle = (id) => {
    axios
      .put(`http://127.0.0.1:8000/api/articulos/${id}`, {
        nombre: nombre.value,
        descripcion: descripcion.value,
        precio: precio.value,
        stock: stock.value,
      })
      .then((res) => {
        alert("articulo actualizado exitosamente", res.data);
      })
      .catch(console.log);
  };

  const deleteArticle = (id) => {
    if (confirm("Esta seguro que quiere eliminar el elemento: " + nombre.value)) {
      axios
        .delete(`http://127.0.0.1:8000/api/articulos/${id}`)
        .then((res) => {
          alert("eliminado", res.data);
          listArticles();
        })
        .catch(console.log);
    }
  };

  return {
    edit,
    article,
    nombre,
    descripcion,
    precio,
    stock,
    articles,
    listArticles,
    addArticle,
    findArticleById,
    updateArticle,
    deleteArticle
  };
};

export default useArticles;
