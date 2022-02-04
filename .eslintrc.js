module.exports = {
	env: {
		commonjs: true,
		es2021: true,
		node: true,
	},
	globals: {
		import: true,
	},
	extends: ['eslint:recommended', 'plugin:prettier/recommended'],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {},
};
