const path =require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const HtmlWebpackPlugin =require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    mode:'development',
    entry:{
        index:'./src/index.js',
        index2:'./src/index2.js'
    },
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
                fallback:"style-loader",
                use:"css-loader"
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
    new ExtractTextPlugin("css/index.css")
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