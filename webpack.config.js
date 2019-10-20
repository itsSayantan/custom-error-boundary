var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/components/CEB/CEB.js',
    output: {
        path: path.resolve('lib'),
        filename: 'CEB.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};
