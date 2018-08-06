module.exports = {
    entry: './scripts/main.js',
    output: {
        path: __dirname,
        filename: './scripts/app.js'
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
