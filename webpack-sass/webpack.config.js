const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: {
        a: './src/sass/a.scss',
        b: './src/sass/b.scss'
    },
    output: {
        filename: '[name].css',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'postcss-loader',
                    { loader: 'sass-loader' }
                ]
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ]
}

module.exports = config;