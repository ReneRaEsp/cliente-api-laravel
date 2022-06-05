<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-12 p-4">
        <h3 class="text-light fw-bold">Agregar Articulo</h3>
      </div>
      <form class="col-12 col-md-6">
        <div class="mb-3 row">
          <label for="nombre" class="col-sm-2 col-form-label text-light"
            >Nombre</label
          >
          <div class="col-sm-10">
            <input
              v-model="nombre"
              type="text"
              class="form-control"
              id="nombre"
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="descripcion" class="col-sm-2 col-form-label text-light"
            >Descripcion</label
          >
          <div class="col-sm-10">
            <input
              v-model="descripcion"
              type="text"
              class="form-control"
              id="descripcion"
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="precio" class="col-sm-2 col-form-label text-light"
            >Precio</label
          >
          <div class="col-sm-10">
            <input
              v-model.number="precio"
              type="number"
              class="form-control"
              id="precio"
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="stock" class="col-sm-2 col-form-label text-light"
            >Stock</label
          >
          <div class="col-sm-10">
            <input
              v-model.number="stock"
              type="number"
              class="form-control"
              id="stock"
            />
          </div>
        </div>
        <div class="mb-3 row d-flex justify-content-around">
          <router-link to="/articulos" class="col-4 btn btn-dark">
            Volver
          </router-link>
          <div @click="onClick()" class="btn btn-success col-4">
            Guardar
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import useArticles from "./../composables/useArticles.js";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const { nombre, descripcion, precio, stock, updateArticle, findArticleById } =
      useArticles();

    onMounted(() => {
      findArticleById(route.params.id);
    });

    const onClick = () => {
      updateArticle(route.params.id);
    }

    return {
      route,
      nombre,
      descripcion,
      precio,
      stock,
      onClick
    };
  },
};
</script>
<style scoped lang="scss"></style>
