const InjectPlugin = require('webpack-inject-plugin').default;

module.exports = {
	reactStrictMode: true,

	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		config.plugins.push(
            new InjectPlugin(() => {
				return "console.log('Hello World');"
			}, {
				// this is a really ugly fix to be able to use InjectPlugin with nextjs 11 and webpack 5
				// entryName: (key) =>
				// 	key !== 'chunkLoading' &&
				// 	key !== 'wasmLoading' &&
				// 	key !== 'layer' &&
				// 	key !== 'dependOn' &&
				// 	key !== 'runtime' &&
				// 	key !== 'filename' &&
				// 	key !== 'library' &&
				// 	key !== 'publicPath',
			}),
        );
		
		return config;
	}
}
