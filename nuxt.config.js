
const path = require('path');

// glob is a small module to read 'globs', useful to get
// a filtered file list
const glob = require('glob');

// generates the dynamic routes for MD files
var dynamicRoutes = getDynamicPaths({
 '/posts': 'posts/*.md'
});

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'it-IT'
    },
    title: 'Francesca Zanelli - Psicologa - Psicoterapeuta',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt+Vue.js Landing && Markdown Blog' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // you will need to include the @tailwind directives inside this
  // css file.
  css: [
      '~assets/css/tailwind.css',
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#d8d8de' },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        tailwindcss: path.resolve(__dirname, './tailwind.config.js')
      }
    },
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      };
      // add frontmatter-markdown-loader
      config.module.rules.push(
          {
              test: /\.md$/,
              include: path.resolve(__dirname, "content"),
              loader: "frontmatter-markdown-loader",
          }
      );
    }
  },
  generate: {
    routes: dynamicRoutes,
  },
}

/* https://github.com/jake-101/bael-template */
function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      var filepathGlob = urlFilepathTable[url];
      return glob
        .sync(filepathGlob, { cwd: 'content' })
        .map(filepath => `${url}/${path.basename(filepath, '.md')}`);
    })
  );
}
