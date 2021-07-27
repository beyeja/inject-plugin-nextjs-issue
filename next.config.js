const InjectPlugin = require('webpack-inject-plugin').default;
const { ENTRY_ORDER } = require('webpack-inject-plugin');

module.exports = {
	reactStrictMode: true,

	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		config.plugins.push(
            new InjectPlugin(() => {
				return "console.log('hello world')";
			}, {
				entryOrder: ENTRY_ORDER.First,
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

		config.experiments = {
			...config.experiments,
			layers: true,
		}
		
		return config;
	}
}
