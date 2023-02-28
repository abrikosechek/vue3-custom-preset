module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @use "sass:map";
          @import "@/assets/css/main.scss";
        `
      }
    }
  }
};