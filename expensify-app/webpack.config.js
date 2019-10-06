const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public/scripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ["@babel/plugin-proposal-class-properties"]
                }
            }
        }, {
            test: /\.s?css$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, /* {
            test: /\.js$/,
            enforce: 'pre',
            exclude: /node_modules/,
            use: {
                loader: 'eslint-loader',
                options: {
                    configFile: path.join(__dirname, '/.eslintrc.json')
                }
            }
        } */]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        publicPath: '/scripts/',
        historyApiFallback: true
    },
    devtool: 'cheap-module-eval-source-map'
};