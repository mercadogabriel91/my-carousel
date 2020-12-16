const path = require('path');

module.exports = {

    // Entry file and output
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'App.js'
    },
    //Tell webpack to open server in browser 
    devServer: {
        open: true
    },
    module: {
        rules: [
            //Babel
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            // url-loader ( https://www.npmjs.com/package/url-loader )
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        },
                    },
                ],
            },
            // CSS loader          
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ],
    },
};