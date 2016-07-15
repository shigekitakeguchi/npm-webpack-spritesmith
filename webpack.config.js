var path = require('path');
var SpritesmithPlugin = require('webpack-spritesmith');

module.exports = {
  entry: path.resolve(__dirname, 'src/entry.js'),
  output: {
    path: path.resolve(__dirname, 'app/js/'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.scss$/, loaders: [
        'style',
        'css',
        'scss'
      ]},
      {test: /\.png$/, loaders: [
        'file?name=i/[hash].[ext]'
      ]}
    ]
  },
  resolve: {
    modulesDirectories: ["web_modules", "node_modules", "spritesmith-generated"]
  },
  plugins: [
    new SpritesmithPlugin({
      src: {
        cwd: path.resolve(__dirname, 'src/ico'),
        glob: '*.png'
      },
      target: {
        image: path.resolve(__dirname, 'app/img/sprite_flags.png'),
        css: path.resolve(__dirname, 'app/css/sprite_flags.css')
      },
      apiOptions: {
        cssImageRef: "~sprite.png"
      }
    })
  ]
};
