<template>
  <div class="Articulos container mt-5">
    <div class="row">
      <div class="col-12">
        <table class="table table-striped table-hover table-info">
          <thead>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Stock</th>
            <th></th>
          </thead>
          <tbody v-if="articles && articles !== []">
            <tr v-for="article in articles" :key="article.id">
              <td>{{ article.nombre }}</td>
              <td>{{ article.descipcion }}</td>
              <td>{{ article.precio }}</td>
              <td>{{ article.stock }}</td>
              <td class="px-0">
                <button class="btn btn-sm btn-primary px-4 mx-1">Ver</button>
                <router-link :to="/editar-articulo/+ article.id" class="btn btn-sm btn-success px-3 mx-1">Editar</router-link>
                <button class="btn btn-sm btn-danger mx-1">Eliminar</button>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr class="d-flex justify-content-center text-align-center">
              No hay articulos
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="col-12 d-flex justify-content-evenly">
        <router-link to="/" class="btn btn-dark"> Volver </router-link>
        <router-link to="/agregar-articulo" class="btn btn-success">
          Agregar Articulo
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import useArticles from "../composables/useArticles.js";

export default {
  setup() {

    const { articles, listArticles, isEdit, isAdd } = useArticles();

    onMounted(() => {
      listArticles();
    });

    return {
      isEdit,
      isAdd,
      articles,
    };
  },
};
</script>

<style lang="scss" scoped>
.Articulos {
  width: 100%;
  height: 35rem;
}
</style>
