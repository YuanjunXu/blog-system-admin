module.exports = {
    devServer: {
        proxy: {
            '/user': {
                // target: 'http://localhost:2021',
                target: 'http://localhost:8010',
                changeOrigin: true
            },
            '/admin': {
                // target: 'http://localhost:2021',
                target: 'http://localhost:8010',
                changeOrigin: true
            }
        }
    }
};
