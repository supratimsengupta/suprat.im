var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist/ui/scripts/inhouse');
var APP_DIR = path.resolve(__dirname, 'dev/ui/scripts/inhouse/components/app');

var config = {
    entry: APP_DIR + '/main.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?/,
            include: APP_DIR,
            loader: 'babel-loader'
        }]
    }

};

module.exports = config;