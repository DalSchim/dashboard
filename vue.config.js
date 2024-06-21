const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        port: 3000,

        proxy: {
            '/apirest.php': {
                target: 'http://172.19.254.113',
                changeOrigin: true,
            },
            '/api/v2/hosts': {
                target: 'http://172.19.254.12',
                changeOrigin: true,
                accept: 'application/json',
                secure: false,
            },
        }
    }
})
