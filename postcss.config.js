const imports = require('postcss-import')
const next = require('postcss-cssnext')
const cssnano = require('cssnano')
const tailwind = require('tailwindcss')
const hash = require('postcss-hash')

module.exports = ctx => ({
  plugins: {
    'postcss-import': {root: ctx.file.dirname},
    'tailwindcss': ('./tailwind.js'),
    'postcss-cssnext': {browsers: ['last 2 versions', 'iOS >= 8']},
    'cssnano': ctx.env === 'production' ? {autoprefixer: false} : false,
    'postcss-hash': {
      algorithm: 'sha256',
      trim: 10,
      manifest: './data/config/manifest.json'
    }
  }
})

