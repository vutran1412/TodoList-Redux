var path = require('path');

module.exports = {
    entry: './frontend/todo_redux.jsx',
    output: {
        filename: path.resolve(__dirname, "app", "assets", "javascripts"),
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/],
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            }
        ]
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.js', '.jsx', '*']
    }
};