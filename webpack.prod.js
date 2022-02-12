const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const WorkboxPlugin = require("workbox-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")

const dotenv = require('dotenv');
dotenv.config();


module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
    optimization: {
        minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    output: {
        libraryTarget: "var",
        library: 'Client'
    },
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new webpack.DefinePlugin( {
            API_KEY1: JSON.stringify(process.env.API_KEY),
            OpenWBaseURI: JSON.stringify(process.env.OpenWeatherURI),
            OpenWAPI: JSON.stringify(process.env.OpenWeatherAPI),
            GeoNameURI: JSON.stringify(process.env.GeoNameURI),
            GeoNameUserName: JSON.stringify(process.env.GeoNameUserName),
            WeatherbitURI: JSON.stringify(process.env.WeatherbitURI),
            WeatherbitAPI: JSON.stringify(process.env.WeatherbitAPI),
            PixabayURI: JSON.stringify(process.env.PixabayURI),
            PixabayAPI: JSON.stringify(process.env.PixabayAPI)
        }),
        new CopyPlugin([
            {from: "./src/client/media/Travel.jpg", to: './media/Travel.jpg'}],
        ),
        new MiniCssExtractPlugin({filename: '[name].css'}),
        // new WorkboxPlugin.GenerateSW()
    ]
}
