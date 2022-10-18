const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  disableHostCheck:true,
})
module.exports = {
    devServer: {
        disableHostCheck: true
	}
}
