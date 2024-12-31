<template>
  <v-app>
    <!-- <v-navigation-drawer class="br-teal-darken-4" theme="dark" permanent>

      <v-list-item link to="/" title="Productos" prepend-icon="mdi-bell">
      </v-list-item>
    </v-navigation-drawer> -->

    <v-main>
      <AppBar />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import AppBar from './components/AppBar.vue'
export default {
  name: 'App',

  components: {
    AppBar,
  },

  data: () => ({
    //
  }),
}
</script>
