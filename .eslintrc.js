const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	globals: {
		$nuxt: true
	},
	parserOptions: {
		parser: '@babel/eslint-parser',
		requireConfigFile: false
	},
	extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
	plugins: ['vue', 'prettier'],
	rules: {
		'no-shadow': 'warn',
		'no-console': !isDev ? 'error' : 'off',
		'no-debugger': !isDev ? 'error' : 'off',
		'require-await': !isDev ? 'error' : 'off',
		'no-unused-vars': !isDev ? 'error' : 'off',
		'vue/require-default-prop': !isDev ? 'error' : 'off',
		'vue/require-prop-types': !isDev ? 'error' : 'off',
		'nuxt/no-timing-in-fetch-data': !isDev ? 'error' : 'off',
		'no-unreachable': !isDev ? 'error' : 'off',
		'no-undef': !isDev ? 'error' : 'off',
		'vue/custom-event-name-casing': 'off',
		'vue/multi-word-component-names': 'off'
	}
};
