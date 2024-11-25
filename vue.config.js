const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/styles/variables.scss";
          @import "@/styles/mixins.scss";
        `,
      },
    },
  },
  transpileDependencies: true,
});

// const { defineConfig } = require('@vue/cli-service');
//
// module.exports = defineConfig({
//   css: {
//     loaderOptions: {
//       scss: {
//         additionalData: `
//           @import "@/styles/variables.scss";
//           @import "@/styles/mixins.scss";
//         `,
//       },
//     },
//   },
//   transpileDependencies: true,
// });
