module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname,
        filename: './app.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['env']
            }
        }]
    }
};
