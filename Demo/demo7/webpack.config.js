var webpack = require('webpack');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	// 入口文件，是模块构建的起点，同时每一个入口文件对应最后生成的一个 chunk
	// chunk：code spliting后的产物，也就是按需加载的分块，装载了不同的module
	entry: './main.js',
	// 文件路径指向（可加快打包过程）
	/*resolve: {
		alias: {
			'react': pathToReact
		}
	},*/
	// 生成文件，是模块构建的终点，包括输出文件与输出路径
	output: {
		/*path: path.resolve(__dirname, 'build'),*/
		filename: 'bundle.js'
	},
	// 这里配置了处理个模块的 loader，包括 css 预处理 loader，es6 编译 loader，图片处理 loader
	// loader：能转换各类资源，并处理成对应模块的加载器。loader间可以串行使用
	/*module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			}
		],
		noParse: [pathToReact]
	},*/
	// webpack 各插件对象，在 webpack 的事件流中执行对应的方法
	plugins: [
		new UglifyJsPlugin()
	],
};

// 在webpack中经常可以看到compilation.plugin('xxx', callback)，可以把它当成是一个事件的绑定，这些事件在打包时由webpack来触发