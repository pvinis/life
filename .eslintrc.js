/* eslint-disable @typescript-eslint/no-unused-vars */
const OFF = 'off'
const WARN = 'warn'
const ERR = 'error'
/* eslint-enable @typescript-eslint/no-unused-vars */


module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	plugins: ['@typescript-eslint', 'react'],
	extends: [
		'eslint:recommended',
		//  "react-app",
		//   "react-app/jest"
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
	],
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		indent: [ERR, 'tab'],
		semi: [ERR, 'never'],
		'comma-dangle': [ERR, 'always-multiline'],
		quotes: [ERR, 'single'],
		'jsx-quotes': [ERR, 'prefer-single'],
		'no-multiple-empty-lines': [ERR, { max: 2 }],
		'object-curly-spacing': [ERR, 'always'],
		'key-spacing': [ERR],
		'array-bracket-spacing': [ERR],
		'comma-spacing': [ERR],
		'space-infix-ops': [ERR],
		'react/react-in-jsx-scope': [OFF],
		'@typescript-eslint/explicit-module-boundary-types': [OFF],
	},
}
