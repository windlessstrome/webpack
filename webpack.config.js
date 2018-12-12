const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

// const PATHS = {
//     app: path.join(__dirname, 'app'),
//     dist: path.join(__dirname, 'dist');
// };

module.exports = {
    entry: {
        app: path.join(__dirname, 'app')
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack demo',
        }),
    ],
};