module.exports = {
	presets: [
		['@babel/preset-env', { modules: false }],
		'@babel/preset-typescript',
		'@babel/preset-react',
	],

	plugins: [
		'react-hot-loader/babel',
		'@babel/plugin-proposal-class-properties',
		'@babel/plugin-syntax-dynamic-import',
		// '@babel/plugin-proposal-object-rest-spread',
	],

	env: {
		test: {
			plugins: ['@babel/plugin-transform-modules-commonjs', 'dynamic-import-node'],
		},
	},
};
