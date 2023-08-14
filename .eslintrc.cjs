module.exports = {
	root: true,
	plugins: [],
	extends: ['eslint:recommended', 'plugin:vue/vue3-recommended'],
	parserOptions: {
		ecmaVersion: 'latest'
	},
	ignorePatterns: ['dist', 'node_modules'],
	env: {
		node: true
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'vue/comment-directive': 'off'
	}
};
