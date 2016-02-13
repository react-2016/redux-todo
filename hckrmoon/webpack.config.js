/**
 * Created by youngmoon on 2/12/16.
 */

module.exports = {
    entry: './index.js',

    output: {
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};