const manifest = require('./data/config/manifest.json');

module.exports = {
  content: ['layouts/**/*.html'],
  css: ['static/css/'+ manifest['center.css']],
  // whitelist: ['icon', 'icon svg'],
  extractors: [
    {
      extractor: class {
        static extract(content) {
          return content.match(/[A-z0-9-:\/]+/g) || []
        }
      },
      extensions: ['html']
    }
  ]
}
