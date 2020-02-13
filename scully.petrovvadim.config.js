exports.config = {
  projectRoot: "./src",
  projectName: "petrovvadim",
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
  }
};