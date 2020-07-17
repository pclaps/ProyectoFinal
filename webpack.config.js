const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        'to-do-list': './app/client/to-do-list.js',
        'lista-usuarios': './app/client/lista-usuarios.js',
        'lista-actividades': './app/client/lista-actividades.js',
        'lista-proveedores': './app/client/lista-proveedores.js',
        'seguridad':'./app/client/seguridad.js',
        'lista-horarioactividad': './app/client/lista-horarioactividad.js',
    },
    devtool: 'eval-source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          resolve: {
            extensions: [".js", ".jsx"]
          },
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.scss$/, 
          loader: [
            MiniCSSExtractPlugin.loader,
            "css-loader",
            'sass-loader'
          ]
        }
      ]
    },
    plugins: [
      new MiniCSSExtractPlugin()
    ]
};
