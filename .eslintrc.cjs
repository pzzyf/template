module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/essential',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'plugin:prettier/recommended',
		'.eslintrc-auto-import.json'
	],

	parser: 'vue-eslint-parser',
	parserOptions: {
		ecmaVersion: 'latest',
		parser: '@typescript-eslint/parser',
		sourceType: 'module'
	},
	plugins: ['vue', '@typescript-eslint', 'prettier'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto'
			}
		],
		'vue/no-v-model-argument': 'off',
		'vue/no-v-for-template-key': 'off',
		'vue/no-multiple-template-root': 'off',
		//关闭组件命名规则
		'vue/multi-word-component-names': 'off'
	}
};
