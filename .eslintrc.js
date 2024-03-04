module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
	},
	extends: "xo",
	overrides: [
		{
			env: {
				node: true,
			},
			files: [
				".eslintrc.{js,cjs}",
			],
			parserOptions: {
				sourceType: "script",
			},
		},
	],
	parserOptions: {
		ecmaVersion: "latest",
	},
	rules: {
		ident: ["off"],
		quotes: ["error", "double"],
		"linebreak-style": ["off"],
		semi: ["error", "always"],
		max,statements,per,line: ["off"]
	},

};
