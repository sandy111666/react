var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//
// var nodeModulesPath = path.resolve(__dirname, 'node_modules')
// console.log(process.env.NODE_ENV)



const pxtorem = require('postcss-pxtorem');


const svgDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. 属于 antd-mobile 内置 svg 文件
  // path.resolve(__dirname, 'src/my-project-svg-foler'),  // 2. 自己私人�?svg 存放目录
];


module.exports = {
    entry: path.resolve(__dirname, 'index.jsx'),
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },

    resolve: {
        modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
        extensions: ['', '.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.json'],
    },

    module: {
        // preLoaders: [
        //     // 报错 ？？？？�?
        //     {test: /\.(js|jsx)$/, loader: "eslint-loader", exclude: /node_modules/}
        // ],





        loaders: [
 { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel' },
 {test: /\.css$/,loader: 'css?sourceMap&modules&localIdentName=[local]___[hash:base64:5]!!',exclude: /node_modules/},
 {test: /\.css$/,loader: 'style!css!postcss'},
            { test: /\.less$/, exclude: /node_modules/, loader: 'style!css!postcss!less' },
            { test: /\.css$/, exclude: /node_modules/, loader: 'style!css!postcss' },
            { test:/\.(png|gif|jpg|jpeg|bmp)$/i, loader:'url-loader?limit=5000' },  // 限制大小5kb
            { test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, loader:'url-loader?limit=5000'}, // 限制大小小于5k
            {test: /\.(svg)$/i,loader: 'svg-sprite',include: svgDirs} // �?svgDirs 路径下的所�?svg 文件交给 svg-sprite-loader 插件处理}  

        ]
    },

    eslint: {
        configFile: '.eslintrc' // Rules for eslint
    },

postcss: [
    pxtorem({
        rootValue: 200,
        propWhiteList: [],
    })
],

    plugins: [
        // html 模板插件
        new HtmlWebpackPlugin({
            template: __dirname + '/index.tmpl.html'
        }),

        // 热加载插�?
        new webpack.HotModuleReplacementPlugin(),



        // 可在业务 js 代码中使�?__DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
        new webpack.DefinePlugin({
          __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        })
    ],

    devServer: {
        proxy: {
          // 凡是 `/api` 开头的 http 请求，都会被代理�?localhost:3000 上，�?koa 提供 mock 数据�?
          // koa 代码�?./mock 目录中，启动命令�?npm run mock
          '/api': {
            target: 'http://localhost:3000',
            secure: false
          }
        },
        disableHostCheck: true,
        contentBase: "./public", //本地服务器所加载的页面所在的目录
        colors: true, //终端中输出结果为彩色
        historyApiFallback: true, //不跳�?
        inline: true, //实时刷新
        hot: true  // 使用热加载插�?HotModuleReplacementPlugin
    }
}


