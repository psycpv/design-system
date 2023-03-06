const postcss = require('rollup-plugin-postcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

module.exports = {
  /**
   * @param {import('rollup/dist/rollup').InputOptions} config
   */
  rollup(config, options) {
    config.plugins.push(
      postcss({
        modules: true,
        plugins: [
          autoprefixer(),
          cssnano({
            preset: 'default',
          }),
        ],
        extensions: ['.css'],
        minimize: true,
        // inject: false,
        inject: {
          insertAt: 'top',
        },
        // only write out CSS for the first bundle (avoids pointless extra files):
        // https://github.com/jaredpalmer/tsdx/issues/186#issuecomment-616913315
        extract: !!options.writeMeta,
      })
    )

    config.inlineDynamicImports = true

    return config
  },
}