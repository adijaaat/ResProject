module.exports = {
    entry: './main.js',
    output: {
        path: './views',
        filename: 'index.js',
    },
    module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',

            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
    }
}
