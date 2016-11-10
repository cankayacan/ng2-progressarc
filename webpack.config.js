/**
 * Adapted from angular2-webpack-starter
 */

const helpers = require('./config/helpers'),
    webpack = require('webpack');

/**
 * Webpack Plugins
 */
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');

module.exports = {
    devtool: 'inline-source-map',

    resolve: {
        extensions: ['.ts', '.js']
    },

    entry: helpers.root('ng2-progressarc.ts'),

    output: {
        path: helpers.root('bundles'),
        publicPath: '/',
        filename: 'index.js',
        libraryTarget: 'umd',
        library: 'ng2-progressarc'
    },

    // require those dependencies but don't bundle them
    externals: [
        /^\@angular\//,
        /^rxjs\//,
        {"lodash": "lodash"}
    ],

    module: {
        rules: [{
            test: /\.ts$/,
            loaders: [
                'awesome-typescript-loader',
                'angular2-template-loader'
            ],
            exclude: [/\.(spec|e2e)\.ts$/]
        }, {
            enforce: 'pre',
            test: /\.ts$/,
            loader: 'tslint',
            exclude: [helpers.root('node_modules')]
        }, {
            test: /\.html$/,
            loader: 'raw'
        },{
            test: /\.scss$/,
            loaders: ['raw', 'sass', 'sasslint']
        }]
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                tslintLoader: {
                    emitErrors: false,
                    failOnHint: false
                }
            }
        })
    ]
};
