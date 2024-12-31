<template>
  <v-container :fluid="true">
    <v-tabs v-model="tabs" bg-color="teal-darjen-4">
      <v-tab value="1"> Listado de Categorias</v-tab>
      <v-tab value="2"> Tabla de Categorias</v-tab>
    </v-tabs>

    <v-window v-model="tabs">
      <v-window-item value="1">
        <v-row>
          <v-col cols="12" md="12">
            <v-col>
              <v-card v-for="items in itemsDatos" :key="items.id">
                <h1>{{ items.name }}</h1>
                <p>{{ items.description }}</p>
                <v-img :src="items.image" :width="200"> </v-img>
              </v-card>
            </v-col>
          </v-col>
        </v-row>
      </v-window-item>

      <v-window-item value="2">
        
        <v-row >
            <v-col cols="4">
                <v-autocomplete
      
                  v-model="autocomplete"
                  label="Autocomplete"
                  :items="itemsDatos"
                ></v-autocomplete>
            </v-col>
            <v-col cols="6">
        <v-btn color="teal-darken-4" rounded="x1">Agregar Producto</v-btn>
      </v-col>        </v-row>

        <v-data-table-server
          v-model:items-per-page="itemsPerPage"
          :headers="headers"
          :items="itemsDatos"
          :loading="loading"
          :search="search"
          item-value="name"
          @update:options="loadItems"
        >
        </v-data-table-server>
      </v-window-item>
    </v-window>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  name: "ProductosCRUD",
  data() {
    return {
      autocomplete: "",
      tabs: null,
      itemsDatos: [],
      loading: false,
      headers: [
        {
          title: "id",
          align: "start",
          sortable: false,
          key: "id",
        },
        { title: "Nombre", key: "name", align: "left" },
        { title: "Descripcion", key: "description", align: "justify" },
        { title: "Imagen", key: "image", align: "left" },
      ],
    };
  },
  async mounted() {
    await this.GetProdcutos();
  },
  methods: {
    async GetProdcutos() {
      try {
        this.loading= true;

        const { data } = await axios({
          url: "https://api.takeit.ciph3r.co/api/v1/shop/categories",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJpdiI6IlpONWJPWFYxQjV2blJYUUUyUnRRUHc9PSIsInZhbHVlIjoiYXVpSCtWakN0VEwwbUQzd1BxazdBTUoyM0ZldHdjU1dnOW84K3dQMGdTOUxRTHhQakp6RFhoekMwS1hpaHBpbkd2OTNhV2FDcDZVVENvTFQ0a0Y0Z1hiZXNiRjZnM2g5Y2gxa0tlTytQYmxkU1kxeElNTFBWQnBzNHAxd0lMMzAiLCJtYWMiOiI1YWZmMjczYWNjMTE5ZTg1MzgxMzhhMGY1ZTUyZGNkOWU4OGZlMTAwOGM2ODEyYzRmMTk3YTIxOTBlY2E4ZmI4IiwidGFnIjoiIn0%3D`,
          },
        });
        this.itemsDatos = data.data;
        console.log(this.itemsDatos);
        this.loading= false;
      } catch (error) {
        console.log("El error es" + error);
      }
    },
  },
};
</script>
