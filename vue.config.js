const { defineConfig } = require('@vue/cli-service')
const { join } = require('path')
module.exports = defineConfig({
	transpileDependencies: true,
	outputDir: join(__dirname, './dist'),
	publicPath: ''
})
