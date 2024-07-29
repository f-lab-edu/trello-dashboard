module.exports = {
	root: true,
	env: { node: true, browser: true, es2021: true, jest: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@tanstack/eslint-plugin-query/recommended',
	],
	ignorePatterns: ['.eslintrc.cjs', '*.md'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh', 'import', '@typescript-eslint'],
	rules: {
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		'import/order': [
			'error',
			{
				groups: ['builtin', 'external', 'internal', ['sibling', 'parent'], 'index', 'unknown'],
				'newlines-between': 'always',
				// alphabetize: { order: 'asc', caseInsensitive: true },
			},
		],
	},
};
