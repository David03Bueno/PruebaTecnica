const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    }
  },

  devServer: {
    proxy: {
      '/api': {
        target: 'https://api.takeit.ciph3r.co/docs', // La URL base del servidor
        changeOrigin: true, // Permite cambiar el origen en las solicitudes
        pathRewrite: { '^/api': '' } // Remueve el prefijo '/api' al enviarlo al servidor
      }
    }
  }
});
