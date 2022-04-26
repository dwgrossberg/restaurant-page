const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');


 module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
      static: './dist',
    },
    entry: {
      index: './src/index.js',
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    // plugins: [
        // new HtmlWebpackPlugin({
            // title: "Midnight's Noodle Bar",
            // favicon: './src/assets/favicon.ico',
        // }),
    // ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
                type: 'asset/resource',
              },
              {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
              },
        ]
    },
};