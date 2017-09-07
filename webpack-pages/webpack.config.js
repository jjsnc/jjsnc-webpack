const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: {
        app: './src/app.js',
        a: './src/js/a.js',
        b: './src/js/b.js'
    },
    devServer: {
        contentBase: './dist'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        // publicPath: '/' 

    },
    module: {
        rules: [
            { test: /\.js$/, exclude: path.resolve(__dirname, '/node_modules/'), loader: "babel-loader" },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader!postcss-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                loader: 'file-loader'
            }
        ]
        // exclude 绝对路径 可以提升打包速度 
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './a.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            template: './b.html',
            filename: 'b.html', // 设置生成文件的名称
            inject: 'head', //指定生成的脚本 放置在head区域
            chunks: ['a'],
            // excludeChunks:['a','c'], //除了这里的文件其他的都引入
            minify: {
                removeComments: true, // 去除注释
                collapseWhitespace: true //去除空格 更多参数看官方配置 
            }
        })
    ]

}