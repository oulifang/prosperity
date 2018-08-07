const path =require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const HtmlWebpackPlugin =require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const glob = require('glob');
const PurifyCssPlugin = require("purifycss-webpack");
const entry = require("./webpack_config/entry_webpack.js");
var CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
    mode:'development',
    entry:entry,
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js',
        publicPath:'http://127.0.0.1:8081/'
    },

module:{
    rules:[
        {
            test:/\.css$/,
            // use:['style-loader','css-loader']
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:[{
                        loader:'css-loader',
                        options:{importLoaders:1}
                    },'postcss-loader']
                })
        },{
            test:/\.(png|jpg|gif)$/,
            use:[{
                loader:'url-loader',
                options:{
                    limit:500,
                    outputPath:'images/'
                }
            }]
        },{
            test:/\.(htm|html)$/i,
            loader:'html-withimg-loader'
        },{
            test:/\.scss/,
            // use:[
            //     {
            //         loader:'style-loader'
            //     },
            //     {
            //         loader:'css-loader'
            //     },
            //     {
            //         loader:'sass-loader'
            //     }
            // ]
            use :ExtractTextPlugin.extract({
                use:[{
                    loader:'css-loader'
                },{
                    loader:'sass-loader'
                }],
                fallback:'style-loader'
            })
        },{
            test:/\.(jsx|js)$/,
            use:{
                loader:'babel-loader',
                options:{
                    presets:[
                        'env','react'
                    ]
                }
            },
            exclude:/node_modules/
        }
    ]
},
plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new HtmlPlugin({
        filename:'index.html',
        chunks:['index'],
        title:'index1 -- title',
        minify:{
            removeAttributeQuotes:true
        },
        hash:true,
        template:'./src/index.html'

    }),
    // new HtmlWebpackPlugin({
    //     filename:'index2.html',
    //     chunks:['index2'],
    //     title:'index2 -- title',
    //     minify:{
    //         removeAttributeQuotes:true,
    //         collapseWhitespace:false
    //     },
    //     hash:true,
    //     template:'./src/index2.html'
    // }),
    new ExtractTextPlugin("css/index.css"),
    new PurifyCssPlugin({
        paths:glob.sync(path.join(__dirname,'src/index.html')),
    }),
    new webpack.BannerPlugin('欧欧'),
    new webpack.ProvidePlugin({
        $:"jquery"
    }),
    new CopyWebpackPlugin([{
        from:__dirname + '/src/public',
        to:'./public'
    }])
],
devServer:{
    contentBase:path.resolve(__dirname,'dist'),
    host:'127.0.0.1',
    compress:true,
    port:'8081',
    compress:true,
    open:true,
    hot:true
}
}